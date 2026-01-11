import { PlaygroundTheme } from './types';

export const neon: PlaygroundTheme = {
    id: 'neon',
    name: 'Neon',
    description: 'Pure black with vibrant cyan glow',
    mode: 'dark',
    colors: {
        background: '#000000',
        foreground: '#ffffff',
        card: '#0a0a0a',
        cardForeground: '#ffffff',
        primary: '#06b6d4',
        primaryForeground: '#000000',
        secondary: '#171717',
        secondaryForeground: '#d4d4d4',
        muted: '#171717',
        mutedForeground: '#737373',
        accent: '#ec4899',
        accentForeground: '#000000',
        border: '#262626',
        ring: '#06b6d4',
    },
    radius: 'none',
    shadow: 'glow',
    typography: {
        fontFamily: '"JetBrains Mono", monospace',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0.02em',
    },
}
