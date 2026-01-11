import { createContext, useContext, useState, ReactNode, useMemo } from 'react'
import { legacyThemes as themes, LegacyTheme as Theme, getThemeById, VisualLanguageId } from '@/lib/registry'
import { playgroundThemes, PlaygroundTheme, getPlaygroundThemeById, defaultPlaygroundTheme } from '@/data/playgroundThemes'

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
    currentTheme: Theme
    setTheme: (id: string) => void
    clearTemplateTheme: () => void
    themes: Theme[]

    // Whether we're in template mode (viewing a template) or registry mode
    isTemplateMode: boolean

    // The theme to use for Background (accounts for mode)
    activeTheme: Theme

    // Playground themes (for theme playground)
    currentPlaygroundTheme: PlaygroundTheme
    setPlaygroundTheme: (id: string) => void
    playgroundThemes: PlaygroundTheme[]

    // Scoped Theming
    scopedThemes: Record<VisualLanguageId, string>
    setScopedTheme: (language: VisualLanguageId, themeId: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Template theme - only set when viewing a specific template
    const [templateTheme, setTemplateTheme] = useState<Theme | null>(null)

    // Scoped themes state - maps each Visual Language to its active "Mood" (PlaygroundTheme ID)
    const [scopedThemes, setScopedThemes] = useState<Record<VisualLanguageId, string>>({
        professional: 'emerald_tier',
        consumer: 'cupcake',
        scifi: 'cyberpunk',
        retro: 'retro',
        experimental: 'coffee',
        nature: 'forest'
    })

    // Current active tokens (PlaygroundTheme)
    // Derived from the current scope (template) or default
    const currentScope = templateTheme?.visualLanguageId || 'professional' as VisualLanguageId
    const activeLikeThemeId = scopedThemes[currentScope]

    // We maintain this state for immediate feedback but sync it with scopes
    const [currentPlaygroundTheme, setCurrentPlaygroundTheme] = useState<PlaygroundTheme>(defaultPlaygroundTheme)

    // Sync playground theme when scope or scoped-selection changes
    useMemo(() => {
        const theme = getPlaygroundThemeById(activeLikeThemeId)
        if (theme) {
            setCurrentPlaygroundTheme(theme)
        }
    }, [activeLikeThemeId])

    const isTemplateMode = templateTheme !== null

    // The active theme for Background - registry theme when not in template mode
    const activeTheme = useMemo(() => {
        return templateTheme ?? REGISTRY_THEME
    }, [templateTheme])

    // For backwards compatibility, currentTheme maps to activeTheme
    const currentTheme = activeTheme

    const setTheme = (id: string) => {
        const theme = getThemeById(id)
        if (theme) {
            setTemplateTheme(theme)
        }
    }

    const clearTemplateTheme = () => {
        setTemplateTheme(null)
    }

    const setPlaygroundTheme = (id: string) => {
        // Update the theme for the CURRENT scope
        setScopedThemes(prev => ({
            ...prev,
            [currentScope]: id
        }))
    }

    const setScopedTheme = (language: VisualLanguageId, themeId: string) => {
        setScopedThemes(prev => ({
            ...prev,
            [language]: themeId
        }))
    }

    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                setTheme,
                clearTemplateTheme,
                themes,
                isTemplateMode,
                activeTheme,
                currentPlaygroundTheme,
                setPlaygroundTheme,
                playgroundThemes,
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
