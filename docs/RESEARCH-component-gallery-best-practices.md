# UI Component Gallery Best Practices

> Research compiled 2026-01-09  
> Sources: Storybook, shadcn/ui, Component Gallery, Material UI, Ant Design, various design system documentation

---

## Executive Summary

Component galleries serve two audiences with distinct needs:
1. **Designers** — Need visual examples, usage guidelines, accessibility info, and design tokens
2. **Developers** — Need code snippets, props documentation, interactive playgrounds, and copy-paste implementation

The best component galleries provide **both** through layered information architecture: quick visual scanning for discovery, deep documentation for detailed implementation.

---

## 1. Information Architecture

### 1.1 Top-Level Navigation Structure

The most successful component libraries use a consistent navigation hierarchy:

| Section | Purpose | Examples |
|---------|---------|----------|
| **Home/Overview** | Hero, value prop, quick stats, visual preview grid | shadcn/ui, MUI |
| **Getting Started** | Installation, setup, configuration | All major libraries |
| **Components** | Browsable gallery of individual components | All |
| **Templates/Blocks** | Pre-built layouts using components | shadcn/ui "Blocks" |
| **Patterns** | Common UI patterns combining multiple components | Shopify Polaris |
| **Foundations** | Colors, typography, spacing, design tokens | IBM Carbon, Atlassian |
| **Hooks/Utilities** | Reusable logic and helper functions | React-use, usehooks-ts |

### 1.2 Component Categorization

Organize components using a consistent taxonomy:

```
├── Forms
│   ├── Input
│   ├── Select
│   ├── Checkbox
│   └── ...
├── Data Display
│   ├── Table
│   ├── Card
│   └── ...
├── Navigation
│   ├── Tabs
│   ├── Breadcrumb
│   └── ...
├── Feedback
│   ├── Alert
│   ├── Toast
│   └── ...
└── Layout
    ├── Grid
    ├── Stack
    └── ...
```

### 1.3 Search & Filtering

Essential for galleries with 50+ components:

- **Global search** — Fuzzy matching across component names, descriptions, and keywords
- **Category filters** — Show/hide component categories
- **Tag filters** — Filter by capability (e.g., "accessible", "animated", "form", "data")
- **Theme filters** — For multi-theme systems, filter by theme compatibility

---

## 2. Component Documentation

### 2.1 Essential Documentation Elements

Each component page should include:

| Element | Description | Priority |
|---------|-------------|----------|
| **Name & Description** | Clear, concise explanation of what it does | Required |
| **Live Preview** | Interactive example users can manipulate | Required |
| **Code Snippet** | Copy-paste implementation | Required |
| **Props/API Table** | All configurable options with types & defaults | Required |
| **Variants** | Visual examples of all variants | Required |
| **States** | All interactive states (hover, focus, disabled, error, loading) | Required |
| **Best Practices** | Do's and don'ts with visual examples | Recommended |
| **Accessibility** | ARIA, keyboard nav, screen reader notes | Recommended |
| **Related Components** | Links to similar/complementary components | Recommended |

### 2.2 Interactive Controls (Storybook Pattern)

Allow users to modify component props in real-time:

```tsx
// Example: Interactive playground controls
<Playground
  component={Button}
  controls={{
    variant: { options: ['primary', 'secondary', 'ghost'] },
    size: { options: ['sm', 'md', 'lg'] },
    disabled: { type: 'boolean' },
    children: { type: 'text', default: 'Click me' },
  }}
/>
```

