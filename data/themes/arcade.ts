import { PlaygroundTheme } from '../playgroundThemes'

export const arcade: PlaygroundTheme = {
    id: 'arcade',
    name: 'Arcade',
    description: 'Retro gaming with neon accents',
    mode: 'dark',
    colors: {
        background: '#0f0e17', // Deep purple/black
        foreground: '#fffffe',
        card: '#2e2f3e', // Slightly lighter for contrast
        cardForeground: '#fffffe',
        primary: '#c026d3', // Fuchsia-600
        primaryForeground: '#ffffff',
        secondary: '#06b6d4', // Cyan-500
        secondaryForeground: '#000000',
        muted: '#2e2f3e',
        mutedForeground: '#94a1b2',
        accent: '#f59e0b', // Amber-500
        accentForeground: '#000000',
        border: '#c026d3', // Fuchsia borders
        ring: '#c026d3',
    },
    radius: 'lg',
    shadow: 'glow',
    typography: {
        fontFamily: '"Press Start 2P", system-ui, sans-serif', // or a game font
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0.05em',
    },
}
