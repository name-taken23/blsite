# Black Lake Engineering - Design System
## **Comprehensive Style Guide for All Products**

> **Last Updated**: December 2025  
> **Version**: 1.0  
> **Purpose**: Single source of truth for maintaining brand consistency across all Black Lake products and properties

---

## 📋 **Table of Contents**
1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Motion & Animation](#motion--animation)
7. [Voice & Tone](#voice--tone)
8. [Implementation Guide](#implementation-guide)

---

## 🎯 **Brand Identity**

### **Brand Positioning**
- **What we are**: Boutique engineering studio delivering enterprise-grade solutions
- **What we're not**: Generic agency, offshore dev shop, consulting firm with layers
- **Core promise**: Senior engineers, not salespeople. No layers, no overhead.

### **Design Principles**
1. **Clean & Technical**: Minimal but sophisticated, like well-architected code
2. **Professional Credibility**: Structured, precise, enterprise-ready
3. **Interactive Intelligence**: Subtle animations that feel engineered, not decorative
4. **Scalable by Default**: Mobile-first, performance-optimized, accessible

### **Visual DNA**
- **Primary Element**: Electric blue (`#007CFF`) as signature accent
- **Foundation**: Crisp white backgrounds with structured grids
- **Effects**: Subtle glows, smooth transitions, magnetic interactions
- **Typography**: Modern sans-serif with tight tracking for technical feel

---

## 🎨 **Color System**

### **1. Primary Brand Colors**

#### **Electric Blue (Primary Accent)**
```css
--accent-electric: #007CFF;
--accent-electric-dark: #0066CC;
--accent-electric-light: #4AA6FF;
--accent-glow: rgba(0, 124, 255, 0.3);
```

**Usage Rules**:
- ✅ CTAs, primary buttons, important links
- ✅ Icon accents, hover states, focus rings
- ✅ Gradient backgrounds, glow effects
- ❌ Never use for large text blocks
- ❌ Never use for backgrounds without sufficient contrast

#### **Tailwind Classes**
```
text-accent-electric
bg-accent-electric
border-accent-electric
shadow-glow-md (electric glow)
```

---

### **2. Grayscale Palette**

Use this exact scale for all products:

| Shade | Hex | Usage |
|-------|-----|-------|
| 50 | `#F9FAFB` | Subtle backgrounds, light sections |
| 100 | `#F3F4F6` | Card backgrounds, input backgrounds |
| 200 | `#E5E7EB` | Borders, dividers, disabled states |
| 300 | `#D1D5DB` | Placeholder text, muted elements |
| 400 | `#9CA3AF` | Secondary text, captions |
| 500 | `#6B7280` | Body text (primary) |
| 600 | `#4B5563` | Headings, emphasized text |
| 700 | `#374151` | Dark headings, high contrast |
| 800 | `#1F2937` | Dark section backgrounds |
| 900 | `#111827` | Dark UI, footer backgrounds |
| 950 | `#030712` | Near-black for maximum contrast |

**Text Color Guidelines**:
- **Headlines**: `text-gray-900` or `text-gray-700`
- **Body Copy**: `text-gray-600` or `text-gray-500`
- **Secondary Text**: `text-gray-400`
- **On Dark Backgrounds**: `text-white` with `text-gray-400` for secondary

---

### **3. Semantic Colors**

Only use these for status indicators and alerts:

```css
--color-success: #10B981  /* Green - confirmations, success states */
--color-warning: #F59E0B  /* Amber - warnings, caution */
--color-error: #EF4444    /* Red - errors, critical alerts */
--color-info: #3B82F6     /* Blue - informational messages */
```

**Badge/Tag Examples**:
```html
<!-- Success -->
<span class="px-3 py-1 bg-green-50 border border-green-200 text-green-700 rounded-full">
  Available Q1 2025
</span>

<!-- Metric highlight -->
<span class="px-2.5 py-1 bg-green-50 border border-green-200 text-green-700 rounded-full text-xs">
  ✓ 20x performance improvement
</span>
```

---

### **4. Color Application Patterns**

#### **Light Mode (Default)**
```css
/* Background hierarchy */
bg-white              /* Primary background */
bg-gray-50            /* Subtle sections */
bg-gray-100           /* Cards, panels */

/* Borders */
border-gray-100       /* Subtle dividers */
border-gray-200       /* Standard borders */
border-accent-electric/20  /* Accent borders */

/* Gradients */
bg-gradient-to-b from-white via-gray-50/30 to-white
bg-gradient-to-r from-accent-electric via-blue-500 to-accent-electric
```

#### **Dark Sections**
```css
bg-gray-900 text-white
text-gray-400          /* Secondary text on dark */
border-gray-700        /* Borders on dark */
bg-gray-800            /* Cards on dark */
```

---

## ✍️ **Typography**

### **1. Font Stack**

#### **Primary Fonts**
```css
/* Body & UI Text */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Headlines & Display */
font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Installation (Next.js)**:
```tsx
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
```

**Installation (HTML/CDN)**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

### **2. Type Scale (Responsive)**

Use these exact responsive patterns:

#### **Headlines**
```css
/* H1 - Hero Headlines */
text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight
/* 36px → 60px → 72px */

/* H2 - Section Headlines */
text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight
/* 30px → 36px → 48px */

/* H3 - Subsection Headlines */
text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight
/* 24px → 30px → 36px */

/* H4 - Component Headlines */
text-xl md:text-2xl lg:text-3xl font-semibold
/* 20px → 24px → 30px */

/* H5 - Card Headlines */
text-lg md:text-xl lg:text-2xl font-semibold
/* 18px → 20px → 24px */
```

#### **Body Text**
```css
/* Large Body */
text-lg md:text-xl leading-relaxed
/* 18px → 20px */

/* Standard Body */
text-base md:text-lg leading-relaxed
/* 16px → 18px */

/* Small Body */
text-sm md:text-base leading-relaxed
/* 14px → 16px */
```

#### **UI Elements**
```css
/* Labels / Eyebrows */
text-sm font-semibold uppercase tracking-[0.3em]
/* 14px, extra wide spacing */

/* Captions / Meta */
text-xs md:text-sm text-gray-500
/* 12px → 14px */

/* Buttons */
text-base font-semibold
/* 16px */
```

---

### **3. Font Weights**

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Rarely used, special cases only |
| Regular | 400 | Body text, paragraphs |
| Medium | 500 | Emphasized text, labels |
| Semibold | 600 | Buttons, subheadings |
| Bold | 700 | Headlines, strong emphasis |

**Class Names**: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`

---

### **4. Letter Spacing**

```css
tracking-tighter    /* -0.05em - Tight headlines */
tracking-tight      /* -0.025em - Standard headlines */
tracking-normal     /* 0em - Body text */
tracking-wide       /* 0.025em - Slight emphasis */
tracking-wider      /* 0.05em - Labels */
tracking-widest     /* 0.1em - Small caps */
tracking-[0.3em]    /* Custom - Eyebrow text */
```

**Rule**: Headlines always use `tracking-tight`, labels use `tracking-[0.3em]`

---

### **5. Line Heights**

```css
leading-none        /* 1 - Tight display text */
leading-tight       /* 1.25 - Headlines */
leading-snug        /* 1.375 - Subheadings */
leading-normal      /* 1.5 - Standard body */
leading-relaxed     /* 1.75 - Large body text */
leading-loose       /* 2 - Airy layouts */
```

**Default Rule**: All body text uses `leading-relaxed` (1.75) for readability

---

### **6. Typography Patterns**

#### **Eyebrow Text (Section Labels)**
```html
<p class="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4">
  Core Services
</p>
```

#### **Hero Headline with Gradient**
```html
<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
  Enterprise-Grade Engineering
  <span class="block mt-3 bg-gradient-to-r from-accent-electric via-blue-500 to-accent-electric bg-clip-text text-transparent bg-[length:200%_100%]">
    Without the Enterprise Overhead
  </span>
</h1>
```

#### **Body with Lead Paragraph**
```html
<p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
  Senior-level expertise in cloud architecture, applied AI, and full-stack development.
</p>
```

---

## 📐 **Spacing & Layout**

### **1. Spacing Scale**

Use this exact 8px-based scale:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 8px | Tight spacing, icon gaps |
| sm | 12px | Small component padding |
| md | 16px | Standard spacing |
| lg | 24px | Section element gaps |
| xl | 32px | Large component spacing |
| 2xl | 48px | Section breaks |
| 3xl | 64px | Major section dividers |
| 4xl | 96px | Hero spacing |
| 5xl | 128px | Extra large sections |

**Tailwind Classes**: `gap-2` (8px), `gap-4` (16px), `gap-6` (24px), `gap-8` (32px)

---

### **2. Section Padding (Vertical)**

Standard pattern for all sections:

```css
/* Small sections */
py-12 md:py-16    /* 48px → 64px */

/* Standard sections */
py-16 md:py-20    /* 64px → 80px */

/* Medium sections */
py-20 md:py-28    /* 80px → 112px */

/* Large sections */
py-24 md:py-32    /* 96px → 128px */

/* Hero sections */
py-28 md:py-40    /* 112px → 160px */
```

---

### **3. Container System**

```css
/* Standard container */
container mx-auto px-6

/* With max-width constraints */
max-w-7xl mx-auto px-6        /* 1280px - Full width */
max-w-6xl mx-auto px-6        /* 1152px - Content */
max-w-4xl mx-auto px-6        /* 896px - Narrow */
max-w-3xl mx-auto px-6        /* 768px - Reading width */
max-w-2xl mx-auto px-6        /* 672px - Tight content */
```

**Rule**: Use `px-6` consistently across all breakpoints for horizontal padding

---

### **4. Grid Systems**

#### **2-Column Layout**
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- Content -->
</div>
```

#### **3-Column Layout**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Content -->
</div>
```

#### **Service Grid (Featured)**
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
  <!-- Larger cards, 2 columns max -->
</div>
```

**Gap Standard**: Use `gap-6` (24px) or `gap-8` (32px) consistently

---

### **5. Border Radius Scale**

| Token | Value | Usage |
|-------|-------|-------|
| rounded-sm | 6px | Small elements |
| rounded | 8px | Buttons, small cards |
| rounded-lg | 12px | Standard cards |
| rounded-xl | 16px | Large cards, sections |
| rounded-2xl | 24px | Hero elements |
| rounded-3xl | 48px | Special features |
| rounded-full | 9999px | Badges, avatars |

**Standard Pattern**: Most cards use `rounded-xl` (16px)

---

## 🧩 **Components**

### **1. Cards**

#### **Standard Card**
```html
<div class="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-card-hover hover:border-accent-electric/20 transition-all duration-300">
  <!-- Content -->
</div>
```

#### **Card with Icon Header**
```html
<div class="bg-white border border-gray-100 rounded-xl p-6 group">
  <!-- Icon -->
  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-electric/10 to-accent-electric/5 flex items-center justify-center mb-6">
    <IconComponent class="w-8 h-8 text-accent-electric" />
  </div>
  
  <!-- Headline -->
  <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-electric transition-colors">
    Card Title
  </h3>
  
  <!-- Body -->
  <p class="text-gray-600 leading-relaxed mb-4">
    Description text goes here.
  </p>
</div>
```

---

### **2. Buttons**

#### **Primary Button**
```html
<button class="px-6 py-4 bg-accent-electric text-white font-semibold rounded-lg shadow-button hover:shadow-electric hover:bg-accent-electric/90 transition-all duration-200 inline-flex items-center gap-2">
  Button Text
  <ArrowRightIcon class="w-4 h-4" />
</button>
```

#### **Secondary Button**
```html
<button class="px-6 py-4 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-accent-electric hover:text-accent-electric transition-colors duration-200">
  Button Text
</button>
```

#### **Text Link Button**
```html
<a href="#" class="group inline-flex items-center gap-2 text-accent-electric font-semibold hover:gap-3 transition-all">
  Learn More
  <ArrowRightIcon class="w-4 h-4" />
</a>
```

---

### **3. Badges & Tags**

#### **Status Badge**
```html
<span class="px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700 flex items-center gap-1.5">
  <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
  Available Q1 2025
</span>
```

#### **Feature Tag**
```html
<span class="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-accent-electric/5 group-hover:border-accent-electric/20 group-hover:text-accent-electric transition-all">
  React & Next.js
</span>
```

#### **Metric Highlight**
```html
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200">
  <CheckCircle2Icon class="w-3 h-3 text-green-600" />
  <span class="text-xs font-medium text-green-700">20x performance improvement</span>
</div>
```

---

### **4. Section Headers**

Standard pattern for all sections:

```html
<div class="text-center mb-16">
  <!-- Eyebrow -->
  <p class="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4">
    Section Label
  </p>
  
  <!-- Headline -->
  <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
    Section Headline
  </h2>
  
  <!-- Divider (optional) -->
  <div class="w-24 h-1 bg-gradient-to-r from-transparent via-accent-electric to-transparent mx-auto mb-6"></div>
  
  <!-- Subheadline -->
  <p class="text-lg text-gray-600 max-w-3xl mx-auto">
    Supporting description text that provides context.
  </p>
</div>
```

---

### **5. Form Elements**

#### **Text Input**
```html
<input 
  type="text" 
  class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-accent-electric focus:ring-2 focus:ring-accent-electric/20 outline-none transition-all"
  placeholder="Your email"
/>
```

#### **Textarea**
```html
<textarea 
  rows="6"
  class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-accent-electric focus:ring-2 focus:ring-accent-electric/20 outline-none transition-all resize-none"
  placeholder="Your message"
></textarea>
```

---

## ⚡ **Motion & Animation**

### **1. Timing Functions**

```css
/* Durations */
duration-100    /* Instant - button feedback */
duration-200    /* Fast - hover states */
duration-300    /* Normal - standard transitions */
duration-500    /* Slow - entrances/exits */
duration-800    /* Slower - page transitions */

/* Easing */
ease-linear     /* Constant speed */
ease-in         /* Accelerate */
ease-out        /* Decelerate (preferred) */
ease-in-out     /* Smooth both ends */
```

**Default Pattern**: `transition-all duration-300 ease-out`

---

### **2. Hover Transforms**

```css
/* Card lift */
hover:translate-y-[-4px] hover:shadow-card-hover

/* Scale */
hover:scale-105

/* Glow effect */
hover:shadow-glow-md

/* Gap increase (for links with icons) */
hover:gap-3
```

---

### **3. Framer Motion Variants**

#### **Fade In**
```tsx
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
```

#### **Stagger Container**
```tsx
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

#### **Scale In (Spring)**
```tsx
const scaleInSpring = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    type: "spring", 
    stiffness: 300, 
    damping: 20 
  }
};
```

---

### **4. Animation Guidelines**

✅ **Do**:
- Use subtle, purposeful animations
- Keep durations under 500ms for UI interactions
- Use spring physics for natural feel
- Animate transforms (translate, scale) not layout properties

❌ **Don't**:
- Animate on scroll excessively
- Use animations longer than 800ms
- Animate height/width directly
- Over-animate - less is more

---

## 🗣️ **Voice & Tone**

### **Brand Voice**
- **Professional** but not corporate
- **Technical** but not jargon-heavy
- **Confident** but not arrogant
- **Direct** but not cold

### **Writing Patterns**

#### **Headlines**
- Use action-oriented language
- Keep under 10 words when possible
- Avoid buzzwords and marketing speak
- Example: "Enterprise-Grade Engineering Without the Enterprise Overhead"

#### **Body Copy**
- Write in second person ("we", "you")
- Use concrete metrics and results
- Avoid vague claims ("best", "leading", "cutting-edge")
- Example: "We build production systems that scale—from data pipelines processing millions of records to real-time 5G infrastructure."

#### **CTAs**
- Be specific about action
- Avoid generic "Learn More"
- Example: "Discuss Your Project", "View Case Studies", "Schedule a Call"

---

## 🛠️ **Implementation Guide**

### **1. Quick Start Checklist**

For any new product:

- [ ] Install Inter and DM Sans fonts
- [ ] Set up color variables (Electric Blue #007CFF + grayscale)
- [ ] Configure Tailwind with spacing scale
- [ ] Create base components (Card, Button, Badge)
- [ ] Set up section padding utilities
- [ ] Configure animation timing functions
- [ ] Test responsive breakpoints (640, 768, 1024, 1280px)

---

### **2. Tailwind Config Template**

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: {
          electric: "#007CFF",
          electricDark: "#0066CC",
          electricLight: "#4AA6FF",
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
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        'glow-sm': "0 0 10px rgba(0, 124, 255, 0.2)",
        'glow-md': "0 0 20px rgba(0, 124, 255, 0.3)",
        'glow-lg': "0 0 30px rgba(0, 124, 255, 0.4)",
        'card': "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 10px rgba(0, 124, 255, 0.1)",
        'card-hover': "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 0 30px rgba(0, 124, 255, 0.2)",
        'button': "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 15px rgba(0, 124, 255, 0.3)",
        'electric': "0 0 40px rgba(0, 124, 255, 0.45)",
      },
    },
  },
};
```

---

### **3. CSS Variables Template**

```css
:root {
  /* Colors */
  --accent-electric: #007CFF;
  --accent-electric-dark: #0066CC;
  --accent-electric-light: #4AA6FF;
  
  /* Fonts */
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-display: 'DM Sans', -apple-system, sans-serif;
  
  /* Timing */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* Spacing */
  --section-padding-sm: 3rem;
  --section-padding-md: 5rem;
  --section-padding-lg: 8rem;
}
```

---

### **4. Component Library Starter**

Copy these exact components to any new project:

**Files to copy**:
- `/components/ui/SmartCard.tsx` - Base card component
- `/components/ui/Button.tsx` - Button variants
- `/components/ui/Badge.tsx` - Status badges
- `/components/ui/TechDivider.tsx` - Section dividers
- `/lib/motion.ts` - Framer Motion variants
- `/lib/tokens.ts` - Design tokens
- `/lib/utils.ts` - Utility functions (cn helper)

---

### **5. Common Patterns Reference**

#### **Hero Section Template**
```html
<section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-5xl mx-auto text-center">
      <!-- Eyebrow -->
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-6">
        Product Category
      </p>
      
      <!-- Headline -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
        Your Main Value Proposition
      </h1>
      
      <!-- Subheadline -->
      <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Supporting description that explains what you do.
      </p>
      
      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="px-6 py-4 bg-accent-electric text-white font-semibold rounded-lg">
          Primary CTA
        </button>
        <a href="#" class="px-6 py-4 text-gray-700 font-semibold">
          Secondary CTA
        </a>
      </div>
    </div>
  </div>
</section>
```

#### **Content Section Template**
```html
<section class="py-20 md:py-28 bg-white">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4">
        Section Label
      </p>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
        Section Headline
      </h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Section description
      </p>
    </div>
    
    <!-- Grid Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Cards go here -->
    </div>
  </div>
</section>
```

---

## 📱 **Responsive Breakpoints**

Use these exact breakpoints across all products:

| Name | Size | Usage |
|------|------|-------|
| Mobile | < 640px | Default styles |
| sm | ≥ 640px | Large phones |
| md | ≥ 768px | Tablets |
| lg | ≥ 1024px | Laptops |
| xl | ≥ 1280px | Desktops |
| 2xl | ≥ 1536px | Large screens |

**Mobile-First Pattern**: Always write base styles for mobile, then add `md:` and `lg:` modifiers

---

## ✅ **Quality Checklist**

Before launching any product, verify:

### **Visual Consistency**
- [ ] Electric blue (#007CFF) used for all accent elements
- [ ] Grayscale palette matches exactly (50-950)
- [ ] Inter font for body, DM Sans for headlines
- [ ] All headlines use `tracking-tight`
- [ ] Body text uses `leading-relaxed`
- [ ] Section padding follows standard scale

### **Component Standards**
- [ ] Cards use `rounded-xl` with `border-gray-100`
- [ ] Buttons have proper hover states
- [ ] All CTAs are descriptive (not "Learn More")
- [ ] Icons are consistent size (typically w-5 h-5)
- [ ] Badges use semantic colors appropriately

### **Interaction & Motion**
- [ ] Hover transitions are 200-300ms
- [ ] Transform animations use translate/scale (not width/height)
- [ ] No animations longer than 800ms
- [ ] Smooth scroll behavior enabled
- [ ] Focus states visible for accessibility

### **Responsive Design**
- [ ] Mobile layout tested at 375px width
- [ ] Tablet layout tested at 768px
- [ ] Desktop layout tested at 1280px
- [ ] Text scales appropriately on all screens
- [ ] Spacing adapts using md: and lg: modifiers

### **Content & Voice**
- [ ] Headlines are under 10 words
- [ ] Body copy uses "we/you" second person
- [ ] No buzzwords or vague marketing speak
- [ ] Metrics are specific and real
- [ ] CTAs are action-oriented

---

## 🎯 **Brand Consistency Rules**

### **Always**
- Use electric blue (#007CFF) as the primary accent
- Keep layouts clean with generous white space
- Use tight letter spacing (`tracking-tight`) on headlines
- Write in professional but approachable tone
- Include real metrics and specific results
- Make CTAs specific and actionable

### **Never**
- Use other brand colors (blue variations must match exactly)
- Deviate from the grayscale palette
- Use fonts other than Inter/DM Sans
- Write vague claims ("best-in-class", "industry-leading")
- Use animations longer than 800ms
- Clutter layouts with unnecessary elements

---

## 📦 **Assets to Carry Forward**

For every new product, export/copy these:

1. **Tailwind Config** - Complete with electric blue and shadows
2. **Font Files/Variables** - Inter and DM Sans setup
3. **Component Library** - Card, Button, Badge, Input components
4. **Motion Library** - Framer Motion variants (fadeIn, stagger, etc.)
5. **Design Tokens** - `/lib/tokens.ts` file
6. **Utility Classes** - Custom CSS in `globals.css`
7. **This Document** - Single source of truth reference

---

## 🔄 **Version History**

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2025 | Initial design system documentation |

---

## 📞 **Questions or Updates?**

This is a living document. Update it when you:
- Add new component patterns
- Refine color usage
- Discover better patterns
- Launch new products with learnings

Keep one canonical version and reference it for all Black Lake properties.

---

**© 2025 Black Lake Engineering - Internal Design System Guide**
