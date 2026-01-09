# Nexus Component Registry — Project Status

> Last Updated: 2026-01-09

## Executive Summary

Nexus Component Registry is a React-based UI component showcase featuring **28 distinct design themes** and **120+ components**. The project contains rich visual diversity but requires architectural restructuring to achieve its full vision as an explorable component library—following best practices from shadcn/ui, Storybook, and other leading component galleries.

---

## Current State

### What Exists ✅

| Area | Status | Details |
|------|--------|---------|
| **Design Themes** | ✅ 28 complete | All 28 themes have dashboards and styling |
| **Components** | ✅ 124+ files | Distributed across theme directories |
| **Animations** | ✅ Working | Framer Motion integration throughout |
| **Theme Switching** | ✅ Working | Sidebar allows real-time theme switching |
| **Build System** | ✅ Complete | Vite + TypeScript configured |
| **Responsive Sidebar** | ✅ Working | Expands on hover |

### What's Missing ❌

| Area | Gap | Best Practice Reference |
|------|-----|------------------------|
| **Homepage** | Shows EngineeringDashboard instead of landing page | shadcn/ui, MUI: Visual-first hero with feature grid |
| **Component Gallery** | No way to browse individual components | Component Gallery: Searchable, filterable catalog |
| **Template Gallery** | No bird's-eye view of all themes | Design system galleries: Visual grid with previews |
| **Component Isolation** | Can't view components outside template context | Storybook: Isolated component rendering |
| **Props Documentation** | No API tables or code snippets | shadcn/ui: Copy-paste code with props table |
| **Hooks Section** | No hook documentation or examples | usehooks-ts: Hook docs with usage examples |
| **Routing** | Single-page, no proper navigation | Standard SPA: React Router or similar |
| **Search** | Can't search components/templates | Essential for 120+ components |

---

## Architectural Issues

### 1. Homepage Problem

**Current State:**
`EngineeringDashboard.tsx` serves as the homepage with developer-focused copy:
> "A collection of high-performance React components designed for engineering-led teams."

**Best Practice (from research):**
A component library homepage should include:

```
┌────────────────────────────────────────────────────────────────┐
│ HERO SECTION                                                   │
│ - Strong tagline (audience-neutral)                            │
│ - Value proposition (1-2 sentences)                            │
│ - Primary CTA: "Browse Components" / "Explore Themes"          │
│ - Stats badge: "28 themes • 120+ components"                   │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│ THEME PREVIEW GRID                                             │
│ - Visual grid of 6-12 theme previews                           │
│ - Click any to deep-dive                                       │
│ - "View all 28 themes →" link                                  │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│ FEATURES / DIFFERENTIATORS                                     │
│ - 3-4 key benefits with icons                                  │
│ - "Production-Ready", "28 Themes", "Open Source", etc.         │
└────────────────────────────────────────────────────────────────┘
```

**Tagline options:**
- "28 Design Systems. One Registry."
- "Explore. Adapt. Build."
- "Component Gallery for Every Aesthetic"

---

### 2. Template vs. Component Confusion

**Current inconsistency:**
| Template Type | Examples | Issue |
|---------------|----------|-------|
| Full layouts | LegacyOS, Cockpit, SciFi | ✅ Proper templates |
| Loose grids | Engineering, Wellness | ❌ Component dumps, not templates |

**Best Practice (from research):**

| View | Purpose | Content |
|------|---------|---------|
| **Template** | Full dashboard showing components in context | Complete layout with realistic data |
| **Component** | Isolated, focused view of a single component | Live preview + code + props table |

Each component page should include:
- Live interactive preview
- Copy-paste code snippet
- Props/API table with types and defaults
- All variants and states (hover, focus, disabled, error)
- Accessibility notes
- Related components

---

### 3. Missing Navigation Architecture

**Current:** Sidebar has placeholder links (Components, Templates, Hooks, Settings)

**Required (aligned with research):**

| Route | Page | Elements |
|-------|------|----------|
| `/` | Homepage | Hero, theme grid, features, stats |
| `/templates` | Template Gallery | Visual grid of 28 themes with previews |
| `/templates/:id` | Template View | Full dashboard with component annotations |
| `/components` | Component Gallery | Searchable grid, filter by theme/type |
| `/components/:theme/:name` | Component View | Preview + code + props + variants |
| `/hooks` | Hooks Documentation | Usage, parameters, returns for each hook |

---

### 4. Missing Component Documentation

**Current:** Components exist but lack documentation.

**Best Practice (Storybook pattern):**

