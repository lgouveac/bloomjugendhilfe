# Design System Document: The Radiant Sanctuary

## 1. Overview & Creative North Star
This design system is built to reflect the core mission of "Bloom Jugendhilfe & Entwicklung": the delicate, professional, and holistic process of human growth. Our Creative North Star is **"The Radiant Sanctuary."**

We are moving away from the rigid, clinical structures of traditional social services. Instead, we are creating a digital environment that feels like a breath of fresh air. The interface should feel as though it is "blooming" from the center—utilizing intentional asymmetry, soft layering, and an editorial typographic hierarchy that prioritizes peace over pressure. This system rejects "template culture" in favor of bespoke, overlapping layouts and high-contrast breathing room.

---

## 2. Colors & Atmospheric Depth
The palette is a sophisticated journey through lavender and muted violets, grounded by warm, "off-white" surfaces. It is designed to soothe the eye and build subconscious trust.

### The "No-Line" Rule
To maintain the "Sanctuary" feel, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be defined through tonal shifts. A section should end and another begin by transitioning from `surface` (#fdf8fd) to `surface-container-low` (#f7f2f9). This creates a "soft-edge" world that feels organic rather than mechanical.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine, translucent paper.
- **Base Layer:** `surface` (#fdf8fd) for the overall page background.
- **Mid-Tier Layers:** Use `surface-container-low` (#f7f2f9) for large content areas.
- **Interactive Layers:** Use `surface-container-highest` (#e6e0eb) or `surface-container-lowest` (#ffffff) for floating cards to create natural elevation through color value alone.

### The "Glass & Gradient" Rule
Standard flat colors feel stagnant. To symbolize "growth," use subtle radial gradients on hero sections and primary CTAs. Transition from `primary` (#6c5585) to `primary-container` (#e3c6fd) to create a sense of light source and "soul." For floating navigation or modal overlays, apply **Glassmorphism**: use `surface` at 70% opacity with a `20px` backdrop blur to allow the brand colors to bleed through softly.

---

## 3. Typography: The Editorial Voice
We use a dual-font strategy to balance authority with empathy.

*   **Display & Headlines (Manrope):** This is our "Editorial" voice. Manrope’s geometric yet rounded nature feels modern and optimistic. Use `display-lg` (3.5rem) with tighter letter-spacing for high-impact brand moments. Embrace asymmetry by left-aligning large headlines while offsetting body text to the right.
*   **Body & Labels (Inter):** This is our "Functional" voice. Inter provides world-class legibility for the sensitive information we convey. 

**The Hierarchy Tip:** Use `label-md` with `0.05rem` letter-spacing for "overlines" (small text above headlines). This high-contrast scale—pairing very small labels with very large headlines—is what gives the design its premium, intentional feel.

---

## 4. Elevation & Depth
In this design system, shadows are "air," and layers are "light."

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift without the "heaviness" of a drop shadow.
*   **Ambient Shadows:** If an element must float (like a main CTA button or a modal), use a shadow tinted with the `on-surface` color (#343139). Shadows should be extra-diffused: `X: 0, Y: 12, Blur: 32, Spread: -4` at **4-6% opacity**. It should feel like a soft glow, not a dark stain.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at **15% opacity**. A 100% opaque border is considered a design failure in this system.

---

## 5. Component Architecture

### Buttons: The Touchpoints of Growth
*   **Primary:** Use a pill shape (`rounded-full`) with a soft gradient from `primary` to `primary-dim`. 
*   **Secondary:** No background. Use a "Ghost Border" (15% opacity `outline`) with `primary` text.
*   **Interaction:** On hover, the element should subtly scale (1.02x) rather than just changing color, mimicking a living organism's response.

### Inputs & Fields
*   **Style:** Forgo the white box. Use `surface-container-high` (#ece6ef) as the fill color with `rounded-md` corners.
*   **State:** When focused, transition the background to `surface-container-lowest` and add a subtle `primary` glow.

### Cards & Lists: The No-Divider Rule
*   **Rule:** **Never use horizontal divider lines.** 
*   **Solution:** Separate list items using vertical white space (Spacing Scale `4` or `5`) or by alternating very subtle background tints between `surface-container-low` and `surface-container-lowest`. This keeps the "Radiant Sanctuary" uncluttered and calm.

### Unique Component: "The Bloom Progressor"
For development tracking, use custom-styled progress bars that utilize `primary` and `tertiary-container`. The bar should have `rounded-full` caps and a soft "glow" at the leading edge to symbolize forward momentum.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use generous whitespace (Scale `16`, `20`, `24`) to separate major conceptual blocks.
*   **Do** use intentional asymmetry. Place images off-center and let text "breathe" around them.
*   **Do** use the `primary-fixed-dim` for subtle accent backgrounds in typography-heavy areas.

### Don't:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#343139) to maintain a soft, professional tone.
*   **Don't** use sharp corners. The minimum radius is `DEFAULT` (0.5rem); headlines and buttons should lean toward `lg` or `full`.
*   **Don't** cram content. If a section feels "busy," double the padding using the Spacing Scale. If it still feels busy, remove an element.

---
*Note to Junior Designers: This system is not a set of constraints; it is a philosophy of care. Every pixel should feel like it was placed with the intention to nurture.*