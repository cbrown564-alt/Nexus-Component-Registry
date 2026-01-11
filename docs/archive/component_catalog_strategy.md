# Component Catalog & Expansion Strategy

## Executive Summary
This document outlines the strategy for populating the Nexus Component Registry's template-specific library. The goal is to move from a collection of isolated dashboards to a fully cataloged, explorable component library where every template is a visual design system with "Used", "Extended", and "Shared" components.

## Phase 1: Catalog & Wire (Foundation)
**Objective**: Ensure every existing template has its "In This Template" section fully populated with the components currently rendered in its dashboard.

### Current Status
- **Completed**: Engineering, Wellness, Fintech, Game, Magazine, Ecommerce, Social, Productivity, Food, Cockpit, Swiss, Scifi, Legacy OS.
- **Pending (Empty Maps)**:
  - SaaS
  - Music
  - Grid
  - Brutalist
  - Kitchen
  - Kids
  - E-Ink
  - Solarpunk
  - Legal
  - Soft Plastic
  - Festival
  - Acid
  - Claymorphism
  - Blueprint

### Action Plan
1.  **Audit**: For each pending template, analyze its `Dashboard.tsx` file.
2.  **Register**: Ensure all imported local components (e.g., `MusicPlayer`, `GridMap`) are registered in `data/components.ts` with appropriate `previewProps` to prevent crashes.
3.  **Map**: Update `data/templateComponents.ts` to include these component IDs in the `usedComponentIds` array.
4.  **Verify**: Run `npm run check:components` to ensure no regressions.

## Phase 2: Extended Collection (Depth)
**Objective**: Enrich each theme by creating "Extended" components—components that share the theme's visual DNA but aren't strictly necessary for the main dashboard view. This turns a single-page template into a true UI kit.

### Strategy
For each theme, identify gaps in common UI patterns and build them:
- **Navigation**: Sidebars, Breadcrumbs, TabBars
- **Inputs**: Toggles, Sliders, Dropdowns, DatePickers
- **Feedback**: Alerts, Toasts, ProgressBars, Modals
- **Data Display**: Tables, Kanbans, Timelines

**Priority Candidates for Extension**:
- **Engineering**: Add `ConsoleOutput`, `GitDiffView`, `ServerStatBadge`.
- **Cyberpunk/SciFi**: Add `HolographicTable`, `GlitchHeading`, `NeonToggle`.
- **Wellness**: Add `JournalEntry`, `MeditationTimer`, `HabitCheckbox`.

## Phase 3: Strategic Expansion (Diversity)
**Objective**: Build the next wave of templates to maximize visual and functional diversity, covering unexplored aesthetics and use cases.

### Targeted Aesthetics
1.  **Neobrutalism (Web3/Gumroad style)**: High saturation, bold strokes, hard shadows. distinct from our current "Brutalist" or "Swiss".
2.  **Glassmorphism v2 (MacOS style)**: Heavy blur, translucency, vibrant underlying gradients.
3.  **8-bit / Pixel Art**: distinct from "Legacy OS", strictly game-UI focused.
4.  **Paper/Sketch**: Hand-drawn look (wiredjs style) for wireframing mockups.

### Targeted Use Cases
1.  **DevTools**: A log explorer or database visualizer.
2.  **Health/Medical**: A clinical dashboard (distinct from "Wellness").
3.  **Education**: A virtual classroom or LMS interface.
4.  **Automotive**: EV charging station UI.

## Implementation Standard
All new components must:
1.  Be registered in `data/components.ts`.
2.  Include `previewProps` for safe live rendering in fallback preview mode.
3.  **Add an entry to `data/componentDocs.ts`** with props, examples, and notes. This enables:
    - Interactive LivePlayground with prop controls
    - Full API reference table on component detail pages
    - Proper rendering with default values (without relying solely on `previewProps`)
4.  Be mapped to their respective `data/templateComponents.ts` entry.
5.  Pass the `npm run check:components` validation.

> ⚠️ **Critical**: Components without `componentDocs` entries fall back to static preview using only `previewProps`. If props are missing or incomplete, components may render incorrectly or appear invisible. See `docs/AUDIT-componentDocs-gaps.md` for the current gap analysis (87 of 125 components missing docs).
