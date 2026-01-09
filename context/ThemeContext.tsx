import { createContext, useContext, useState, type ReactNode } from 'react'
import { themes, getThemeById, type Theme } from '@/data/themes'

interface ThemeContextValue {
    currentTheme: Theme
    setTheme: (id: string) => void
    themes: Theme[]
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])

    const setTheme = (id: string) => {
        const theme = getThemeById(id)
        if (theme) {
            setCurrentTheme(theme)
        }
    }

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
