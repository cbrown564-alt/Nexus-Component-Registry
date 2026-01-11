import { PlaygroundTheme } from '../playgroundThemes'

export const eink: PlaygroundTheme = {
    id: 'eink',
    name: 'Canvas',
    description: 'E-Ink paper display aesthetics',
    mode: 'light',
    colors: {
        background: '#f4f4f3', // Paper
        foreground: '#000000',
        card: '#ffffff',
        cardForeground: '#000000',
        primary: '#000000',
        primaryForeground: '#ffffff',
        secondary: '#e7e5e4', // Stone-200
        secondaryForeground: '#000000',
        muted: '#e7e5e4',
        mutedForeground: '#78716c', // Stone-500
        accent: '#000000',
        accentForeground: '#ffffff',
        border: '#000000',
        ring: '#000000',
    },
    radius: 'none',
    shadow: 'none',
    typography: {
        fontFamily: '"Domine", serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
