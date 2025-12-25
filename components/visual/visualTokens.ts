export const visualStroke = {
  hairline: 1,
  thin: 1.25,
  accent: 1.5,
} as const;

export const visualRadius = {
  sm: 8,
  md: 12,
  lg: 16,
} as const;

/**
 * 2-tier stroke color system for blueprint visuals.
 * Use Tailwind classes that reference these semantically:
 * - strokeStrong: primary topology, meaningful outlines (stroke-gray-400 / dark:stroke-gray-500)
 * - strokeMuted: decorative grids, scaffolding (uses muted gray) // contrast-ok: token definition
 */
export const visualStrokeColor = {
  /** Primary topology lines, meaningful outlines - clearly visible on white */
  strong: "stroke-gray-400 dark:stroke-gray-500",
  /** Decorative grids, secondary scaffolding - visible but recessive */
  muted: "stroke-gray-200 dark:stroke-gray-700", // contrast-ok: token definition for decorative use
  /** Frame borders, outer boundaries */
  frame: "stroke-gray-300 dark:stroke-gray-600",
} as const;

/**
 * Text fill colors for SVG labels.
 * Use ink-equivalent grays for readable labels.
 */
export const visualTextColor = {
  /** Primary labels - equivalent to ink-2 (gray-600) */
  label: "fill-gray-600 dark:fill-gray-300",
  /** Secondary/helper labels - equivalent to ink-3 (gray-500) */
  secondary: "fill-gray-500 dark:fill-gray-400",
} as const;

export const visualOpacity = {
  /** Grid lines - very low to stay clearly secondary */
  grid: 0.25,
  /** Frame/border elements */
  frame: 0.65,
  /** Accent connectors - high for clear visibility */
  accent: 0.7,
  /** Strong accent dots/highlights */
  accentStrong: 0.85,
} as const;
