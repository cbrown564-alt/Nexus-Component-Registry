# Theme Context & Component Rendering Refactor

## Problem Analysis

### Root Cause

The current theme system has three interconnected issues stemming from how themes persist across navigation and how component previews are rendered:

1. **Global theme persistence causes visual inconsistency on main pages**
2. **Component previews don't match their intended template context**
3. **Shared components only work well on dark backgrounds**

---

## Issue 1: Template Components Don't Render Correctly in TemplateComponentsPage

### Symptoms
- `SwissGrid` renders blank (it's a layout container with no visible styles on its own)
- `SwissButton` shows as a red rectangle (only partial rendering)
- Template-specific components don't look correct out of context

### Root Cause
In `TemplateComponentsPage.tsx`, the `ComponentCard` preview uses a simplified binary background:
```tsx
// Line 45-46
<div className={`h-40 flex items-center justify-center ... ${
  isLight ? 'bg-zinc-100/50' : 'bg-zinc-950'
}`}>
```

This binary `isLight` flag (derived from `theme.category === 'light'`) doesn't capture:
- The actual template background color (e.g., Swiss is `bg-[#F5F5F5]`, not `bg-zinc-100/50`)
- Template-specific CSS variables or context
- The visual environment the component was designed for

### Solution
Component previews on the TemplateComponentsPage should use the **actual template background** (`theme.backgroundColor`) rather than a generic light/dark approximation.

---

## Issue 2: Compatible Shared Components Look Bad on Light Themes

### Symptoms
- `StatsCard` on Swiss template shows a dark translucent card with `text-white` on a light background
- Shared components are optimized for dark mode only
- The contrast is poor and the aesthetic clashes

### Root Cause
Shared components like `StatsCard` use `SpotlightCard` which has dark-mode styling:
```tsx
// StatsCard uses hardcoded dark colors
<div className="text-sm font-medium text-zinc-500">...</div>
<div className="text-3xl font-bold text-white">...</div>
```

When viewed in a template context (e.g., Swiss = light theme), these dark-mode-only components look out of place.

### Solution: Context-Aware Rendering for Shared Components

1. **When accessed via `/templates/:id/components`**: Shared components should attempt to adapt to the template theme (if possible) OR clearly indicate they're shown in their "native" dark context

2. **Add a toggle on shared component cards**: Allow users to switch between:
   - "Template Context" - rendered on template background
   - "Native Context" - rendered on dark background (default for shared)

3. **Long-term**: Make shared components theme-aware using CSS variables or a `variant` prop

---

## Issue 3: Component Detail Page Uses Wrong Background

### Symptoms
- Viewing `/components/swiss/swiss-divider` shows a black background
- The `SwissDivider` (which has `bg-black` divider line) is invisible
- Theme was incorrectly identified as "dark"

### Root Cause
`ComponentPage.tsx` doesn't consider the component's source theme when rendering:
```tsx
// Line 127 in LivePlayground.tsx
<div className={`... ${darkPreview ? 'bg-zinc-950' : 'bg-white'}`}>
```

The `darkPreview` state defaults to `true`, so:
- Swiss components (light theme) render on dark background initially
- The light/dark toggle exists but starts in the wrong state

### Solution
Initialize `darkPreview` based on the component's theme:
```tsx
const theme = getThemeById(component.theme)
const [darkPreview, setDarkPreview] = useState(theme?.category !== 'light')
```

Better yet, use the actual `theme.backgroundColor` for accurate preview.

---

## Issue 4: Main Pages Inherit Template Theme (Side Effect)

### Symptoms
- After viewing the "Play" (kids) template, returning to `/templates` shows the sky-blue theme
- Main navigation pages (Home, Templates, Components, etc.) become hard to read
- Theme persistence is a feature for templates but a bug for registry pages

### Root Cause
In `RootLayout.tsx`, the `Background` component uses `currentTheme`:
```tsx
function Background() {
    const { currentTheme } = useTheme()
    return (
        <div className={`... ${currentTheme.backgroundColor}`}>
```

Once a template is visited, `setTheme(id)` is called in `TemplatePage.tsx`:
```tsx
useEffect(() => {
    if (id) {
        setTheme(id)
    }
}, [id, setTheme])
```

The theme persists globally, so all pages get that template's background.

### Solution
Main registry pages should have a **fixed dark theme** that isn't affected by template visits:

1. Add a `resetToDefaultTheme()` function or concept of "registry mode" vs "template mode"
2. Main routes (`/`, `/templates`, `/components`, `/hooks`, `/tokens`) should use a consistent dark background
3. Only `/templates/:id` and `/templates/:id/components` should use the template theme

---

## Proposed Architecture

### ThemeContext Enhancement

```tsx
interface ThemeContextType {
    // Current template theme (when viewing a template)
    currentTemplateTheme: Theme | null
    setTemplateTheme: (id: string) => void
    clearTemplateTheme: () => void
    
    // Registry always uses this
    registryTheme: Theme // Fixed dark theme
    
    // Computed: which theme should Background use?
    activeTheme: Theme
    isInTemplateMode: boolean
}
```

### Route-Based Theme Mode

```tsx
// In RootLayout or via a hook
const location = useLocation()
const isTemplatePage = location.pathname.startsWith('/templates/') && 
                       location.pathname !== '/templates'

useEffect(() => {
    if (!isTemplatePage) {
        clearTemplateTheme() // Reset to registry dark theme
    }
}, [location.pathname])
```

### Component Preview Backgrounds

| Page | Preview Background |
|------|-------------------|
| `/templates/:id/components` (In Template section) | Actual `theme.backgroundColor` |
| `/templates/:id/components` (Shared section) | Toggle: template bg OR dark bg |
| `/components` (All components page) | Dark (`bg-zinc-950`) |
| `/components/:theme/:name` (Detail page) | Based on component's source theme |

---

## Implementation Phases

### Phase 1: Fix Component Previews in TemplateComponentsPage
- Use actual `theme.backgroundColor` for component card previews
- Ensure components render in their intended visual environment

### Phase 2: Fix ComponentPage Initial State  
- Initialize `darkPreview` based on component's theme category
- Consider using actual theme background colors

### Phase 3: Fix Main Page Theme Persistence
- Implement "registry mode" vs "template mode" in ThemeContext
- Reset to dark theme when navigating away from template pages
- Keep theme persistence only within `/templates/:id/*` routes

### Phase 4: Shared Component Context Toggle (Enhancement)
- Add toggle for shared components to switch between template/native context
- Consider making key shared components theme-aware

---

## Files to Modify

1. `context/ThemeContext.tsx` - Add template mode concept
2. `layouts/RootLayout.tsx` - Route-aware background selection
3. `pages/TemplateComponentsPage.tsx` - Use actual theme backgrounds
4. `components/docs/LivePlayground.tsx` - Theme-aware initial state
5. `pages/ComponentPage.tsx` - Pass theme info to playground

---

## Success Criteria

1. ✅ Swiss components render correctly on Swiss background in component library
2. ✅ SwissDivider detail page shows light background by default
3. ✅ Navigating from any template back to `/templates` shows dark theme
4. ✅ Shared components have clear visual treatment when shown in template context
