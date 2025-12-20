"use client";

import { forwardRef } from "react";
import Button from "./Button";

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

/**
 * MagneticButton - Primary CTA button.
 * 
 * This is now a thin wrapper around Button variant="primary" size="lg"
 * to maintain backwards compatibility while using a single source of truth.
 */
const MagneticButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, MagneticButtonProps>(
  ({ children, className = "", href, ...rest }, ref) => {
    if (href) {
      return (
        <Button
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          variant="primary"
          size="lg"
          className={className}
          {...(rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">)}
        >
          {children}
        </Button>
      );
    }

    return (
      <Button
        ref={ref as React.Ref<HTMLButtonElement>}
        variant="primary"
        size="lg"
        className={className}
        type={(rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button"}
        {...(rest as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)}
      >
        {children}
      </Button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;