"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition duration-200 hover:border-accent-electric hover:text-accent-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric dark:border-gray-700 dark:bg-bg-panel dark:text-gray-100"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunMedium className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
