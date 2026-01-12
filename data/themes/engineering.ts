import { PlaygroundTheme } from './types';

export const engineering: PlaygroundTheme = {
    id: 'engineering',
    name: 'Nebula',
    description: 'Dark IDE-inspired engineering workspace',
    mode: 'dark',
    colors: {
        background: '#09090b', // Zinc-950
        foreground: '#d4d4d8', // Zinc-300
        card: '#0c0c0e', // Darker than bg
        cardForeground: '#d4d4d8',
        primary: '#3b82f6', // Blue-500
        primaryForeground: '#ffffff',
        secondary: '#27272a', // Zinc-800
        secondaryForeground: '#a1a1aa', // Zinc-400
        muted: '#18181b', // Zinc-900
        mutedForeground: '#71717a', // Zinc-500
        accent: '#60a5fa', // Blue-400
        accentForeground: '#09090b',
        border: '#27272a', // Zinc-800
        ring: '#3b82f6',
    },
    radius: 'lg',
    shadow: 'md',
    typography: {
        fontFamily: '"JetBrains Mono", "Fira Code", monospace',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0em',
    },
}
