import React, { useState } from 'react'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useTheme } from '@/context/ThemeContext'
import { getRadius, getShadow } from '@/data/variants'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * Interactive demo for useClickOutside hook.
 * Shows a modal that closes when clicking outside.
 */
export function ClickOutsideDemo() {
    const { currentPlaygroundTheme: theme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    padding: '12px 24px',
                    fontSize: '14px',
                    fontWeight: 500,
                    borderRadius: getRadius(theme.radius),
                    border: 'none',
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    cursor: 'pointer',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)'
                    e.currentTarget.style.boxShadow = getShadow('md', theme)
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = 'none'
                }}
            >
                Open Modal
            </button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'relative',
                            padding: '24px 32px',
                            backgroundColor: theme.colors.card,
                            borderRadius: getRadius(theme.radius),
                            border: `1px solid ${theme.colors.border}`,
                            boxShadow: getShadow('lg', theme),
                            minWidth: '280px',
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                padding: '4px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: theme.colors.mutedForeground,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <X size={16} />
                        </button>

                        {/* Content */}
                        <h4
                            style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: theme.colors.foreground,
                                marginBottom: '8px',
                            }}
                        >
                            Click Outside Demo
                        </h4>
                        <p style={{ fontSize: '13px', color: theme.colors.mutedForeground }}>
                            Click anywhere outside this modal to close it.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Status */}
            <p style={{ fontSize: '12px', color: theme.colors.mutedForeground }}>
                Modal is {isOpen ? 'open' : 'closed'}
            </p>
        </div>
    )
}

export default ClickOutsideDemo