Each component needs:
```markdown
## ComponentName

Brief description of what the component does.

### Preview
[Interactive live preview with controls to modify props]

### Usage
\`\`\`tsx
import { ComponentName } from '@nexus/components/theme'

<ComponentName variant="primary" size="lg">
  Content
</ComponentName>
\`\`\`

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Visual style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Size variant |

### Variants
[Visual grid showing all variant combinations]

### States
[Examples showing hover, focus, active, disabled, error, loading]

### Accessibility
- Keyboard: Tab to focus, Enter/Space to activate
- ARIA: Uses role="button", aria-pressed for toggle
```

---

## Component Inventory

### Shared Components (`/components/ui/`)

| Component | Description | Documented |
|-----------|-------------|------------|
| SpotlightCard | Mouse-tracking spotlight effect | ❌ |
| GlowButton | Gradient border button | ❌ |
| Terminal | Fake terminal display | ❌ |
| StatsCard | Metric display card | ❌ |
| ActivityFeed | Live activity log | ❌ |
| FileTree | Directory explorer | ❌ |
| PlanPicker | Pricing tier selector | ❌ |
| TeamMembers | Avatar group display | ❌ |
| ShortcutGuide | Keyboard shortcuts panel | ❌ |
| DeploymentPipeline | CI/CD visualization | ❌ |
| IntegrationToggle | Feature toggle switch | ❌ |
| BentoCard | Grid layout card | ❌ |

### Theme-Specific Components

| Theme | Count | Notable Components | Documented |
|-------|-------|-------------------|------------|
| fintech | 5 | DigitalCard, MarketTicker, PortfolioChart | ❌ |
| game | 5 | CharacterProfile, InventoryGrid, QuestLog | ❌ |
| cockpit | 6 | Speedometer, ClimateControl, LaneAssist | ❌ |
| legacy | 4 | LegacyWindow, LegacyButton, DesktopIcon | ❌ |
| saas | 4 | CustomerTable, MetricCard, RevenueChart | ❌ |

**Documentation debt:** 0/124 components documented

---

## Planned Hooks

Based on existing component patterns, extract these hooks:

| Hook | Purpose | Source Pattern |
|------|---------|----------------|
| `useSpotlight` | Mouse tracking for spotlight effects | SpotlightCard |
| `useMousePosition` | Track mouse coordinates | Various hover effects |
| `useTheme` | Current theme context and switching | App.tsx theme state |
| `useAnimatedMount` | Staggered mount animations | Dashboard entry animations |
| `useDebounce` | Delay value updates | Search inputs |
| `useMediaQuery` | Responsive breakpoint detection | Layout components |
| `useClickOutside` | Detect clicks outside element | Dropdowns, modals |
| `useCopyToClipboard` | Copy code snippets | Code preview |

---

## Roadmap

### Phase 1: Foundation (Priority: HIGH) 🎯

**Goal:** Establish proper information architecture

- [ ] **Homepage** (`/pages/HomePage.tsx`)
  - [ ] Hero with "28 Design Systems. One Registry." tagline
  - [ ] Visual grid preview of 6-8 featured themes
  - [ ] Stats: "28 themes • 120+ components • Open Source"
  - [ ] Feature highlights (3-4 cards)
  - [ ] CTAs: "Browse Components", "Explore Themes"

- [ ] **Routing** (React Router)
  - [ ] `/` → Homepage
  - [ ] `/templates` → Template gallery
  - [ ] `/templates/:id` → Individual template
  - [ ] `/components` → Component gallery
  - [ ] `/components/:theme/:name` → Component view
  - [ ] `/hooks` → Hooks documentation

- [ ] **Basic Search**
  - [ ] Global search input in header
  - [ ] Fuzzy matching across component/template names

**Estimated effort:** 2-3 days

---

### Phase 2: Template Gallery (Priority: HIGH)

**Goal:** Enable theme exploration

- [ ] **Template Gallery Page** (`/pages/TemplatesPage.tsx`)
  - [ ] Visual grid of all 28 themes
  - [ ] Large preview images
  - [ ] Theme name + category labels
  - [ ] Click to view full template

- [ ] **Template Deep-Dive View**
  - [ ] Full-screen template preview
  - [ ] Component annotations (click to learn more)
  - [ ] "View Components" link to filtered component gallery

- [ ] **Template Upgrades** (audit inconsistent templates)
  - [ ] Engineering → Full dev dashboard (not component grid)
  - [ ] Wellness → Complete wellness app
  - [ ] Education → Learning management system
  - [ ] Magazine → Editorial layout
  - [ ] Ecommerce → Full storefront

**Estimated effort:** 3-4 days

---

### Phase 3: Component Gallery (Priority: MEDIUM)

