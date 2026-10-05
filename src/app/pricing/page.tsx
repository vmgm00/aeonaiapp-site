import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreLink } from "@/components/SiteChrome";

const title = "Plans & Pricing";
const description =
  "Start with AeonAI Free or choose one Paid service level: $11.99/month or $119.99/year billed upfront. Monthly and Annual include the same Paid capabilities.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title: `${title} | AeonAI`, description, url: "/pricing" },
  twitter: { title: `${title} | AeonAI`, description },
};

export default function PricingPage() {
  return (
    <article className="document-page">
      <header className="document-header">
        <p className="eyebrow">AeonAI / Plans &amp; pricing</p>
        <h1>Start free.<br />Choose what fits.</h1>
        <p className="document-intro">
          AeonAI Free and one Paid service level, with Monthly or Annual billing.
          Free and Paid use the same AI quality.
        </p>
      </header>
      <div className="document-body">
        <section className="document-callout" aria-labelledby="free-title">
          <h2 id="free-title">AeonAI Free</h2>
          <p className="plan-price"><strong>$0</strong></p>
          <p>Start with AeonAI Free.</p>
          <p>
            Chat, Voice, Contacts, Messages, personalization, and account controls
            are available on Free. AeonAI Free uses the same AI quality as Paid.
          </p>
          <p>Usage limits apply.</p>
        </section>
        <section className="document-callout" aria-labelledby="monthly-title">
          <h2 id="monthly-title">AeonAI Paid — Monthly</h2>
          <p className="plan-price"><strong>$11.99</strong>/month</p>
          <ul>
            <li>100 successful AI Chat turns per monthly allowance window.</li>
            <li>Up to 25 hosted web searches within those 100 Chat turns.</li>
            <li>10 separate successful Voice turns per monthly allowance window.</li>
            <li>The same AI quality as Free.</li>
            <li>Contacts and Messages included.</li>
            <li>No rollover.</li>
          </ul>
        </section>
        <section className="document-callout" aria-labelledby="annual-title">
          <h2 id="annual-title">AeonAI Paid — Annual</h2>
          <p className="plan-price"><strong>$119.99</strong>/year</p>
          <p><strong>Billed upfront.</strong></p>
          <p>Includes the same Paid capabilities and allowances as Monthly.</p>
          <p>
            Annual uses monthly allowance windows: 100 successful AI Chat turns,
            up to 25 hosted web searches within those Chat turns, and 10 separate
            successful Voice turns per window. No rollover.
          </p>
        </section>
        <section>
          <h2>Your allowance, explained.</h2>
          <p>
            Paid allowances operate on monthly allowance windows for both billing
            options. Person-to-person Messages are separate from Chat and Voice
            allowances.
          </p>
          <p>
            U.S. prices shown. App Store pricing may vary by storefront.
            Subscriptions renew automatically unless canceled through Apple.
            Manage or cancel your subscription through Apple. Deleting your
            AeonAI account does not automatically cancel Apple subscription billing.
          </p>
          <p>
            See our <Link href="/terms">Terms of Service</Link> or visit{" "}
            <Link href="/support">Support</Link> for subscription help.
          </p>
          <AppStoreLink />
        </section>
      </div>
    </article>
  );
}
