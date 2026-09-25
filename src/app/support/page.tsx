import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with AeonAI account access, app feedback, privacy requests, account deletion, and local chat history.",
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
            For an Apple-linked account, the app may ask for fresh Sign in with
            Apple authorization before completing deletion.
          </p>
          <p>
            Limited report, safety, fraud-prevention, or legal records may be
            retained where necessary. Reports submitted for safety or moderation
            may remain after account deletion, including text you chose to submit.
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
