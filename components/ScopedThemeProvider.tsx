import React, { useMemo, createContext, useContext } from 'react'
import { PlaygroundTheme, getPlaygroundThemeById } from '@/data/playgroundThemes'
import { useTheme, ThemeContext } from '@/context/ThemeContext'

// Import all themes from the themes barrel export
import {
    helix,
    legacy,
    cockpit,
    blueprint,
    arcade,
    eink,
    swiss,
    brutalist,
    acid,
    solarpunk,
    festival,
    clay,
    softPlastic,
    fintech,
    fintechLight,
    saas,
    productivity,
    grid,
    legal,
    legalModern,
    wellness,
    wellnessEnergy,
    education,
    magazine,
    ecommerce,
    social,
    music,
    food,
    kitchen,
    kids,
    engineering,
    clinic,
    departure,
    estate,
    nomad,
    vault,
    arena,
    evergreen,
    concierge,
    paradox,
    terminal,
    scifiOrange,
    gameMinimal,
} from '@/data/themes'

// Theme lookup map for fast resolution
const themeMap: Record<string, PlaygroundTheme> = {
    helix,
    scifi: helix,
    legacy,
    cockpit,
    blueprint,
    arcade,
    eink,
    swiss,
    brutalist,
    acid,
    solarpunk,
    festival,
    clay,
    'soft-plastic': softPlastic,
    softPlastic,
    fintech,
    'fintech-light': fintechLight,
    fintechLight,
    saas,
    productivity,
    grid,
    legal,
    'legal-modern': legalModern,
    legalModern,
    wellness,
    'wellness-energy': wellnessEnergy,
    wellnessEnergy,
    education,
    magazine,
    ecommerce,
    social,
    music,
    food,
    kitchen,
    kids,
    engineering,
    clinic,
    departure,
    estate,
    nomad,
    vault,
    arena,
    evergreen,
    concierge,
    paradox,
    terminal,
    'scifi-orange': scifiOrange,
    scifiOrange,
    'game-minimal': gameMinimal,
    gameMinimal,
}

/**
 * Resolves a theme by ID from the static map or falls back to general lookup.
 */
export function resolveThemeById(id: string): PlaygroundTheme | undefined {
    return themeMap[id] ?? getPlaygroundThemeById(id)
}

interface ScopedThemeProviderProps {
    /**
     * The theme ID to use for children, or a PlaygroundTheme object directly.
     */
    theme: string | PlaygroundTheme
    children: React.ReactNode
}

/**
 * ScopedThemeProvider
 * 
 * Wraps children in a new ThemeContext that overrides the `theme` (Layer 3: Tokens).
 * This allows components to render with a specific theme without affecting the global app state.
 * 
 * Used by LivePlayground for isolated theme previews.
 */
export function ScopedThemeProvider({ theme, children }: ScopedThemeProviderProps) {
    const parentContext = useTheme()

    const resolvedTheme = useMemo(() => {
        if (typeof theme === 'string') {
            return resolveThemeById(theme) ?? parentContext.theme
        }
        return theme
    }, [theme, parentContext.theme])

    // Create a new context value that overrides the theme but preserves other properties
    // We intentionally make setters no-ops to prevent playground interactions from affecting global state.
    const scopedValue = useMemo(() => ({
        ...parentContext,
        // Override the Layer 3 tokens
        theme: resolvedTheme,
        currentPlaygroundTheme: resolvedTheme,
        // Make setters no-ops within the scope
        setTheme: () => { /* no-op in scoped context */ },
        setPlaygroundTheme: () => { /* no-op in scoped context */ },
        setTemplateTheme: () => { /* no-op in scoped context */ },
        clearTemplateTheme: () => { /* no-op in scoped context */ },
        setScopedTheme: () => { /* no-op in scoped context */ },
    }), [parentContext, resolvedTheme])

    // Re-provide the ThemeContext with our scoped values
    // This ensures useTheme() inside this provider returns the scoped theme
    return (
        <ThemeContext.Provider value={scopedValue}>
            {children}
        </ThemeContext.Provider>
    )
}
