import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const waitlistSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .int("Age must be a whole number")
    .min(13, "Age must be at least 13")
    .max(120, "Age is too high"),
  email: z.string().trim().email("Enter a valid email address"),
});

const clientSchema = waitlistSchema.extend({
  age: z.preprocess((val) => Number(val), waitlistSchema.shape.age),
});

export async function POST(request: Request) {
  let parsed;
  try {
    const json = await request.json();
    parsed = clientSchema.safeParse(json);
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Validation failed.",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    SMTP_FROM,
    WAITLIST_NOTIFY,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !WAITLIST_NOTIFY) {
    return NextResponse.json(
      { error: "Server configuration incomplete." },
      { status: 500 }
    );
  }

  const port = SMTP_PORT ? Number(SMTP_PORT) : 587;
  const secure = SMTP_SECURE ? SMTP_SECURE === "true" : port === 465;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const timestamp = new Date().toISOString();
  const notifyText = [
    "New Aeon waitlist signup:",
    `Name: ${data.firstName} ${data.lastName}`,
    `Age: ${data.age}`,
    `Email: ${data.email}`,
    `Submitted at: ${timestamp}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      to: WAITLIST_NOTIFY,
      from: SMTP_FROM,
      replyTo: data.email,
      subject: `New Aeon waitlist signup: ${data.firstName} ${data.lastName}`,
      text: notifyText,
    });

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
        <h2>Hi ${data.firstName},</h2>
        <p>Thanks for joining the Aeon App Waiting List!</p>
        <p>We’ll notify you as we roll out the app on the App Store.</p>
        <h3>What you’ll get</h3>
        <ul>
          <li>Aeon Free — $0.00 (Ads + essential access, unlimited AI text & mic voice-to-text, voice mode conversations, 2 contacts + unlimited DMs, persona customization, memory auto-clears after 24 hours)</li>
          <li>Aeon Plus — $2.00 / month (Unlimited AI text & voice, unlimited contacts & DMs, persona customization, extended memory for 7 days, ad-free experience)</li>
          <li>Aeon Pro — $5.00 / month (Everything in Plus, priority memory for 30 days, add 1 additional user via Apple Family Sharing)</li>
          <li>Aeon Pro Annual — $45.00 / year (Everything in Pro Monthly, unlimited memory retention, add up to 3 additional users via Apple Family Sharing)</li>
        </ul>
        <p>Requires age 13+ and acceptance of our
          <a href="https://www.engineailabs.com/privacy" target="_blank">Privacy Policy</a>
          and
          <a href="https://www.engineailabs.com/terms" target="_blank">Terms</a>.
        </p>
        <p>Stay tuned!<br/>The Aeon Team</p>
      </div>
    `;

    await transporter.sendMail({
      to: data.email,
      from: SMTP_FROM,
      subject: "Thanks for joining the Aeon App Waiting List 🎉",
      html: confirmationHtml,
    });
  } catch (error) {
    console.error("Failed to process waitlist signup", error);
    return NextResponse.json(
      { error: "Unable to submit waitlist request right now." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
