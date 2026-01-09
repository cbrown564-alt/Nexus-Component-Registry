# Template Component Library Feature

## Overview

Each template should have a secondary "Component Library" view that showcases all thematically-related components beyond what's visible in the main cohesive template layout.

## Problem Statement

The **EngineeringDashboard** is a perfect example of this tension:
- **Bad Template**: The current layout is visually incoherent because it's a component showcase, not a cohesive application
- **Excellent Components**: It contains some of the best, most beautiful, highly specific components (Terminal, FileTree, DeploymentPipeline, etc.)

We shouldn't throw these components away when redesigning the template. They belong in the component library and should be easily accessible.

## Proposed Solution

### Template Detail Page Button
Add a consistent button/link in the **top-right or bottom-right** of every template that opens a secondary view:

```
┌─────────────────────────────────────────────────────────┐
│  [Template Name] Dashboard                    [📦 Components] │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  │        Cohesive Application Layout             │   │
│  │                                                 │   │
│  │        (Production-ready template)             │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Component Library View
When clicked, shows:

1. **Components Used in Template**
   - The actual components integrated into the main layout
   - With usage examples and props

2. **Extended Component Collection**
   - Beautiful, interesting components that match the theme
   - Components that didn't fit the cohesive layout
   - Experimental or specialized components

## Example: Engineering Theme

### In Main Template (cohesive DevOps dashboard)
- Deployment status panel
- Infrastructure metrics
- Activity feed (contextualized)
- Quick actions

### In Component Library View
- `Terminal` - Full terminal emulator
- `FileTree` - Project file browser
- `PlanPicker` - Pricing plan selector
- `TeamMembers` - Team roster display
- `ShortcutGuide` - Keyboard shortcuts panel
- `IntegrationToggle` - Third-party integration toggles
- `SpotlightCard` - Hover spotlight effect
- `GlowButton` - Animated button with rotating gradient

## Implementation Considerations

### Route Structure
```
/templates/:templateId           → Main cohesive template view
/templates/:templateId/components → Component library view
```

### Data Structure
```typescript
interface TemplateConfig {
  id: string;
  name: string;
  mainLayout: React.ComponentType;  // The cohesive template
  components: {
    used: ComponentMeta[];          // Components in main layout
    extended: ComponentMeta[];      // Additional thematic components
  };
}
```

### UI/UX Requirements
- Button should be subtle but always accessible
- Consistent positioning across all templates
- Use same visual language as template (themed button)
- Consider a slide-in panel vs full page navigation

## Priority Matrix

| Template | Main Layout Quality | Component Library Richness | Notes |
|----------|--------------------|-----------------------------|-------|
| Engineering | Needs redesign | ⭐⭐⭐⭐⭐ Excellent | Current layout is actually a component showcase |
| Acid | ⭐⭐⭐⭐ Great | ⭐⭐⭐⭐⭐ Excellent | GlitchText, Sticker, Marquee |
| LegacyOS | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent | Full retro OS experience |
| Game | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐ Good | InventoryGrid, QuestLog |
| Food | ⭐⭐⭐⭐ Good | ⭐⭐ Needs work | Limited component variety |

## Future Work

1. **Phase 1** (Current): Redesign templates for cohesive layouts
2. **Phase 2**: Implement Component Library button/view
3. **Phase 3**: Audit and expand component collections per theme
4. **Phase 4**: Add interactive component playground within library view

## Related Files
- `/templates/*.tsx` - Main template layouts
- `/components/{theme}/*.tsx` - Theme-specific components
- `/data/components.ts` - Component registry

---

*This feature ensures we don't lose valuable components when making templates more cohesive. The main template is the "application demo", the component library is the "toolkit".*
