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
    "text-sm font-medium text-[var(--aeon-tint)] transition hover:text-white";

  return (
    <section className="flex w-full flex-1 items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[var(--aeon-card)] p-10 text-center shadow-[0_35px_160px_rgba(138,180,255,0.35)] ring-1 ring-[rgba(138,180,255,0.25)] md:text-left">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/15">
              <img
                src="/aeon-logo.png"
                alt="Aeon logo"
                className="h-full w-full scale-150 object-cover opacity-80"
                aria-hidden="false"
              />
            </span>
            <span className="self-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 md:self-start">
              Friendly AI companion
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl sm:leading-tight">
              Aeon — Shareable AI chat friend
            </h1>
            <p className="text-lg text-white/80">
              Helpful, playful, and easy to share with family and friends.
            </p>
            <p className="text-sm font-medium text-white/60">
              App coming to the Apple App Store soon.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
            <a
              className="inline-flex items-center justify-center rounded-full px-10 py-3 text-base font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aeon-tint)] !text-white"
              style={{ backgroundColor: "rgba(138, 180, 255, 0.65)" }}
              href="mailto:info@engineailabs.com"
            >
              Get Aeon (early access)
            </a>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/60 md:justify-start">
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                Share with family
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                Built by Engine AI Labs
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70 md:justify-start">
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
      </div>
    </section>
  );
}
