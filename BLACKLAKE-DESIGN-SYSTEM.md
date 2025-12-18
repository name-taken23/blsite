# BlackLake Design System

This site is intentionally minimal: calm, enterprise-safe, and low-motion.

## Principles

- Prefer clarity over novelty.
- Use the existing Tailwind token system in `tailwind.config.js`.
- Avoid arbitrary values (e.g. `text-[14px]`, `bg-[#123456]`). If a new token is needed, add it to `tailwind.config.js` first.
- Keep motion minimal. Use standard CSS transitions for hover/focus states; avoid large entrance animations.

## Layout

- Primary container: `max-w-7xl mx-auto px-6`.
- Page spacing: `py-16 md:py-20` (or slightly smaller for dense pages).
- Prefer simple `border border-gray-200` + `bg-white` / `bg-gray-50` sections.

## Typography

- Headings: `font-semibold tracking-tight text-gray-900`.
- Body: `text-gray-600 leading-relaxed`.
- Eyebrow labels: `text-xs font-semibold tracking-wide uppercase`.

## Color

- Primary accent: `accent.electric` and `accent.electricDark`.
- Avoid introducing new brand colors without updating the token system.

## Components

- Prefer the minimal primitives in `components/ui/` (e.g. `Input`, `TextArea`, `MagneticButton`).
- If a new primitive is required, keep it small and style-token driven.
