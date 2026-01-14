# Phase 6 Expansion Strategy: Depth & Motion

**Status**: Planning
**Focus**: Themes, Hooks, Motion System
**Goal**: Transform static documentation pages into interactive, production-grade tools and establish a unified motion language.

---

## 1. Executive Summary

Having successfully established a robust library of **38 Templates** (Phase 1-5), the next phase shifts focus from "More Content" to "Deeper Tooling." We will freeze template creation to dedicate engineering resources to the **Themes** and **Hooks** pages, which have arguably been under-served.

The core philosophy for Phase 6 is **"Interactive by Default."**

## 2. The Three Pillars

### Pillar A: The Theme Studio (Themes Page Overhaul)
Currently, the Themes page is a gallery. We will transform it into a **Theme Studio**.
*   **Live Token Editor**: Add controls to strictly modify design tokens (Primary Color, Radius, Typography Scale) and see real-time updates across the preview board.
*   **"Export to Code"**: A button to generate the JSON/TS config for the current theme state, allowing developers to "design in the browser" and ship to code.
*   **Comparison Mode**: Leverage our unified theming engine to show side-by-side comparisons of the same component in different "Visual DNA" configurations (e.g., "Neo-Brutalist" vs. "Swiss").

### Pillar B: The Hook Workbench (Hooks Page Overhaul)
Currently, the Hooks page is a static API reference. It should be a **Laboratory**.
*   **Live Visualizations**: Every hook will have an interactive "Playground Component."
    *   *Example*: `useFocusTrap` renders a real trap.
    *   *Example*: `useSpotlight` renders a box you can mouse over.
    *   *Example*: `useInView` shows a scrolling indicator triggering events.
*   **"Knobs" Integration**: UI controls to adjust hook parameters (e.g., debounce delay, threshold) and see behavioral changes instantly.

### Pillar C: The Motion System
We will treat **Motion** as a first-class citizen, equal to Color and Typography.
*   **Motion Tokens**: Define a standard set of easing curves and durations (e.g., `motion.ease.elastic`, `motion.duration.snappy`).
*   **New Motion Hooks**:
    *   `useReducedMotion` (Accessibility first)
    *   `useScrollProgress` (Parallax/Scroll-linked animations)
    *   `useLayoutTransition` (FLIP animations wrapper)
*   **Micro-interaction Library**: a subset of the Component Registry dedicated to small, delightful interactions (like heart toggles, success checkmarks, confetti bursts) powered by these hooks.

---

## 3. Implementation Roadmap

### Milestone 6.1: The Workbench (Hooks) ✅ COMPLETE
*   [x] Create `HookPreview` component framework.
*   [x] Create `HookKnobs` for parameter adjustments.
*   [x] Implement interactive demos for 8 hooks (useClickOutside, useDebounce, useFocusTrap, useHover, useInView, useLocalStorage, useMediaQuery, useSpotlight).
*   [x] Refactor `HooksPage.tsx` with tabbed Live Demo/API Reference interface.
*   [ ] Add 3 new "Motion Hooks" (`useSpring`, `useScroll`, `useEnter`) — moved to Milestone 6.3.

### Milestone 6.2: The Studio (Themes) ✅ COMPLETE
*   [x] Refactor `ThemesPage.tsx` to use a local "Draft Theme" state separate from the global context.
*   [x] Build `TokenControls` sidebar (Color pickers, sliders for radius/spacing).
*   [x] Implement "Export Config" functionality.

### Milestone 6.3: Motion & Polish
*   [ ] Define `motion.ts` token file.
*   [ ] Update key templates (Landing, Dashboard) to use standard motion tokens.
*   [ ] Audit all clickable elements for active/hover states (Micro-interactions).

---

## 4. Why This Matters
By making our tooling interactive, we prove the power of the *Nexus* architecture. We aren't just selling templates; we are selling a **system**. This phase maximizes the value of existing assets without the overhead of maintaining new full-scale templates.
