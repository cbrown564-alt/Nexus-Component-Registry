import React, { useState } from 'react'
import { useAnimatedMount } from '@/hooks/useAnimatedMount'
import { useTheme } from '@/context/ThemeContext'
import { getRadius } from '@/data/variants'
import { motion } from 'framer-motion'
import type { KnobValues } from '../HookKnobs'

interface AnimatedMountDemoProps {
    values: KnobValues
}

const SAMPLE_ITEMS = ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Notifications']

/**
 * Interactive demo for useAnimatedMount hook.
 * Shows staggered list animations with add/reset controls.
 */
export function AnimatedMountDemo({ values }: AnimatedMountDemoProps) {
    const { currentPlaygroundTheme: theme } = useTheme()
    const staggerDelay = (values.staggerDelay as number) ?? 50
    const [items, setItems] = useState(SAMPLE_ITEMS)
    const [key, setKey] = useState(0) // For triggering re-mount
    const { isVisible, getItemDelay } = useAnimatedMount({ staggerDelay })

    const handleReset = () => {
        setItems([])
        setTimeout(() => {
            setItems(SAMPLE_ITEMS)
            setKey((k) => k + 1)
        }, 50)
    }

    return (
        <div style={{ width: '100%', maxWidth: '300px' }}>
            {/* Controls */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <button
                    onClick={handleReset}
                    style={{
                        flex: 1,
                        padding: '10px 16px',
                        fontSize: '13px',
                        fontWeight: 500,
                        borderRadius: getRadius(theme.radius),
                        border: 'none',
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.primaryForeground,
                        cursor: 'pointer',
                    }}
                >
                    Replay Animation
                </button>
            </div>

            {/* Animated List */}
            <div
                key={key}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            delay: getItemDelay(index) / 1000,
                            type: 'spring',
                            damping: 20,
                            stiffness: 200,
                        }}
                        style={{
                            padding: '12px 16px',
                            backgroundColor: theme.colors.card,
                            borderRadius: getRadius(theme.radius),
                            border: `1px solid ${theme.colors.border}`,
                            fontSize: '14px',
                            color: theme.colors.foreground,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}
                    >
                        <div
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: theme.colors.primary,
                            }}
                        />
                        {item}
                    </motion.div>
                ))}
            </div>

            {/* Timing Info */}
            <p
                style={{
                    fontSize: '11px',
                    color: theme.colors.mutedForeground,
                    marginTop: '12px',
                    textAlign: 'center',
                }}
            >
                Stagger delay: {staggerDelay}ms per item
            </p>
        </div>
    )
}

export default AnimatedMountDemo
