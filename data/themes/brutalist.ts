import { PlaygroundTheme } from '../playgroundThemes'

export const brutalist: PlaygroundTheme = {
    id: 'brutalist',
    name: 'Brutalist',
    description: 'Neo-brutalism with high contrast',
    mode: 'light',
    colors: {
        background: '#e0e0e0', // Light gray background
        foreground: '#000000',
        card: '#ffffff',
        cardForeground: '#000000',
        primary: '#facc15', // Yellow-400
        primaryForeground: '#000000',
        secondary: '#ef4444', // Red-500
        secondaryForeground: '#ffffff',
        muted: '#ffffff',
        mutedForeground: '#000000',
        accent: '#facc15',
        accentForeground: '#000000',
        border: '#000000',
        ring: '#000000',
    },
    radius: 'none', // Sharp corners usually, or slight rounding
    shadow: 'none', // Managed via custom CSS in components often
    typography: {
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        headingWeight: 900,
        bodyWeight: 700,
        letterSpacing: '0',
    },
}
