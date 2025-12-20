"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
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
      </dialog>
    </header>
  );
}
