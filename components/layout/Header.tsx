"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/brand/BrandMark";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDialogElement | null>(null);

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

  useEffect(() => {
    const dialog = mobileMenuRef.current;
    if (!dialog) return;

    if (isMobileMenuOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const dialog = mobileMenuRef.current;
    return () => {
      if (dialog?.open) dialog.close();
    };
  }, []);

  const navItems = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/work", "Work"],
    ["/contact", "Contact"],
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          aria-label="BlackLake"
          className={[
            "flex items-center",
            "transition-transform duration-300",
            isScrolled ? "scale-95" : "scale-100",
          ].join(" ")}
        >
          <span
            className={[
              "inline-flex items-center",
              "transition-all duration-300",
              isScrolled ? "drop-shadow-sm" : "",
            ].join(" ")}
          >
            <BrandMark variant="lockup" size="sm" />
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
                aria-current={isActive ? "page" : undefined}
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
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 hover:border-gray-300 transition-colors"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent-electric text-white hover:bg-accent-electricDark transition-colors"
          >
            Start with a Blueprint
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <dialog
        ref={mobileMenuRef}
        className="bl-mobile-menu m-0 max-w-none w-full h-full bg-transparent p-0 md:hidden"
        onCancel={(e) => {
          e.preventDefault();
          closeMobileMenu();
        }}
        onClose={() => setIsMobileMenuOpen(false)}
        onClick={(e) => {
          if (e.target === mobileMenuRef.current) closeMobileMenu();
        }}
      >
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-gray-200 shadow-sm">
          <div className="h-20 px-6 flex items-center justify-between border-b border-gray-100">
            <Link href="/" onClick={closeMobileMenu} aria-label="BlackLake" className="inline-flex items-center">
              <BrandMark variant="lockup" size="sm" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 hover:border-gray-300 transition-colors"
              onClick={closeMobileMenu}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-6 py-6">
            <div className="space-y-2">
              {navItems.map(([href, label]) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={String(href)}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "border-gray-300 bg-gray-50 text-gray-900"
                        : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="inline-flex w-full items-center justify-center rounded-lg bg-accent-electric px-8 py-4 text-sm font-semibold text-white hover:bg-accent-electricDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2"
              >
                Start with a Blueprint
              </Link>

              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                A paid, structured first step that defines constraints, risks, and a delivery sequence.
              </p>
            </div>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
