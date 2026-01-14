import React from 'react'
import { useSpotlight } from '@/hooks/useSpotlight'
import { useTheme } from '@/context/ThemeContext'
import { getRadius } from '@/data/variants'

/**
 * Interactive demo for useSpotlight hook.
 * Renders a card with a hover-following spotlight effect.
 */
export function SpotlightDemo() {
    const { currentPlaygroundTheme: theme } = useTheme()
    const { ref, position, opacity, handlers } = useSpotlight()

    return (
        <div
            ref={ref}
            {...handlers}
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '320px',
                padding: '32px',
                borderRadius: getRadius(theme.radius),
                border: `1px solid ${theme.colors.border}`,
                backgroundColor: theme.colors.card,
                overflow: 'hidden',
                cursor: 'crosshair',
            }}
        >
            {/* Spotlight Gradient */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${theme.colors.primary}20, transparent 50%)`,
                    opacity,
                    transition: 'opacity 0.2s',
                    pointerEvents: 'none',
                }}
            />

            {/* Card Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: theme.colors.primary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        fontSize: '24px',
                    }}
                >
                    ✨
                </div>
                <h3
                    style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: theme.colors.foreground,
                        marginBottom: '8px',
                    }}
                >
                    Spotlight Card
                </h3>
                <p style={{ fontSize: '13px', color: theme.colors.mutedForeground }}>
                    Hover over this card to see the spotlight effect follow your cursor.
                </p>
            </div>
        </div>
    )
}

export default SpotlightDemo
