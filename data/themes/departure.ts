import { PlaygroundTheme } from './types';

export const departure: PlaygroundTheme = {
    id: 'departure',
    name: 'Departure',
    description: 'High-visibility aviation interface',
    mode: 'dark',
    colors: {
        background: '#09090b', // Zinc-950
        foreground: '#e4e4e7', // Zinc-200
        card: '#18181b', // Zinc-900
        cardForeground: '#ffffff',
        primary: '#f59e0b', // Amber-500 (Warning/Info)
        primaryForeground: '#000000',
        secondary: '#27272a', // Zinc-800
        secondaryForeground: '#a1a1aa', // Zinc-400
        muted: '#27272a', // Zinc-800
        mutedForeground: '#71717a', // Zinc-500
        accent: '#0ea5e9', // Sky-500 (Blue sky highlights)
        accentForeground: '#ffffff',
        border: '#27272a',
        ring: '#f59e0b',
    },
    radius: 'sm', // Tech/Industrial sharp
    shadow: 'lg', // Sharp, dark shadows
    typography: {
        fontFamily: '"JetBrains Mono", "SF Mono", "Monaco", monospace', // Data-first
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0.05em', // Tracking for legibility
    },
}
