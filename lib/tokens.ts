/**
 * Design System Tokens
 * Central source of truth for all design values
 */

// ============================================
// SPACING SYSTEM
// ============================================
export const spacing = {
  // Component spacing
  xs: "0.5rem",    // 8px
  sm: "0.75rem",   // 12px
  md: "1rem",      // 16px
  lg: "1.5rem",    // 24px
  xl: "2rem",      // 32px
  "2xl": "3rem",   // 48px
  "3xl": "4rem",   // 64px
  "4xl": "6rem",   // 96px
  "5xl": "8rem",   // 128px

  // Section spacing
  section: {
    xs: "3rem",    // 48px
    sm: "4rem",    // 64px
    md: "5rem",    // 80px
    lg: "6rem",    // 96px
    xl: "8rem",    // 128px
  },
} as const;

// ============================================
// TYPOGRAPHY SYSTEM
// ============================================
export const typography = {
  fontFamily: {
    sans: 'var(--font-inter)',
    display: 'var(--font-dm-sans)',
  },
  
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],      // 12px
    sm: ["0.875rem", { lineHeight: "1.25rem" }],  // 14px
    base: ["1rem", { lineHeight: "1.5rem" }],     // 16px
    lg: ["1.125rem", { lineHeight: "1.75rem" }],  // 18px
    xl: ["1.25rem", { lineHeight: "1.75rem" }],   // 20px
    "2xl": ["1.5rem", { lineHeight: "2rem" }],    // 24px
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],   // 36px
    "5xl": ["3rem", { lineHeight: "1" }],           // 48px
    "6xl": ["3.75rem", { lineHeight: "1" }],        // 60px
    "7xl": ["4.5rem", { lineHeight: "1" }],         // 72px
  },

  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
    superwide: "0.2em",
    ultrawide: "0.4em",
  },
} as const;

// ============================================
// COLOR SYSTEM
// ============================================
export const colors = {
  // Brand colors
  accent: {
    electric: "#007CFF",
    electricDark: "#0066CC",
    electricLight: "#4AA6FF",
    glow: "rgba(0, 124, 255, 0.3)",
  },

  // Grayscale
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    950: "#030712",
  },

  // Semantic colors
  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
} as const;

// ============================================
// SHADOW SYSTEM
// ============================================
export const shadows = {
  // Standard shadows
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",

  // Electric glow shadows
  glow: {
    sm: "0 0 10px rgba(0, 124, 255, 0.2)",
    md: "0 0 20px rgba(0, 124, 255, 0.3)",
    lg: "0 0 30px rgba(0, 124, 255, 0.4)",
    xl: "0 0 40px rgba(0, 124, 255, 0.5)",
  },

  // Compound shadows (shadow + glow)
  compound: {
    card: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 10px rgba(0, 124, 255, 0.1)",
    cardHover: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 0 30px rgba(0, 124, 255, 0.2)",
    button: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 15px rgba(0, 124, 255, 0.3)",
  },
} as const;

// ============================================
// BORDER RADIUS SYSTEM
// ============================================
export const radius = {
  none: "0",
  sm: "0.375rem",   // 6px
  base: "0.5rem",   // 8px
  md: "0.75rem",    // 12px
  lg: "1rem",       // 16px
  xl: "1.5rem",     // 24px
  "2xl": "2rem",    // 32px
  full: "9999px",
} as const;

// ============================================
// ANIMATION SYSTEM
// ============================================
export const animation = {
  duration: {
    instant: "100ms",
    fast: "200ms",
    normal: "300ms",
    slow: "500ms",
    slower: "800ms",
    slowest: "1000ms",
  },

  easing: {
    // Standard easings
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    
    // Custom premium easings
    smooth: "cubic-bezier(0.22, 0.61, 0.36, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  // Spring configurations
  spring: {
    gentle: { type: "spring" as const, stiffness: 100, damping: 15 },
    bouncy: { type: "spring" as const, stiffness: 300, damping: 20 },
    snappy: { type: "spring" as const, stiffness: 400, damping: 25 },
  },
} as const;

// ============================================
// BREAKPOINT SYSTEM
// ============================================
export const breakpoints = {
  xs: "475px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================
// GRID SYSTEM
// ============================================
export const grid = {
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
  },
  gap: {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },
  columns: {
    mobile: 4,
    tablet: 8,
    desktop: 12,
  },
} as const;

// ============================================
// Z-INDEX SYSTEM
// ============================================
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  notification: 1700,
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get section padding classes based on size
 */
export function getSectionPadding(size: keyof typeof spacing.section = "md"): string {
  const paddingMap = {
    xs: "py-12 md:py-16",
    sm: "py-16 md:py-20",
    md: "py-20 md:py-28",
    lg: "py-24 md:py-32",
    xl: "py-28 md:py-40",
  };
  return paddingMap[size];
}

/**
 * Get container classes with optional max width
 */
export function getContainer(maxWidth?: keyof typeof grid.container): string {
  const base = "container mx-auto px-6";
  if (maxWidth) {
    return `${base} max-w-${maxWidth}`;
  }
  return base;
}

/**
 * Get heading classes based on level
 */
export function getHeadingClasses(level: 1 | 2 | 3 | 4 | 5 | 6): string {
  const headingMap = {
    1: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
    2: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
    3: "text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight",
    4: "text-xl md:text-2xl lg:text-3xl font-semibold",
    5: "text-lg md:text-xl lg:text-2xl font-semibold",
    6: "text-base md:text-lg lg:text-xl font-semibold",
  };
  return headingMap[level];
}

/**
 * Get body text classes
 */
export function getBodyClasses(size: "sm" | "base" | "lg" = "base"): string {
  const sizeMap = {
    sm: "text-sm md:text-base",
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
  };
  return `${sizeMap[size]} leading-relaxed`;
}
