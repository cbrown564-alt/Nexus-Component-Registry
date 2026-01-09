import React from 'react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import {
    Size,
    InputVariant,
    sizeStyles,
    getInputVariantStyles,
    getRadius
} from '@/data/variants'

export interface PlaygroundInputProps {
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    variant?: InputVariant
    size?: Size
    theme: PlaygroundTheme
    disabled?: boolean
    type?: 'text' | 'email' | 'password' | 'number'
    /** Unique identifier for the input */
    id?: string
    /** Accessible label for screen readers */
    'aria-label'?: string
    /** Whether the input value is invalid */
    'aria-invalid'?: boolean
    /** Whether the input is required */
    required?: boolean
}

export function PlaygroundInput({
    placeholder,
    value,
    onChange,
    variant = 'default',
    size = 'md',
    theme,
    disabled = false,
    type = 'text',
    id,
    'aria-label': ariaLabel,
    'aria-invalid': ariaInvalid,
    required,
}: PlaygroundInputProps) {
    const sizeStyle = sizeStyles.input[size]
    const variantStyle = getInputVariantStyles(variant, theme)

    const styles: React.CSSProperties = {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.foreground,
        borderRadius: getRadius(theme.radius),
        border: `1px solid ${theme.colors.border}`,
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        fontFamily: theme.typography.fontFamily,
        width: '100%',
        outline: 'none',
        transition: 'all 0.2s',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'text',
        ...variantStyle,
    }

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            style={styles}
            className="playground-input-focus"
            disabled={disabled}
            aria-label={ariaLabel}
            aria-invalid={ariaInvalid}
            aria-required={required}
            required={required}
        />
    )
}

export default PlaygroundInput

