"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends Omit<HTMLMotionProps<"span">, "ref"> {
  variant?: "default" | "secondary" | "accent";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-gray-100 text-gray-800",
      secondary: "bg-accent-electric/10 text-accent-electric",
      accent: "bg-accent-glow/20 text-accent-electric",
    };

    return (
      <motion.span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export default Badge;