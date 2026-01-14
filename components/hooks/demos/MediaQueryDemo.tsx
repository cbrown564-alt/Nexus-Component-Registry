import React from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useTheme } from '@/context/ThemeContext'
import { getRadius } from '@/data/variants'
import { motion } from 'framer-motion'
import { Monitor, Tablet, Smartphone } from 'lucide-react'

/**
 * Interactive demo for useMediaQuery hook.
 * Shows breakpoint bars that light up based on window size.
 */
export function MediaQueryDemo() {
    const { currentPlaygroundTheme: theme } = useTheme()

    const isMobile = useMediaQuery('(max-width: 640px)')
    const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
    const isDesktop = useMediaQuery('(min-width: 1025px)')
    const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

    const breakpoints = [
        { icon: Smartphone, label: 'Mobile', query: '≤640px', active: isMobile },
        { icon: Tablet, label: 'Tablet', query: '641-1024px', active: isTablet },
        { icon: Monitor, label: 'Desktop', query: '≥1025px', active: isDesktop },
    ]

    const preferences = [
        { label: 'Dark Mode', query: 'prefers-color-scheme: dark', active: prefersDark },
        { label: 'Reduced Motion', query: 'prefers-reduced-motion', active: prefersReducedMotion },
    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '360px' }}>
            {/* Breakpoint Indicators */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                {breakpoints.map(({ icon: Icon, label, query, active }) => (
                    <motion.div
                        key={label}
                        animate={{
                            backgroundColor: active ? theme.colors.primary : theme.colors.secondary,
                            borderColor: active ? theme.colors.primary : theme.colors.border,
                            scale: active ? 1.05 : 1,
                        }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '16px 20px',
                            borderRadius: getRadius(theme.radius),
                            border: `2px solid`,
                        }}
                    >
                        <Icon
                            size={24}
                            style={{
                                color: active ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                                transition: 'color 0.2s',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '12px',
                                fontWeight: 600,
                                color: active ? theme.colors.primaryForeground : theme.colors.foreground,
                                transition: 'color 0.2s',
                            }}
                        >
                            {label}
                        </span>
                        <span
                            style={{
                                fontSize: '10px',
                                fontFamily: 'monospace',
                                color: active ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                                opacity: 0.8,
                            }}
                        >
                            {query}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* User Preferences */}
            <div
                style={{
                    padding: '16px',
                    backgroundColor: theme.colors.secondary,
                    borderRadius: getRadius(theme.radius),
                    border: `1px solid ${theme.colors.border}`,
                }}
            >
                <div
                    style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: theme.colors.mutedForeground,
                        marginBottom: '12px',
                    }}
                >
                    User Preferences
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {preferences.map(({ label, active }) => (
                        <div
                            key={label}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                fontSize: '13px',
                            }}
                        >
                            <span style={{ color: theme.colors.foreground }}>{label}</span>
                            <span
                                style={{
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    fontSize: '11px',
                                    fontWeight: 500,
                                    backgroundColor: active ? `${theme.colors.primary}20` : theme.colors.muted,
                                    color: active ? theme.colors.primary : theme.colors.mutedForeground,
                                }}
                            >
                                {active ? 'Yes' : 'No'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <p style={{ fontSize: '11px', color: theme.colors.mutedForeground, textAlign: 'center' }}>
                Resize your browser window to see breakpoints change
            </p>
        </div>
    )
}

export default MediaQueryDemo
