# Theme Architecture Refactoring Plan

## Problem Statement

The current theming system has grown organically and now contains three interconnected concepts that create confusion and bugs:

1. **Template Theme** (`templateTheme` / `setTheme`)
2. **Scoped Themes** (`scopedThemes` / `setScopedTheme`)  
3. **Playground Theme** (`currentPlaygroundTheme` / `setPlaygroundTheme`)

Components consume `currentPlaygroundTheme` for design tokens, but setting it requires understanding the indirect relationship between all three systems.

---

## Current Architecture

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         ThemeContext State                                │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  templateTheme: Theme | null                                             │
│       ↓                                                                  │
│  currentScope = templateTheme?.visualLanguageId || 'professional'        │
│       ↓                                                                  │
│  scopedThemes: { gilded: 'legal', cyberpunk: 'scifi', ... }             │
│       ↓                                                                  │
│  activeLikeThemeId = scopedThemes[currentScope]                         │
│       ↓                                                                  │
│  currentPlaygroundTheme = lookup(activeLikeThemeId)  ← WHAT COMPONENTS  │
│                                                         ACTUALLY USE     │
└──────────────────────────────────────────────────────────────────────────┘
```

### The Bug This Caused

When `MagazineDashboard` called `setScopedTheme('gilded', 'magazine')`:
- ✅ Updated `scopedThemes['gilded'] = 'magazine'`
- ❌ But `templateTheme` was null, so `currentScope = 'professional'`
- ❌ Result: `activeLikeThemeId = scopedThemes['professional'] = 'fintech'` (dark theme!)

---

## Proposed Simplification

### New Model: Single Source of Truth

```typescript
interface ThemeState {
  // The active design tokens (what components consume)
  currentTheme: PlaygroundTheme;
  currentThemeId: string;
  
  // Optional: Visual language preferences (for smart defaults)
  visualLanguageDefaults: Record<VisualLanguageId, string>;
}
```

### Simplified API

| Current (Confusing) | Proposed (Clear) | Purpose |
|---------------------|------------------|---------|
| `setPlaygroundTheme(id)` | `setTheme(id)` | Set the active theme |
| `setScopedTheme(lang, id)` | `setVisualLanguageDefault(lang, id)` | Set a preference |
| `currentPlaygroundTheme` | `theme` | Access design tokens |

---

## Migration Plan

### Phase 1: Audit & Document
- [ ] List all usages of `setScopedTheme` across templates
- [ ] List all usages of `setPlaygroundTheme` 
- [ ] Document which approach each template currently uses

### Phase 2: Standardize Templates
- [x] `MagazineDashboard` → `setPlaygroundTheme('magazine')` ✅ (done)
- [x] `GridDashboard` → `setPlaygroundTheme('grid')` ✅ (done)
- [ ] Audit remaining templates and update as needed

### Phase 3: Rename & Simplify Context
- [ ] Rename `setPlaygroundTheme` → `setTheme`
- [ ] Rename `currentPlaygroundTheme` → `theme` (already aliased)
- [ ] Deprecate `setScopedTheme` with console warning
- [ ] Simplify derivation logic to direct lookup

### Phase 4: Cleanup
- [ ] Remove deprecated code after migration period
- [ ] Update component documentation
- [ ] Add JSDoc comments explaining the simplified API

---

## Files Affected

| File | Changes Needed |
|------|----------------|
| `context/ThemeContext.tsx` | Rename functions, simplify logic |
| `templates/*.tsx` | Update to use new API |
| `docs/ARCHITECTURE.md` | Update theming section |

---

## Benefits

1. **Clarity**: One function to set theme, one variable to read it
2. **Fewer Bugs**: No indirect dependencies that break silently
3. **Easier Onboarding**: New developers understand immediately
4. **Better DX**: Autocomplete shows `setTheme('magazine')` not three options
