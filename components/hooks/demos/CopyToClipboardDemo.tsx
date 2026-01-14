import React from 'react'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { useTheme } from '@/context/ThemeContext'
import { getRadius } from '@/data/variants'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

/**
 * Interactive demo for useCopyToClipboard hook.
 * Shows a copy button with success animation.
 */
export function CopyToClipboardDemo() {
    const { currentPlaygroundTheme: theme } = useTheme()
    const { copied, copy } = useCopyToClipboard()

    const sampleCode = 'npm install @nexus/hooks'

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {/* Code Block */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    backgroundColor: theme.colors.secondary,
                    borderRadius: getRadius(theme.radius),
                    border: `1px solid ${theme.colors.border}`,
                    fontFamily: 'monospace',
                }}
            >
                <code style={{ fontSize: '14px', color: theme.colors.foreground }}>{sampleCode}</code>

                {/* Copy Button */}
                <button
                    onClick={() => copy(sampleCode)}
                    style={{
                        padding: '8px',
                        borderRadius: getRadius(theme.radius),
                        border: 'none',
                        backgroundColor: copied ? theme.colors.primary : 'transparent',
                        color: copied ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.div
                                key="check"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                <Check size={16} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="copy"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                <Copy size={16} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Status */}
            <AnimatePresence>
                {copied && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                            fontSize: '13px',
                            color: theme.colors.primary,
                            fontWeight: 500,
                        }}
                    >
                        ✓ Copied to clipboard!
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CopyToClipboardDemo
