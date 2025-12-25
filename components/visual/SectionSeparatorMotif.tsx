import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualOpacity, visualStroke } from "./visualTokens";

export type SectionSeparatorMotifProps = {
  className?: string;
  /** When false, a <title> is rendered for accessibility. */
  decorative?: boolean;
  /** Accessible title (used when decorative=false). */
  title?: string;
  /** Annotation text rendered on the rule. */
  text: string;
  /** Text alignment along the rule. */
  align?: "start" | "center" | "end";
};

/**
 * SectionSeparatorMotif
 * Thin rule with an annotation callout.
 */
export function SectionSeparatorMotif({
  className,
  decorative = true,
  title = "Section separator motif",
  text,
  align = "start",
}: SectionSeparatorMotifProps): ReactElement {
  const xByAlign: Record<typeof align, number> = {
    start: 120,
    center: 400,
    end: 680,
  };

  const textX = xByAlign[align];

  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      viewBox="0 0 800 48"
      className={cn("h-full w-full", className)}
      focusable="false"
    >
      {decorative ? null : <title>{title}</title>}

      {/* Main rule - uses line-2 for decorative visibility */}
      <g
        className="stroke-line-2 dark:stroke-gray-700" // contrast-ok: line-2 token = gray-200
        strokeWidth={visualStroke.thin}
        vectorEffect="non-scaling-stroke"
      >
        <path d="M 16 24 H 784" />
        <path d="M 16 24 v -6" />
        <path d="M 784 24 v 6" />
      </g>

      {/* Annotation pill background - solid surface, no opacity */}
      <g className="fill-white dark:fill-bg-panel">
        <rect x={textX - 92} y="12" width="184" height="24" rx="12" />
      </g>

      {/* Annotation pill outline - uses line-1 equivalent for stronger visibility */}
      <g
        className="stroke-gray-300 dark:stroke-gray-600"
        strokeWidth={visualStroke.thin}
        vectorEffect="non-scaling-stroke"
        fill="none"
      >
        <rect x={textX - 92} y="12" width="184" height="24" rx="12" />
      </g>

      {/* Label text - use ink-2 equivalent for readability */}
      <g className="fill-gray-600 dark:fill-gray-300">
        <text
          x={textX}
          y="28"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          {text.toUpperCase()}
        </text>
      </g>

      <g className="text-accent-electric" opacity={visualOpacity.accent}>
        <circle cx={textX - 72} cy="24" r="2" fill="currentColor" />
        <circle cx={textX + 72} cy="24" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}
