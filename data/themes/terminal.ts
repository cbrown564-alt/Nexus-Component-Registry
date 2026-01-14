import type { PlaygroundTheme } from '../playgroundThemes'

export const terminal: PlaygroundTheme = {
    id: 'terminal',
    name: 'Console',
    description: 'Modern developer environment with TUI aesthetics',
    mode: 'dark',
    colors: {
        background: '#0c0c0c', // Deep Void
        foreground: '#abb2bf', // Syntax FG
        card: '#1e2127',
        cardForeground: '#abb2bf',
        primary: '#61afef',    // Syntax Blue
        primaryForeground: '#000000',
        secondary: '#282c34',  // Gutter Grey
        secondaryForeground: '#abb2bf',
        muted: '#3e4451',
        mutedForeground: '#5c6370', // Comment Grey
        accent: '#98c379',     // String Green
        accentForeground: '#000000',
        border: '#3e4451',     // Split Border
        ring: '#61afef',
    },
    radius: 'none',
    shadow: 'md',
    typography: {
        fontFamily: '"Fira Code", "JetBrains Mono", monospace',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
