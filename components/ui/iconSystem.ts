/**
 * Icon System
 * Central source of truth for icon sizing across the design system.
 * Enforces coherent icon sizes and eliminates ad-hoc sizing.
 */

export const ICON_SIZES = {
  /** 16px - for inline icons, chips, badges, and compact contexts */
  sm: "h-4 w-4",
  /** 20px - for emphasis icons in feature blocks, cards, and prominent UI */
  md: "h-5 w-5",
} as const;

export type IconSize = keyof typeof ICON_SIZES;

/**
 * Get the Tailwind class string for an icon size.
 */
export function getIconSizeClass(size: IconSize): string {
  return ICON_SIZES[size];
}
