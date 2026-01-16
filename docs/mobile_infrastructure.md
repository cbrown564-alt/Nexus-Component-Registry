# Mobile Infrastructure & Template Strategy

**Goal**: Establish a robust "Mobile-First" foundation for the Component Registry, ensuring mobile users get a premium experience while gracefully handling legacy desktop-only templates.

## 1. Mobile Tier Strategy
We implemented a 3-tier classification system in `registry.ts`:

| Tier | Description | UI Treatment |
| :--- | :--- | :--- |
| **Mobile-First** (`first`) | Designed specifically for touch, haptics, and small screens. | **Hero Section**: Large, immersive cards. |
| **Passable** (`passable`) | Desktop templates that scale down reasonably well. | **Archive Section**: Compact list items. |
| **Poor** (`poor`) | Data-dense/complex layouts unsuited for mobile. | **Hidden**: Filtered out of mobile views. |

## 2. New Mobile-First Archetypes
We defined and registered 5 new "Pure Mobile" templates, each exploring a specific mobile interaction pattern:

1.  **Flux** (Social Feed): High-velocity scroll, edge-to-edge media.
2.  **Neo** (Finance): Gyroscope-driven parallax cards, premium dark UI.
3.  **Zen** (Reader): Thumb-zone navigation, minimal typography.
4.  **Touch** (IoT): Haptic dials and neumorphic buttons.
5.  **Signal** (Chat): Organic breathing animations, instant messaging.

## 3. Implementation Details

### Registry Schema
Updated `lib/registry.ts` to support the new metadata:
```typescript
export type MobileTier = 'poor' | 'passable' | 'first'
export interface Template {
    // ...
    mobileTier?: MobileTier
}
```

### Mobile Templates Page
Refactored `pages/mobile/MobileTemplatesPage.tsx` to:
-   **Segregate content**: "Mobile First" vs "Archive".
-   **Filter content**: Removed "Poor" templates entirely.
-   **Theme-aware UI**: Used translucent dark cards for the Archive section to ensure readability in Dark Mode.

### Custom Wireframes
Updated `components/ui/TemplatePreview.tsx` with 5 new bespoke wireframes that visually represent the unique mechanisms of the new templates (e.g., `NeoWireframe` shows stacked parallax cards, `TouchWireframe` shows a dial).

## 4. Verification Checkpoints
-   `/mobile/templates` route handles filtering logic.
-   "Mobile First" templates appear specifically in the Hero section.
-   "Archive" contains passable desktop templates.
-   "Poor" templates (like Engineering/SaaS) are hidden from the mobile view.
-   Dark mode contrast is optimized for readability.
