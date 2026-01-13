import { ThemeDefinition } from './index';

export const terminal: ThemeDefinition = {
    id: 'terminal',
    name: 'Console', // Naming it Console to allow 'Terminal' (Fintech) to coexist without UI ambiguity
    colors: {
        background: '#0c0c0c', // Deep Void
        foreground: '#abb2bf', // Syntax FG
        primary: '#61afef',    // Syntax Blue
        secondary: '#282c34',  // Gutter Grey
        accent: '#98c379',     // String Green
        border: '#3e4451',     // Split Border
        muted: '#5c6370',      // Comment Grey
    },
    typography: {
        fontFamily: '"Fira Code", "JetBrains Mono", monospace',
        headingFont: '"Fira Code", "JetBrains Mono", monospace',
        scale: {
            h1: '2rem',
            h2: '1.5rem',
            h3: '1.25rem',
            body: '0.875rem',
            small: '0.75rem',
        },
    },
    borderRadius: '0px',
    shadows: {
        sm: 'none',
        md: '0 4px 12px rgba(0,0,0,0.5)',
        lg: '0 10px 25px rgba(0,0,0,0.5)',
    },
};
