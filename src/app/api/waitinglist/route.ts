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
    SMTP_FROM = "AeonAI Updates <no-reply@aeonaiapp.com>",
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
      subject: `New AeonAI updates signup: ${firstName} ${lastName}`,
      text: `New updates signup:
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
        <p>Thanks for your interest in <strong>AeonAI</strong>! We’ll email you with updates.</p>
        <p>AeonAI is an iPhone-only AI companion built for everyday help, voice conversations, and staying connected.</p>
        <p>AeonAI is available at no cost. Included usage limits may apply to Chat and Voice.</p>
        <p><a href="https://apps.apple.com/app/aeonai/id6757899057">Download AeonAI on the App Store</a></p>
        <p style="font-size:12px;color:#9aa0a6">You confirm you are 13+ and agree to the AeonAI <a href="https://www.aeonaiapp.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://www.aeonaiapp.com/terms" target="_blank" rel="noreferrer">Terms</a>.</p>
      </div>
    `;

    await transporter.sendMail({
      to: email,
      from: SMTP_FROM,
      subject: "Thanks for signing up for AeonAI updates 🎉",
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
