# Theme Variant Creation Process

This document outlines the process for creating alternative theme variants for templates, based on lessons learned from the Fintech Dark/Light implementation.

## Overview

Each template can define `themeVariants` — alternative visual styles that maintain the same layout but change colors, typography, radius, and shadows.

```typescript
// Example from registry.ts
{
    id: 'fintech',
    name: 'Terminal',
    themeVariants: [
        { id: 'fintech-dark', name: 'Dark Mode', playgroundThemeId: 'fintech' },
        { id: 'fintech-light', name: 'Light Mode', playgroundThemeId: 'fintech-light' },
    ],
    // ...
}
```

---

## Step-by-Step Process

### 1. Create the Theme File

Create a new PlaygroundTheme in `/data/themes/`:

```typescript
// data/themes/fintech-light.ts
export const fintechLight: PlaygroundTheme = {
    id: 'fintech-light',
    name: 'Fintech Light',
    mode: 'light',
    colors: {
        background: '#f8fafc',
        foreground: '#0f172a',
        // ... full color palette
    },
    radius: 'md',
    shadow: 'md',
    typography: { /* ... */ }
}
```

**Variant Options:**
- **Colors only** — Same typography/radius/shadow (e.g., Fintech Dark → Light)
- **Full rebrand** — Different typography, radius, shadow (e.g., Legal Traditional → Modern)

### 2. Export and Register

1. Add export to `data/themes/index.ts`
2. Add to `data/playgroundThemes.ts` array
3. Add `themeVariants` array to template in `lib/registry.ts`

### 3. Audit for Hardcoded Colors ⚠️

**This is critical.** Most components have been updated to use theme colors, but some remnants of hardcoded Tailwind classes remain.

#### Common Hardcoded Patterns to Find:

```bash
# Search for hardcoded color classes in template files
grep -n "text-white\|text-zinc\|bg-zinc\|border-zinc" templates/FintechDashboard.tsx
```

| Pattern | Should Replace With |
|---------|---------------------|
| `text-white` | `style={{ color: theme.colors.foreground }}` |
| `text-zinc-400/500` | `theme.colors.mutedForeground` |
| `bg-zinc-800/900` | `theme.colors.secondary` or `theme.colors.muted` |
| `border-zinc-700` | `theme.colors.border` |

#### Fintech Issues Found & Fixed:

| Component | Issue | Fix |
|-----------|-------|-----|
| Quick Transfer title | `text-white` | `theme.colors.foreground` |
| Quick Transfer input | `bg-zinc-900 text-white` | `theme.colors.muted`, `theme.colors.foreground` |
| Quick Transfer avatars | `bg-zinc-800 text-zinc-400` | `theme.colors.secondary`, `theme.colors.mutedForeground` |
| TransactionList icons | `secondary` (light bg) | `secondaryForeground` (dark fg) |

### 4. Verify Contrast

After applying the theme variant:

1. Check all text is readable on its background
2. Check icons are visible
3. Check interactive elements have visible borders/outlines
4. Check hover/focus states still work

---

## Automation Strategy

> [!IMPORTANT]
> Manual checking doesn't scale. We need automated tests to detect hardcoded colors.

### Proposed Test Suite

#### 1. Static Analysis (Jest Test) ✅ IMPLEMENTED

Run the hardcoded color detection test:

```bash
npm run test:static
```

This scans all template and component files for patterns like:
- `text-white`, `text-black`, `bg-white`, `bg-black`
- `text-zinc-*`, `bg-zinc-*`, `border-zinc-*`
- `text-slate-*`, `bg-slate-*`, `border-slate-*`
- `text-gray-*`, `bg-gray-*`, `border-gray-*`
- `text-stone-*`, `bg-stone-*`, `border-stone-*`

Output shows violations per file with line numbers.

#### 2. Visual Regression Tests

Use Playwright/Chromatic to capture screenshots of each template in both Dark and Light modes, flagging contrast issues:

```typescript
// __tests__/theme-variants.test.ts (proposed)
test.describe('Theme Variants', () => {
    test('fintech light mode has proper contrast', async ({ page }) => {
        await page.goto('/templates/fintech');
        await page.click('[data-testid="theme-switcher"]');
        await page.click('text=Light Mode');
        
        // Check for invisible text (same color as background)
        const elements = await page.$$('[style*="color"]');
        for (const el of elements) {
            const color = await el.evaluate(e => getComputedStyle(e).color);
            const bgColor = await el.evaluate(e => getComputedStyle(e).backgroundColor);
            expect(contrastRatio(color, bgColor)).toBeGreaterThan(4.5); // WCAG AA
        }
    });
});
```

#### 3. Component Prop Audit

Script to verify all components accept and use theme props:

```bash
# Find components that DON'T use useTheme
grep -L "useTheme" components/**/*.tsx
```

---

## Checklist for New Variants

- [ ] Created theme file in `/data/themes/`
- [ ] Added export to `index.ts`
- [ ] Added to `playgroundThemes.ts`
- [ ] Added `themeVariants` to template in `registry.ts`
- [ ] Ran grep for hardcoded colors in template
- [ ] Fixed all hardcoded colors
- [ ] Visually verified contrast in both modes
- [ ] (Future) Added visual regression test
