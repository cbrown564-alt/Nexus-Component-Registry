import { PlaygroundTheme } from '../playgroundThemes'

export const gameMinimal: PlaygroundTheme = {
    id: 'game-minimal',
    name: 'Minimal',
    description: 'Clean gaming interface without the glare',
    mode: 'dark',
    colors: {
        background: '#130f26', // Keep the dark base
        foreground: '#e2e8f0', // Slate-200
        card: '#1c1634', // Slightly lighter bg
        cardForeground: '#e2e8f0',
        primary: '#c026d3', // Keep Fuchsia identity but fewer applications
        primaryForeground: '#ffffff',
        secondary: '#334155', // Slate-700
        secondaryForeground: '#f1f5f9', // Slate-100
        muted: '#1c1634',
        mutedForeground: '#94a3b8', // Slate-400
        accent: '#8b5cf6', // Violet-500 instead of bright amber
        accentForeground: '#ffffff',
        border: '#334155', // Slate-700 instead of neon fuchsia
        ring: '#c026d3',
    },
    radius: 'md', // Modern, not 'lg' or 'none'
    shadow: 'sm', // No 'glow'
    typography: {
        fontFamily: '"Inter", system-ui, sans-serif', // Clean readable font
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
