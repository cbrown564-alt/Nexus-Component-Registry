# Mobile-First Template Playbook: The Flux Method

> "Each template should be purpose-built for its domain, following the process that took Flux from 'good' to 'excellent'."

This document outlines the methodology for creating high-fidelity, mobile-first templates in the Nexus Registry. The goal is not just to display data, but to create a **native-feeling, immersive experience**.

## Phase 1: The Core Mechanic (The "Skeleton")
**Goal**: Define the primary interaction model. How does the user move through the content?

1.  **Identify the Native Metaphor**:
    *   *Flux Example*: Vertical Snap Feed (TikTok/Reels).
    *   *Future Examples*: 
        *   Tinder-style deck swipe.
        *   Horizontal carousels (Stories).
        *   Grid-based mosaics (Pinterest).
2.  **Use Platform Primitives**:
    *   Avoid heavy JS scroll jacking. Use CSS `scroll-snap` for 60fps performance.
    *   Example: `snap-y snap-mandatory` on the container, `snap-start` on items.
3.  **Build the Skeleton**:
    *   Create the Container component (logic/layout).
    *   Create the Item component (content).
    *   Ensure the "feel" is right before adding style. The scroll/swipe must feel frictionless.

## Phase 2: The Aesthetic Layers (The "Skin")
**Goal**: Apply a distinct visual language that enhances the metaphor.

1.  **Immersive Media**:
    *   Mobile is full-screen. Use images/video that bleed to the edges `object-cover`.
    *   Use gradients (`bg-gradient-to-b`) to make text readable over media without blocking the view.
2.  **Motion Design**:
    *   Things should feel alive.
    *   *Flux Example*: Scrolling marquees for song titles, spinning vinyl records.
    *   Use `framer-motion` for entrance animations or state changes.
3.  **Iconography & Typography**:
    *   Use consistent icon sets (`lucide-react`).
    *   Mobile typography needs clear hierarchy. Bold headlines, readable body text, high contrast.

## Phase 3: The Finishing Touches (The "Soul")
**Goal**: Add the reliability and delight that makes software feel premium.

1.  **Micro-Interactions**:
    *   **Feedback is mandatory**. Every tap should do *something*.
    *   *Flux Example*: Double-tap to like (Spring animation), Active states on navbar icons.
    *   Use Toast notifications for invisible actions (e.g., "Link Copied").
2.  **High-Fidelity Assets**:
    *   **No Placeholders**. Grey boxes break the immersion.
    *   Use generated, thematic imagery that fits the vibe perfectly.
    *   Write copy that sounds like a real user, not `lorem ipsum`.
3.  **The "Safety" Layer**:
    *   Ensure navigation exists (Back button, Home button).
    *   Handle edge cases (loading states, missing data).

## Checklist for New Templates

- [ ] **Interaction**: Does it use a mobile-native gesture (swipe, snap, pinch)?
- [ ] **Immersion**: Does it use the full screen?
- [ ] **Feedback**: Do buttons feel responsive (active states, animations)?
- [ ] **Content**: Are the assets and data specific to this archetype?
