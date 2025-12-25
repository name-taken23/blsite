/**
 * BlackLake Design System - Tailwind Configuration
 * 
 * This configuration enforces the BlackLake design system tokens.
 * DO NOT use arbitrary values (e.g., `text-[14px]`, `bg-[#123456]`).
 * If you need a new token, add it here first.
 * 
 * @see /BLACKLAKE-DESIGN-SYSTEM.md for full documentation
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================
      // COLOR SYSTEM
      // ============================================
      // Primary brand color: Electric Blue (#007CFF)
      // Use for: CTAs, links, accents, hover states
      // DO NOT modify these values without updating design system docs
      colors: {
        accent: {
          electric: "#007CFF",
          electricDark: "#0066CC",
          electricLight: "#4AA6FF",
          glow: "rgba(0, 124, 255, 0.3)",
        },
        bg: {
          white: "#FFFFFF",
          light: "#F8F9FA",
          dark: "#0C0C0D",
          panel: "#1A1A1B",
        },
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
        semantic: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
        },
      },
      // ============================================
      // BORDER RADIUS SCALE
      // ============================================
      // Use: rounded-lg for cards, rounded-xl for large elements
      borderRadius: {
        xs: "0.25rem",   // 4px - Small pills
        sm: "0.375rem",  // 6px - Buttons (small)
        DEFAULT: "0.5rem", // 8px - Default
        md: "0.75rem",   // 12px - Cards
        lg: "1rem",      // 16px - Large cards (MOST COMMON)
        xl: "1.5rem",    // 24px - Feature cards
        "2xl": "2rem",   // 32px - Hero elements
        "3xl": "3rem",   // 48px - Special features
      },
      // ============================================
      // SHADOW & GLOW SYSTEM
      // ============================================
      // Use glow-* for electric blue glows, card/button for standard elevation
      boxShadow: {
        'glow-sm': "0 0 10px rgba(0, 124, 255, 0.2)",
        'glow-md': "0 0 20px rgba(0, 124, 255, 0.3)",
        'glow-lg': "0 0 30px rgba(0, 124, 255, 0.4)",
        'glow-xl': "0 0 40px rgba(0, 124, 255, 0.5)",
        'card': "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 10px rgba(0, 124, 255, 0.1)",
        'card-hover': "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 0 30px rgba(0, 124, 255, 0.2)",
        'button': "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 15px rgba(0, 124, 255, 0.3)",
        ambient: "0 0 40px rgba(0,0,0,0.08)",
        electric: "0 0 40px rgba(0, 124, 255, 0.45)",
      },
      // ============================================
      // TRANSITION TIMING
      // ============================================
      // Use: duration-fast for hover, duration-normal for entrances
      transitionDuration: {
        instant: "100ms",  // Button feedback
        fast: "200ms",     // Hover states (MOST COMMON)
        normal: "300ms",   // Standard transitions (MOST COMMON)
        slow: "500ms",     // Content reveals
        slower: "800ms",   // Page transitions
        standard: "400ms", // Alternative
        spring: "600ms",   // Spring animations
        page: "800ms",     // Full page (MAX - never exceed)
      },
      // ============================================
      // CONTAINER & MAX-WIDTH SYSTEM
      // ============================================
      maxWidth: {
        site: "1440px",
        content: "1280px",
        narrow: "768px",
        reading: "65ch",
      },
      // ============================================
      // SPACING EXTENSIONS
      // ============================================
      // Base scale: 4, 8, 12, 16, 24, 32, 48, 64px
      // Use these for special cases only
      spacing: {
        18: "4.5rem",  // 72px
        22: "5.5rem",  // 88px
        88: "22rem",   // 352px
        96: "24rem",   // 384px
        128: "32rem",  // 512px
      },
      // ============================================
      // ANIMATION SYSTEM
      // ============================================
      // Prefer minimal motion; keep effects subtle and optional
      animation: {
        "gradient-shift": "gradient-shift 3s ease infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
    },
  },
  plugins: [],
};