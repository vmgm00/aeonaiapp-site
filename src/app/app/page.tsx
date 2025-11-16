const WEB_URL = process.env.NEXT_PUBLIC_AEON_WEB_URL;

export default function AeonWeb() {
  const buttonClass =
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aeon-tint)] !text-white";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--aeon-bg)] px-6 py-16 text-center text-white">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[var(--aeon-card)] p-10 shadow-[0_35px_160px_rgba(138,180,255,0.35)] ring-1 ring-[rgba(138,180,255,0.25)]">
        <h1 className="text-3xl font-semibold">Aeon Web (Beta)</h1>
        <p className="mt-4 text-white/80">
          Access Aeon from your browser while we finish the native app. Enjoy
          chat, voice, and shareable personas from any device.
        </p>
        {WEB_URL ? (
          <a className={`${buttonClass} mt-8`} href={WEB_URL} target="_blank">
            Open Aeon Web
          </a>
        ) : (
          <div className="mt-8 flex flex-col items-center gap-3 text-white/80">
            <span>Web app link coming soon.</span>
            <a
              className="text-[var(--aeon-tint)] underline transition hover:text-white"
              href="mailto:info@aeonaiapp.com"
            >
              Contact us for early access
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
