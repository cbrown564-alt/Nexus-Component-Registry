# Nexus Architecture Guide

> **Version**: 1.0 (2026)
> **Stack**: React 19, Vite 6, Tailwind 4, TypeScript 5.8

This document outlines the core architectural patterns of the Nexus Component Registry.

---

## 1. High-Level Overview

Nexus is designed as a **theme-agnostic registry** that can render the same functional components across 28+ distinct visual systems.

### Directory Structure

```
nexus-component-registry/
├── components/           # Component Library
│   ├── ui/              # Shared/Universal components
│   ├── [theme]/         # Theme-specific sets (e.g., /fintech, /scifi)
│   └── playground/      # Interactive documentation wrappers
├── templates/            # Full page layout examples
├── data/                 # Single Source of Truth
│   ├── themes.ts        # Theme definitions & palettes
│   ├── tokens.json      # Design tokens
│   ├── components.ts    # Registry metadata
│   └── componentDocs.ts # Props documentation (for AI/Playground)
├── context/              # Global state (ThemeContext)
└── hooks/                # Reusable logic (useSpotlight, useMedia)
```

---

## 2. Core Systems

### 2.1 Theming Engine (`ThemeContext` + `tokens.json`)

Nexus uses a hybrid token system to allow radical visual changes without changing component markup.

*   **Primitive Tokens**: Defined in `data/tokens.json` (e.g., `colors.blue.500`).
*   **Semantic Aliasing**: `tokenUtils.ts` resolves references at runtime (e.g., `primary` -> `blue.500`).
*   **Context Injection**: `ThemeContext` wraps the application (or specific sections) to inject CSS variables matching the active theme.

**Key File**: `hooks/tokenUtils.ts` - Handles the resolution of nested token references.

### 2.2 Component Architecture

Components are categorized into:

1.  **Universal (`components/ui`)**: Highly reusable, theme-neutral or minimally styled (e.g., `SpotlightCard`).
2.  **Theme-Specific (`components/[theme]`)**: Heavily styled, intended for specific aesthetics (e.g., `SciFiButton`, `LegacyWindow`).

**Pattern**:
*   All components accept `className` generic overrides.
*   "Molecules" (like `StatsCard`) compose "Atoms" (like `SpotlightCard`).
*   Components are designed to be copy-pasteable: they carry their own dependencies or import from `@/components/ui`.

### 2.3 Registry Data Layer

To support AI agents and the interactive playground, the registry maintains strict metadata:

*   **`data/components.ts`**: Maps IDs to implementation metadata.
*   **`data/componentDocs.ts`**: Defines strict TypeScript interfaces for props, used to generate the playground controls automatically.

---

## 3. AI Readiness

Nexus is built to be "read" by both Humans and LLMs.

*   **`public/llms.txt`**: A map of the project for AI agents.
*   **`public/registry.json`**: A machine-readable dependency graph.
*   **Raw Source Access**: The playground allows viewing/copying the raw source code of any component.

---

## 4. Routing & Templates

*   **Dynamic Routing**: Templates are loaded via `pages/TemplatePage.tsx` which uses a dictionary lookup to resolve the correct `Dashboard` component.
*   **Theme Injection**: Routes automatically set the `ThemeContext` based on the URL parameter, ensuring deep links render the correct aesthetic.

---

## 5. Best Practices for Contributors

*   **New Components**: Must be added to `components.ts` and `componentDocs.ts`.
*   **Styles**: Use Tailwind utility classes. Avoid arbitrary values (`w-[123px]`)—use tokens.
*   **Iconography**: Use `lucide-react` for consistency.
