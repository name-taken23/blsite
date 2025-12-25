import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualRadius, visualStroke, visualStrokeColor, visualTextColor } from "./visualTokens";

export type OutcomeStripMotifProps = {
  className?: string;
  /** When false, a <title> is rendered for accessibility. */
  decorative?: boolean;
  /** Accessible title (used when decorative=false). */
  title?: string;
  /** Left-side label for the strip. */
  label?: string;
  /** Before value in [0..1]. */
  before?: number;
  /** After value in [0..1]. */
  after?: number;
  beforeLabel?: string;
  afterLabel?: string;
};

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

/**
 * OutcomeStripMotif
 * Before/after bar strip + label.
 */
export function OutcomeStripMotif({
  className,
  decorative = true,
  title = "Outcome strip motif",
  label = "Outcome",
  before = 0.35,
  after = 0.7,
  beforeLabel = "Before",
  afterLabel = "After",
}: OutcomeStripMotifProps): ReactElement {
  const beforeValue = clamp01(before);
  const afterValue = clamp01(after);

  const trackX = 154;
  const trackYBefore = 22;
  const trackYAfter = 36;
  const trackW = 240;
  const trackH = 8;

  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      viewBox="0 0 420 56"
      className={cn("h-full w-full", className)}
      focusable="false"
    >
      {decorative ? null : <title>{title}</title>}

      {/* Main label - use readable ink token */}
      <g className={visualTextColor.label}>
        <text x="16" y="26" fontSize="12" fontWeight="700">
          {label}
        </text>
      </g>

      {/* Secondary labels */}
      <g className={visualTextColor.secondary}>
        <text x="16" y="42" fontSize="11" fontWeight="600">
          {beforeLabel}
        </text>
        <text x="86" y="42" fontSize="11" fontWeight="600">
          {afterLabel}
        </text>
      </g>

      {/* Track borders */}
      <g className={visualStrokeColor.frame} strokeWidth={visualStroke.hairline} vectorEffect="non-scaling-stroke">
        <rect x={trackX} y={trackYBefore} width={trackW} height={trackH} rx={visualRadius.sm} fill="none" />
        <rect x={trackX} y={trackYAfter} width={trackW} height={trackH} rx={visualRadius.sm} fill="none" />
      </g>

      {/* Before bar - muted fill */}
      <g className="fill-gray-300" opacity={0.55}>
        <rect x={trackX} y={trackYBefore} width={trackW * beforeValue} height={trackH} rx={visualRadius.sm} />
      </g>

      {/* After bar - accent fill, higher visibility */}
      <g className="fill-accent-electric" opacity={0.7}>
        <rect x={trackX} y={trackYAfter} width={trackW * afterValue} height={trackH} rx={visualRadius.sm} />
      </g>
    </svg>
  );
}
