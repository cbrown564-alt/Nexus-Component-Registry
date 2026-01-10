import { createContext, useContext, useState, ReactNode, useMemo } from 'react'
import { themes, Theme, getThemeById } from '@/data/themes'
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
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Template theme - only set when viewing a specific template
    const [templateTheme, setTemplateTheme] = useState<Theme | null>(null)
    const [currentPlaygroundTheme, setCurrentPlaygroundTheme] = useState<PlaygroundTheme>(defaultPlaygroundTheme)

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
        const theme = getPlaygroundThemeById(id)
        if (theme) {
            setCurrentPlaygroundTheme(theme)
        }
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
