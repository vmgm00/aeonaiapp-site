import Image from "next/image";
import Link from "next/link";

export const APP_STORE_URL = "https://apps.apple.com/app/aeonai/id6757899057";
const destinations = [
  { href: "/support", label: "Support", icon: "support" },
  { href: "/privacy", label: "Privacy", icon: "privacy" },
  { href: "/terms", label: "Terms", icon: "terms" },
  { href: "/about", label: "About", icon: "about" },
] as const;

export function UtilityIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "support" && <><path d="M4 13v-2a8 8 0 0 1 16 0v2M4 12H3v6h4v-6H4ZM20 12h1v6h-4v-6h3ZM20 18c0 3-4 3-7 3" /><path d="M11 21h2" /></>}
      {name === "privacy" && <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m9 12 2 2 4-4" /></>}
      {name === "terms" && <><path d="M6 3h9l4 4v14H6V3Z" /><path d="M14 3v5h5M9 12h7M9 16h7" /></>}
      {name === "about" && <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" /></>}
    </svg>
  );
}

export function AppStoreLink({ compact = false }: { compact?: boolean }) {
  return (
    <a href={APP_STORE_URL} className={compact ? "app-store-link compact" : "app-store-link"} aria-label="Download AeonAI on the App Store">
      <svg viewBox="0 0 24 28" fill="currentColor" aria-hidden="true"><path d="M17.8 0c.2 2.1-.6 3.7-1.7 5-1.2 1.4-2.8 2.2-4.5 2.1-.2-2 .7-3.8 1.8-5C14.5.9 16.4.1 17.8 0ZM23 20.1c-.6 1.5-.9 2.2-1.7 3.5-1.1 1.6-2.6 3.6-4.5 3.6-1.7.1-2.2-1.1-4.5-1.1-2.2 0-2.8 1.1-4.5 1.2-1.8.1-3.2-1.8-4.3-3.4C.4 19.4-.6 13.8 1.3 10.8c1.4-2.2 3.6-3.5 5.7-3.5 1.8 0 3 1.2 4.5 1.2 1.4 0 2.4-1.2 4.5-1.2 1.8 0 3.8 1 5.2 2.6-4.6 2.5-3.8 9 1.8 10.2Z" /></svg>
      {compact ? <span>Get AeonAI</span> : <span><small>Download on the</small><strong>App Store</strong></span>}
    </a>
  );
}

export function UtilityLinks() {
  return <nav className="utility-links" aria-label="AeonAI information">{destinations.map(({ href, label, icon }) => <Link href={href} key={href}><span className="utility-orb"><UtilityIcon name={icon} /></span><span>{label}</span></Link>)}</nav>;
}

export function SiteHeader() {
  return <header className="site-header"><div className="site-header-inner"><Link className="site-brand" href="/" aria-label="AeonAI home"><Image src="/brand/aeonai-app-icon.png" alt="" width={38} height={38} /><span>AeonAI</span></Link><nav className="header-navigation" aria-label="Main navigation"><Link href="/#experience">The experience</Link><Link href="/#personal">Made for you</Link><Link href="/pricing">Pricing</Link></nav><AppStoreLink compact /></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><Link className="footer-brand" href="/" aria-label="AeonAI home"><Image src="/brand/aeonai-wordmark.png" alt="AeonAI" width={2048} height={682} sizes="180px" /></Link><nav aria-label="Footer navigation"><Link href="/pricing">Pricing</Link>{destinations.map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}</nav></div><div className="footer-bottom"><p>An iPhone experience by <a href="https://www.engineailabs.com">Engine AI Labs LLC</a>.</p><p>© {new Date().getFullYear()} Engine AI Labs LLC</p></div></footer>;
}
