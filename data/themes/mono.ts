import { PlaygroundTheme } from './types';

export const mono: PlaygroundTheme = {
    id: 'mono',
    name: 'Mono',
    description: 'Pure white with stark black contrast',
    mode: 'light',
    colors: {
        background: '#ffffff',
        foreground: '#000000',
        card: '#fafafa',
        cardForeground: '#000000',
        primary: '#000000',
        primaryForeground: '#ffffff',
        secondary: '#f5f5f5',
        secondaryForeground: '#171717',
        muted: '#e5e5e5',
        mutedForeground: '#525252',
        accent: '#737373',
        accentForeground: '#000000',
        border: '#d4d4d4',
        ring: '#000000',
    },
    radius: 'none',
    shadow: 'sm',
    typography: {
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
        headingWeight: 700,
        bodyWeight: 500,
        letterSpacing: '-0.03em',
    },
}
