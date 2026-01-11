import { PlaygroundTheme } from '../playgroundThemes'

export const blueprint: PlaygroundTheme = {
    id: 'blueprint',
    name: 'Blueprint',
    description: 'Architectural CAD interface',
    mode: 'dark',
    colors: {
        background: '#1e3a8a', // Blue-900 base
        foreground: '#ffffff',
        card: '#1e3a8a', // Same as bg for unified look
        cardForeground: '#ffffff',
        primary: '#172554', // Darker blue for headers/panels
        primaryForeground: '#22d3ee', // Cyan-400 accent text
        secondary: '#172554',
        secondaryForeground: '#ffffff',
        muted: '#172554',
        mutedForeground: '#93c5fd', // Blue-300
        accent: '#22d3ee', // Cyan-400
        accentForeground: '#000000',
        border: '#ffffff', // High contrast white borders
        ring: '#22d3ee',
    },
    radius: 'none',
    shadow: 'none',
    typography: {
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
