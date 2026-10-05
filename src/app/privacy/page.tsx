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
          <p>
            If you expressly submit a Voice report, the transcript or other
            content you choose to include may be kept as part of that report.
            This is separate from ordinary Voice processing.
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
            Safety reports may include report details, message identifiers, and
            text or transcripts you deliberately submit through AeonAI&apos;s Report
            features. The retention periods below apply to this submitted report
            content.
          </p>
          <p>
            Text or transcripts submitted in a report may themselves contain
            identifying information, even if an account identifier is removed.
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
            Apple-linked accounts may be asked to confirm their identity with
            Sign in with Apple. AeonAI may use that fresh Apple authorization to
            request removal of its Sign in with Apple authorization before
            deleting the AeonAI account.
          </p>
          <p>
            If automatic Apple authorization removal cannot be completed, the app
            provides a separate <strong>Delete Aeon account only</strong> option.
            This deletes the AeonAI account without claiming that Apple
            authorization was automatically removed. The app provides guidance
            for manually removing AeonAI&apos;s Apple authorization in that case.
          </p>
          <p>
            Deleting your AeonAI account does not delete your Apple Account and
            does not automatically cancel Apple subscription billing. Manage or
            cancel your subscription through Apple.
          </p>
          <p>
            Account deletion immediately removes your normal AeonAI account and
            associated account data, subject to the limited purchase-ownership
            records and expressly submitted safety reports described below.
          </p>
        </section>
        <section>
          <h2>Retention and your choices</h2>
          <p>
            After an AeonAI account is deleted, Engine AI Labs may retain a
            minimal purchase-ownership record for up to <strong>24 months after
            account deletion</strong> to prevent unauthorized or duplicate
            subscription ownership claims, review legitimate authenticated
            purchase-recovery requests, and preserve applicable prior allowance
            use.
          </p>
          <p>
            This limited record does not preserve the deleted account&apos;s password,
            ordinary Chat history, Messages, Contacts, Voice history, AI consent,
            normal sessions, or general profile data.
          </p>
          <p>
            Content you explicitly submit through Report may be retained for up
            to <strong>90 days after report submission</strong> for safety,
            moderation, and support review. This may include a selected AI
            response submitted through Chat Report or a Voice report transcript,
            category, and notes you deliberately submit. Controlled report mailbox
            copies follow the same retention policy.
          </p>
          <p>
            Routine Chat or Voice history is not converted into 90-day report
            retention. Report text may still contain personal information even
            after its account association has been removed.
          </p>
          <p>
            At the end of these retention periods, purchase records are no longer
            eligible for normal ownership or recovery use, and report content is
            no longer available for normal moderation or support review. Expired
            primary records are removed through AeonAI&apos;s scheduled retention
            process. Backup copies may persist temporarily under the normal
            backup lifecycle before aging out.
          </p>
          <p>
            Use app controls to manage your account and browser settings for
            non-essential cookies. Contact us about applicable access, correction,
            and deletion rights, including regional GDPR or CCPA/CPRA rights.
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
