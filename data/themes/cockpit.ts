import { PlaygroundTheme } from '../playgroundThemes'

export const cockpit: PlaygroundTheme = {
    id: 'cockpit',
    name: 'Cockpit',
    description: 'Automotive dashboard with instrument cluster',
    mode: 'dark',
    colors: {
        background: '#000000', // Pure black as seen in dashboard
        foreground: '#ffffff',
        card: '#18181b', // Zinc-900 like
        cardForeground: '#ffffff',
        primary: '#2563eb', // Blue-600 (default mode)
        primaryForeground: '#ffffff',
        secondary: '#27272a', // Zinc-800
        secondaryForeground: '#a1a1aa',
        muted: '#27272a',
        mutedForeground: '#71717a',
        accent: '#10b981', // Emerald-500 (battery, eco)
        accentForeground: '#ffffff',
        border: '#27272a',
        ring: '#2563eb',
    },
    radius: 'lg',
    shadow: 'glow',
    typography: {
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
