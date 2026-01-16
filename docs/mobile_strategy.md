# Mobile Strategy: Bespoke Mobile Experience

## Vision
Instead of downgrading the desktop experience for mobile, we will create a dedicated, parallel mobile experience. This allows us to leverage touch, gestures, and focused views without compromising the desktop-first "developer tool" density.

**Core Philosophy:**
-   **Desktop:** Density, code inspection, modification, "Workbench" feel.
-   **Mobile:** Discovery, interaction, consumption, "Showcase" feel.

## 1. Architecture: The Fork in the Road

We will implement a top-level **Mobile Router Split**.
Instead of responsive CSS cluttering every component, we will detect the device type at the root and serve a completely different `MobileLayout`.

### Routing Logic
-   **Hook:** `useMediaQuery('(max-width: 768px)')` (or distinct User Agent check if SSR, but Client Side is fine here).
-   **Route Map:**
    -   `/` (Home) -> `MobileHomePage` (Swipeable showcase?) vs `HomePage` (Desktop grid)
    -   `/templates` -> `MobileTemplatesPage` (Gallery) vs `TemplatesPage` (Grid+Filters)
    -   `/components/*` -> **Redirect to Mobile Home** or show a "View on Desktop" interstitial. (As per user instruction: components/tokens/hooks irrelevant on mobile).
    -   `/stories` -> **Shared** (User noted this is already optimized).

## 2. New Mobile Views

### A. Mobile Home (`MobileHomePage.tsx`)
*Concept: "The Feed"*
-   A vertical, high-fidelity feed of the best templates.
-   No code snippets, just visual "cards" that are fully interactive.
-   **Interaction:** Swipe vertical to browse, tap to enter "Immersive Mode" (Template Demo).

### B. Mobile Templates (`MobileTemplatesPage.tsx`)
*Concept: "App Store"*
-   Horizontal scrolling categories (e.g., "Dashboards", "Landing Pages").
-   Thumbnails are large, touch-friendly.
-   Filter by "Mobile Optimized" vs "Desktop Only" (some templates like large data tables might just not work).

## 3. Implementation Steps

1.  **Router Refactor:** Wrap current routes in a `DeviceSplitter`.
2.  **Mobile Layout:** Create `layouts/MobileLayout.tsx` (Bottom tab bar navigation?).
3.  **Build Mobile Home:** Create `pages/mobile/MobileHomePage.tsx`.
4.  **Build Mobile Templates:** Create `pages/mobile/MobileTemplateBrowser.tsx`.

## 4. User Review Required
-   **Navigation:** Do we want a bottom tab bar for mobile (Home | Templates | Stories)?
-   **Redirects:** Confirm that visiting `/tokens` on mobile should visually gate the user or redirect them.
