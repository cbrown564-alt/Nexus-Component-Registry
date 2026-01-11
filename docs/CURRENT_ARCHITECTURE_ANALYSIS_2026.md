# Nexus Architecture Analysis 2026

**Status**: Current State Review
**Date**: 2026-01-11
**Objective**: accurate documentation of the current architecture to inform non-destructive expansion.

## 1. Executive Summary
Nexus is not a standard component library; it is a **Curated Registry of Design Systems**. The core value proposition is the diversity and specificity of its templates. Unlike a generic UI kit where "Dark Mode" just inverts colors, a Nexus "Dark Mode" in a Scifi context might introduce holographic scanlines, whereas in a Fintech context it introduces dense data grids.

The current architecture successfully delivers this "Soul" but suffers from semantic confusion and code duplication.

## 2. Core Concepts & Distinctions

### A. The Visual Languages (The "Soul")
These are the high-level design philosophies that govern a set of templates.
*   **Current Examples**: "Professional" (Fintech/SaaS), "Retro" (Legacy/8-bit), "SciFi" (Cockpit/Blueprint).
*   **Architecture**: Implicitly defined by the folder structure in `components/`.
*   **Expansion Goal**: The strategy calls for formalizing 6 major languages (Art Deco, Constructivist, etc.) to group future templates.

### B. The Templates (The "Body")
A Template is a specific application of a Visual Language to a Use Case.
*   **Definition**: A distinct Layout + Set of Custom Components.
*   **Example**: `FintechDashboard` uses `FintechCard`, `MarketTicker`, `PortfolioChart`.
*   **Coupling**: High. `FintechDashboard` *cannot* simply swap `FintechCard` for `LegacyWindow`. They are architecturally distinct organisms.
*   **Current State**: Defined in `themes.ts` (confusingly named) which maps IDs like `fintech` to metadata.

### C. The Themes (The "Mood")
A Theme is a cosmetic variation *within* a Template or Visual Language.
*   **Definition**: A set of design tokens (Colors, Border Radius, Density) that can be swapped without breaking the layout.
*   **Example**:
    *   `Fintech` Template -> `Dark Mode` (Default) vs `Light Mode` (Traditional Bank).
    *   `Scifi` Template -> `Cyan` (Helix) vs `Amber` (Deus Ex).
*   **Current State**:
    *   **Missing**: Most templates are hardcoded to a single mood (e.g., Fintech is always Dark Zinc).
    *   **Playground Mismatch**: `playgroundThemes.ts` defines generic moods (Midnight, Neon, Paper) but they are disconnected from the rich templates.

## 3. The "Inherent Contradiction" Code Review

**The Conflict**:
*   `themes.ts` says "Themes" are Templates (Engineering, Wellness).
*   `playgroundThemes.ts` says "Themes" are Token Sets (Midnight, Paper).
*   Components like `FintechCard` have hardcoded colors (`bg-zinc-950`), making them strictly "Fintech Dark".

**The risk**:
*   Attempting to force `LegacyWindow` to use `playgroundThemes` tokens (e.g. `border-radius: var(--radius-lg)`) would destroy the Windows 95 aesthetic (which needs 0px radius).
*   **Correction**: We should NOT force global token unification. We should enable **Scoped Theming**.

## 4. Proposed Architecture: The "Polymorphic Registry"

We move from a "One Token Set to Rule Them All" model to a **Layered Model**:

### Layer 1: The Base System (Universal)
*   **Utilities**: `ThemeContext`, `useSpotlight`, `Animations`.
*   **Shared Primitives**: `SpotlightCard`, `Grid`, `Text` (Abstract definitions).

### Layer 2: The Visual Language (The Scope)
*   **Scope**: `components/art-deco/`
*   **Scoped Tokens**: The "Art Deco" language defines its own *required* tokens.
    *   `--deco-gold`: #D4AF37
    *   `--deco-border`: double 3px solid
*   **Components**: `ArtDecoCard`, `MarqueeNav`.

### Layer 3: The Template (The Instance)
*   **Instance**: `templates/LuxuryRealEstate.tsx`
*   **Composition**: Uses `ArtDeco` components arranged for a Real Estate use case.

### Layer 4: The Theme (The Variable)
*   **Variable**: The Art Deco system supports "Noir" (Dark/Gold) and "Gatsby" (Light/Silver) variants.
*   **Implementation**: `themes.ts` is updated to define "Variants" for each Visual Language, rather than mixing Templates and Themes.

## 5. Strategic Directives
1.  **Harmonize Terminology**: Rename `themes.ts` to `registry.ts` (Registry Metadata) and strictly separate `TokenSets` from `Templates`.
2.  **Enable Scoped Theming**: Allow `Fintech` to have `FintechDark` and `FintechLight` token sets, without forcing it to support `NeoBrutalist`.
3.  **Reduce Duplication Safely**:
    *   Extract *behavior* (haptics, graph logic) into hooks (`useGraphData`).
    *   Keep *presentation* (JSX, Tailwind classes) inside the custom components to preserve their soul.
