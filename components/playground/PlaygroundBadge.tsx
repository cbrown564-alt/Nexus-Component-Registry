import React from 'react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import {
    BadgeVariant,
    sizeStyles,
    getBadgeVariantStyles,
    getRadius
} from '@/data/variants'

export type BadgeSize = 'sm' | 'md'

export interface PlaygroundBadgeProps {
    children: React.ReactNode
    variant?: BadgeVariant
    size?: BadgeSize
    theme: PlaygroundTheme
}

export function PlaygroundBadge({
    children,
    variant = 'primary',
    size = 'md',
    theme,
}: PlaygroundBadgeProps) {
    const sizeStyle = sizeStyles.badge[size]
    const variantStyle = getBadgeVariantStyles(variant, theme)

    const styles: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: getRadius(theme.radius === 'none' ? 'sm' : theme.radius),
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        fontWeight: 500,
        fontFamily: theme.typography.fontFamily,
        whiteSpace: 'nowrap',
        ...variantStyle,
    }

    return <span style={styles}>{children}</span>
}

export default PlaygroundBadge
