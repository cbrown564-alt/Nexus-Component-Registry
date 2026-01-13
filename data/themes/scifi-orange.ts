import { PlaygroundTheme } from '../playgroundThemes'

export const scifiOrange: PlaygroundTheme = {
    id: 'scifi-orange',
    name: 'Mars',
    description: 'Martian colony interface with amber/orange alerts',
    mode: 'dark',
    colors: {
        background: '#0f0505', // Very dark ruddy brown/black
        foreground: '#fed7aa', // Orange-200
        card: '#1a0a0a', // Dark red/brown
        cardForeground: '#fed7aa',
        primary: '#f97316', // Orange-500
        primaryForeground: '#000000',
        secondary: '#7c2d12', // Orange-900 (Warm)
        secondaryForeground: '#fdba74', // Orange-300
        muted: '#9a3412', // Orange-800
        mutedForeground: '#fdba74', // Orange-300
        accent: '#fb923c', // Orange-400
        accentForeground: '#000000',
        border: '#ea580c', // Orange-600
        ring: '#f97316',
    },
    radius: 'none',
    shadow: 'glow',
    typography: {
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0.05em',
    },
}
