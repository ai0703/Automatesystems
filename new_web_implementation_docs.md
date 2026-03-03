# Automate Systems — Cinematic Landing Page

Build a premium, cinematic landing page for **Automate Systems / AI Swarm** following the design system in [GEMINI.md](file:///c:/Users/USER/Desktop/Codebase/global_lux/GEMINI.md).

---

## GEMINI.md Answers (Derived from Brand Research)

| Question | Answer |
|----------|--------|
| **Brand name + one-line purpose** | Automate Systems — AI automation infrastructure that eliminates ops busywork behind sales + marketing teams. |
| **Aesthetic direction** | **Preset B — "Midnight Luxe"** (Dark Editorial). A private members' club meets a high-end watchmaker's atelier. Best fit for the premium operator positioning. |
| **3 key value propositions** | 1) Lead Lifecycle Automation — every lead captured, enriched, routed, and followed up automatically. 2) Signal Engine — detect job changes and new hires, push accounts into outreach at the right time. 3) CRM Hygiene Infrastructure — deduplication, normalization, lifecycle rules that keep the system trustworthy. |
| **Primary CTA** | "Get Your Revenue Leak Audit" |

## Design Tokens (Preset B — Midnight Luxe)

```
Palette:
  Primary:    #0D0D12  (Obsidian)
  Accent:     #C9A84C  (Champagne)
  Background: #FAF8F5  (Ivory)
  Text/Dark:  #2A2A35  (Slate)

Typography:
  Headings:   "Inter" (tight tracking)
  Drama:      "Playfair Display" Italic
  Data/Mono:  "JetBrains Mono"

Image Mood: dark marble, gold accents, architectural shadows, luxury interiors
Hero Pattern: "[Aspirational noun] meets [Precision word]."
```

---

## Proposed Changes

### Website Project

#### [NEW] `global_lux/automate-systems/` — Full Vite + React project

Scaffold with `npx create-vite@latest ./ --template react` inside a new `automate-systems` directory.

**Install dependencies:**
```
npm install gsap @gsap/react lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

#### [NEW] `index.html`
- Google Fonts `<link>` tags for Inter, Playfair Display, JetBrains Mono
- SEO meta tags (title, description, Open Graph)

#### [NEW] `src/index.css`
- Tailwind v4 directives
- CSS noise overlay (inline SVG `<feTurbulence>` at 0.05 opacity)
- `rounded-[2rem]` to `rounded-[3rem]` container system
- Magnetic button hover effects with `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Custom utility classes for the design system
- CSS custom properties for the Midnight Luxe palette

#### [NEW] `src/App.jsx`
Single file with all sections (or split into `components/` if >600 lines):

**A. Navbar — "The Floating Island"**
- Fixed, pill-shaped, horizontally centered
- Transparent at hero top → morphs to `backdrop-blur-xl` with border on scroll
- Logo: "Automate Systems" text + nav links + CTA button

**B. Hero — "The Opening Shot"**
- `100dvh` full-bleed with dark marble Unsplash image + gradient overlay
- Hero copy: "Pipeline meets *Precision.*" (Inter bold + Playfair Display italic)
- GSAP staggered fade-up animation
- CTA: "Get Your Revenue Leak Audit"

**C. Features — "Interactive Functional Artifacts"**
Three cards from the 3 value props:

| Card | Pattern | Content |
|------|---------|---------|
| 1 — Lead Lifecycle | **Diagnostic Shuffler** | 3 overlapping cards cycling (Capture → Enrich → Route) with spring-bounce |
| 2 — Signal Engine | **Telemetry Typewriter** | Monospace live feed typing out signal detections with blinking cursor |
| 3 — CRM Hygiene | **Cursor Protocol Scheduler** | Animated cursor clicking through a weekly grid + "Save" |

**D. Philosophy — "The Manifesto"**
- Dark background section with parallaxing texture
- "Most teams focus on: *more tools and more headcount.*"
- "We focus on: *the invisible infrastructure.*" (accent-colored keyword)
- GSAP word-by-word ScrollTrigger reveal

**E. Protocol — "Sticky Stacking Archive"**
3 full-screen cards that stack on scroll:
1. **Audit** — Map lead flow, find leaks (rotating geometric motif)
2. **Build** — Install automation layer (scanning laser-line grid)
3. **Launch** — Monitor, iterate, scale (pulsing waveform)

**F. Pricing / Get Started**
- Since pricing isn't fixed, convert to a single large CTA section
- "Get Your Revenue Leak Audit" with proof lines from Linda + Vid

**G. Footer**
- Deep obsidian background, `rounded-t-[4rem]`
- Brand name + tagline, nav links, legal
- "System Operational" status indicator with pulsing green dot

---

## Verification Plan

### Browser Testing (Primary)
1. Run `npm run dev` in the project directory
2. Open in browser and verify:
   - All 7 sections render correctly
   - Navbar morphs on scroll (transparent → blurred background)
   - Hero animation plays on load (staggered fade-up)
   - Feature cards animate (shuffler cycles, typewriter types, scheduler cursor moves)
   - Philosophy text reveals word-by-word on scroll
   - Protocol cards stack with pinning on scroll
   - All Unsplash images load
   - CTA buttons have magnetic hover effects
   - Responsive: mobile layout stacks properly
   - Footer renders with pulsing status indicator

### Build Verification
- Run `npm run build` to confirm production bundle compiles without errors