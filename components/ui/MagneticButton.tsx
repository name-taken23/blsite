"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  "aria-label"?: string;
}

// Create motion-enabled Link component for React 19 compatibility
const MotionLink = motion.create(Link);

export default function MagneticButton({ children, className = "", href, ...rest }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = "translate(0px, 0px)";
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  const baseClasses = `relative inline-block px-8 py-4 bg-accent-electric text-white font-medium rounded-lg transition-all duration-300 hover:bg-accent-electric/90 hover:shadow-lg hover:shadow-accent-electric/25 ${className}`;
  const baseStyle = { boxShadow: "0 0 36px rgba(0, 124, 255, 0.45)" };
  const hoverProps = shouldReduceMotion ? {} : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } };

  if (href?.startsWith("/")) {
    return (
      <MotionLink
        ref={buttonRef as any}
        href={href}
        className={baseClasses}
        style={baseStyle}
        {...hoverProps}
        {...rest}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        ref={buttonRef as any}
        href={href}
        className={baseClasses}
        style={baseStyle}
        {...hoverProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as any}
      className={baseClasses}
      style={baseStyle}
      {...(shouldReduceMotion ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } })}
      {...rest}
    >
      {children}
    </motion.button>
  );
}