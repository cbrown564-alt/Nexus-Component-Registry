# Visual Language Architecture Implementation Plan

> **Goal**: Add a Visual Languages layer on top of themes/templates to create a 4-tier hierarchy: **Visual Languages → Themes → Templates → Components**

## Current State Analysis

### Existing Architecture
- **28 Templates** in `/templates/*.tsx` (dashboard layouts)
- **38 Theme files** in `/data/themes/*.ts` (extracted design tokens)
- **9 PlaygroundThemes** in `/data/playgroundThemes.ts` (active in `/themes`)
- **Partial Visual Languages** in `registry.ts` (6 types, but minimal)

### Current Collections (used in TemplatesPage swimlanes)
| Collection     | Templates Mapped |
|----------------|------------------|
| professional   | engineering, saas, fintech, productivity, grid, legal |
| consumer       | wellness, education, magazine, ecommerce, social, music, food, kitchen, kids |
| scifi          | scifi, cockpit, blueprint |
| retro          | game, eink, legacy |
| experimental   | brutalist, solarpunk, softplastic, festival, acid, clay, swiss |
| nature         | (empty - not used) |

---

## Proposed Changes

### Phase 1: Visual Languages Layer

#### Mapping to 8 Visual Languages

Mapping existing templates to the 6 Visual Languages from the strategy doc, plus 3 additional to capture all templates:

| Visual Language | Strategy Name | Templates |
|-----------------|---------------|-----------|
| **gilded** | "The Gilded Machine" (Art Deco) | `legal`, `magazine` |
| **constructivist** | "The Constructivist" (Bauhaus) | `swiss` |
| **brutalist** | "Neo-Brutalism" (Raw Web) | `brutalist`, `acid`, `legacy` |
| **glass** | "Liquid Glass" (Glassmorphism) | `cockpit`, `fintech`, `saas`, `festival` |
| **cyberpunk** | "Cyberpunk & Glitch" | `scifi`, `blueprint`, `game`, `grid` |
| **organic** | "Nature Distilled" (Biophilic) | `wellness`, `solarpunk`, `kitchen`, `food` |
| **consumer** | Consumer & Lifestyle | `social`, `music`, `education`, `ecommerce`, `kids` |
| **professional** | Professional & Enterprise | `engineering`, `productivity` |
| **skeuomorphic** | Skeuomorphism (Tactile 3D) | `softplastic`, `clay`, `eink` |

---

#### [MODIFY] [registry.ts](file:///Users/cobro/Code/Nexus-Component-Registry/lib/registry.ts)

Update the `VisualLanguageId` type and `visualLanguages` array:

```diff
-export type VisualLanguageId = 'professional' | 'consumer' | 'scifi' | 'retro' | 'experimental' | 'nature'
+export type VisualLanguageId = 'gilded' | 'constructivist' | 'brutalist' | 'glass' | 'cyberpunk' | 'organic' | 'consumer' | 'professional' | 'skeuomorphic'

export const visualLanguages: VisualLanguage[] = [
-   { id: 'professional', name: 'Professional', description: 'Clean, data-dense interfaces for enterprise and SaaS' },
-   { id: 'consumer', name: 'Consumer', description: 'Friendly, accessible designs for mass-market apps' },
-   { id: 'scifi', name: 'SciFi', description: 'Futuristic, high-tech interfaces with distinct aesthetics' },
-   { id: 'retro', name: 'Retro', description: 'Nostalgic designs calling back to previous computing eras' },
-   { id: 'experimental', name: 'Experimental', description: 'Pushing boundaries with brutalist or neo-modern styles' },
-   { id: 'nature', name: 'Nature', description: 'Organic, calm designs inspired by the natural world' },
+   { id: 'gilded', name: 'The Gilded Machine', description: 'Art Deco verticality, geometric intricacy, and material richness' },
+   { id: 'constructivist', name: 'The Constructivist', description: 'Bauhaus rationalism with primary colors and strict grids' },
+   { id: 'brutalist', name: 'Neo-Brutalism', description: 'Honest UI with hard shadows and raw typography' },
+   { id: 'glass', name: 'Liquid Glass', description: 'Translucent layering with optical depth and refraction' },
+   { id: 'cyberpunk', name: 'Cyberpunk & Glitch', description: 'High-tech dystopia with neon, HUDs, and glitch effects' },
+   { id: 'organic', name: 'Nature Distilled', description: 'Organic curves, earth tones, and biophilic design' },
+   { id: 'consumer', name: 'Consumer & Lifestyle', description: 'Friendly, accessible designs for mass-market apps' },
+   { id: 'professional', name: 'Professional & Enterprise', description: 'Clean, data-dense interfaces for business tools' },
+   { id: 'skeuomorphic', name: 'Skeuomorphism', description: 'Tactile 3D aesthetics with soft shadows and material depth' },
]
```

