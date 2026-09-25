import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using AeonAI, including accounts, AI features, third-party providers, deletion, and user responsibilities.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="document-page">
      <header className="document-header">
        <p className="eyebrow">AeonAI / Terms</p>
        <h1>Terms of service.</h1>
        <p className="document-intro">
          Using AeonAI, provided by Engine AI Labs LLC, means accepting these
          terms. If you disagree, do not use AeonAI.
        </p>
      </header>
      <div className="document-body">
        <section>
          <h2>Lawful use and account security</h2>
          <p>
            Follow applicable law and these terms. You are responsible for your
            content, interactions, credentials, and account activity. Illegal,
            harmful, fraudulent, or abusive use, unauthorized access, and
            interference with AeonAI are prohibited.
          </p>
        </section>
        <section>
          <h2>Third-party providers</h2>
          <p>
            Features may use OpenAI, email providers, Open-Meteo, Google News,
            YouTube, and Apple Music or iTunes. Chat may send submitted text,
            recent conversation context, and saved persona or preferred-name
            context when used. Voice may send submitted audio, transcript text,
            and generated reply text needed for the request. See the{" "}
            <Link href="/privacy">AeonAI Privacy Policy</Link> for processing
            details.
          </p>
        </section>
        <section>
          <h2>Intellectual property</h2>
          <p>
            Service rights belong to Engine AI Labs and its licensors. You keep
            rights to submitted content, subject to permissions needed to operate
            your chosen features.
          </p>
        </section>
        <section>
          <h2>Account deletion and termination</h2>
          <p>
            You may stop using AeonAI at any time. To delete your account, go to{" "}
            <strong>Chat → tap + → Settings → Account → Delete Account</strong>.
            Apple-linked accounts may require fresh Sign in with Apple
            authorization.
          </p>
          <p>
            To clear local chat history, go to{" "}
            <strong>Chat → tap + → Settings → Chat &amp; Privacy → Clear Local Chat History</strong>.
            Clearing local history does not delete your account, direct messages,
            or all server-held data.
          </p>
          <p>
            Account deletion is intended to remove your account and associated app
            data. Necessary report, safety, fraud-prevention, or legal records may
            remain, including text you submitted in reports. Accounts may be
            suspended or terminated for violations or risks to users, AeonAI, or
            the public.
          </p>
        </section>
        <section>
          <h2>Disclaimers and liability</h2>
          <p>
            AeonAI is provided as is, without warranties. AI responses can be
            incomplete or wrong; verify important results.
          </p>
          <p>
            To the extent the law allows, Engine AI Labs excludes liability for
            indirect, incidental, special, consequential, or punitive damages and
            lost profits, even when notified of that possibility.
          </p>
        </section>
        <section>
          <h2>Changes and governing law</h2>
          <p>
            Continued use after changes signifies acceptance of revised terms.
            New Mexico, USA law governs these terms.
          </p>
        </section>
        <section>
          <h2>Legal contact</h2>
          <p>
            Contact <a href="mailto:legal@engineailabs.com">legal@engineailabs.com</a>.
            These AeonAI terms are based on the{" "}
            <a href="https://www.engineailabs.com/terms">Engine AI Labs Terms of Service</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
