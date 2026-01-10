# Bug Report: Component Visibility Inconsistency

**Date**: 2026-01-10
**Reporter**: Antigravity (AI Assistant)
**Priority**: High (Visual Regression)
**Component Group**: SciFi Theme (`NeonToggle`, `GlitchHeading`, `HolographicTable`)

## Issue Description
Three specific components from the SciFi theme exhibit significant visibility issues when viewed on their individual **Component Detail** pages (e.g., `/components/scifi/neon-toggle`), despite rendering correctly on the main **Component Gallery** (`/components`).

## Observed Behavior

### 1. NeonToggle
-   **Gallery View (`/components`)**:
    -   Text label is visible.
    -   Toggle "off" state is dim but visible.
    -   Toggle "on" state is bright neon.
-   **Detail View (`/components/scifi/neon-toggle`)**:
    -   **Critical**: The text label is invisible (suspected rendering as dark gray on black).
    -   The toggle component itself renders, but the glow effects might be less pronounced or physically clipped.

### 2. GlitchHeading (Patched)
-   **Original Issue**: Completely invisible on the detail page.
-   **Workaround**: Forced `z-index: 20` and explicit `text-cyan-400` color prop.
-   **Root Cause Suspicion**: Stacking context issue where the text layer was behind the container background, or `mix-blend-mode` interacting poorly with the detail page's container.

### 3. HolographicTable (Patched)
-   **Original Issue**: Rows were invisible or had 0 opacity.
-   **Workaround**: Removed `framer-motion` opacity transitions from `tr` elements.
-   **Root Cause Suspicion**: `framer-motion` animation lifecycle failing to trigger "visible" state in the specific layout context of the Detail Page.

## Reproduction Steps
1.  Navigate to the [Component Gallery](/components).
2.  Scroll to the "SciFi" section (Extended Collection).
3.  Observe that `NeonToggle` and `GlitchHeading` look correct in their cards.
4.  Click `NeonToggle` to navigate to its [Detail Page](/components/scifi/neon-toggle).
5.  **Observe**: The label text next to the toggle is missing or invisible.

## Technical Context & Hypotheses

### Environment Differences
The **Gallery Card** and **Detail Page Preview** likely use different wrapper containers.
-   **Gallery**: Likely a simple `div` within a grid.
-   **Detail Page**: A more complex layout, possibly with:
    -   Different `z-index` stacking contexts.
    -   Different default text colors inherited from parents.
    -   Specific `overflow` properties that clip glow/shadow effects.

### CSS Variables / Tailwind Preflight
If the Detail Page is rendering the component in a way that resets or overrides inherited text colors (e.g., defaulting to a dark slate instead of inheriting a light theme color), the `slate-500` default of `NeonToggle` might be blending into the background.

## Action Items for Investigation
1.  **Inspect DOM**: Compare the computed styles of `NeonToggle`'s container in both views.
2.  **Check Backgrounds**: Verify if the Detail Page preview box has a subtle background color difference that reduces contrast.
3.  **Audit Z-Index**: Check if the Detail Page layout has a high-z-index overlay or container that might be shadowing content.
4.  **Review `ThemeContext`**: Ensure the theme tokens are correctly propagated to the isolated component view in the Detail Page.