Update all template `visualLanguageId` mappings to use new IDs.

---

#### [MODIFY] [TemplatesPage.tsx](file:///Users/cobro/Code/Nexus-Component-Registry/pages/TemplatesPage.tsx)

Replace current 5 hardcoded swimlanes with dynamic rendering from `visualLanguages`:

```tsx
import { visualLanguages, getTemplatesByLanguage } from '@/lib/registry'

// In component:
{visualLanguages.map((lang) => {
  const templates = getTemplatesByLanguage(lang.id)
  if (templates.length === 0) return null
  return (
    <TemplateSwimlane
      key={lang.id}
      title={lang.name}
      themes={templates.map(t => ({ ...t, collection: t.visualLanguageId }))}
    />
  )
})}
```

---

#### [MODIFY] [ComponentsPage.tsx](file:///Users/cobro/Code/Nexus-Component-Registry/pages/ComponentsPage.tsx)

Add Visual Language filter section to sidebar, above existing Theme filter:

```tsx
import { visualLanguages, VisualLanguageId } from '@/lib/registry'

// State
const [visualLanguageFilter, setVisualLanguageFilter] = useState<VisualLanguageId | 'all'>('all')

// Filter logic
if (visualLanguageFilter !== 'all') {
  // Map component theme → template → visualLanguageId
  const template = templates.find(t => t.id === comp.theme)
  if (!template || template.visualLanguageId !== visualLanguageFilter) return false
}
```

---

### Phase 2: Theme Extraction Completion

> [!IMPORTANT]
> The `ThemeContext.tsx` and 26 templates still use the OLD 6 visual language IDs. This needs updating to the new 9-language system.

#### Issue Summary
| Category | Count | Details |
|----------|-------|---------|
| Templates missing `setScopedTheme()` | 2 | LegacyOSDashboard, SciFiDashboard |
| Templates using wrong visual language IDs | 26 | All use 'professional', 'consumer', 'scifi', 'retro', 'experimental' |
| ThemeContext default scopes outdated | 1 | Uses old 6 visual language mapping |

#### [MODIFY] [ThemeContext.tsx](file:///Users/cobro/Code/Nexus-Component-Registry/context/ThemeContext.tsx)

Update `scopedThemes` initial state to use new 9 visual language IDs:

```diff
const [scopedThemes, setScopedThemes] = useState<Record<VisualLanguageId, string>>({
-   professional: 'emerald_tier',
-   consumer: 'cupcake',
-   scifi: 'scifi',
-   retro: 'legacy',
-   experimental: 'coffee',
-   nature: 'forest'
+   gilded: 'legal',
+   constructivist: 'swiss',
+   brutalist: 'brutalist',
+   glass: 'cockpit',
+   cyberpunk: 'scifi',
+   organic: 'wellness',
+   consumer: 'social',
+   professional: 'fintech',
+   skeuomorphic: 'soft-plastic'
})
```

---

#### [MODIFY] Template `setScopedTheme()` calls

Update all 26 templates to use new visual language IDs. Examples:

| Template | Old Call | New Call |
|----------|----------|----------|
| FintechDashboard | `setScopedTheme('professional', 'fintech')` | `setScopedTheme('glass', 'fintech')` |
| SciFiDashboard | (missing) | `setScopedTheme('cyberpunk', 'scifi')` |
| LegacyOSDashboard | (missing) | `setScopedTheme('brutalist', 'legacy')` |
| AcidDashboard | `setScopedTheme('experimental', 'acid')` | `setScopedTheme('brutalist', 'acid')` |
| CockpitDashboard | `setScopedTheme('scifi', 'cockpit')` | `setScopedTheme('glass', 'cockpit')` |

---

