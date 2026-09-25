import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const description = "AeonAI is an iPhone-only AI companion built for everyday help, voice conversations, and staying connected.";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.aeonaiapp.com"),
  title: { default: "AeonAI — An AI companion for everyday help", template: "%s | AeonAI" },
  description,
  applicationName: "AeonAI",
  openGraph: { type: "website", siteName: "AeonAI", title: "AeonAI — Everything within reach", description, locale: "en_US", images: [{ url: "/brand/aeonai-app-icon.png", width: 1024, height: 1024, alt: "AeonAI's luminous blue-white orbital app icon" }] },
  twitter: { card: "summary", title: "AeonAI — Everything within reach", description, images: ["/brand/aeonai-app-icon.png"] },
  icons: { icon: [{ url: "/brand/aeonai-app-icon.png", type: "image/png", sizes: "1024x1024" }], apple: [{ url: "/brand/aeonai-app-icon.png", type: "image/png", sizes: "1024x1024" }] },
};
export const viewport: Viewport = { themeColor: "#03060d", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}><a className="skip-link" href="#main-content">Skip to content</a><div className="site-stars" aria-hidden="true" /><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></body></html>;
}
