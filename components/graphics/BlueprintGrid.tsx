import { cn } from "@/lib/utils";

type BlueprintGridProps = {
  className?: string;
};

export default function BlueprintGrid({ className }: BlueprintGridProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 400 240"
      className={cn("w-full h-full", className)}
    >
      <g className="stroke-gray-200 opacity-70" strokeWidth="1">
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v-${i}`} x1={20 + i * 36} y1={16} x2={20 + i * 36} y2={224} />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h-${i}`} x1={16} y1={20 + i * 36} x2={384} y2={20 + i * 36} />
        ))}
      </g>

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