This pattern (popularized by Storybook's "Controls" addon) lets users:
- Experiment without writing code
- Discover edge cases
- Understand the full API surface

### 2.3 Code Snippet Best Practices

```tsx
// ✅ Good: Complete, copy-paste ready
import { Button } from '@nexus/components'

export function Example() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Get Started
    </Button>
  )
}

// ❌ Bad: Fragment without context
<Button variant="primary">Get Started</Button>
```

Provide snippets for:
- **Basic usage** — Simplest implementation
- **With all props** — Full API demonstration
- **Common patterns** — Real-world use cases
- **Multiple frameworks** — If supporting React/Vue/etc.

---

## 3. Template & Theme Galleries

### 3.1 Template Gallery Design

Templates (full layouts) need different presentation than components:

| Element | Purpose |
|---------|---------|
| **Large preview image** | Hero-sized visual to show the full layout |
| **Interactive preview** | Click to view in full screen or new tab |
| **Component checklist** | List of components used in the template |
| **Use case labels** | "Dashboard", "E-commerce", "Landing Page", etc. |
| **View source** | Direct link to template code |
| **Quick deploy** | One-click to clone/fork |

### 3.2 Theme Gallery Design (Multi-Theme Systems)

For galleries showcasing multiple visual themes (like Nexus):

```
┌─────────────────────────────────────────────────────────┐
│                   THEME GALLERY                         │
├─────────────┬─────────────┬─────────────┬──────────────┤
│ ┌─────────┐ │ ┌─────────┐ │ ┌─────────┐ │ ┌─────────┐  │
│ │         │ │ │         │ │ │         │ │ │         │  │
│ │ Preview │ │ │ Preview │ │ │ Preview │ │ │ Preview │  │
│ │ Image   │ │ │ Image   │ │ │ Image   │ │ │ Image   │  │
│ │         │ │ │         │ │ │         │ │ │         │  │
│ └─────────┘ │ └─────────┘ │ └─────────┘ │ └─────────┘  │
│ Engineering │    Wellness │   Fintech   │    Gaming    │
│ Dark, Dev   │ Calm, Green │ Professional│   Vibrant    │
│ [View →]    │ [View →]    │ [View →]    │ [View →]     │
└─────────────┴─────────────┴─────────────┴──────────────┘
```

Key features:
- **Visual-first** — Large preview images dominate
- **Quick metadata** — Name, style keywords, icon
- **Hover preview** — Animated preview on hover (optional)
- **Click to deep dive** — Opens full template view

### 3.3 Theme Deep-Dive Page

When viewing a specific theme:

1. **Hero section** — Full-width preview of the theme
2. **Component showcase** — All components styled for that theme
3. **Color palette** — Theme's color tokens
4. **Typography** — Font families, sizes, weights
5. **Special effects** — Animations, transitions, unique interactions
6. **Download/Use** — How to apply this theme

---

## 4. Hooks Documentation

### 4.1 Common Utility Hooks

These are the most commonly documented hooks in component libraries:

| Hook | Purpose |
|------|---------|
| `useDebounce` | Delay value updates |
| `useThrottle` | Rate-limit function calls |
| `useLocalStorage` | Persist state to localStorage |
| `useMediaQuery` | Responsive breakpoint detection |
| `useClickOutside` | Detect clicks outside element |
| `useKeyPress` | Keyboard event handling |
| `useCopyToClipboard` | Copy text to clipboard |
| `useWindowSize` | Track window dimensions |
| `useIntersectionObserver` | Viewport visibility detection |
| `usePrevious` | Track previous value |

### 4.2 Hook Documentation Structure

Each hook should include:

```markdown
## useDebounce

Delays updating a value until a specified time has passed since the last change.
Useful for search inputs, form validation, and API calls.

### Usage

\`\`\`tsx
import { useDebounce } from '@nexus/hooks'

function SearchInput() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)
  
  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery)
    }
  }, [debouncedQuery])
  
  return <input value={query} onChange={e => setQuery(e.target.value)} />
}
\`\`\`

### Parameters

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | T | required | The value to debounce |
| delay | number | 500 | Delay in milliseconds |

### Returns

| Type | Description |
|------|-------------|
| T | The debounced value |

### Related

- [useThrottle](#usethrottle) — Rate-limit instead of delay
- [useLocalStorage](#uselocalstorage) — Persist debounced values
```

---

## 5. HomepageBest Practices

### 5.1 Component Library Homepage Structure

Based on analysis of shadcn/ui, MUI, Ant Design, and Chakra UI:

```
┌────────────────────────────────────────────────────────────────┐
│ HERO SECTION                                                   │
│ - Strong tagline (not developer-specific)                      │
│ - Value proposition (1-2 sentences)                            │
│ - Primary CTA: "Get Started" / "Browse Components"             │
│ - Secondary CTA: "View on GitHub"                              │
│ - Component count badge: "120+ components"                     │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│ VISUAL SHOWCASE                                                │
│ - Interactive component demos (not just screenshots)           │
│ - Auto-rotating examples showing different components          │
│ - Click to explore individual components                       │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│ THEME/TEMPLATE GRID (for multi-theme libraries)                │
│ - Visual grid of 6-12 theme previews                           │
│ - Click any to deep-dive                                       │
│ - "View all themes →" link                                     │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│ FEATURES/BENEFITS                                              │
│ - 3-4 key differentiators with icons                           │
│ - "Open Source", "Accessible", "Customizable", etc.            │
└────────────────────────────────────────────────────────────────┘
                              ↓
┌────────────────────────────────────────────────────────────────┐
│ SOCIAL PROOF (optional)                                        │
│ - GitHub stars, npm downloads                                  │
│ - Logos of companies using the library                         │
│ - Community size                                               │
└────────────────────────────────────────────────────────────────┘
```

### 5.2 Tagline Examples

| Library | Tagline |
|---------|---------|
| shadcn/ui | "The Foundation for your Design System" |
| MUI | "Move faster with intuitive React UI tools" |
| Chakra UI | "Create accessible React apps with speed" |
| Ant Design | "The world's second most popular React UI framework" |

For Nexus, consider:
- "28 Design Systems. One Registry."
- "Explore. Adapt. Build."
- "Component Gallery for Every Aesthetic"

---

## 6. Accessibility Best Practices

### 6.1 Gallery-Level Accessibility

- **Keyboard navigation** — All components browsable via Tab, Enter, Arrow keys
- **Skip links** — Jump to main content, component list, search
- **ARIA landmarks** — Proper `<nav>`, `<main>`, `<aside>` structure
- **Focus management** — Clear focus indicators, logical tab order
- **Screen reader support** — Descriptive labels, status announcements

### 6.2 Component-Level Documentation

Each component's accessibility section should cover:

1. **Keyboard interactions** — Which keys do what
2. **ARIA attributes** — Required roles and states
3. **Focus behavior** — Where focus moves on open/close
4. **Color contrast** — WCAG compliance notes
5. **Screen reader behavior** — What gets announced

---

## 7. Technical Implementation Patterns

### 7.1 Code Ownership Model (shadcn/ui pattern)

Instead of installing components as dependencies:

```bash
# Traditional
npm install @some-lib/button

# Code ownership (shadcn approach)
npx shadcn add button
# → Copies Button component source into your project
```

**Benefits:**
- Full customization control
- No version lock-in
- Smaller bundle (only what you use)
- Learning opportunity

### 7.2 Design Token Architecture

Use CSS custom properties for theming:

```css
:root {
  --color-primary: hsl(222 47% 11%);
  --color-primary-foreground: hsl(210 40% 98%);
  --radius: 0.5rem;
  --font-sans: 'Inter', sans-serif;
}

[data-theme="neon"] {
  --color-primary: hsl(280 100% 50%);
  --color-primary-foreground: hsl(0 0% 100%);
}
```

### 7.3 Story-Driven Development (Storybook pattern)

Co-locate stories with components:

```
components/
├── Button/
│   ├── Button.tsx
│   ├── Button.stories.tsx    ← Component stories
│   ├── Button.test.tsx       ← Tests
│   └── Button.css
```

Stories serve as:
- Living documentation
- Visual regression test cases
- Development playground
- Design review artifacts

---

## 8. Competitive Analysis

### 8.1 What Works Well

| Library | Standout Feature |
|---------|------------------|
| **shadcn/ui** | Code ownership model, beautiful defaults |
| **Storybook** | Interactive controls, addons ecosystem |
| **Component Gallery** | Cross-library component comparison |
| **MUI** | Comprehensive documentation, migration guides |
| **Radix UI** | Unstyled primitives, accessibility-first |
| **Chakra UI** | Theming system, composition patterns |

### 8.2 Common Pitfalls to Avoid

1. **Documentation debt** — Components exist but aren't documented
2. **Stale examples** — Code snippets that don't work with current version
3. **Missing states** — Only showing "happy path" component states
4. **Poor search** — Can't find components by alternative names
5. **Inaccessible examples** — Demos that fail WCAG criteria
6. **Framework lock-in** — Only supporting one framework

---

## 9. Recommendations for Nexus

Based on this research, Nexus should prioritize:

### Immediate (Phase 1)
1. **Create a proper homepage** with visual theme grid
2. **Implement routing** for Templates, Components, Hooks sections
3. **Add component isolation view** — View any component outside its template context

### Medium-Term (Phase 2)
4. **Standardize component documentation** — Every component needs props table, variants, states
5. **Add global search** — Fuzzy search across all components and templates
6. **Create hook documentation** — Extract and document common patterns

### Long-Term (Phase 3)
7. **Code snippets for each component** — Copy-paste ready
8. **Interactive playground** — Modify props in real-time
9. **Accessibility audit** — Ensure all components meet WCAG AA

---

## 10. Resources

### Design System Galleries
- [The Component Gallery](https://component.gallery) — 60 components, 95 design systems, 2,680 examples
- [Design Systems Repo](https://designsystemsrepo.com) — Curated list of design systems
- [Adele](https://adele.uxpin.com) — Repository of publicly available design systems

### Documentation Tools
- [Storybook](https://storybook.js.org) — Component development & documentation
- [Docusaurus](https://docusaurus.io) — Documentation websites
- [Nextra](https://nextra.vercel.app) — Next.js documentation framework

### Component Libraries to Study
- [shadcn/ui](https://ui.shadcn.com) — Code ownership model
- [Radix UI](https://radix-ui.com) — Accessible primitives
- [Headless UI](https://headlessui.com) — Unstyled components
- [MUI](https://mui.com) — Material Design implementation
- [Chakra UI](https://chakra-ui.com) — Composable component system

### Hooks Libraries
- [usehooks-ts](https://usehooks-ts.com) — TypeScript React hooks
- [react-use](https://github.com/streamich/react-use) — Collection of essential hooks
- [ahooks](https://ahooks.js.org) — High-quality React Hooks library
