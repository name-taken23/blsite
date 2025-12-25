# BlackLake Design System

This site is intentionally minimal: calm, enterprise-safe, and low-motion.

## Principles

- Prefer clarity over novelty.
- Use the existing Tailwind token system in `tailwind.config.js`.
- Avoid arbitrary values (e.g. `text-[14px]`, `bg-[#123456]`). If a new token is needed, add it to `tailwind.config.js` first.
- Keep motion minimal. Use standard CSS transitions for hover/focus states; avoid large entrance animations.

## Contrast Ladder

The design system uses semantic tokens for text, lines, and surfaces. These tokens ensure consistent contrast ratios and accessible color usage across light and dark modes.

### Ink Tokens (Text)

Use these for all text content. Defined in CSS (`--ink-1` through `--ink-4`) and mapped to Tailwind (`text-ink-1`, etc.).

| Token      | Light Mode   | Dark Mode    | Use Case                                       |
|------------|--------------|--------------|------------------------------------------------|
| `ink-1`    | gray-900     | gray-50      | **Primary text** – headings, high-impact copy  |
| `ink-2`    | gray-600     | gray-300     | **Body text** – paragraphs, descriptions       |
| `ink-3`    | gray-500     | gray-400     | **Microcopy** – labels, captions, metadata     |
| `ink-4`    | gray-400     | gray-500     | **Disabled/subtle** – placeholders only        |

**Rules:**
- Microcopy (`text-xs` labels that convey structure) must use `ink-3` or stronger.
- Never use `text-gray-400` in light mode for informational text.
- Prefer `ink-2` over `ink-3` when text size is small and content is important.

### Line Tokens (Borders/Strokes)

Use these for all borders and strokes. Defined in CSS (`--line-1`, `--line-2`) and mapped to Tailwind (`border-line-1`, etc.).

| Token      | Light Mode   | Dark Mode    | Use Case                                       |
|------------|--------------|--------------|------------------------------------------------|
| `line-1`   | gray-300     | gray-600     | **Meaningful borders** – cards, inputs, diagrams |
| `line-2`   | gray-200     | gray-700     | **Decorative dividers** – subtle separators    |

**Rules:**
- Input fields, cards, and diagram strokes must use `line-1`.
- Section dividers and rails can use `line-2`.
- Never use `border-gray-200` for meaningful structural borders.

### Surface Tokens (Backgrounds)

Use these for all background colors. Defined in CSS (`--surface-1` through `--surface-tint`) and mapped to Tailwind (`bg-surface-1`, etc.).

| Token          | Light Mode  | Dark Mode   | Use Case                               |
|----------------|-------------|-------------|----------------------------------------|
| `surface-1`    | white       | bg-dark     | **Page background**                    |
| `surface-2`    | white       | bg-panel    | **Cards/elevated elements**            |
| `surface-3`    | gray-50     | gray-900    | **Panels/inset containers**            |
| `surface-tint` | #FAFBFC     | #1E293B     | **Subtle callouts/highlights**         |

**Rules:**
- Never use `bg-white/60` or similar opacity-based backgrounds for primary reading surfaces.
- All surface tokens are **solid colors** (no alpha) to ensure readability over textured backgrounds (e.g., BlueprintGrid).
- Use `surface-3` for inset panels and alternate sections.
- Use `surface-tint` for subtle highlighted regions that need a soft background.

### Migration from Raw Gray Values

When refactoring, replace these patterns:

| Old Pattern              | New Pattern              |
|--------------------------|--------------------------|
| `text-gray-900`          | `text-ink-1`             |
| `text-gray-700`          | `text-ink-2`             |
| `text-gray-600`          | `text-ink-2`             |
| `text-gray-500`          | `text-ink-3`             |
| `text-gray-400`          | `text-ink-4` (disabled only) |
| `border-gray-300`        | `border-line-1`          |
| `border-gray-200`        | `border-line-2`          |
| `bg-white`               | `bg-surface-1` or `bg-surface-2` |
| `bg-gray-50`             | `bg-surface-3`           |
| `bg-white/60`            | `bg-surface-tint`        |

**Dark mode:** The CSS variables automatically switch values in dark mode, so you only need light mode classes in most cases. For explicit dark overrides, use `dark:` prefix with appropriate gray values.

---

## SVG Visual Tokens

Blueprint visuals (SystemMapMotif, ArtifactTileBackground, etc.) use a dedicated token system in `components/visual/visualTokens.ts`.

### 2-Tier Stroke System

| Token               | Class                                        | Use Case                                |
|---------------------|----------------------------------------------|-----------------------------------------|
| `strokeStrong`      | `stroke-gray-400 dark:stroke-gray-500`       | Primary topology, meaningful outlines   |
| `strokeMuted`       | `stroke-gray-200 dark:stroke-gray-700`       | Decorative grids, scaffolding           |
| `strokeFrame`       | `stroke-gray-300 dark:stroke-gray-600`       | Frame borders, outer boundaries         |

### SVG Text Colors

| Token        | Class                                  | Use Case                        |
|--------------|----------------------------------------|---------------------------------|
| `label`      | `fill-gray-600 dark:fill-gray-300`     | Primary labels (≈ ink-2)        |
| `secondary`  | `fill-gray-500 dark:fill-gray-400`     | Helper labels (≈ ink-3)         |

### Opacity Tokens

| Token          | Value | Use Case                                    |
|----------------|-------|---------------------------------------------|
| `grid`         | 0.45  | Grid lines (kept low to avoid noise)        |
| `frame`        | 0.65  | Frame/border elements                       |
| `accent`       | 0.55  | Accent connectors (raised for visibility)   |
| `accentStrong` | 0.75  | Strong accent dots/highlights               |

**Rules:**
- Use `strokeStrong` for meaningful topology (paths, outlines) — no opacity reduction.
- Use `strokeMuted` for purely decorative grids — controlled via `grid` opacity.
- Labels inside SVGs must use `visualTextColor.label` (gray-600+), never gray-500 with extra opacity.
- Accent connectors should be clearly visible without shouting.

---

## Layout

- Primary container: `max-w-7xl mx-auto px-6`.
- Page spacing: `py-16 md:py-20` (or slightly smaller for dense pages).
- Prefer simple `border border-line-2` + `bg-surface-2` sections.

## Typography

- Headings: `font-semibold tracking-tight text-ink-1`.
- Body: `text-ink-2 leading-relaxed`.
- Structural microcopy: `text-sm font-semibold uppercase tracking-normal text-ink-3`.
- Helper text: `text-xs text-ink-3`.

## Color

- Primary accent: `accent.electric` and `accent.electricDark`.
- Avoid introducing new brand colors without updating the token system.

## Components

- Prefer the minimal primitives in `components/ui/` (e.g. `Input`, `TextArea`, `MagneticButton`).
- If a new primitive is required, keep it small and style-token driven.
- All components should use semantic tokens (`ink-*`, `line-*`, `surface-*`) rather than raw gray values.
