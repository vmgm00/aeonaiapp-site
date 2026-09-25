import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AeonAI handles account information, Chat and Voice requests, messages, privacy controls, and account deletion.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="document-page">
      <header className="document-header">
        <p className="eyebrow">AeonAI / Privacy</p>
        <h1>Your privacy.</h1>
        <p className="document-intro">
          This policy describes how Engine AI Labs LLC handles information in
          AeonAI, our iPhone app, and its product website.
        </p>
      </header>
      <div className="document-body">
        <section>
          <h2>Information you provide</h2>
          <p>
            Account information may include your email, credentials, handle,
            persona, preferred name, and account settings. Content you submit may
            include chat text, direct messages, voice input, support requests, and
            reports.
          </p>
        </section>
        <section>
          <h2>Chat, Voice, and OpenAI</h2>
          <p>
            AeonAI uses OpenAI for supported AI features. Chat may send submitted
            text, recent conversation context needed to reply, and saved persona
            or preferred-name context when you have set it and it is used for the
            response.
          </p>
          <p>
            Voice may send submitted audio for transcription, transcript text for
            generating a response, and generated reply text for spoken replies.
            Engine AI Labs does not ordinarily keep raw voice recordings on its
            servers during routine processing.
          </p>
        </section>
        <section>
          <h2>Server-held information</h2>
          <p>
            Routine AI chat processing does not normally create a persistent
            chat-history record on our servers. Direct messages, contacts,
            sessions, usage records, and account settings may be stored
            server-side to operate AeonAI.
          </p>
          <p>
            Reports and related safety records may include report details, message
            identifiers, and text or transcripts you chose to submit. We may
            retain these records as needed for support, safety, and legal
            purposes.
          </p>
        </section>
        <section>
          <h2>How information is used and shared</h2>
          <p>
            We use information to run and secure AeonAI, authenticate accounts,
            fulfill feature requests, provide support, investigate abuse, and meet
            legal requirements.
          </p>
          <p>
            Providers may include email services, Open-Meteo, Google News,
            YouTube, and Apple Music or iTunes, depending on the feature. Sharing
            may also support legal compliance, safety, rights protection, abuse
            investigations, or corporate transactions. Providers must safeguard
            personal data and use it for our services or legal compliance.
          </p>
          <p>
            Engine AI Labs does not sell personal data or use it for third-party
            advertising, cross-app tracking, or cross-site tracking. Website
            cookies may support essential functions, security, and fraud
            prevention.
          </p>
        </section>
        <section>
          <h2>Local chat history and account deletion</h2>
          <p>
            To clear local chat history, go to{" "}
            <strong>Chat → tap + → Settings → Chat &amp; Privacy → Clear Local Chat History</strong>.
            This is not account deletion and does not delete direct messages or
            all server-held data.
          </p>
          <p>
            To delete your account, go to{" "}
            <strong>Chat → tap + → Settings → Account → Delete Account</strong>.
            Apple-linked accounts may require fresh Sign in with Apple
            authorization to complete deletion.
          </p>
          <p>
            Account deletion is intended to remove your account and associated app
            data. Limited report, safety, fraud-prevention, or legal records may
            remain where necessary. Safety or moderation reports may be retained
            after deletion, including text you chose to submit.
          </p>
        </section>
        <section>
          <h2>Retention and your choices</h2>
          <p>
            Retention lasts as needed for the stated purposes, subject to legally
            required or permitted longer periods. Use app controls to manage your
            account and browser settings for non-essential cookies. Contact us
            about applicable access, correction, and deletion rights, including
            regional GDPR or CCPA/CPRA rights.
          </p>
        </section>
        <section>
          <h2>International processing and children</h2>
          <p>
            Processing may occur abroad, with measures intended to provide
            required safeguards. AeonAI is not directed to children under 13 or
            the minimum age in your jurisdiction. We do not knowingly collect
            children’s personal information.
          </p>
        </section>
        <section>
          <h2>Contact and company resources</h2>
          <p>
            Privacy: <a href="mailto:privacy@engineailabs.com">privacy@engineailabs.com</a>.
            <br />
            Support: <a href="mailto:support@engineailabs.com">support@engineailabs.com</a>.
            <br />
            Phone: <a href="tel:+15053694222">(505) 369-4222</a>.
          </p>
          <p>
            This AeonAI policy uses the{" "}
            <a href="https://www.engineailabs.com/privacy">Engine AI Labs Privacy Policy</a>{" "}
            as its substantive basis. Policies may change over time; the company
            resource provides its revision date.
          </p>
        </section>
      </div>
    </article>
  );
}
