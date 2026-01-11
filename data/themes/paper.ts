import { PlaygroundTheme } from './types';

export const paper: PlaygroundTheme = {
    id: 'paper',
    name: 'Paper',
    description: 'Warm white with stone accents',
    mode: 'light',
    colors: {
        background: '#faf8f5',
        foreground: '#1c1917',
        card: '#ffffff',
        cardForeground: '#1c1917',
        primary: '#78716c',
        primaryForeground: '#ffffff',
        secondary: '#f5f5f4',
        secondaryForeground: '#44403c',
        muted: '#e7e5e4',
        mutedForeground: '#78716c',
        accent: '#a8a29e',
        accentForeground: '#1c1917',
        border: '#d6d3d1',
        ring: '#78716c',
    },
    radius: 'sm',
    shadow: 'none',
    typography: {
        fontFamily: '"Lora", Georgia, serif',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
