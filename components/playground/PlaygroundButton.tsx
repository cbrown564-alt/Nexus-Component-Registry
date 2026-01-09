import React from 'react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import {
    Size,
    ButtonVariant,
    sizeStyles,
    getButtonVariantStyles,
    getRadius
} from '@/data/variants'

export interface PlaygroundButtonProps {
    children: React.ReactNode
    variant?: ButtonVariant
    size?: Size
    theme: PlaygroundTheme
    disabled?: boolean
    onClick?: () => void
    icon?: React.ReactNode
    /** Accessible label for screen readers (required if children is only an icon) */
    'aria-label'?: string
}

export function PlaygroundButton({
    children,
    variant = 'primary',
    size = 'md',
    theme,
    disabled = false,
    onClick,
    icon,
    'aria-label': ariaLabel,
}: PlaygroundButtonProps) {
    const sizeStyle = sizeStyles.button[size]
    const variantStyle = getButtonVariantStyles(variant, theme)

    const baseStyles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizeStyle.gap,
        borderRadius: getRadius(theme.radius),
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        fontWeight: theme.typography.bodyWeight,
        fontFamily: theme.typography.fontFamily,
        letterSpacing: theme.typography.letterSpacing,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        opacity: disabled ? 0.5 : 1,
        outline: 'none',
        ...variantStyle,
    }

    // Focus ring styles applied via CSS class
    const focusClass = 'playground-button-focus'

    return (
        <button
            style={baseStyles}
            className={focusClass}
            onClick={onClick}
            disabled={disabled}
            aria-disabled={disabled}
            aria-label={ariaLabel}
        >
            {icon}
            {children}
        </button>
    )
}

export default PlaygroundButton

