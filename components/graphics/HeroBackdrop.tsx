const GRID_V_X = Array.from({ length: 13 }, (_, i) => i * 100);
const GRID_H_Y = Array.from({ length: 7 }, (_, i) => i * 100);
const NODE_POINTS: Array<[number, number]> = [
  [120, 140],
  [260, 320],
  [420, 210],
  [640, 360],
  [820, 160],
  [980, 280],
  [1080, 420],
];

/**
 * HeroBackdrop
 * Performance checklist:
 * - No SVG filters/masks/blurs.
 * - Precomputed coordinates (avoid per-render allocations).
 * - Preserve aspect ratio behavior (no layout coupling).
 */
export default function HeroBackdrop(props: { className?: string }) {
  const { className } = props;

  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Subtle grid */}
      <g className="text-gray-200" stroke="currentColor" opacity="0.55" strokeWidth="1">
        {GRID_V_X.map((x, i) => (
          <path key={`v-${i}`} d={`M ${x} 0 V 600`} />
        ))}
        {GRID_H_Y.map((y, i) => (
          <path key={`h-${i}`} d={`M 0 ${y} H 1200`} />
        ))}
      </g>

      {/* Deterministic diagonals (very faint) */}
      <g className="text-accent-electric" stroke="currentColor" opacity="0.12" strokeWidth="2">
        <path d="M -100 520 L 420 0" />
        <path d="M 180 600 L 780 0" />
        <path d="M 520 600 L 1200 60" />
        <path d="M 820 600 L 1300 220" />
      </g>

      {/* Small nodes */}
      <g className="fill-accent-electric" opacity="0.12">
        {NODE_POINTS.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
        ))}
      </g>
    </svg>
  );
}
