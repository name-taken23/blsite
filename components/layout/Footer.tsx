import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import BrandMark from "@/components/brand/BrandMark";
import AppIcon from "@/components/ui/AppIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Mail, href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t border-line-2 bg-surface-1 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="space-y-2">
            <Link
              href="/"
              aria-label="BlackLake"
              className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <BrandMark variant="lockup" size="sm" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-ink-3">
              <AppIcon icon={MapPin} size="sm" className="text-ink-3" />
              <span>Made in London</span>
            </div>
            <div className="text-sm text-ink-3">© {currentYear} BlackLake. All rights reserved.</div>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-sm text-ink-2">Send a short note with context and constraints.</p>
            <Link href="/contact" className="rounded-md text-sm font-semibold text-accent-electric hover:text-accent-electricDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              Start with a Blueprint
            </Link>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <Link href="/work" className="rounded-md text-ink-2 hover:text-ink-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white">Work</Link>
            <Link href="/services" className="rounded-md text-ink-2 hover:text-ink-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white">Services</Link>
            <Link href="/about" className="rounded-md text-ink-2 hover:text-ink-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white">About</Link>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg border border-line-1 bg-surface-2 flex items-center justify-center text-ink-2 hover:text-ink-1 hover:border-line-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <AppIcon icon={social.icon} size="sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}