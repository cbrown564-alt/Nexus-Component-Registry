import { PlaygroundTheme } from './types';

export const vault: PlaygroundTheme = {
    id: 'vault',
    name: 'Vault',
    description: 'DeFi & Crypto Dashboard',
    mode: 'dark',
    colors: {
        background: '#050505', // Almost black
        foreground: '#e5e5e5', // Light grey
        card: '#111111', // Dark grey
        cardForeground: '#e5e5e5',
        primary: '#00ff41', // Matrix Green / Neon Green
        primaryForeground: '#000000',
        secondary: '#ff00ff', // Magenta / Glitch Pink
        secondaryForeground: '#ffffff',
        muted: '#333333',
        mutedForeground: '#888888',
        accent: '#333333', // Dark Grey for borders
        accentForeground: '#00ff41',
        border: '#333333',
        ring: '#00ff41',
    },
    radius: 'sm', // Brutalist/Sharp
    shadow: 'none', // Flat visuals
    typography: {
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '-0.02em',
    },
}
