import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SUPPORT_URL =
  process.env.NEXT_PUBLIC_ENGINE_SUPPORT ??
  "https://www.engineailabs.com/support";
const PRIVACY_URL =
  process.env.NEXT_PUBLIC_ENGINE_PRIVACY ??
  "https://www.engineailabs.com/privacy";
const TERMS_URL =
  process.env.NEXT_PUBLIC_ENGINE_TERMS ??
  "https://www.engineailabs.com/terms";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aeonaiapp.com"),
  title: "Aeon — Shareable AI chat friend",
  description:
    "Aeon is your friendly AI companion you can share with family and friends.",
  openGraph: {
    title: "Aeon — Shareable AI chat friend",
    description:
      "Aeon is your friendly AI companion you can share with family and friends.",
    url: "https://www.aeonaiapp.com",
    images: ["/og.svg"],
  },
  icons: {
    icon: [
      {
        url: "/aeon-logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/aeon-logo.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: "/aeon-logo.png",
      },
    ],
    shortcut: ["/aeon-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--aeon-bg)] text-[var(--aeon-text)] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-white/10">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-start px-6 py-5">
              <div className="flex items-center gap-2 text-[var(--aeon-text)]">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5">
                  <img
                    src="/aeon-logo.png"
                    alt="Aeon logo"
                    className="h-full w-full scale-125 object-cover"
                    aria-hidden="false"
                  />
                </span>
                <span className="text-lg font-semibold tracking-tight">Aeon</span>
              </div>
            </div>
          </header>
          <main className="flex flex-1">{children}</main>
          <footer className="border-t border-white/10">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-6 py-6 text-sm">
              <nav className="flex flex-wrap items-center gap-2 text-[var(--aeon-tint)]">
                <a
                  className="font-medium transition hover:text-white"
                  href={SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support
                </a>
                <span className="text-white/50">·</span>
                <a
                  className="font-medium transition hover:text-white"
                  href="/pricing"
                >
                  Plans
                </a>
                <span className="text-white/50">·</span>
                <a
                  className="font-medium transition hover:text-white"
                  href={PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </a>
                <span className="text-white/50">·</span>
                <a
                  className="font-medium transition hover:text-white"
                  href={TERMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </a>
              </nav>
              <p className="text-xs text-white/70">
                An{" "}
                <a
                  className="font-medium text-[var(--aeon-tint)]"
                  href="https://www.engineailabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engine AI Labs LLC
                </a>{" "}
                product
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
