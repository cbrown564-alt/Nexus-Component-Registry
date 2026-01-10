# Component Documentation Audit

> **Date**: 2026-01-10  
> **Status**: 87 of 125 components missing documentation

## Executive Summary

This audit compares components registered in `data/components.ts` against those documented in `data/componentDocs.ts`. Components without documentation entries rely on fallback preview rendering, which requires `previewProps` for proper display.

**Key Finding**: Components without `componentDocs` entries cannot use the LivePlayground (interactive prop controls). They fall back to a static preview that uses `previewProps`. If `previewProps` is also missing or incomplete, the component may render incorrectly or appear invisible.

---

## Statistics

| Category | Count |
|----------|-------|
| **Total Registered Components** | 125 |
| **Documented (in componentDocs.ts)** | 38 |
| **Missing Documentation** | 87 (70%) |

---

## Documented Components ✅ (38)

These components have full `componentDocs` entries with props, examples, and notes:

### Shared/UI (13)
- `spotlight-card`
- `glow-button`
- `terminal`
- `stats-card`
- `activity-feed`
- `file-tree`
- `plan-picker`
- `team-members`
- `shortcut-guide`
- `deployment-pipeline`
- `integration-toggle`
- `bento-card`

### Fintech (4)
- `digital-card`
- `market-ticker`
- `portfolio-chart`
- `transaction-list`

### Cockpit (5)
- `speedometer`
- `climate-control`
- `lane-assist`
- `media-widget`
- `nav-widget`

### Game (4)
- `character-profile`
- `inventory-grid`
- `quest-log`
- `leaderboard-widget`

### Legacy OS (3)
- `legacy-window`
- `legacy-button`
- `desktop-icon`

### SciFi (4)
- `scifi-card`
- `body-scanner`
- `dna-list`
- `vitals-monitor`

### Education (2)
- `course-card`
- `upcoming-schedule`

### Social (2)
- `feed-post`
- `profile-summary`

### Ecommerce (2)
- `product-card`
- `cart-summary`

---

## Missing Documentation ❌ (87)

These components need `componentDocs` entries for full playground support:

### SciFi (3) — **PRIORITY: Related to visibility bug**
- `holographic-table` — Complex props (columns, data arrays)
- `glitch-heading` — Props: text, size, color
- `neon-toggle` — Props: label, initialState, color, onChange

### Wellness (5)
- `wellness-card`
- `breath-player`
- `sleep-graph`
- `mood-selector`
- `wellness-button`

### Engineering (7)
- `engineering-card`
- `engineering-button`
- `pipeline-steps`
- `code-block`
- `console-output`
- `git-diff-view`
- `server-stat-badge`

### Food (1)
- `food-button`

### Magazine (1)
- `editorial-button`

### Ecommerce (1)
- `shop-button`

### Productivity (1)
- `flow-button`

### Swiss (4)
- `swiss-button`
- `swiss-grid`
- `swiss-typography`
- `swiss-divider`

### SaaS (5)
- `metric-card`
- `revenue-chart`
- `customer-table`
- `saas-card`
- `saas-button`

### Music (5)
- `now-playing`
- `track-list`
- `album-grid`
- `music-card`
- `music-button`

### Grid (5)
- `city-map`
- `resource-gauge`
- `system-controls`
- `grid-card`
- `grid-button`

### Brutalist (5)
- `marquee-header`
- `art-grid`
- `manifesto`
- `brutalist-card`
- `brutalist-button`

### Kitchen (5)
- `active-step`
- `ingredient-scale`
- `smart-timer`
- `kitchen-card`
- `kitchen-button`

### Kids (5)
- `kids-card`
- `big-icon-nav`
- `star-progress`
- `mascot`
- `kids-button`

### E-Ink (5)
- `eink-sidebar`
- `reader-content`
- `library-grid`
- `eink-card`
- `eink-button`

### Solarpunk (4)
- `energy-sun`
- `air-quality-leaf`
- `solar-card`
- `solarpunk-button`

### Legal (5)
- `legal-paper`
- `clause`
- `redline-sidebar`
- `diff-viewer`
- `legal-button`

### Soft Plastic (4)
- `neumorphic-card`
- `neumorphic-button`
- `thermostat-dial`
- `device-toggle`

### Festival (5)
- `festival-card`
- `soundwave-timeline`
- `crowd-heatmap`
- `ticket-wallet`
- `festival-button`

### Acid (5)
- `acid-card`
- `glitch-text`
- `sticker`
- `marquee`
- `acid-button`

### Clay (3)
- `clay-card`
- `clay-button`
- `clay-toggle`

### Blueprint (3)
- `blueprint-card`
- `cad-viewer`
- `layer-control`

---

## Recommended Priority Order

### Tier 1: Critical (Visibility Bug Related)
1. `neon-toggle` — Currently invisible without label prop
2. `glitch-heading` — Text visibility issues
3. `holographic-table` — Row visibility issues

### Tier 2: High Value (Complex Interactive Components)
4. `code-block` — Syntax highlighted code display
5. `pipeline-steps` — Multi-step status visualization
6. `metric-card` — Dashboard stats with trends
7. `clay-toggle` — Neumorphic toggle switch
8. `device-toggle` — Smart home toggle

### Tier 3: Theme Completion (Fill in remaining gaps by theme)
- Complete one theme at a time for consistency
- Suggested order: Engineering → SaaS → Music → remaining themes

---

## Implementation Checklist

For each undocumented component:

1. [ ] Review component source for prop interface
2. [ ] Add entry to `data/componentDocs.ts` with:
   - All props with types, required status, defaults
   - At least 1 usage example
   - Notes for special behaviors
3. [ ] Verify component renders in LivePlayground
4. [ ] Run `npm run check:components` to confirm no regressions

---

## Related Issues

- **BUG-component-visibility.md**: Fixed root cause (fallback preview not using `previewProps`)
- Components with complex props (arrays, objects) especially need docs for proper playground controls
