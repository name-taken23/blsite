"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(16px)", "blur(24px)"]
  );

  const borderOpacity = useTransform(scrollY, [0, 100], [0.2, 0.4]);

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

  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <motion.header
      variants={fadeIn}
      initial="initial"
      animate="animate"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo with reveal effect */}
        <div className="flex justify-start">
          <Link 
            href="/" 
            className="group relative flex items-center"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="relative h-10 flex items-center">
              {/* Logo Icon */}
              <motion.div
                className="flex items-center justify-center"
                animate={{
                  opacity: isLogoHovered ? 0 : 1,
                  scale: isLogoHovered ? 0.8 : 1,
                  width: isLogoHovered ? 0 : "2.5rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div 
                  className="w-10 h-10 bg-gradient-to-r from-gray-900 via-accent-electric to-gray-900 bg-[length:200%_100%]"
                  style={{
                    maskImage: "url(/logo.png)",
                    WebkitMaskImage: "url(/logo.png)",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </motion.div>

              {/* Text Reveal */}
              <motion.div
                className="overflow-hidden flex items-center"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: isLogoHovered ? "auto" : 0,
                  opacity: isLogoHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-accent-electric to-gray-900 bg-clip-text text-transparent bg-[length:200%_100%] whitespace-nowrap pl-1">
                  BLACKLAKE
                </span>
              </motion.div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium justify-center">
          {navItems.map(([href, label]) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={String(href)}
                className="relative group"
              >
                <motion.span
                  className={`relative z-10 transition-colors ${
                    isActive
                      ? "text-accent-electric"
                      : "text-gray-700 hover:text-accent-electric"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-electric to-blue-500"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover indicator */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-electric/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: isActive ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0 }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4 justify-end">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-accent-electric text-white text-sm font-semibold rounded-lg shadow-button hover:bg-accent-electricDark hover:shadow-glow-md transition-all duration-300"
            >
              <span>Get Started</span>
              <motion.svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </Link>
          </motion.div>
          <ThemeToggle />
        </div>
      </div>

      {/* Bottom border with scroll effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        style={{ opacity: borderOpacity }}
      />
    </motion.header>
  );
}
