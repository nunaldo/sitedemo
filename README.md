# Experimental Urban Infrastructure

An artistic, experimental website for a technology holding operating experimental urban environmental infrastructure.

## Design Philosophy

**Art × Engineering. Soft brutalism. Golf le Fleur aesthetics.**

This site embodies:
- Artistic expression through engineering constraint
- Soft pastel palette inspired by Golf le Fleur
- Experimental typography meets infrastructural thinking
- Bold gestures with gentle colors

**Color Philosophy:**
- Mint green (#7bed9f) - primary accent
- Soft pink (#ff9ff3) - secondary accent  
- Peachy yellow (#feca57) - tertiary accent
- Cream base (#f5f3ed) - warm background
- Soft grays for text and borders

**Visual Language:**
- Heavy typography with soft color shadows
- Rounded corners on modules
- Layered shadow effects in pastel tones
- Experimental animations with artistic intent

---

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **GSAP 3.12** with ScrollTrigger
- **CSS Modules** for scoped styling
- Minimal dependencies for maximum control

---

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main page composition
│   └── globals.css        # Global styles, variables, typography
│
├── components/
│   ├── Hero.js            # Hero section with animated grid
│   ├── System.js          # Modular system architecture cards
│   ├── NotATree.js        # Installation showcase
│   ├── Methodology.js     # Convergence principles with connecting lines
│   ├── Roadmap.js         # Timeline with scroll-driven reveals
│   ├── Contact.js         # Minimal contact section
│   └── SmoothScroll.js    # ScrollTrigger initialization wrapper
│
├── package.json
├── next.config.js
└── README.md
```

---

## Component Architecture

### 1. Hero
**Purpose:** Establish tone immediately  
**Animations:**
- Staggered grid fade-in (random distribution)
- 3D title transform with perspective
- Subtitle word stagger
- Continuous grid pulse (infinite sine wave)

### 2. System
**Purpose:** Explain modular architecture  
**Animations:**
- Scroll-triggered title reveal
- Card assembly with 3D rotation
- Top border scale-in
- Connector line draws between cards

### 3. Not A Tree
**Purpose:** Feature installation without artistic interpretation  
**Animations:**
- Image parallax on scroll
- Image scale + opacity reveal
- Detail block stagger
- Accent line scale from left

### 4. Methodology
**Purpose:** Show convergence of technical principles  
**Animations:**
- Block 3D reveal with Y-axis rotation
- SVG path drawing (stroke-dashoffset)
- Node pulse with scale animation
- Synchronized reveals create assembly feeling

### 5. Roadmap
**Purpose:** Show evolution without hype  
**Animations:**
- Progressive timeline line reveal
- Alternating phase entry (left/right)
- Marker scale with back-easing
- Active phase continuous pulse

### 6. Contact
**Purpose:** Direct, no-fluff contact  
**Animations:**
- Grid stagger
- Content fade-up
- Email hover state with fill transition

---

## Visual System

### Color Palette
```css
--color-bg: #f5f3ed           /* Warm cream base */
--color-bg-elevated: #ffffff  /* Pure white surfaces */
--color-text: #2d3436         /* Dark gray text */
--color-text-muted: #636e72   /* Medium gray */
--color-accent: #7bed9f       /* Mint green */
--color-accent-2: #ff9ff3     /* Soft pink */
--color-accent-3: #feca57     /* Peachy yellow */
--color-grid: #dfe6e9         /* Light gray grid */
--color-border: #b2bec3       /* Soft borders */
```

### Typography
- Heavy display weights (900) for titles
- ALL CAPS for impact
- Soft layered shadows in pastel tones
- Rounded corners on interactive elements
- Tight line-height for density

### Spacing
- 8px base unit
- Generous section padding
- Grid-based layouts
- Soft, rounded module corners

---

## Animation Principles

### Scroll-Driven
All major reveals tied to ScrollTrigger:
- `scrub: 1-2` for smooth parallax feel
- `start/end` tuned for natural reveal zones
- No jumpy animations

### Performance
- `transform` and `opacity` only (GPU accelerated)
- Minimal DOM manipulation
- Clean up with `gsap.context()` on unmount
- ScrollTrigger refresh on mount

### Reduced Motion
Accessibility built-in:
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable animations */
}
```

---

## Running the Project

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
npm start
```

---

## Customization Guide

### Changing Accent Color
Edit `app/globals.css`:
```css
--color-accent: #d4a574; /* Muted amber alternative */
```

### Adding Sections
1. Create component in `/components`
2. Import in `app/page.js`
3. Follow existing animation patterns
4. Use ScrollTrigger for scroll reveals

### Typography
Replace font in `app/globals.css`:
```css
--font-primary: 'Your Font', -apple-system, sans-serif;
```

### Grid Density
Adjust grid columns in Hero/Contact:
```javascript
{Array.from({ length: 32 }).map((_, i) => ( /* More lines */
```

---

## Copy Tone
Art × engineering language
- Convergence of disciplines
- Artistic expression through constraint
- Experimental but functional

**DON'T:**
- Pure tech jargon without artistic context
- Corporate minimalism
- Overly serious infrastructure speak

**Examples:**
✅ "Art meets engineering in public space."  
✅ "Artistic expression through engineering constraint."  
❌ "Optimizing urban infrastructure performance."  
❌ "Enterprise-grade environmental solutions."

---

## Design References

**Aesthetic alignment:**
- Golf le Fleur color palettes
- Soft brutalism
- Artistic infrastructure
- Experimental design studios
- Contemporary art galleries
- Pastel punk aesthetics

**NOT aligned with:**
- Dark corporate tech
- Harsh neon cyberpunk
- Pure minimalism
- Traditional engineering doc
- Gradient-heavy SaaS
- Illustrated landing pages

---

## Notes

- Each section is self-contained
- Animations are intentional, never decorative
- Component structure is scalable
- CSS modules prevent style conflicts
- GSAP context cleaning prevents memory leaks

Built for clarity, precision, and operational presence.
