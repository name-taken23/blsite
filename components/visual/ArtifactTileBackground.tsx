import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualOpacity, visualRadius, visualStroke, visualStrokeColor } from "./visualTokens";

export type ArtifactTileBackgroundProps = {
  className?: string;
  /** When false, a <title> is rendered for accessibility. */
  decorative?: boolean;
  /** Accessible title (used when decorative=false). */
  title?: string;
  /** Density of the background grid. */
  density?: "subtle" | "normal";
  /** Variant motif to keep cards visually distinct. */
  variant?: "signal" | "matrix" | "ripple";
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
  variant = "signal",
}: ArtifactTileBackgroundProps): ReactElement {
  const gridOpacity = density === "subtle" ? 0.25 : visualOpacity.grid;
  const accentOpacity = visualOpacity.accent;
  const accentStrong = visualOpacity.accentStrong;

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

      {/* Decorative grid - muted stroke, low opacity */}
      <g
        className={visualStrokeColor.muted}
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

      {/* Frame border */}
      <g
        className={visualStrokeColor.frame}
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

      {variant === "signal" ? (
        <>
          <g
            className="text-accent-electric"
            stroke="currentColor"
            strokeWidth={visualStroke.accent}
            opacity={accentOpacity}
            fill="none"
            vectorEffect="non-scaling-stroke"
          >
            <path d="M 74 198 L 152 128 L 236 154 L 324 96" />
          </g>

          {/* Node circles */}
          <g
            className={cn("fill-white", visualStrokeColor.frame)}
            strokeWidth={visualStroke.hairline}
            vectorEffect="non-scaling-stroke"
          >
            <circle cx="74" cy="198" r="6" />
            <circle cx="152" cy="128" r="6" />
            <circle cx="236" cy="154" r="6" />
            <circle cx="324" cy="96" r="6" />
          </g>

          <g className="fill-accent-electric" opacity={accentStrong}>
            <circle cx="152" cy="128" r="2.6" />
            <circle cx="324" cy="96" r="2.6" />
          </g>
        </>
      ) : null}

      {variant === "matrix" ? (
        <>
          <g
            className="text-accent-electric"
            stroke="currentColor"
            strokeWidth={visualStroke.accent}
            opacity={accentOpacity}
            fill="none"
            vectorEffect="non-scaling-stroke"
          >
            <path d="M 92 208 L 92 112 L 232 112 L 232 168 L 330 168" />
          </g>

          <g
            className={cn("fill-white", visualStrokeColor.frame)}
            strokeWidth={visualStroke.hairline}
            vectorEffect="non-scaling-stroke"
          >
            <rect x="86" y="106" width="12" height="12" rx="3" />
            <rect x="226" y="162" width="12" height="12" rx="3" />
            <rect x="324" y="162" width="12" height="12" rx="3" />
          </g>

          <g className="fill-accent-electric" opacity={accentStrong}>
            <rect x="90" y="110" width="4" height="4" rx="1" />
            <rect x="328" y="166" width="4" height="4" rx="1" />
          </g>
        </>
      ) : null}

      {variant === "ripple" ? (
        <>
          <g
            className="text-accent-electric"
            stroke="currentColor"
            strokeWidth={visualStroke.accent}
            opacity={accentOpacity}
            fill="none"
            vectorEffect="non-scaling-stroke"
          >
            <path d="M 84 164 C 138 110, 202 108, 252 146 S 344 186, 356 120" />
          </g>

          <g
            className={cn("fill-white", visualStrokeColor.frame)}
            strokeWidth={visualStroke.hairline}
            vectorEffect="non-scaling-stroke"
          >
            <circle cx="84" cy="164" r="6" />
            <circle cx="196" cy="118" r="6" />
            <circle cx="252" cy="146" r="6" />
            <circle cx="356" cy="120" r="6" />
          </g>

          <g className="fill-accent-electric" opacity={accentStrong}>
            <circle cx="196" cy="118" r="2.6" />
            <circle cx="356" cy="120" r="2.6" />
          </g>
        </>
      ) : null}
    </svg>
  );
}
