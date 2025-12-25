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

      <g
        className="stroke-gray-200 dark:stroke-gray-700"
        strokeWidth={visualStroke.hairline}
        opacity={0.9}
        vectorEffect="non-scaling-stroke"
      >
        <path d="M 16 24 H 784" />
        <path d="M 16 24 v -6" />
        <path d="M 784 24 v 6" />
      </g>

      <g className="fill-white dark:fill-bg-panel" opacity={0.95}>
        <rect x={textX - 92} y="12" width="184" height="24" rx="12" />
      </g>

      <g
        className="stroke-gray-300 dark:stroke-gray-600"
        strokeWidth={visualStroke.hairline}
        opacity={visualOpacity.frame}
        vectorEffect="non-scaling-stroke"
        fill="none"
      >
        <rect x={textX - 92} y="12" width="184" height="24" rx="12" />
      </g>

      <g className="fill-gray-600 dark:fill-gray-300" opacity={0.95}>
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

      <g className="text-accent-electric" opacity={0.35}>
        <circle cx={textX - 72} cy="24" r="2" fill="currentColor" />
        <circle cx={textX + 72} cy="24" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}
