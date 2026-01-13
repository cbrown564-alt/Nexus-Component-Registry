import { ThemeDefinition } from './index';

export const concierge: ThemeDefinition = {
    id: 'concierge',
    name: 'Concierge',
    colors: {
        background: '#09090b', // Void Black
        foreground: '#f4f4f5', // Zinc 100
        primary: '#cda45e',    // Gold Leaf
        secondary: '#18181b',  // Zinc 900 (Panel BG)
        accent: '#f3e5b5',     // Champagne
        border: '#cda45e',     // Gold
        muted: '#52525b',      // Zinc 600
    },
    typography: {
        fontFamily: '"DM Sans", sans-serif',
        headingFont: '"Playfair Display", serif',
        scale: {
            h1: '4.5rem',
            h2: '3rem',
            h3: '2rem',
            body: '1rem',
            small: '0.875rem',
        },
    },
    borderRadius: '0px', // Geometric / Sharp
    shadows: {
        sm: '0 2px 4px rgba(0,0,0,0.5)',
        md: '0 4px 6px rgba(0,0,0,0.5)',
        lg: '0 10px 15px rgba(0,0,0,0.5)',
    },
};