**Goal:** Enable component discovery and reuse

- [ ] **Component Gallery Page** (`/pages/ComponentsPage.tsx`)
  - [ ] Grid of component cards with preview thumbnails
  - [ ] Filter by theme (dropdown/checkboxes)
  - [ ] Filter by category (Forms, Data Display, Navigation, etc.)
  - [ ] Search by name

- [ ] **Component Card** (`/components/gallery/ComponentCard.tsx`)
  - [ ] Preview thumbnail
  - [ ] Component name + theme badge
  - [ ] Category label
  - [ ] Click to view details

- [ ] **Component Detail Page** (`/pages/ComponentPage.tsx`)
  - [ ] Interactive live preview
  - [ ] Props controls (Storybook-style)
  - [ ] Copy-paste code snippet
  - [ ] Props table with types/defaults
  - [ ] Variants showcase
  - [ ] States showcase (hover, focus, disabled)

**Estimated effort:** 4-5 days

---

### Phase 4: Component Documentation (Priority: MEDIUM)

**Goal:** Document all 124+ components

- [ ] **Documentation format:** MDX or structured JSON
- [ ] **Per-component:**
  - [ ] Description
  - [ ] Usage code snippet
  - [ ] Props table
  - [ ] Variants list
  - [ ] Accessibility notes

- [ ] **Prioritized components:**
  1. Shared UI components (12)
  2. Cockpit theme (most realistic)
  3. Legacy theme (most complete)
  4. Fintech theme (data-focused)

**Estimated effort:** 5-7 days (ongoing)

---

### Phase 5: Hooks Section (Priority: LOW)

**Goal:** Extract and document utility patterns

- [ ] **Extract hooks from existing code:**
  - [ ] `useSpotlight`
  - [ ] `useMousePosition`
  - [ ] `useTheme`
  - [ ] `useAnimatedMount`

- [ ] **Add common utility hooks:**
  - [ ] `useDebounce`
  - [ ] `useMediaQuery`
  - [ ] `useClickOutside`
  - [ ] `useCopyToClipboard`

- [ ] **Hooks documentation page:**
  - [ ] Hook name + description
  - [ ] Usage example
  - [ ] Parameters table
  - [ ] Return value documentation
  - [ ] Interactive playground

**Estimated effort:** 2-3 days

---

### Phase 6: Polish (Priority: LOW)

- [ ] Keyboard navigation (Tab, Enter, Arrow keys)
- [ ] ARIA landmarks and labels
- [ ] Skip links for accessibility
- [ ] Mobile responsive layout
- [ ] Code export feature
- [ ] Theme comparison view

**Estimated effort:** 3-4 days

---

## Technical Debt

| Issue | Impact | Effort | Priority |
|-------|--------|--------|----------|
| TailwindCSS via CDN | Performance, versioning | Medium | High |
| Large App.tsx (~530 lines) | Maintainability | Medium | High |
| No routing | Navigation blocked | Medium | **Blocker** |
| No testing | Reliability | High | Medium |
| No linting | Code quality | Low | Low |
| Inline styles mixed with Tailwind | Consistency | Medium | Low |
| No documentation | Usability | High | High |

---

## Design Decisions Log

### 2026-01-09: Architecture Clarification

**Decision:** Separate Templates (full layouts) from Components (isolated views)

**Rationale (from research):**
- Templates show how components work together in context
- Components show individual building blocks in isolation
- Best practice from Storybook, shadcn/ui, Component Gallery
- Current mixing confuses users about what they're viewing

**Impact:**
- Major restructure of navigation
- New pages needed (gallery views)
- Templates need to be reviewed for completeness

### 2026-01-09: Documentation Format

**Decision:** Follow Storybook/shadcn documentation pattern

**Pattern:**
- Live preview with interactive controls
- Copy-paste code snippets
- Props table with types and defaults
- Variants and states showcase
- Accessibility notes

**Rationale:**
- Industry standard for component documentation
- Serves both designers (visual) and developers (code)
- Enables discoverability and learning

---

## Research Reference

See [docs/RESEARCH-component-gallery-best-practices.md](./docs/RESEARCH-component-gallery-best-practices.md) for:

- Information architecture patterns
- Component documentation standards
- Homepage best practices
- Hooks documentation format
- Competitive analysis
- Accessibility requirements

---

## Related Documents

- [README.md](./README.md) — Project overview and setup
- [docs/RESEARCH-component-gallery-best-practices.md](./docs/RESEARCH-component-gallery-best-practices.md) — Best practices research
- [CONTRIBUTING.md](./CONTRIBUTING.md) — *(Planned)* Contribution guidelines
