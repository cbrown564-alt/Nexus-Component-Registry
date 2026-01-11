import { PlaygroundTheme } from './types';

export const grid: PlaygroundTheme = {
    id: 'grid',
    name: 'Matrix',
    description: 'Strict grid alignment and data density',
    mode: 'light',
    colors: {
        background: '#ffffff', // White
        foreground: '#000000', // Black
        card: '#ffffff',
        cardForeground: '#000000',
        primary: '#000000', // Black
        primaryForeground: '#ffffff',
        secondary: '#f4f4f5', // Zinc-100
        secondaryForeground: '#18181b', // Zinc-900
        muted: '#f4f4f5',
        mutedForeground: '#71717a', // Zinc-500
        accent: '#e4e4e7', // Zinc-200
        accentForeground: '#000000',
        border: '#e4e4e7', // Zinc-200
        ring: '#000000',
    },
    radius: 'none',
    shadow: 'none',
    typography: {
        fontFamily: '"Geist Mono", "JetBrains Mono", monospace',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.02em',
    },
}
