import { createContext, useContext, useState, ReactNode } from 'react'
import { themes, Theme, getThemeById } from '@/data/themes'
import { playgroundThemes, PlaygroundTheme, getPlaygroundThemeById, defaultPlaygroundTheme } from '@/data/playgroundThemes'

interface ThemeContextType {
    // Template themes (for full-page templates)
    currentTheme: Theme
    setTheme: (id: string) => void
    themes: Theme[]

    // Playground themes (for theme playground)
    currentPlaygroundTheme: PlaygroundTheme
    setPlaygroundTheme: (id: string) => void
    playgroundThemes: PlaygroundTheme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])
    const [currentPlaygroundTheme, setCurrentPlaygroundTheme] = useState<PlaygroundTheme>(defaultPlaygroundTheme)

    const setTheme = (id: string) => {
        const theme = getThemeById(id)
        if (theme) {
            setCurrentTheme(theme)
        }
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
                themes,
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
