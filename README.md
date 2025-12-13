# BlackLake Marketing Site

High-end, precision-engineered marketing site for BlackLake — built to showcase our philosophy:

**Elite software. Intelligent systems. Absolute craftsmanship.**

The site combines Next.js 15, Tailwind CSS, and Framer Motion with advanced UI/UX patterns, intelligent animations, and a curated design system built for clarity, speed, and control.

This project serves as the foundational marketing layer for the BlackLake brand — modern, minimal, fast, and engineered with intention.

---

## IMPORTANT — CONTENT GUIDANCE (FOR AI + DEVELOPERS)

**❗ All text, paragraphs, headings, and descriptive content in the UI should be placeholder-only.**  
BlackLake's actual marketing copy, messaging, and brand narrative will be added later.

The focus at this stage is exclusively on:

- **Design quality and consistency**
- **Elite UX/UI interaction patterns**
- **Brand alignment with BlackLake’s identity**
- **Motion design, depth, clarity, and craftsmanship**
- **Structure and component architecture**
- **Layout, animation, and user flow**

Use placeholder text such as:

- `"BlackLake Headline Placeholder"`
- `"Subheading placeholder — refined later."`
- `"Short description Lorem ipsum placeholder."`
- `"Call to Action"`
- `"Feature heading placeholder"`  
- `"Feature description placeholder"`

Absolutely **no real marketing copy** should be created or inserted.

This keeps the build:
- brand-agnostic  
- flexible  
- modular  
- ready for final copywriting later  

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
- Optional GSAP ScrollTrigger integration (off by default)

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
  ├─ og-image.png      
  ├─ logo/             
  └─ textures/         

tailwind.config.ts
Running Locally
Node ≥ 20.9.0 (repo uses .nvmrc = 20.11.0)

bash
Copy code
nvm install
nvm use
npm install
npm run dev
Then visit:

arduino
Copy code
http://localhost:3000
Linting & Type Safety
bash
Copy code
npm run lint
npm run typecheck
Strict rules enforced:

Strict TS

ESLint modern React rules

Prettier

No unused components

Build
bash
Copy code
npm run build
Deployment (Vercel)
Vercel Next.js adapter

Static optimisations

Edge runtime for light server routes

Required env var:

ini
Copy code
NEXT_PUBLIC_SITE_URL=https://useblacklake.com
Branding Notes
Replace OG image (public/og-image.png)

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