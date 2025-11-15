const SUPPORT_URL =
  process.env.NEXT_PUBLIC_ENGINE_SUPPORT ??
  "https://www.engineailabs.com/support";
const PRIVACY_URL =
  process.env.NEXT_PUBLIC_ENGINE_PRIVACY ??
  "https://www.engineailabs.com/privacy";
const TERMS_URL =
  process.env.NEXT_PUBLIC_ENGINE_TERMS ??
  "https://www.engineailabs.com/terms";

export default function Home() {
  const linkClassName =
    "text-sm font-medium text-[#9FE8C1] transition hover:text-white";

  return (
    <section className="flex w-full flex-1 items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 text-center md:items-start md:text-left">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          Friendly AI companion
        </span>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl sm:leading-tight">
            Aeon — Shareable AI chat friend
          </h1>
          <p className="text-lg text-white/80">
            Helpful, playful, and easy to share with family and friends.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-full bg-[#9FE8C1] px-10 py-3 text-base font-semibold text-[#0b0b0f] transition hover:bg-white"
            href="mailto:info@engineailabs.com"
          >
            Get Aeon
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#9FE8C1]/80 md:justify-start">
          <a
            className={linkClassName}
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Support
          </a>
          <span className="text-white/50">·</span>
          <a
            className={linkClassName}
            href={PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          <span className="text-white/50">·</span>
          <a
            className={linkClassName}
            href={TERMS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
        </div>
      </div>
    </section>
  );
}
