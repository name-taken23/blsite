"use client";

import Link from "next/link";
import { forwardRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-accent-electric text-white",
    "hover:bg-accent-electricDark",
    "focus-visible:ring-accent-electric"
  ),
  secondary: cn(
    "border border-gray-200 bg-white text-gray-900",
    "hover:border-gray-300 hover:bg-gray-50",
    "focus-visible:ring-gray-400"
  ),
  tertiary: cn(
    "text-gray-900 underline-offset-4",
    "hover:text-accent-electric hover:underline",
    "focus-visible:ring-gray-400"
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

const baseClasses = cn(
  "inline-flex items-center justify-center",
  "rounded-lg font-semibold",
  "transition-colors duration-200",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  "disabled:opacity-50 disabled:pointer-events-none"
);

/**
 * Button - Unified button component.
 * 
 * Variants:
 * - primary: Main CTA, electric blue background
 * - secondary: Border button for secondary actions
 * - tertiary: Ghost/text link style
 * 
 * Sizes:
 * - sm: Compact (chips, inline actions)
 * - md: Default
 * - lg: Hero CTAs
 * 
 * Supports both button and link semantics via href prop.
 */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, variant = "primary", size = "lg", className, href, disabled, ...rest }, ref) => {
    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

    if (href) {
      // Internal link
      if (href.startsWith("/")) {
        return (
          <Link
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            aria-disabled={disabled}
            {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | "href">)}
          >
            {children}
          </Link>
        );
      }

      // External link
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          aria-disabled={disabled}
          {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | "href">)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={(rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
        className={classes}
        disabled={disabled}
        {...(rest as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
