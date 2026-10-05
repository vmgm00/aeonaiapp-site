import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with AeonAI accounts, Monthly and Annual subscriptions, Apple-linked account deletion, privacy requests, and local chat history.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <article className="document-page">
      <header className="document-header">
        <p className="eyebrow">AeonAI / Support</p>
        <h1>A little help, when you need it.</h1>
        <p className="document-intro">
          Help with your AeonAI account, conversations, and app experience.
        </p>
      </header>
      <div className="document-body">
        <section className="document-callout">
          <h2>Contact AeonAI support</h2>
          <p>
            Email <a href="mailto:support@engineailabs.com">support@engineailabs.com</a>{" "}
            for account help, troubleshooting, or app feedback. AeonAI is provided
            by Engine AI Labs LLC.
          </p>
        </section>
        <section>
          <h2>Account access and troubleshooting</h2>
          <p>
            Check your internet connection, close and reopen AeonAI, and make sure
            you have the latest version from the App Store. When signing in, use
            the same sign-in method you used to create your account.
          </p>
          <p>
            If the issue continues, email support with your iPhone model, iOS and
            AeonAI versions, and a description of what happened. Include the
            account email or handle when relevant. Never send your password or
            sign-in codes.
          </p>
        </section>
        <section>
          <h2>Delete your account</h2>
          <p>
            In AeonAI, go to <strong>Chat → tap + → Settings → Account → Delete Account</strong>.
            For an Apple-linked account, the app may ask you to confirm your
            identity with Sign in with Apple. AeonAI may use that fresh
            authorization to request removal of its Apple authorization before
            deleting the AeonAI account.
          </p>
          <p>
            If automatic Apple authorization removal cannot be completed, choose
            the separate <strong>Delete Aeon account only</strong> option. This
            deletes your AeonAI account without claiming Apple authorization was
            automatically removed. The app provides manual Apple authorization
            removal guidance for that case.
          </p>
          <p>
            Deleting AeonAI does not delete your Apple Account and does not
            automatically cancel an Apple subscription. Manage or cancel billing
            through Apple separately.
          </p>
          <p>
            Account deletion immediately removes your normal account and
            associated account data, subject to limited retention: minimal
            purchase-ownership records may be kept for up to 24 months after
            account deletion, and expressly submitted safety reports for up to
            90 days after submission. See the{" "}
            <Link href="/privacy">AeonAI Privacy Policy</Link> for scope and
            expiry details.
          </p>
        </section>
        <section>
          <h2>Subscriptions and billing</h2>
          <p>
            AeonAI has Free access and one Paid service level. Monthly and Annual
            are billing options for the same Paid capabilities and allowances.
            Annual is billed upfront, with allowances operating on monthly
            allowance windows for both options. See <Link href="/pricing">plans
            &amp; pricing</Link> for details.
          </p>
          <p>
            Subscriptions renew automatically unless canceled through Apple.
            App Store pricing may vary by storefront. To manage or cancel your
            subscription on iPhone, open Apple Settings, tap your name, then
            Subscriptions and select AeonAI. Follow{" "}
            <a href="https://support.apple.com/en-us/118428">Apple&apos;s subscription
            cancellation guidance</a> to cancel billing.
          </p>
        </section>
        <section>
          <h2>Clear local chat history</h2>
          <p>
            Go to <strong>Chat → tap + → Settings → Chat &amp; Privacy → Clear Local Chat History</strong>.
          </p>
          <p>
            This clears local chat history. It does not delete your account,
            direct messages, or all information held on our servers.
          </p>
        </section>
        <section>
          <h2>Privacy and data requests</h2>
          <p>
            For privacy questions or applicable access, correction, or deletion
            requests, email{" "}
            <a href="mailto:privacy@engineailabs.com">privacy@engineailabs.com</a>.
            You can also contact support for help finding account controls.
          </p>
          <p>
            Read the <Link href="/privacy">AeonAI Privacy Policy</Link> for details
            about information processing and retention.
          </p>
        </section>
        <section>
          <h2>Share app feedback</h2>
          <p>
            Send ideas or report an app issue to{" "}
            <a href="mailto:support@engineailabs.com">support@engineailabs.com</a>.
            Steps to reproduce an issue and screenshots, with any private
            information removed, can help us understand your experience.
          </p>
        </section>
      </div>
    </article>
  );
}
