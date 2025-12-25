"use client";

import { cn } from "@/lib/utils";

type TopologyLinesProps = {
  className?: string;
};

export default function TopologyLines({ className }: TopologyLinesProps) {
  /**
   * Performance checklist:
   * - Keep SVG DOM small (no filters/masks).
   * - Decorative only; safe to lazy-mount below the fold.
   */
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 420 120"
      className={cn("w-full h-full", className)}
    >
      <g className="stroke-gray-200" strokeWidth="1" fill="none" opacity="0.9">
        <path d="M 34 80 L 120 36 L 210 62 L 310 28 L 388 52" />
        <path d="M 120 36 L 168 100" />
        <path d="M 210 62 L 252 104" />
        <path d="M 310 28 L 310 94" />
      </g>

      <g className="text-accent-electric" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.35">
        <path d="M 34 80 L 120 36 L 210 62" />
        <path d="M 210 62 L 310 28" />
      </g>

      <g className="fill-white stroke-gray-300" strokeWidth="1">
        <circle cx="34" cy="80" r="6" />
        <circle cx="120" cy="36" r="6" />
        <circle cx="210" cy="62" r="6" />
        <circle cx="310" cy="28" r="6" />
        <circle cx="388" cy="52" r="6" />
        <circle cx="168" cy="100" r="5" />
        <circle cx="252" cy="104" r="5" />
        <circle cx="310" cy="94" r="5" />
      </g>

      <g className="fill-accent-electric" opacity="0.6">
        <circle cx="120" cy="36" r="2.5" />
        <circle cx="310" cy="28" r="2.5" />
      </g>
    </svg>
  );
}
