"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, useState, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children?: ReactNode;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", loading = false, children, ...props }, ref) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const rippleIdRef = useRef(0);

    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-electric focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden";

    const variants = {
      primary: "bg-accent-electric text-white hover:bg-accent-electric/90 shadow-sm hover:shadow-lg hover:shadow-accent-electric/30",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-accent-electric",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm rounded-md",
      md: "px-4 py-2 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-lg",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Limit ripples to prevent performance issues
      if (ripples.length > 3) {
        setRipples([]);
      }

      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple: Ripple = {
        x,
        y,
        id: rippleIdRef.current++,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);

      // Call original onClick if provided
      if (props.onClick) {
        props.onClick(e as any);
      }
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
        onClick={handleClick}
        disabled={loading || props.disabled}
      >
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30"
            initial={{
              width: 0,
              height: 0,
              x: ripple.x,
              y: ripple.y,
              opacity: 1,
            }}
            animate={{
              width: 500,
              height: 500,
              x: ripple.x - 250,
              y: ripple.y - 250,
              opacity: 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ pointerEvents: "none" }}
          />
        ))}

        {/* Gradient overlay on hover */}
        <motion.span
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              variant === "primary"
                ? "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)"
                : "linear-gradient(45deg, transparent, rgba(0,124,255,0.05), transparent)",
          }}
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {children}
        </span>

        {/* Glow effect for primary variant */}
        {variant === "primary" && (
          <motion.span
            className="absolute inset-0 rounded-lg"
            animate={{
              boxShadow: [
                "0 0 0px rgba(0, 124, 255, 0)",
                "0 0 20px rgba(0, 124, 255, 0.5)",
                "0 0 0px rgba(0, 124, 255, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
