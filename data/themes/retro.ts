import { PlaygroundTheme } from '../playgroundThemes'

export const legacy: PlaygroundTheme = {
    id: 'legacy',
    name: 'Legacy',
    description: 'Retro Windows 95/98 nostalgic interface',
    mode: 'light',
    colors: {
        background: '#008080', // Teal background
        foreground: '#000000',
        card: '#c0c0c0', // Silver
        cardForeground: '#000000',
        primary: '#000080', // Navy blue (title bars)
        primaryForeground: '#ffffff',
        secondary: '#c0c0c0',
        secondaryForeground: '#000000',
        muted: '#808080', // Dark grey shadow
        mutedForeground: '#000000',
        accent: '#c0c0c0', // 3D face
        accentForeground: '#000000',
        border: '#ffffff', // Highlight
        ring: '#000000',
    },
    radius: 'none',
    shadow: 'none',
    typography: {
        fontFamily: '"Courier New", Courier, monospace',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
