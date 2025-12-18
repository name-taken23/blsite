"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/work", "Work"],
    ["/contact", "Contact"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <span className="text-sm font-semibold tracking-[0.22em] text-gray-900">
            BLACKLAKE
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map(([href, label]) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={String(href)}
                className={`transition-colors ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent-electric text-white hover:bg-accent-electricDark transition-colors"
          >
            Start with a Blueprint
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
