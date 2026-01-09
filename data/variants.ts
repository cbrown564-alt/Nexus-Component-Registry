import React from 'react'
import type { PlaygroundTheme } from './playgroundThemes'

// ============================================================
// SIZE VARIANTS
// ============================================================

export type Size = 'sm' | 'md' | 'lg'
export type CardSize = 'compact' | 'default' | 'spacious'

export const sizeStyles = {
    button: {
        sm: { padding: '6px 12px', fontSize: '12px', gap: '6px' },
        md: { padding: '10px 20px', fontSize: '14px', gap: '8px' },
        lg: { padding: '14px 28px', fontSize: '16px', gap: '10px' },
    },
    input: {
        sm: { padding: '6px 10px', fontSize: '12px' },
        md: { padding: '10px 14px', fontSize: '14px' },
        lg: { padding: '14px 18px', fontSize: '16px' },
    },
    badge: {
        sm: { padding: '2px 6px', fontSize: '10px' },
        md: { padding: '4px 10px', fontSize: '12px' },
    },
    toggle: {
        sm: { width: '36px', height: '20px', knob: '16px' },
        md: { width: '44px', height: '24px', knob: '20px' },
    },
    card: {
        compact: { padding: '16px' },
        default: { padding: '24px' },
        spacious: { padding: '32px' },
    },
} as const

// ============================================================
// COLOR VARIANTS
// ============================================================

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'destructive' | 'outline' | 'ghost'
export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'destructive' | 'outline'
export type InputVariant = 'default' | 'error'

export function getButtonVariantStyles(variant: ButtonVariant, theme: PlaygroundTheme): React.CSSProperties {
    const variants: Record<ButtonVariant, React.CSSProperties> = {
        primary: {
            backgroundColor: theme.colors.primary,
            color: theme.colors.primaryForeground,
            border: 'none',
        },
        secondary: {
            backgroundColor: theme.colors.secondary,
            color: theme.colors.secondaryForeground,
            border: 'none',
        },
        accent: {
            backgroundColor: theme.colors.accent,
            color: theme.colors.accentForeground,
            border: 'none',
        },
        destructive: {
            backgroundColor: '#ef4444',
            color: '#ffffff',
            border: 'none',
        },
        outline: {
            backgroundColor: 'transparent',
            color: theme.colors.foreground,
            border: `1px solid ${theme.colors.border}`,
        },
        ghost: {
            backgroundColor: 'transparent',
            color: theme.colors.foreground,
            border: 'none',
        },
    }
    return variants[variant]
}

export function getBadgeVariantStyles(variant: BadgeVariant, theme: PlaygroundTheme): React.CSSProperties {
    const variants: Record<BadgeVariant, React.CSSProperties> = {
        primary: {
            backgroundColor: theme.colors.primary,
            color: theme.colors.primaryForeground,
        },
        secondary: {
            backgroundColor: theme.colors.secondary,
            color: theme.colors.secondaryForeground,
        },
        accent: {
            backgroundColor: theme.colors.accent,
            color: theme.colors.accentForeground,
        },
        destructive: {
            backgroundColor: '#ef4444',
            color: '#ffffff',
        },
        outline: {
            backgroundColor: 'transparent',
            color: theme.colors.foreground,
            border: `1px solid ${theme.colors.border}`,
        },
    }
    return variants[variant]
}

export function getInputVariantStyles(variant: InputVariant, theme: PlaygroundTheme): React.CSSProperties {
    const variants: Record<InputVariant, React.CSSProperties> = {
        default: {
            borderColor: theme.colors.border,
        },
        error: {
            borderColor: '#ef4444',
            boxShadow: '0 0 0 1px #ef4444',
        },
    }
    return variants[variant]
}

// ============================================================
// RADIUS & SHADOW HELPERS
// ============================================================

export function getRadius(radius: PlaygroundTheme['radius']): string {
    const radii: Record<PlaygroundTheme['radius'], string> = {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
    }
    return radii[radius]
}

export function getShadow(shadow: PlaygroundTheme['shadow'], theme: PlaygroundTheme): string {
    const shadows: Record<PlaygroundTheme['shadow'], string> = {
        none: 'none',
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        glow: `0 0 20px ${theme.colors.primary}40, 0 0 40px ${theme.colors.primary}20`,
    }
    return shadows[shadow]
}
