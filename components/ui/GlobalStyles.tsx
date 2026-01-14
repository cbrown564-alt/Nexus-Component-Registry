import { useTheme } from '@/context/ThemeContext'
import { PlaygroundTheme } from '@/data/playgroundThemes'

export default function GlobalStyles() {
    const { currentPlaygroundTheme: theme } = useTheme()

    if (!theme) return null

    // Helper to Convert radius token to CSS value
    const getRadius = (radius: PlaygroundTheme['radius']) => {
        switch (radius) {
            case 'none': return '0'
            case 'sm': return '0.375rem' // 6px
            case 'md': return '0.5rem'   // 8px
            case 'lg': return '0.75rem'  // 12px
            case 'xl': return '1rem'     // 16px
            case 'full': return '9999px'
            default: return '0.5rem'
        }
    }

    // Generate CSS variables
    // We map theme properties to CSS variables that can be used by Tailwind or raw CSS
    const styles = {
        '--background': theme.colors.background,
        '--foreground': theme.colors.foreground,
        '--card': theme.colors.card,
        '--card-foreground': theme.colors.cardForeground,
        '--primary': theme.colors.primary,
        '--primary-foreground': theme.colors.primaryForeground,
        '--secondary': theme.colors.secondary,
        '--secondary-foreground': theme.colors.secondaryForeground,
        '--muted': theme.colors.muted,
        '--muted-foreground': theme.colors.mutedForeground,
        '--accent': theme.colors.accent,
        '--accent-foreground': theme.colors.accentForeground,
        '--border': theme.colors.border,
        '--ring': theme.colors.ring,
        '--radius': getRadius(theme.radius),
    }

    // Convert to CSS string
    const cssVariables = Object.entries(styles)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n    ')

    return (
        <style dangerouslySetInnerHTML={{
            __html: `
:root {
    ${cssVariables}
}
      `}} />
    )
}
