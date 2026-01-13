import { ThemeDefinition } from './index';

export const paradox: ThemeDefinition = {
    id: 'paradox',
    name: 'Paradox',
    colors: {
        background: '#e5e5e5', // Static Grey / Windows 95
        foreground: '#000000', // Black
        primary: '#ff0000',    // Error Red
        secondary: '#0000ff',  // BSOD Blue
        accent: '#00ff00',     // Terminal Green
        border: '#000000',     // Brutalist Black
        muted: '#a3a3a3',      // Grey
    },
    typography: {
        fontFamily: '"Courier New", Courier, monospace',
        headingFont: '"Rubik Glitch", "Courier New", monospace', // Ideally we'd load a glitch font, but fallback to Courier
        scale: {
            h1: '4rem',
            h2: '2.5rem',
            h3: '1.5rem',
            body: '1rem',
            small: '0.875rem',
        },
    },
    borderRadius: '0px', // Strict geometric
    shadows: {
        sm: '2px 2px 0px #000000',
        md: '4px 4px 0px #000000',
        lg: '8px 8px 0px #000000',
    },
};
