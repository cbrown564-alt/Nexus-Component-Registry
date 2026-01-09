import React from 'react'
import { ChevronRight } from 'lucide-react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import { getRadius } from '@/data/variants'

export interface PlaygroundListItemProps {
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>
    title: string
    description: string
    theme: PlaygroundTheme
    onClick?: () => void
}

export function PlaygroundListItem({
    icon: Icon,
    title,
    description,
    theme,
    onClick,
}: PlaygroundListItemProps) {
    const styles: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        backgroundColor: theme.colors.secondary,
        borderRadius: getRadius(theme.radius),
        cursor: 'pointer',
        transition: 'all 0.15s',
        fontFamily: theme.typography.fontFamily,
    }

    const iconContainerStyles: React.CSSProperties = {
        width: '40px',
        height: '40px',
        borderRadius: getRadius(theme.radius),
        backgroundColor: theme.colors.muted,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div style={styles} onClick={onClick}>
            <div style={iconContainerStyles}>
                <Icon size={18} style={{ color: theme.colors.mutedForeground }} />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 500, color: theme.colors.foreground }}>
                    {title}
                </div>
                <div style={{ fontSize: '12px', color: theme.colors.mutedForeground }}>
                    {description}
                </div>
            </div>
            <ChevronRight size={16} style={{ color: theme.colors.mutedForeground }} />
        </div>
    )
}

export default PlaygroundListItem
