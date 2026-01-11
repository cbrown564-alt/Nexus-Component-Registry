import { PlaygroundTheme } from '../playgroundThemes'

export const solarpunk: PlaygroundTheme = {
    id: 'solarpunk',
    name: 'Solarpunk',
    description: 'Organic technology and nature harmony',
    mode: 'light',
    colors: {
        background: '#F0F7F4', // Emerald-50 / Cream
        foreground: '#064e3b', // Emerald-900
        card: '#ffffff',
        cardForeground: '#064e3b',
        primary: '#10b981', // Emerald-500
        primaryForeground: '#ffffff',
        secondary: '#fde047', // Yellow-300
        secondaryForeground: '#422006', // Brown-900
        muted: '#ecfdf5', // Emerald-50
        mutedForeground: '#047857', // Emerald-700
        accent: '#fde047', // Yellow
        accentForeground: '#064e3b',
        border: '#a7f3d0', // Emerald-200
        ring: '#10b981',
    },
    radius: 'lg', // Rounded organic feel
    shadow: 'lg', // Soft shadows
    typography: {
        fontFamily: '"DM Sans", system-ui, sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
