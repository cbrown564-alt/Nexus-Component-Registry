import React from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useTheme } from '@/context/ThemeContext'
import { getRadius } from '@/data/variants'
import { motion } from 'framer-motion'

/**
 * Interactive demo for useMousePosition hook.
 * Shows live (x, y) coordinates with a trailing cursor effect.
 */
export function MousePositionDemo() {
    const { currentPlaygroundTheme: theme } = useTheme()
    const { x, y } = useMousePosition()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            {/* Coordinates Display */}
            <div
                style={{
                    display: 'flex',
                    gap: '24px',
                    padding: '16px 32px',
                    backgroundColor: theme.colors.secondary,
                    borderRadius: getRadius(theme.radius),
                    border: `1px solid ${theme.colors.border}`,
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: theme.colors.mutedForeground,
                            marginBottom: '4px',
                        }}
                    >
                        X
                    </div>
                    <motion.div
                        key={x}
                        initial={{ scale: 1.2, color: theme.colors.primary }}
                        animate={{ scale: 1, color: theme.colors.foreground }}
                        style={{
                            fontSize: '24px',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            minWidth: '80px',
                        }}
                    >
                        {x}
                    </motion.div>
                </div>
                <div
                    style={{
                        width: '1px',
                        backgroundColor: theme.colors.border,
                    }}
                />
                <div style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: theme.colors.mutedForeground,
                            marginBottom: '4px',
                        }}
                    >
                        Y
                    </div>
                    <motion.div
                        key={y}
                        initial={{ scale: 1.2, color: theme.colors.primary }}
                        animate={{ scale: 1, color: theme.colors.foreground }}
                        style={{
                            fontSize: '24px',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            minWidth: '80px',
                        }}
                    >
                        {y}
                    </motion.div>
                </div>
            </div>

            {/* Hint */}
            <p style={{ fontSize: '12px', color: theme.colors.mutedForeground }}>
                Move your mouse anywhere on the page
            </p>
        </div>
    )
}

export default MousePositionDemo
