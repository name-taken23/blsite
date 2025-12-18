"use client";

import Link from "next/link";
import { forwardRef } from "react";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type MagneticButtonLinkProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

type MagneticButtonButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type MagneticButtonProps = MagneticButtonLinkProps | MagneticButtonButtonProps;

const baseClasses =
  "inline-flex items-center justify-center rounded-lg bg-accent-electric px-8 py-4 text-sm font-semibold text-white hover:bg-accent-electricDark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2";

function cx(a: string, b?: string) {
  return b ? `${a} ${b}` : a;
}

const MagneticButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, MagneticButtonProps>(
  ({ children, className = "", href, ...rest }, ref) => {
    if (href) {
      if (href.startsWith("/")) {
        return (
          <Link
            ref={ref as any}
            href={href}
            className={cx(baseClasses, className)}
            {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">)}
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          ref={ref as any}
          href={href}
          className={cx(baseClasses, className)}
          {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as any}
        className={cx(baseClasses, className)}
        type={(rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
        {...(rest as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)}
      >
        {children}
      </button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;