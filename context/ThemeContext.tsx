import { createContext, useContext, useState, ReactNode, useMemo, useCallback, useEffect } from 'react'
import { legacyThemes as themes, LegacyTheme as Theme, getThemeById, VisualLanguageId } from '@/lib/registry'
import { playgroundThemes, PlaygroundTheme, getPlaygroundThemeById, defaultPlaygroundTheme } from '@/data/playgroundThemes'
import { getTheme } from '@/lib/themeRegistry'


// The default registry theme - dark, neutral, always consistent
const REGISTRY_THEME: Theme = {
    id: 'registry',
    name: 'Registry',
    description: 'Default dark theme for the Nexus registry',
    colorClass: 'bg-zinc-500',
    backgroundColor: 'bg-zinc-950',
    textColorClass: 'text-zinc-100',
    sidebarStyles: 'border-zinc-800 bg-zinc-950',
    category: 'dark',
    tags: ['registry', 'default', 'dark'],
    visualLanguageId: 'professional',
    collection: 'professional'
}

interface ThemeContextType {
    // Template themes (for full-page templates)
    /** The currently active template (if any) */
    currentTheme: Theme
    /** Set the active template, which drives the overall visual scope */
    setTemplateTheme: (id: string) => void
    clearTemplateTheme: () => void
    themes: Theme[]

    // Whether we're in template mode (viewing a template) or registry mode
    isTemplateMode: boolean

    // The theme to use for Background (accounts for mode)
    activeTheme: Theme

    // Playground themes (for theme playground) - PRIMARY API
    currentPlaygroundTheme: PlaygroundTheme
    /** 
     * Primary API for setting the visual theme. 
     * This updates the active theme for the current visual scope.
     */
    setTheme: (id: string) => void
    playgroundThemes: PlaygroundTheme[]

    // Convenience alias for components
    /** Current active playground theme properties */
    theme: PlaygroundTheme

    // Scoped Theming (DEPRECATED)
    scopedThemes: Record<VisualLanguageId, string>
    /** @deprecated Use setTheme() instead */
    setScopedTheme: (language: VisualLanguageId, themeId: string) => void
    /** @deprecated Use setTheme() instead */
    setPlaygroundTheme: (id: string) => void
}

// Exported for ScopedThemeProvider to override context in isolated subtrees
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Template theme - only set when viewing a specific template
    const [templateTheme, setTemplateTheme] = useState<Theme | null>(null)

    // Scoped themes state - maps each Visual Language to its active "Mood" (PlaygroundTheme ID)
    const [scopedThemes, setScopedThemes] = useState<Record<VisualLanguageId, string>>({
        professional: 'fintech',
        consumer: 'social',
        cyberpunk: 'scifi',
        organic: 'wellness',
        brutalist: 'brutalist',
    })

    // Current active tokens (PlaygroundTheme)
    // Derived from the current scope (template) or default
    const currentScope = templateTheme?.visualLanguageId || 'professional' as VisualLanguageId
    const activeLikeThemeId = scopedThemes[currentScope]

    // We maintain this state for immediate feedback but sync it with scopes
    const [currentPlaygroundTheme, setCurrentPlaygroundTheme] = useState<PlaygroundTheme>(defaultPlaygroundTheme)

    // Sync playground theme when scope or scoped-selection changes
    useEffect(() => {
        // Dynamic lookup from registry - no more if-else chains!
        const theme = getTheme(activeLikeThemeId) ?? getPlaygroundThemeById(activeLikeThemeId)

        if (theme) {
            setCurrentPlaygroundTheme(theme)
        }
    }, [activeLikeThemeId])

    // Inject CSS variables into root
    useEffect(() => {
        const root = window.document.documentElement
        const theme = currentPlaygroundTheme

        // Helper to set variable
        const setVar = (name: string, value: string) => root.style.setProperty(name, value)

        // 1. Colors
        if (theme.colors) {
            Object.entries(theme.colors).forEach(([key, value]) => {
                setVar(`--${key}`, value)
            })
        }

        // 2. Radius
        const radiusMap: Record<string, string> = {
            'none': '0',
            'sm': '0.125rem',
            'md': '0.375rem',
            'lg': '0.5rem',
            'xl': '0.75rem',
            '2xl': '1rem',
            'full': '9999px',
        }
        setVar('--radius', radiusMap[theme.radius] || '0.5rem')

        // 3. Shadows (Simple mapping for now, can be expanded)
        // We inject a primary shadow variable
        const shadowMap: Record<string, string> = {
            'none': 'none',
            'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            'glow': `0 0 20px ${theme.colors.primary}80`,
        }
        setVar('--shadow-theme', shadowMap[theme.shadow] || 'none')

        // 4. Typography
        if (theme.typography && theme.typography.fontFamily) {
            setVar('--font-sans', theme.typography.fontFamily)
        }

    }, [currentPlaygroundTheme])

    const isTemplateMode = templateTheme !== null

    // The active theme for Background - registry theme when not in template mode
    const activeTheme = useMemo(() => {
        return templateTheme ?? REGISTRY_THEME
    }, [templateTheme])

    // For backwards compatibility, currentTheme maps to activeTheme
    const currentTheme = activeTheme

    // Internal function to set template theme by ID
    // Internal function to set template theme by ID
    const setTemplateThemeById = useCallback((id: string) => {
        const theme = getThemeById(id)
        if (theme) {
            setTemplateTheme(theme)

            // Critical fix: Also set the active playground theme for this scope
            // This ensures we do not fall back to the scope's default theme (which might be dark)
            setScopedThemes(prev => ({
                ...prev,
                [theme.visualLanguageId]: theme.id
            }))
        }
    }, [])

    const clearTemplateTheme = useCallback(() => {
        setTemplateTheme(null)
    }, [])

    const setPlaygroundTheme = useCallback((id: string) => {
        // Dynamic lookup from registry - no more if-else chains!
        const theme = getTheme(id) ?? getPlaygroundThemeById(id)

        if (theme) {
            setCurrentPlaygroundTheme(theme)
        }

        // Also update the scoped themes for backwards compatibility
        // This is now safe because setPlaygroundTheme is memoized
        setScopedThemes(prev => ({
            ...prev,
            [currentScope]: id
        }))
    }, [currentScope])

    const setScopedTheme = useCallback((language: VisualLanguageId, themeId: string) => {
        console.warn('setScopedTheme is deprecated. Use setTheme() instead.')
        setScopedThemes(prev => ({
            ...prev,
            [language]: themeId
        }))
    }, [])

    // setTheme is now the primary API - alias for setPlaygroundTheme
    const setTheme = setPlaygroundTheme

    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                setTemplateTheme: setTemplateThemeById,
                clearTemplateTheme,
                themes,
                isTemplateMode,
                activeTheme,
                currentPlaygroundTheme,
                setTheme,
                setPlaygroundTheme, // deprecated alias
                playgroundThemes,
                theme: currentPlaygroundTheme,
                scopedThemes,
                setScopedTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
