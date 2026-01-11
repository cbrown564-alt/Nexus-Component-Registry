import { createContext, useContext, useState, ReactNode, useMemo } from 'react'
import { legacyThemes as themes, LegacyTheme as Theme, getThemeById, VisualLanguageId } from '@/lib/registry'
import { playgroundThemes, PlaygroundTheme, getPlaygroundThemeById, defaultPlaygroundTheme } from '@/data/playgroundThemes'
import { helix } from '@/data/themes/scifi'
import { legacy } from '@/data/themes/retro'
import { cockpit } from '@/data/themes/cockpit'
import { blueprint } from '@/data/themes/blueprint'
import { arcade } from '@/data/themes/arcade'
import { eink } from '@/data/themes/eink'
import { swiss } from '@/data/themes/swiss'
import { brutalist } from '@/data/themes/brutalist'
import { acid } from '@/data/themes/acid'
import { solarpunk } from '@/data/themes/solarpunk'
import { festival } from '@/data/themes/festival'
import { clay } from '@/data/themes/clay'
import { softPlastic } from '@/data/themes/soft-plastic'
import { fintech } from '@/data/themes/fintech'
import { saas } from '@/data/themes/saas'
import { productivity } from '@/data/themes/productivity'
import { grid } from '@/data/themes/grid'
import { legal } from '@/data/themes/legal'
import { wellness } from '@/data/themes/wellness'
import { education } from '@/data/themes/education'
import { magazine } from '@/data/themes/magazine'
import { ecommerce } from '@/data/themes/ecommerce'
import { social } from '@/data/themes/social'
import { music } from '@/data/themes/music'
import { food } from '@/data/themes/food'
import { kitchen } from '@/data/themes/kitchen'
import { kids } from '@/data/themes/kids'

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
        scifi: 'scifi', // Now pointing to the extracted Helix theme
        retro: 'legacy', // Now pointing to the extracted Legacy theme
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
        // Special lookup for extracted themes until everything is unified
        let theme: PlaygroundTheme | undefined

        if (activeLikeThemeId === 'scifi') theme = helix
        else if (activeLikeThemeId === 'legacy') theme = legacy
        else if (activeLikeThemeId === 'cockpit') theme = cockpit
        else if (activeLikeThemeId === 'blueprint') theme = blueprint
        else if (activeLikeThemeId === 'arcade') theme = arcade
        else if (activeLikeThemeId === 'eink') theme = eink
        else if (activeLikeThemeId === 'swiss') theme = swiss
        else if (activeLikeThemeId === 'brutalist') theme = brutalist
        else if (activeLikeThemeId === 'acid') theme = acid
        else if (activeLikeThemeId === 'solarpunk') theme = solarpunk
        else if (activeLikeThemeId === 'festival') theme = festival
        else if (activeLikeThemeId === 'clay') theme = clay
        else if (activeLikeThemeId === 'soft-plastic') theme = softPlastic
        else if (activeLikeThemeId === 'fintech') theme = fintech
        else if (activeLikeThemeId === 'saas') theme = saas
        else if (activeLikeThemeId === 'productivity') theme = productivity
        else if (activeLikeThemeId === 'grid') theme = grid
        else if (activeLikeThemeId === 'legal') theme = legal
        else if (activeLikeThemeId === 'wellness') theme = wellness
        else if (activeLikeThemeId === 'education') theme = education
        else if (activeLikeThemeId === 'magazine') theme = magazine
        else if (activeLikeThemeId === 'ecommerce') theme = ecommerce
        else if (activeLikeThemeId === 'social') theme = social
        else if (activeLikeThemeId === 'music') theme = music
        else if (activeLikeThemeId === 'food') theme = food
        else if (activeLikeThemeId === 'kitchen') theme = kitchen
        else if (activeLikeThemeId === 'kids') theme = kids
        else theme = getPlaygroundThemeById(activeLikeThemeId)

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
