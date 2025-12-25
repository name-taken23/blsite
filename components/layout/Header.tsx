"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BrandMark from "@/components/brand/BrandMark";
import Button from "@/components/ui/Button";
import AppIcon from "@/components/ui/AppIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDialogElement | null>(null);
  const mobileMenuCloseRef = useRef<HTMLButtonElement | null>(null);

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

      // Ensure keyboard users land inside the menu.
      requestAnimationFrame(() => {
        mobileMenuCloseRef.current?.focus();
      });
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-line-2 bg-surface-1/85 backdrop-blur supports-[backdrop-filter]:bg-surface-1/70 transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] rounded-lg bg-surface-2 px-4 py-2 text-sm font-semibold text-ink-1 shadow-sm ring-1 ring-line-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          aria-label="BlackLake"
          className={[
            "flex items-center",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-lg",
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
                className={`rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive
                    ? "text-ink-1"
                    : "text-ink-2 hover:text-ink-1"
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
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 hover:border-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <AppIcon icon={X} size="md" /> : <AppIcon icon={Menu} size="md" />}
          </button>
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="hidden sm:inline-flex"
          >
            Start with a Blueprint
          </Button>
        </div>
      </div>

      <dialog
        ref={mobileMenuRef}
        className="bl-mobile-menu m-0 max-w-none w-full h-full bg-transparent p-0 md:hidden"
        aria-label="Mobile menu"
        onCancel={(e) => {
          e.preventDefault();
          closeMobileMenu();
        }}
        onClose={() => setIsMobileMenuOpen(false)}
        onClick={(e) => {
          if (e.target === mobileMenuRef.current) closeMobileMenu();
        }}
      >
        {isMobileMenuOpen && (
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-gray-200 shadow-sm">
            <div className="h-20 px-6 flex items-center justify-between border-b border-line-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                aria-label="BlackLake"
                className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <BrandMark variant="lockup" size="sm" />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                ref={mobileMenuCloseRef}
                autoFocus
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 hover:border-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                onClick={closeMobileMenu}
              >
                <AppIcon icon={X} size="md" />
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
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
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
                <Button
                  href="/contact"
                  onClick={closeMobileMenu}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Start with a Blueprint
                </Button>

                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                  A paid, structured first step that defines constraints, risks, and a delivery sequence.
                </p>
              </div>
            </nav>
          </div>
        )}
      </dialog>
    </header>
  );
}
