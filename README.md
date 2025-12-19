# BlackLake Marketing Site

Marketing site for BlackLake, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Content & Brand

- Content, tone, and component usage guidelines live in `instructions/`.
- When changing copy, prefer concrete, constraint-aware language over hype.

---

## Stack Overview

### Core Framework
- Next.js 15 (App Router, React Server Components)
- TypeScript
- Edge-ready where appropriate

### Styling & Design System
- Tailwind CSS with centralised CSS variables and semantic tokens
- Custom **electric-blue + matte-grey** palette aligned to BlackLake’s brand identity
- Modern typographic system using:
  - **Inter** (body)
  - **DM Sans** or **Satoshi** (headlines)
- Design language emphasising:
  - clarity  
  - depth  
  - restrained motion  
  - precision  

### Animation & Interaction
- Framer Motion with shared variants (`lib/motion.ts`)
- Magnetic / kinetic micro-interactions
- Scroll-linked animation and layered depth motion

### AI & Enhanced Features (Optional)
- AI-generated placeholder blurbs for prototyping (not final content)
- Semantic page search
- Behaviour-adaptive UI
- Animated “AI indicator” component

---

## Advanced Components & Interaction Patterns

### Core UI Components
- **HeroCanvas** — shader-ready WebGL canvas with ambient electric-blue motion
- **MagneticButton** — cursor attraction + spring physics
- **SmartCard** — multi-layer parallax with subtle border shimmer
- **SectionReveal** — scroll-triggered reveal animation
- **AnimatedDivider** — electric sweep underline/divider
- **SpotlightCursor** — lens bloom hover effect
- **FloatingAccentGrid** — ambient grid/particles
- **MorphingUnderlineNav** — dynamic nav underline animation
- **PageTransitionWrapper** — cinematic transitions between routes

### Layout Components
- **PageShell** — wraps pages with ambient depth layers
- **Header** — glass aesthetic, animated nav underline, theme toggle
- **Footer** — minimal, quiet, brand-forward
- **ThemeProvider** — electric blue / grey theming

### Sections
All section content is **placeholder-only** but fully animated and structured.

Includes:
- Hero section
- Feature blocks
- Split layouts
- Case-study placeholder blocks
- Contact form w/ animated validation

---

## Project Structure

```text
app/
  ├─ (pages)/          
  ├─ layout.tsx        
  ├─ globals.css       

components/
  ├─ layout/           
  ├─ sections/         
  ├─ ui/               
  ├─ interactive/      
  └─ animation/        

lib/
  ├─ motion.ts         
  ├─ theme.ts          
  ├─ utils.ts          
  └─ ai.ts             

public/
  ├─ og-image.svg
  ├─ logo/             
  └─ textures/         

tailwind.config.ts

## Running Locally

- Node `>= 20.9.0` (repo uses `.nvmrc` = `20.11.0`)

```bash
nvm install
nvm use
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Linting & Type Safety

```bash
npm run lint
npm run typecheck
```

## Build

```bash
npm run build
```

## Deployment

- Expected env var: `NEXT_PUBLIC_SITE_URL=https://useblacklake.com`

### Contact Form (Resend)

The contact form posts to `POST /api/contact` (Vercel Function) and sends:
- An email to the site owner with submission details
- A confirmation email to the user

Required env vars:
- `RESEND_API_KEY`
- `CONTACT_OWNER_EMAIL` (e.g. `hello@useblacklake.com`)
- `CONTACT_FROM_EMAIL` (must be a verified sender in Resend, e.g. `BlackLake <hello@useblacklake.com>`)

## Branding Notes

- Update the OpenGraph image (`public/og-image.svg`) if needed.

Insert final BlackLake logos

Use electric-blue token consistently and layer the complementary haze gradient around it:

```css
--accent-electric: #007CFF;
--accent-haze: #2A84FF; /* softer diffusion for glow/backdrop elements */
```
Future Enhancements (Optional)
WebGL / Shader Backgrounds
Electric ripple simulation

Noise displacement

Light refraction

60fps GPU-accelerated

Behaviour-Adaptive UI
Motion intensity changes with scroll behaviour

Cursor heatmap for lighting variations

AI-Driven Content
AI case study draft blurbs (placeholder)

Dynamic “services we can help with” suggestions

On-page agent for guided UX

Advanced Motion Sequencing
GSAP scroll timelines

Layered depth animations

Cinematic scene transitions

Multi-Cursor Interaction Layer
Ripple effect

Ambient bloom trail

Magnetic forcefield for hero cards

Philosophy (Design Direction)
“BlackLake is an elite technology firm advancing modernisation through AI, automation, and intelligent engineering.”

The site must reflect:

Precision

Intelligence

Calm depth

Clean interaction

Architectural minimalism

Elite engineering

Content is placeholder — design is final.