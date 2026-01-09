import tokensData from './tokens.json'

// Type definitions
export interface DesignTokens {
    colors: {
        primitives: Record<string, Record<string, string>>
        semantic: {
            background: Record<string, string>
            foreground: Record<string, string>
            primary: Record<string, string>
            secondary: Record<string, string>
            accent: Record<string, string>
            destructive: Record<string, string>
            border: Record<string, string>
            ring: string
        }
    }
    spacing: Record<string, string>
    typography: {
        fontFamilies: Record<string, string>
        fontSizes: Record<string, string>
        fontWeights: Record<string, number>
        lineHeights: Record<string, number>
        letterSpacing: Record<string, string>
    }
    radii: Record<string, string>
    shadows: Record<string, string>
    transitions: {
        durations: Record<string, string>
        easings: Record<string, string>
    }
    breakpoints: Record<string, string>
}

export const tokens: DesignTokens = tokensData as DesignTokens

/**
 * Resolve a token reference like "{colors.primitives.blue.500}" to its actual value
 */
export function resolveTokenReference(value: string, source: DesignTokens = tokens): string {
    if (!value.startsWith('{') || !value.endsWith('}')) {
        return value
    }

    const path = value.slice(1, -1).split('.')
    let current: unknown = source

    for (const key of path) {
        if (current && typeof current === 'object' && key in current) {
            current = (current as Record<string, unknown>)[key]
        } else {
            return value // Return original if path not found
        }
    }

    // Recursively resolve nested references
    if (typeof current === 'string' && current.startsWith('{')) {
        return resolveTokenReference(current, source)
    }

    return String(current)
}

/**
 * Get a color token value, resolving any references
 */
export function getColorToken(path: string): string {
    const parts = path.split('.')
    let current: unknown = tokens.colors

    for (const key of parts) {
        if (current && typeof current === 'object' && key in current) {
            current = (current as Record<string, unknown>)[key]
        } else {
            console.warn(`Color token not found: ${path}`)
            return '#ff00ff' // Fallback to magenta to make it obvious
        }
    }

    const value = String(current)
    return resolveTokenReference(value)
}

/**
 * Get a spacing token value
 */
export function getSpacingToken(key: string): string {
    const value = tokens.spacing[key]
    if (!value) {
        console.warn(`Spacing token not found: ${key}`)
        return '0px'
    }
    return value
}

/**
 * Get a typography token
 */
export function getTypographyToken(category: keyof DesignTokens['typography'], key: string): string | number {
    const categoryData = tokens.typography[category]
    if (!categoryData || !(key in categoryData)) {
        console.warn(`Typography token not found: ${category}.${key}`)
        return category === 'fontWeights' ? 400 : '16px'
    }
    return (categoryData as Record<string, string | number>)[key]
}

/**
 * Get a radius token value
 */
export function getRadiusToken(key: string): string {
    const value = tokens.radii[key]
    if (!value) {
        console.warn(`Radius token not found: ${key}`)
        return '0px'
    }
    return value
}

/**
 * Get a shadow token value, resolving any color references
 */
export function getShadowToken(key: string): string {
    const value = tokens.shadows[key]
    if (!value) {
        console.warn(`Shadow token not found: ${key}`)
        return 'none'
    }
    // Resolve any color references in the shadow value
    return value.replace(/\{[^}]+\}/g, (match) => resolveTokenReference(match))
}

/**
 * Generate CSS custom properties from tokens
 */
export function generateCSSVariables(): Record<string, string> {
    const variables: Record<string, string> = {}

    // Primitive colors
    for (const [colorName, shades] of Object.entries(tokens.colors.primitives)) {
        for (const [shade, value] of Object.entries(shades)) {
            variables[`--color-${colorName}-${shade}`] = value
        }
    }

    // Semantic colors
    for (const [category, values] of Object.entries(tokens.colors.semantic)) {
        if (typeof values === 'string') {
            variables[`--color-${category}`] = resolveTokenReference(values)
        } else {
            for (const [key, value] of Object.entries(values as Record<string, string>)) {
                variables[`--color-${category}-${key}`] = resolveTokenReference(value)
            }
        }
    }

    // Spacing
    for (const [key, value] of Object.entries(tokens.spacing)) {
        variables[`--spacing-${key.replace('.', '_')}`] = value
    }

    // Typography
    for (const [key, value] of Object.entries(tokens.typography.fontFamilies)) {
        variables[`--font-${key}`] = value
    }
    for (const [key, value] of Object.entries(tokens.typography.fontSizes)) {
        variables[`--text-${key}`] = value
    }
    for (const [key, value] of Object.entries(tokens.typography.fontWeights)) {
        variables[`--font-weight-${key}`] = String(value)
    }
    for (const [key, value] of Object.entries(tokens.typography.lineHeights)) {
        variables[`--leading-${key}`] = String(value)
    }
    for (const [key, value] of Object.entries(tokens.typography.letterSpacing)) {
        variables[`--tracking-${key}`] = value
    }

    // Radii
    for (const [key, value] of Object.entries(tokens.radii)) {
        variables[`--radius-${key}`] = value
    }

    // Shadows
    for (const [key, value] of Object.entries(tokens.shadows)) {
        variables[`--shadow-${key}`] = resolveTokenReference(value)
    }

    // Transitions
    for (const [key, value] of Object.entries(tokens.transitions.durations)) {
        variables[`--duration-${key}`] = value
    }
    for (const [key, value] of Object.entries(tokens.transitions.easings)) {
        variables[`--easing-${key}`] = value
    }

    // Breakpoints
    for (const [key, value] of Object.entries(tokens.breakpoints)) {
        variables[`--breakpoint-${key}`] = value
    }

    return variables
}

/**
 * Generate a CSS string from token variables
 */
export function generateCSSString(): string {
    const variables = generateCSSVariables()
    const lines = Object.entries(variables)
        .map(([key, value]) => `  ${key}: ${value};`)
        .join('\n')
    return `:root {\n${lines}\n}`
}

// Token categories for documentation
export const tokenCategories = [
    {
        id: 'colors',
        name: 'Colors',
        description: 'Primitive and semantic color palettes',
    },
    {
        id: 'spacing',
        name: 'Spacing',
        description: '4px-based spacing scale',
    },
    {
        id: 'typography',
        name: 'Typography',
        description: 'Font families, sizes, weights, and line heights',
    },
    {
        id: 'radii',
        name: 'Border Radius',
        description: 'Corner rounding values',
    },
    {
        id: 'shadows',
        name: 'Shadows',
        description: 'Box shadow definitions',
    },
    {
        id: 'transitions',
        name: 'Transitions',
        description: 'Animation durations and easings',
    },
] as const
