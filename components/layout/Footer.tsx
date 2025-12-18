"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Mail, href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="space-y-2">
            <div className="text-sm font-semibold tracking-[0.22em] text-gray-900">BLACKLAKE</div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-3.5 h-3.5" />
              <span>Made in London</span>
            </div>
            <div className="text-sm text-gray-500">© {currentYear} BlackLake. All rights reserved.</div>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-sm text-gray-600">Send a short note with context and constraints.</p>
            <Link href="/contact" className="text-sm font-semibold text-accent-electric hover:text-accent-electricDark transition-colors">
              Start with a Blueprint
            </Link>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <Link href="/work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}