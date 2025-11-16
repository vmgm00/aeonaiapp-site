export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const WaitlistSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  age: z.coerce.number().int().min(13).max(120),
  email: z.string().trim().email(),
});

export async function POST(request: NextRequest) {
  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = WaitlistSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid fields",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const { firstName, lastName, age, email } = parsed.data;

  const {
    SMTP_HOST,
    SMTP_PORT = "587",
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE = "false",
    SMTP_FROM = "Aeon Waiting List <no-reply@aeonaiapp.com>",
    WAITLIST_NOTIFY,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !WAITLIST_NOTIFY) {
    return NextResponse.json(
      { error: "Server email not configured" },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT);
  const secure = String(SMTP_SECURE).toLowerCase() === "true";

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.verify();
    await transporter.sendMail({
      to: WAITLIST_NOTIFY,
      from: SMTP_FROM,
      subject: `New Aeon waitlist signup: ${firstName} ${lastName}`,
      text: `New waitlist signup:
First: ${firstName}
Last: ${lastName}
Age: ${age}
Email: ${email}
At: ${new Date().toISOString()}`,
      replyTo: email,
    });

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
        <p>Hi ${firstName},</p>
        <p>Thanks for your interest in <strong>Aeon</strong>! We’ll email you as we roll out the app on the App Store.</p>
        <p><strong>Our plans</strong></p>
        <ul>
          <li><strong>Aeon Free</strong> — Ads + essential access, unlimited text & voice-to-text, 2 contacts, 24-hour memory</li>
          <li><strong>Aeon Plus $2/mo</strong> — Unlimited text & voice, unlimited contacts & DMs, 7-day memory, ad-free</li>
          <li><strong>Aeon Pro $5/mo</strong> — Everything in Plus + 30-day priority memory + Family Sharing (1 extra user)</li>
          <li><strong>Aeon Pro Annual $45/yr</strong> — Everything in Pro + unlimited memory + Family Sharing (3 extra users)</li>
        </ul>
        <p style="font-size:12px;color:#9aa0a6">You confirm you are 13+ and agree to our <a href="https://www.engineailabs.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://www.engineailabs.com/terms" target="_blank" rel="noreferrer">Terms</a>.</p>
      </div>
    `;

    await transporter.sendMail({
      to: email,
      from: SMTP_FROM,
      subject: "Thanks for joining the Aeon App Waiting List 🎉",
      html: confirmationHtml,
    });
  } catch (error) {
    console.error("Failed to process waitlist signup", error);
    return NextResponse.json(
      { error: "Email send failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
