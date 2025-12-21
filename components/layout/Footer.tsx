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
    <footer className="relative border-t border-gray-200 bg-white overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 opacity-5">
        <BrandMark variant="mark" size="lg" />
      </div>

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
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <AppIcon icon={MapPin} size="sm" className="text-gray-400" />
              <span>Made in London</span>
            </div>
            <div className="text-sm text-gray-500">© {currentYear} BlackLake. All rights reserved.</div>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-sm text-gray-600">Send a short note with context and constraints.</p>
            <Link href="/contact" className="rounded-md text-sm font-semibold text-accent-electric hover:text-accent-electricDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              Start with a Blueprint
            </Link>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <Link href="/work" className="rounded-md text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white">Work</Link>
            <Link href="/services" className="rounded-md text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white">Services</Link>
            <Link href="/about" className="rounded-md text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white">About</Link>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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