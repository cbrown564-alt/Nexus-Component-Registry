import React, { useState } from 'react'
import { X, Copy, Check, FileJson, FileCode } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getRadius, getShadow } from '@/data/variants'
import type { PlaygroundTheme } from '@/data/playgroundThemes'

interface ExportModalProps {
    isOpen: boolean
    onClose: () => void
    theme: PlaygroundTheme
}

export function ExportModal({ isOpen, onClose, theme }: ExportModalProps) {
    const [copied, setCopied] = useState(false)
    const [format, setFormat] = useState<'ts' | 'json'>('ts')

    const getCode = () => {
        if (format === 'json') {
            return JSON.stringify(theme, null, 2)
        }

        return `export const myTheme: PlaygroundTheme = {
    id: '${theme.id}-custom',
    name: '${theme.name} (Custom)',
    description: '${theme.description}',
    mode: '${theme.mode}',
    colors: {
        background: '${theme.colors.background}',
        foreground: '${theme.colors.foreground}',
        card: '${theme.colors.card}',
        cardForeground: '${theme.colors.cardForeground}',
        primary: '${theme.colors.primary}',
        primaryForeground: '${theme.colors.primaryForeground}',
        secondary: '${theme.colors.secondary}',
        secondaryForeground: '${theme.colors.secondaryForeground}',
        muted: '${theme.colors.muted}',
        mutedForeground: '${theme.colors.mutedForeground}',
        accent: '${theme.colors.accent}',
        accentForeground: '${theme.colors.accentForeground}',
        border: '${theme.colors.border}',
        ring: '${theme.colors.ring}',
    },
    radius: '${theme.radius}',
    shadow: '${theme.shadow}',
    typography: {
        fontFamily: '${theme.typography.fontFamily}',
        headingWeight: ${theme.typography.headingWeight},
        bodyWeight: ${theme.typography.bodyWeight},
        letterSpacing: '${theme.typography.letterSpacing}',
    },
}`
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(getCode())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 60,
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90%',
                            maxWidth: '600px',
                            backgroundColor: theme.colors.card,
                            border: `1px solid ${theme.colors.border}`,
                            borderRadius: getRadius('lg'), // Always use larger radius for modals
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            zIndex: 70,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            maxHeight: '85vh',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '16px 20px',
                            borderBottom: `1px solid ${theme.colors.border}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: theme.colors.muted,
                        }}>
                            <h2 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: theme.colors.foreground,
                                margin: 0,
                            }}>
                                Export Theme Configuration
                            </h2>
                            <button
                                onClick={onClose}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: theme.colors.mutedForeground,
                                    padding: '4px',
                                    display: 'flex',
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Toolbar */}
                        <div style={{
                            padding: '12px 20px',
                            display: 'flex',
                            gap: '12px',
                            borderBottom: `1px solid ${theme.colors.border}`,
                        }}>
                            <button
                                onClick={() => setFormat('ts')}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '6px 12px',
                                    borderRadius: getRadius('sm'),
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    border: `1px solid ${format === 'ts' ? theme.colors.primary : theme.colors.border}`,
                                    backgroundColor: format === 'ts' ? theme.colors.primary : 'transparent',
                                    color: format === 'ts' ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                                    transition: 'all 0.2s',
                                }}
                            >
                                <FileCode size={14} />
                                TypeScript
                            </button>
                            <button
                                onClick={() => setFormat('json')}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '6px 12px',
                                    borderRadius: getRadius('sm'),
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    border: `1px solid ${format === 'json' ? theme.colors.primary : theme.colors.border}`,
                                    backgroundColor: format === 'json' ? theme.colors.primary : 'transparent',
                                    color: format === 'json' ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                                    transition: 'all 0.2s',
                                }}
                            >
                                <FileJson size={14} />
                                JSON
                            </button>
                        </div>

                        {/* Code Viewer */}
                        <div style={{
                            flex: 1,
                            overflow: 'auto',
                            padding: '0',
                            backgroundColor: '#09090b', // Always dark for code
                            position: 'relative',
                        }}>
                            <pre style={{
                                margin: 0,
                                padding: '20px',
                                fontSize: '13px',
                                fontFamily: 'monospace',
                                color: '#e4e4e7',
                                lineHeight: '1.5',
                            }}>
                                {getCode()}
                            </pre>
                        </div>

                        {/* Footer */}
                        <div style={{
                            padding: '16px 20px',
                            borderTop: `1px solid ${theme.colors.border}`,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            backgroundColor: theme.colors.background,
                        }}>
                            <button
                                onClick={handleCopy}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '8px 16px',
                                    borderRadius: getRadius(theme.radius),
                                    backgroundColor: theme.colors.primary,
                                    color: theme.colors.primaryForeground,
                                    border: 'none',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    opacity: copied ? 0.9 : 1,
                                }}
                            >
                                {copied ? <Check size={16} /> : <Copy size={16} />}
                                {copied ? 'Copied!' : 'Copy to Clipboard'}
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
