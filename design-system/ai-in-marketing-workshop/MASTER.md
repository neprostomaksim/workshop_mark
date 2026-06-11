# Design System Master File (M.AI.N AI in Marketing Workshop)

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** AI in Marketing Workshop
**Generated/Updated:** 2026-06-10 21:31:00
**Category:** Marketing & AI Workshop Landing Page
**Theme:** Premium, Dark, Futuristic, Neon-Glow

---

## Global Rules

### Color Palette (User Strict Override)

| Role | Hex / Value | CSS Variable |
|------|-------------|--------------|
| **Background (Main)** | `#080611` (Nearly black with violet undertone) | `--bg-main` |
| **Surface (Cards/Panels)** | `#14102A` (Dark violet-gray) | `--bg-surface` |
| **Surface Lighter** | `#1A1535` (Lighter violet-gray) | `--bg-surface-light` |
| **Primary Accent (Violet)** | `#8B5CF6` (Main purple branding) | `--color-accent-violet` |
| **Secondary Accent (Blue)** | `#60A5FA` (For highlights/accent text) | `--color-accent-blue` |
| **Glow / Highlight (Cyan)** | `#38BDF8` (For neon glow and beams) | `--color-glow-cyan` |
| **CTA-Buttons (Magenta)** | `#EC4899` (ONLY for action buttons, to stand out) | `--color-cta-magenta` |
| **Text Primary (White)** | `#F1EEFC` (Warm white with violet undertone) | `--text-primary` |
| **Text Secondary** | `#9D96B8` (Muted violet-gray) | `--text-secondary` |

#### Gradients
*   **Accent & Borders Gradient:** `linear-gradient(100deg, #A78BFA, #60A5FA, #38BDF8)`
*   **CTA-Buttons Gradient:** `linear-gradient(135deg, #8B5CF6, #EC4899)`

### Typography

*   **Heading Font:** `Sora` or `Geist` (Google Fonts), weight `700` or `800`, tracking `-0.02em`
*   **Body Font:** `Inter` (Google Fonts), weight `400` or `500`
*   **Mood:** futuristic, premium, high-tech, highly engaging, clean, dark-mode first

---

## Component Specs

### Buttons
*   **CTA Buttons:** Gradient from `#8B5CF6` to `#EC4899`, rounded-full, with smooth hover scale (`scale-[1.02]`) and hover brightness boost. Optionally use shadcn buttons with a wrapper for glowing borders.
*   **Secondary/Instagram Buttons:** Outlined border (using the gradient border or violet outline), white text, rounded-full, smooth transitions.

### Cards & Surfaces
*   Use `rounded-2xl` or `rounded-3xl` for soft premium curves.
*   Backgrounds should be `#14102A` or `#1A1535`.
*   Interactive cards (like Bento grid or 3D cards) must have subtle border overlays (`border border-white/[0.05]` or `border border-white/[0.1]`).
*   Hover states should feature 3D tilt effects or glowing 38BDF8 (cyan) or 8B5CF6 (violet) drop-shadows/borders.

---

## Style Guidelines

*   **Asymmetry over Grid:** Avoid centered, single-column rows. Hero is left-heavy with an asymmetrical visual card on the right. Time-line program runs along a tracing beam. Bento grid is used for the skills section.
*   **Restrained Animations:** Focus animations on high-value interactions (Hero entry, Tracing Beam scroll, Card hover, Wobble Card tilt, Infinite Moving Cards speed). Keep animations at 150-300ms. Respect `prefers-reduced-motion`.
*   **Watermarks:** Large watermark text or numbers (e.g. "700" or card numbers) should be rendered in `#8B5CF6` with low opacity (`opacity-[0.06]` to `opacity-[0.03]`).

---

## Anti-Patterns (Do NOT Use)

*   ❌ **No emojis as structural icons** — use SVG/Lucide icons. Emojis are font-dependent and look cheap.
*   ❌ **No standard violet-blue AI template** — our design must stand out using Cyan `#38BDF8` glows and Magenta `#EC4899` CTA elements.
*   ❌ **No ad-hoc, hardcoded hover animations** — use framer-motion transitions with standardized easing.
*   ❌ **No horizontal overflow** — ensure all elements are properly contained, especially on small screens.
*   ❌ **No unstyled raw images** — use stylized image placeholders with 3D gradient overlays and glassmorphism badges.
