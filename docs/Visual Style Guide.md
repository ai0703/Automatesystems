

AutomateSystems: B2B Conversion Visual Style Guide
1. Brand Personality & Design Philosophy
Attributes: Precision, Velocity, reliability, Clarity.
Core Philosophy: "Radical Clarity." Every pixel must serve the purpose of moving the user toward the CTA. If it doesn't add value, delete it.
Vibe: Professional enough for an Enterprise client, modern enough for a fast-moving startup.

2. Color Palette
We utilize a high-contrast palette to guide the eye. The base is clean and airy, using deep blues for authority and a vibrant accent for action.
Primary Colors (Brand Foundation)
Deep Midnight: #0F172A (Slate 900)
Usage: Headlines, Footer background, Primary Text.
Tech Blue: #3B82F6 (Blue 500)
Usage: Primary Brand Color, Links, Icons, Active States.
Clean White: #FFFFFF
Usage: Page Backgrounds, Cards.
Secondary/Neutral Colors (Structure)
Soft Slate: #64748B (Slate 500)
Usage: Subheadlines, Body text, Supporting copy.
Light Gray: #F1F5F9 (Slate 100)
Usage: Section backgrounds (to differentiate from white), Form inputs.
Border Gray: #E2E8F0 (Slate 200)
Usage: Dividers, Card borders.
Conversion Colors (Action Only)
Signal Orange: #F97316 (Orange 500)
Usage: Primary CTA Buttons only. This color is reserved for the "Book" or "Buy" action to ensure maximum contrast against blue/white.
Success Green: #10B981 (Emerald 500)
Usage: Checkmarks, "Guaranteed" badges, Success toasts.

3. Typography
We use a geometric sans-serif pairing that implies modernity and stability.
Primary Font (Headings): Plus Jakarta Sans or Inter (Bold)
H1 (Hero): 48px – 60px (Desktop) | 36px (Mobile). Leading: 1.1.
Style: Bold (700), Deep Midnight color.
H2 (Section Headers): 36px (Desktop) | 30px (Mobile). Leading: 1.2.
Style: Semi-Bold (600).
H3 (Feature Titles): 24px.
Style: Medium (500).
Secondary Font (Body): Inter or Roboto
Body Copy: 16px (Base) or 18px (Lead paragraphs). Leading: 1.6 (160%).
Note: The high line height (1.6) is critical for readability and creating a "premium" feel.
Micro-Copy/Captions: 14px. Color: Soft Slate.

4. Button Styles & CTAs
Buttons are the most important element on the page. They must look clickable and substantial.
Primary CTA (The "Money" Button)
Background: Signal Orange (#F97316) or Tech Blue (#3B82F6) if Orange feels too aggressive for the brand. Recommendation: Use Blue for "Learn More" and Orange for "Book Demo".
Text: White, Bold (700), All Caps or Title Case.
Shape: 6px Rounded Corners (slight radius, not full pill).
Padding: Vertical 16px / Horizontal 32px.
Shadow: box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.3); (Colored shadow creates a "glow" effect).
Hover State: Lighten background by 10%, slight lift (transform: translateY(-2px)).
Secondary CTA (Alternative Actions)
Style: Ghost Button (Outline).
Border: 2px solid Deep Midnight (#0F172A).
Text: Deep Midnight.
Hover State: Fill with Deep Midnight, Text turns White.
Text Links
Style: Underlined, Tech Blue (#3B82F6).
Hover: Darker Blue (#1D4ED8), underline disappears.

5. Layout & Grid System
Grid: 12-Column Grid.
Max-Width: 1200px (standard container) or 1040px (narrow reading container).
The 8pt Spacing Rule: All margins and padding should be multiples of 8 (e.g., 8px, 16px, 24px, 32px, 48px, 64px, 80px).
Section Spacing (Vertical Rhythm)
Between Sections: 80px – 120px. Do not crowd sections.
Between Header and Body: 24px.
Between Body and Button: 32px.

6. Imagery, Iconography & Visuals
Iconography
Style: Thin stroke (1.5px or 2px), clean lines. (References: Heroicons, Feather Icons, Phosphor Icons).
Color: Tech Blue (#3B82F6) or Dark Grey (#334155).
Container: Icons should often sit inside a soft circle or square with a light blue background (#DBEAFE) to give them weight.
Imagery Strategy
Abstract UI: Do not use stock photos of people shaking hands. Use simplified, high-fidelity representations of the software interface (e.g., a "Candidate Card" or a "Calendar View").
Glassmorphism: Use a subtle "frosted glass" effect on UI cards floating over the background to create depth.
CSS: background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3);
Drop Shadows: Use soft, large diffuse shadows on images to make them "float" off the page.
CSS: box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

7. Mobile Optimization Principles
The design must be "Thumb-Friendly."
Single Column: All grids collapse to a single column on mobile.
Tap Targets: Buttons and links must be at least 44px height.
Font Scaling:
H1 reduces to 32px-36px to prevent hyphenation.
Body text stays at 16px (do not go smaller).
Padding: Reduce horizontal container padding to 16px or 20px on mobile to maximize screen real estate.
Sticky CTA: On long scroll sections, keep a "Book Demo" button pinned to the bottom or top of the viewport.

8. Implementation Checklist (For Designer/Dev)
[ ] Load Speed: Ensure all images are WebP format and compressed.
[ ] Accessibility: Check contrast ratios (WCAG AA standard). Ensure Signal Orange text is not used on white backgrounds (use it for button backgrounds with white text).
[ ] Visual Hierarchy: Squint test the page. The most prominent things should be: 1. The Value Prop (H1), 2. The Primary CTA.
[ ] Whitespace: If in doubt, add more padding. B2B luxury is defined by space.



