import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualOpacity, visualRadius, visualStroke } from "./visualTokens";

export type ArtifactTileBackgroundProps = {
  className?: string;
  /** When false, a <title> is rendered for accessibility. */
  decorative?: boolean;
  /** Accessible title (used when decorative=false). */
  title?: string;
  /** Density of the background grid. */
  density?: "subtle" | "normal";
};

const GRID_V_X = Array.from({ length: 9 }, (_, i) => 24 + i * 46);
const GRID_H_Y = Array.from({ length: 6 }, (_, i) => 30 + i * 42);

/**
 * ArtifactTileBackground
 * Subtle schematic background for Work / case study tiles.
 * Performance checklist:
 * - Keep DOM light (prefer lines/paths; avoid filters/masks).
 * - No runtime animation; let parents handle hover via CSS.
 * - Render inside fixed-size containers to avoid CLS.
 */
export function ArtifactTileBackground({
  className,
  decorative = true,
  title = "Artifact tile background",
  density = "normal",
}: ArtifactTileBackgroundProps): ReactElement {
  const gridOpacity = density === "subtle" ? 0.35 : 0.55;

  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      viewBox="0 0 420 280"
      className={cn("h-full w-full", className)}
      preserveAspectRatio="none"
      focusable="false"
    >
      {decorative ? null : <title>{title}</title>}

      <g
        className="stroke-gray-200 dark:stroke-gray-700"
        strokeWidth={visualStroke.hairline}
        opacity={gridOpacity}
        vectorEffect="non-scaling-stroke"
      >
        {GRID_V_X.map((x, i) => (
          <line key={`v-${i}`} x1={x} y1={18} x2={x} y2={262} />
        ))}
        {GRID_H_Y.map((y, i) => (
          <line key={`h-${i}`} x1={18} y1={y} x2={402} y2={y} />
        ))}
      </g>

      <g
        className="stroke-gray-300 dark:stroke-gray-600"
        strokeWidth={visualStroke.hairline}
        opacity={visualOpacity.frame}
        vectorEffect="non-scaling-stroke"
        fill="none"
      >
        <rect x="14" y="14" width="392" height="252" rx={visualRadius.lg} />
        <path d="M 32 14 v 18" />
        <path d="M 14 32 h 18" />
        <path d="M 388 14 v 18" />
        <path d="M 406 32 h -18" />
        <path d="M 32 266 v -18" />
        <path d="M 14 248 h 18" />
        <path d="M 388 266 v -18" />
        <path d="M 406 248 h -18" />
      </g>

      <g className="text-accent-electric" stroke="currentColor" strokeWidth={visualStroke.accent} opacity={visualOpacity.accent} fill="none" vectorEffect="non-scaling-stroke">
        <path d="M 76 196 L 162 116 L 246 146 L 330 92" />
      </g>

      <g className="fill-white dark:fill-bg-panel stroke-gray-300 dark:stroke-gray-600" strokeWidth={visualStroke.hairline} vectorEffect="non-scaling-stroke">
        <circle cx="76" cy="196" r="6" />
        <circle cx="162" cy="116" r="6" />
        <circle cx="246" cy="146" r="6" />
        <circle cx="330" cy="92" r="6" />
      </g>

      <g className="fill-accent-electric" opacity={visualOpacity.accentStrong}>
        <circle cx="162" cy="116" r="2.6" />
        <circle cx="330" cy="92" r="2.6" />
      </g>
    </svg>
  );
}
