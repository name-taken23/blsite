import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualOpacity, visualRadius, visualStroke } from "./visualTokens";

export type SystemMapMotifProps = {
  /** Tailwind className applied to the root svg element. */
  className?: string;
  /** When false, a <title> is rendered for accessibility. */
  decorative?: boolean;
  /** Accessible title (used when decorative=false). */
  title?: string;
  /** Render the outer frame around the schematic. */
  framed?: boolean;
  /** Adds a faint grid behind the topology. */
  grid?: boolean;
};

/**
 * SystemMapMotif
 * Minimal system-map schematic: nodes + edges with subtle blueprint framing.
 */
export function SystemMapMotif({
  className,
  decorative = true,
  title = "System map motif",
  framed = true,
  grid = true,
}: SystemMapMotifProps): ReactElement {
  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      viewBox="0 0 420 180"
      className={cn("h-full w-full", className)}
      focusable="false"
    >
      {decorative ? null : <title>{title}</title>}

      {grid ? (
        <g
          className="stroke-gray-200 dark:stroke-gray-700"
          strokeWidth={visualStroke.hairline}
          opacity={visualOpacity.grid}
          vectorEffect="non-scaling-stroke"
        >
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v-${i}`} x1={24 + i * 34} y1={14} x2={24 + i * 34} y2={166} />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`h-${i}`} x1={16} y1={24 + i * 34} x2={404} y2={24 + i * 34} />
          ))}
        </g>
      ) : null}

      {framed ? (
        <g
          className="stroke-gray-300 dark:stroke-gray-600"
          strokeWidth={visualStroke.hairline}
          opacity={visualOpacity.frame}
          vectorEffect="non-scaling-stroke"
          fill="none"
        >
          <rect x="14" y="14" width="392" height="152" rx={visualRadius.md} />
          <path d="M 44 14 v 10" />
          <path d="M 376 14 v 10" />
          <path d="M 44 166 v -10" />
          <path d="M 376 166 v -10" />
        </g>
      ) : null}

      <g
        className="stroke-gray-300 dark:stroke-gray-600"
        strokeWidth={visualStroke.thin}
        opacity={0.9}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M 66 120 L 142 56 L 226 96 L 314 44 L 360 92" />
        <path d="M 142 56 L 184 136" />
        <path d="M 226 96 L 270 140" />
        <path d="M 314 44 L 314 132" />
      </g>

      <g
        className="text-accent-electric"
        stroke="currentColor"
        strokeWidth={visualStroke.accent}
        opacity={visualOpacity.accent}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M 66 120 L 142 56 L 226 96" />
        <path d="M 226 96 L 314 44" />
      </g>

      <g className="fill-white dark:fill-bg-panel stroke-gray-300 dark:stroke-gray-600" strokeWidth={visualStroke.hairline} vectorEffect="non-scaling-stroke">
        <circle cx="66" cy="120" r="6" />
        <circle cx="142" cy="56" r="6" />
        <circle cx="226" cy="96" r="6" />
        <circle cx="314" cy="44" r="6" />
        <circle cx="360" cy="92" r="6" />
        <circle cx="184" cy="136" r="5" />
        <circle cx="270" cy="140" r="5" />
        <circle cx="314" cy="132" r="5" />
      </g>

      <g className="fill-accent-electric" opacity={visualOpacity.accentStrong}>
        <circle cx="142" cy="56" r="2.5" />
        <circle cx="314" cy="44" r="2.5" />
      </g>
    </svg>
  );
}
