import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreLink } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "About",
  description:
    "AeonAI is an iPhone-only AI companion built by Engine AI Labs LLC for everyday help, voice conversations, and staying connected.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="document-page">
      <header className="document-header">
        <p className="eyebrow">AeonAI / About</p>
        <h1>An AI companion for everyday help.</h1>
        <p className="document-intro">
          AeonAI brings everyday help, voice conversations, and staying connected
          into a focused iPhone experience.
        </p>
      </header>
      <div className="document-body">
        <section>
          <h2>Everything within reach.</h2>
          <p>
            Chat naturally or speak when you want. Plan your day, find directions,
            and explore videos and music in context. Find people through contacts
            and handles, and stay in touch with person-to-person messages.
          </p>
          <p>
            Make Aeon yours with personas and a preferred name, with account and
            privacy controls close at hand.
          </p>
        </section>
        <section className="document-callout">
          <h2>Designed for iPhone.</h2>
          <p>
            Start with AeonAI Free. Free and Paid use the same AI quality.
            Usage limits apply. One Paid service level is available with Monthly
            or Annual billing.
          </p>
          <p><Link href="/pricing">See plans &amp; pricing</Link>.</p>
          <AppStoreLink />
        </section>
        <section>
          <h2>Built by Engine AI Labs LLC.</h2>
          <p>
            Learn more about the company behind AeonAI at{" "}
            <a href="https://www.engineailabs.com">Engine AI Labs</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
