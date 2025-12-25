import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualStroke } from "./visualTokens";

export type ConstraintKind =
  | "latency"
  | "cost"
  | "reliability"
  | "security"
  | "compliance"
  | "risk";

export type ConstraintIconProps = {
  /** Which constraint to render. */
  kind: ConstraintKind;
  /** Tailwind className applied to the root svg element. */
  className?: string;
  /** Pixel size for width/height. */
  size?: number;
  /** When false, a <title> is rendered for accessibility. */
  decorative?: boolean;
  /** Accessible title (used when decorative=false). */
  title?: string;
};

/**
 * ConstraintIcon
 * A small technical icon set for core constraints.
 */
export function ConstraintIcon({
  kind,
  className,
  size = 20,
  decorative = true,
  title,
}: ConstraintIconProps): ReactElement {
  const resolvedTitle = title ?? `${kind} constraint icon`;

  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={visualStroke.thin}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      focusable="false"
    >
      {decorative ? null : <title>{resolvedTitle}</title>}

      {kind === "latency" ? (
        <>
          <path d="M 12 4 a 8 8 0 1 1 -0.001 0" />
          <path d="M 12 8 v 4" />
          <path d="M 12 12 l 3 2" />
          <path d="M 4.5 12 h 1.6" />
          <path d="M 17.9 12 h 1.6" />
        </>
      ) : null}

      {kind === "cost" ? (
        <>
          <path d="M 12 3 v 18" />
          <path d="M 16 7.5 c 0 -1.7 -1.8 -3 -4 -3 s -4 1.3 -4 3 s 1.7 2.5 4 3 s 4 1.3 4 3 s -1.8 3 -4 3 s -4 -1.3 -4 -3" />
        </>
      ) : null}

      {kind === "reliability" ? (
        <>
          <path d="M 12 3 l 7 4 v 6 c 0 4.5 -3.2 7.7 -7 8.9 c -3.8 -1.2 -7 -4.4 -7 -8.9 v -6 l 7 -4 z" />
          <path d="M 9.2 12.1 l 2 2 l 3.7 -4.2" />
        </>
      ) : null}

      {kind === "security" ? (
        <>
          <path d="M 8.5 11 v -1.8 a 3.5 3.5 0 0 1 7 0 V 11" />
          <rect x="6.8" y="11" width="10.4" height="9" rx="2" />
          <path d="M 12 15 v 2" />
        </>
      ) : null}

      {kind === "compliance" ? (
        <>
          <rect x="6" y="4" width="12" height="16" rx="2" />
          <path d="M 9 8 h 6" />
          <path d="M 9 12 h 6" />
          <path d="M 9 16 h 4" />
          <path d="M 17 7 l 2 0" />
        </>
      ) : null}

      {kind === "risk" ? (
        <>
          <path d="M 12 3 l 10 18 H 2 L 12 3 z" />
          <path d="M 12 9 v 5" />
          <path d="M 12 17 h 0.01" />
        </>
      ) : null}
    </svg>
  );
}
