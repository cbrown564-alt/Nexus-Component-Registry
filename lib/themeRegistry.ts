/**
 * Theme Registry
 * 
 * Centralized registry for dynamic theme lookup, replacing the
 * hardcoded if-else chains in ThemeContext.tsx.
 * 
 * Usage:
 *   import { getTheme } from '@/lib/themeRegistry'
 *   const theme = getTheme('fintech')
 */

import { PlaygroundTheme, playgroundThemes } from '@/data/playgroundThemes'

// Build registry from the canonical playgroundThemes array
const themeRegistry = new Map<string, PlaygroundTheme>()

playgroundThemes.forEach(theme => {
    themeRegistry.set(theme.id, theme)
})

/**
 * Look up a theme by its ID.
 * Returns undefined if theme is not found.
 */
export const getTheme = (id: string): PlaygroundTheme | undefined => {
    return themeRegistry.get(id)
}

/**
 * Get all registered themes as an array.
 */
export const allThemes = [...themeRegistry.values()]

/**
 * Check if a theme ID exists in the registry.
 */
export const hasTheme = (id: string): boolean => {
    return themeRegistry.has(id)
}
