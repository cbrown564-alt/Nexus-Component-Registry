import React from 'react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import { CardSize, sizeStyles, getRadius, getShadow } from '@/data/variants'

export interface PlaygroundCardProps {
    title: string
    description?: string
    size?: CardSize
    theme: PlaygroundTheme
    children?: React.ReactNode
    style?: React.CSSProperties
}

export function PlaygroundCard({
    title,
    description,
    size = 'default',
    theme,
    children,
    style: customStyle,
}: PlaygroundCardProps) {
    const sizeStyle = sizeStyles.card[size]

    const styles: React.CSSProperties = {
        backgroundColor: theme.colors.card,
        color: theme.colors.cardForeground,
        borderRadius: getRadius(theme.radius),
        border: `1px solid ${theme.colors.border}`,
        boxShadow: getShadow(theme.shadow, theme),
        padding: sizeStyle.padding,
        fontFamily: theme.typography.fontFamily,
        ...customStyle,
    }

    return (
        <div style={styles}>
            <h3
                style={{
                    fontSize: '18px',
                    fontWeight: theme.typography.headingWeight,
                    marginBottom: description ? '8px' : '16px',
                    fontFamily: theme.typography.fontFamily,
                }}
            >
                {title}
            </h3>
            {description && (
                <p
                    style={{
                        color: theme.colors.mutedForeground,
                        fontSize: '14px',
                        marginBottom: '16px',
                    }}
                >
                    {description}
                </p>
            )}
            {children}
        </div>
    )
}

export default PlaygroundCard
