import React, { useState, useEffect } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getRadius } from '@/data/variants'
import type { PlaygroundTheme } from '@/data/playgroundThemes'

interface ColorPickerProps {
    label: string
    color: string
    onChange: (color: string) => void
    theme: PlaygroundTheme
}

const PRESET_COLORS = [
    '#3b82f6', // blue-500
    '#ef4444', // red-500
    '#10b981', // emerald-500
    '#f59e0b', // amber-500
    '#8b5cf6', // violet-500
    '#ec4899', // pink-500
    '#06b6d4', // cyan-500
    '#f97316', // orange-500
    '#6366f1', // indigo-500
    '#84cc16', // lime-500
    '#09090b', // zinc-950
    '#18181b', // zinc-900
    '#27272a', // zinc-800
    '#fafafa', // zinc-50
    '#ffffff', // white
]

export function ColorPicker({ label, color, onChange, theme }: ColorPickerProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState(color)

    useEffect(() => {
        setInputValue(color)
    }, [color])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setInputValue(newValue)
        if (/^#[0-9A-F]{6}$/i.test(newValue)) {
            onChange(newValue)
        }
    }

    return (
        <div className="relative">
            <div className="flex items-center justify-between mb-2">
                <label style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: theme.colors.mutedForeground,
                    fontFamily: theme.typography.fontFamily
                }}>
                    {label}
                </label>
            </div>

            <div className="flex gap-2">
                {/* Color Preview / Trigger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: getRadius(theme.radius),
                        backgroundColor: color,
                        border: `1px solid ${theme.colors.border}`,
                        cursor: 'pointer',
                        flexShrink: 0,
                        position: 'relative',
                        boxShadow: `0 0 0 1px ${theme.colors.background}, 0 0 0 2px ${isOpen ? theme.colors.primary : 'transparent'}`,
                        transition: 'all 0.2s',
                    }}
                />

                {/* Hex Input */}
                <div style={{ position: 'relative', flex: 1 }}>
                    <div style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: theme.colors.mutedForeground,
                        fontSize: '13px',
                        fontFamily: 'monospace'
                    }}>
                        #
                    </div>
                    <input
                        type="text"
                        value={inputValue.replace('#', '')}
                        onChange={handleInputChange}
                        maxLength={6}
                        style={{
                            width: '100%',
                            height: '36px',
                            padding: '0 10px 0 24px',
                            borderRadius: getRadius(theme.radius),
                            border: `1px solid ${theme.colors.border}`,
                            backgroundColor: theme.colors.secondary,
                            color: theme.colors.foreground,
                            fontSize: '13px',
                            fontFamily: 'monospace',
                            outline: 'none',
                        }}
                        onFocus={(e) => e.target.style.borderColor = theme.colors.primary}
                        onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                    />
                </div>
            </div>

            {/* Popover */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop to close */}
                        <div
                            style={{ position: 'fixed', inset: 0, zIndex: 40 }}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 4, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                            style={{
                                position: 'absolute',
                                top: '44px',
                                left: 0,
                                zIndex: 50,
                                width: '220px',
                                padding: '12px',
                                borderRadius: getRadius(theme.radius),
                                border: `1px solid ${theme.colors.border}`,
                                backgroundColor: theme.colors.card,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            }}
                        >
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(5, 1fr)',
                                gap: '8px'
                            }}>
                                {PRESET_COLORS.map((preset) => (
                                    <button
                                        key={preset}
                                        onClick={() => {
                                            onChange(preset)
                                            setIsOpen(false)
                                        }}
                                        style={{
                                            width: '100%',
                                            aspectRatio: '1',
                                            borderRadius: '4px',
                                            backgroundColor: preset,
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {color.toLowerCase() === preset.toLowerCase() && (
                                            <Check
                                                size={14}
                                                color={['#ffffff', '#fafafa'].includes(preset) ? '#000' : '#fff'}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
