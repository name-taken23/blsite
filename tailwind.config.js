/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Enhanced color system
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
      // Enhanced border radius
      borderRadius: {
        xs: "0.25rem",   // 4px
        sm: "0.375rem",  // 6px
        DEFAULT: "0.5rem", // 8px
        md: "0.75rem",   // 12px
        lg: "1rem",      // 16px
        xl: "1.5rem",    // 24px
        "2xl": "2rem",   // 32px
        "3xl": "3rem",   // 48px
      },
      // Enhanced shadow system
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
      // Enhanced transitions
      transitionDuration: {
        instant: "100ms",
        fast: "200ms",
        normal: "300ms",
        slow: "500ms",
        slower: "800ms",
        standard: "400ms",
        spring: "600ms",
        page: "800ms",
      },
      // Max width system
      maxWidth: {
        site: "1440px",
        content: "1280px",
        narrow: "768px",
        reading: "65ch",
      },
      // Enhanced spacing
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        88: "22rem",
        96: "24rem",
        128: "32rem",
      },
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