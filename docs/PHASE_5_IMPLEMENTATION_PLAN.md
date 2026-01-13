# Phase 5: Component Registry Maturation
**Status:** Planned
**Target Date:** Q1 2026

## Executive Summary
Phase 5 marks the transition of the Nexus Component Registry from a "Static Gallery" to a fully interactive "Design System Tool" (internal code name: *Nexus Story*). The primary goal is to empower developers and designers to manipulate component states, switch themes dynamically, and view improved documentation without touching the code.

## Core Objectives
1.  **Interactive Playground**: Enable real-time prop manipulation and isolated theme switching for every component.
2.  **API Alignment**: Eliminate "drift" between documentation and implementation (e.g., hardcoded components must accept props).
3.  **100% Coverage**: Ensure all 200+ components have complete metadata and documentation.

---

## Workstreams

### 1. The Interaction Engine (Nexus Story)
*Focus: Upgrading the `LivePlayground` component.*

-   [ ] **Isolated Theme Provider**: Wrap the playground preview area in a scoped `ThemeContext`. This allows the component to be viewed in "Fintech" mode while the rest of the app remains in "Registry" mode.
-   [ ] **Theme Switcher Control**: Add a dropdown to the playground toolbar to toggle between all 25+ themes instantly.
-   [ ] **Advanced Controls**: Upgrade the sidebar controls to support:
    -   `Enum` dropdowns (auto-detected from TypeScript types).
    -   `Object` editors (JSON view for complex props).
    -   `Action` loggers (visualize `onClick` events).

### 2. Component API Refactor (The "Un-Hardcode" Sprint)
*Focus: Ensuring components are reusable.*

-   [ ] **Audit**: systemically check all 227 components. Identify which ones ignore their props (like `DigitalCard` did).
-   [ ] **Refactor**: Update these components to:
    -   Accept dynamic props.
    -   Use their current "hardcoded" values as `defaultProps`.
    -   Ensure types match `componentDocs.ts`.

### 3. Documentation Gap Fill
*Focus: Reaching 100% coverage.*

-   [ ] **Backfill Phase 4**: Create `componentDocs` entries for the ~48 new components (Concierge, Paradox, Terminal, etc.).
-   [ ] **Standardize Metadata**: Ensure every component has:
    -   Description
    -   Tags
    -   Category
    -   At least one example usage.

### 4. Polish & Standards
-   [ ] **Motion Audit**: Define and enforce motion profiles (e.g., "Professional" = reduced motion, "Game" = high energy).
-   [ ] **A11y Check**: Ensure all interactive components (inputs, buttons) are keyboard accessible.

---

## Technical Strategy

### Theme Isolation Pattern
Currently, `useTheme()` pulls from the global context. We will implement a `ScopedThemeProvider`:

```tsx
<ScopedThemeProvider theme={selectedTheme}>
  <Component {...props} />
</ScopedThemeProvider>
```

This prevents the "Flash of Wrong Theme" and allows side-by-side comparisons of the same component in different themes.

## Success Metrics
-   **Interactivity**: 100% of "Data Display" and "Form" components react to prop changes in real-time.
-   **Coverage**: 0 components missing from the `componentDocs` registry.
-   **Theme Agnosticism**: Every component renders correctly in at least 3 different themes without code changes.
