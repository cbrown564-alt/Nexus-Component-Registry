import { PlaygroundTheme } from '../playgroundThemes'

export const helix: PlaygroundTheme = {
    id: 'scifi',
    name: 'Helix',
    description: 'Futuristic sci-fi interface with holographic effects',
    mode: 'dark',
    colors: {
        background: '#020408',
        foreground: '#CFFAFE', // cyan-50
        card: '#050b14',
        cardForeground: '#CFFAFE',
        primary: '#06b6d4', // cyan-500
        primaryForeground: '#000000',
        secondary: '#164e63', // cyan-900
        secondaryForeground: '#22d3ee', // cyan-400
        muted: '#0e7490', // cyan-700
        mutedForeground: '#67e8f9', // cyan-300
        accent: '#22d3ee', // cyan-400
        accentForeground: '#000000',
        border: '#155e75', // cyan-800
        ring: '#06b6d4',
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