### Verification Plan

#### Automated
```bash
npm run build
```
Build must pass without TypeScript errors.

#### Manual (User)
1. Navigate to `/templates/fintech` - verify theme loads correctly
2. Navigate to `/templates/scifi` - verify Helix theme now applies
3. Navigate to `/templates/legacy` - verify Legacy theme now applies

---

## Phase 3: Playground Integration (Future)

---

## Phase 2b: Template-Specific Theme Variants

### Goal
Each template should have its own **specific theme variants** that make sense for that template's context where relevant. For example:
- **Fintech**: "Dark" (default) and "Light" 
- **Legal (Eagle)**: "Traditional" and "Modern"
- **SciFi (Helix)**: Two sci-fi color schemes (e.g., Cyan/Orange)

We should NOT be able to apply Festival theme to Fintech — that's not coherent.

### Architecture

#### [MODIFY] [Template interface](file:///Users/cobro/Code/Nexus-Component-Registry/lib/registry.ts#L25-38)

Add optional `themeVariants` field:

```diff
export interface Template {
    id: string
    name: string
    description: string
    visualLanguageId: VisualLanguageId
+   // Optional theme variants specific to this template
+   themeVariants?: ThemeVariant[]
    // ... existing fields
}

+interface ThemeVariant {
+   id: string           // e.g., 'fintech-light'
+   name: string         // e.g., 'Light Mode'
+   playgroundThemeId: string  // Reference to PlaygroundTheme
+}
```

---

#### [NEW] Create Template-Specific Theme Variants

Start with proof-of-concept for **Fintech**:

**File:** `/data/themes/fintech-light.ts`

A light-mode version of Fintech with:
- Light background (#fafafa)
- Same green primary (#10b981)
- Adjusted contrast for readability

---

#### [MODIFY] [ThemeSwitcher.tsx](file:///Users/cobro/Code/Nexus-Component-Registry/components/ui/ThemeSwitcher.tsx)

Refactor to:
1. Accept `template` prop instead of `visualLanguageId`
2. Only show `template.themeVariants` if they exist
3. Hide switcher entirely if no variants defined

---

### Verification Plan

#### Build
```bash
npm run build
```

#### Manual Testing (User)
1. Navigate to http://localhost:3000/templates/fintech
2. Theme switcher should show "Dark" (default) and "Light" variants
3. Select "Light" — Fintech dashboard should switch to light background
4. Navigate to a template WITHOUT variants (e.g., /templates/swiss)
5. Theme switcher should be hidden or disabled

---


#### [MODIFY] [playgroundThemes.ts](file:///Users/cobro/Code/Nexus-Component-Registry/data/playgroundThemes.ts)

Import all 28+ themes from `/data/themes/*.ts` instead of just 9:

```typescript
import {
  scifi, cockpit, blueprint, fintech, saas, // ... all themes
} from './themes'

export const playgroundThemes: PlaygroundTheme[] = [
  // All 28+ themes
]
```

This will make all extracted themes available in the `/themes` playground.

---

## Verification Plan

### Automated Tests
No existing unit tests for this functionality. After implementation:
```bash
npm run build  # Verify no TypeScript errors
```

### Manual Verification

**Templates Page Swimlanes:**
1. Run `npm run dev`
2. Navigate to `/templates`
3. Verify swimlanes are grouped by 8 visual languages
4. Confirm each template appears in correct category

**Components Page Filter:**
1. Navigate to `/components`
2. Look for new "Visual Language" filter in sidebar
3. Select a visual language (e.g., "Cyberpunk & Glitch")
4. Verify only components from matching templates are shown

**Themes Playground:**
1. Navigate to `/themes`
2. Verify all 28+ themes appear in left sidebar (not just 9)
3. Select various themes and confirm playground updates

---

## Summary

| Phase | Files Changed | Complexity |
|-------|---------------|------------|
| 1 | `registry.ts`, `TemplatesPage.tsx`, `ComponentsPage.tsx` | Medium |
| 2 | All 28 template files, `Template` interface | High |
| 3 | `playgroundThemes.ts`, possibly theme files | Low |
| 4-5 | New component files | Future work |

**Recommended order**: Phase 1 → Phase 3 → Phase 2 (Phase 1 and 3 are independent; Phase 2 is larger)
