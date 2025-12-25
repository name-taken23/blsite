import { cn } from "@/lib/utils";

type BlueprintGridProps = {
  className?: string;
};

const GRID_V_X = Array.from({ length: 11 }, (_, i) => 20 + i * 36);
const GRID_H_Y = Array.from({ length: 6 }, (_, i) => 20 + i * 36);

export default function BlueprintGrid({ className }: BlueprintGridProps) {
  /**
   * Performance checklist:
   * - Static SVG (no filters/masks).
   * - Precomputed coordinates (avoid per-render allocations).
   */
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 400 240"
      className={cn("w-full h-full", className)}
    >
      {/* contrast-ok: decorative background grid, aria-hidden */}
      <g className="stroke-gray-200 opacity-70" strokeWidth="1">
        {GRID_V_X.map((x, i) => (
          <line key={`v-${i}`} x1={x} y1={16} x2={x} y2={224} />
        ))}
        {GRID_H_Y.map((y, i) => (
          <line key={`h-${i}`} x1={16} y1={y} x2={384} y2={y} />
        ))}
      </g>

      {/* contrast-ok: decorative frame, aria-hidden */}
      <g className="stroke-gray-300 opacity-60" strokeWidth="1">
        <rect x="16" y="16" width="368" height="208" rx="14" fill="none" />
      </g>

      <g className="text-accent-electric" stroke="currentColor" fill="currentColor">
        <circle cx="86" cy="78" r="4" className="opacity-70" />
        <circle cx="206" cy="116" r="4" className="opacity-70" />
        <circle cx="314" cy="62" r="4" className="opacity-70" />
        <circle cx="292" cy="170" r="4" className="opacity-70" />

        <g className="opacity-35" fill="none" strokeWidth="2">
          <path d="M 86 78 L 206 116 L 292 170" />
          <path d="M 206 116 L 314 62" />
        </g>

        <g className="opacity-40" strokeWidth="2">
          <path d="M 64 150 h 18" />
          <path d="M 73 141 v 18" />
        </g>
      </g>
    </svg>
  );
}
