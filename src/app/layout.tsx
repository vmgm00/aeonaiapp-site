import type { Metadata } from "next";
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
  description: "Aeon is your friendly AI companion you can share with family and friends.",
  openGraph: {
    title: "Aeon — Shareable AI chat friend",
    description:
      "Aeon is your friendly AI companion you can share with family and friends.",
    url: "https://www.aeonaiapp.com",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Aeon — Shareable AI chat friend",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0b0b0f] text-white antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-white/10">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-start px-6 py-5">
              <span className="text-lg font-semibold tracking-tight text-white">
                Aeon
              </span>
            </div>
          </header>
          <main className="flex flex-1">{children}</main>
          <footer className="border-t border-white/10">
            <div className="mx-auto flex w-full max-w-5xl justify-center px-6 py-6 text-sm">
              <nav className="flex flex-wrap items-center gap-2 text-[#9FE8C1]">
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
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
