import { useId, type ReactElement } from "react";
import { cn } from "@/lib/utils";
import { visualOpacity, visualStroke, visualTextColor, visualStrokeColor } from "./visualTokens";

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
    start: 160,
    center: 400,
    end: 640,
  };

  const textX = xByAlign[align];
  const label = text.trim().toUpperCase();
  const labelLength = Math.max(label.length, 6);
  const pillWidth = Math.min(260, Math.max(144, labelLength * 7.2 + 56));
  const pillHeight = 26;
  const pillRadius = pillHeight / 2;
  const pillX = textX - pillWidth / 2;
  const pillY = 28 - pillHeight / 2;
  const accentOffset = Math.min(pillWidth / 2 + 18, textX - 36, 764 - textX);
  const gradientId = useId();

  return (
    <svg
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      viewBox="0 0 800 56"
      className={cn("h-full w-full", className)}
      focusable="false"
    >
      {decorative ? null : <title>{title}</title>}

      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--surface-1)" />
          <stop offset="100%" stopColor="var(--surface-tint)" />
        </linearGradient>
      </defs>

      {/* Main rule - uses line-2 for decorative visibility */}
      <g
        className="stroke-line-2" // contrast-ok: line-2 token = gray-200
        strokeWidth={visualStroke.thin}
        vectorEffect="non-scaling-stroke"
      >
        <path d="M 24 28 H 776" />
        <path d="M 24 28 v -7" />
        <path d="M 776 28 v 7" />
      </g>

      {/* Annotation pill background - soft surface tint */}
      <g>
        <rect x={pillX} y={pillY} width={pillWidth} height={pillHeight} rx={pillRadius} fill={`url(#${gradientId})`} />
      </g>

      {/* Annotation pill outline - uses line-1 equivalent for stronger visibility */}
      <g
        className={visualStrokeColor.frame}
        strokeWidth={visualStroke.thin}
        vectorEffect="non-scaling-stroke"
        fill="none"
      >
        <rect x={pillX} y={pillY} width={pillWidth} height={pillHeight} rx={pillRadius} />
      </g>

      {/* Label text - use ink-2 equivalent for readability */}
      <g className={visualTextColor.label}>
        <text
          x={textX}
          y="31"
          textAnchor="middle"
          fontSize="11.5"
          fontWeight="600"
          letterSpacing="0.18em"
          style={{ fontFamily: "var(--font-dm-sans), var(--font-inter), sans-serif" }}
        >
          {label}
        </text>
      </g>

      <g className="text-accent-electric" opacity={visualOpacity.accent}>
        <circle cx={textX - accentOffset} cy="28" r="2" fill="currentColor" />
        <circle cx={textX + accentOffset} cy="28" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}
