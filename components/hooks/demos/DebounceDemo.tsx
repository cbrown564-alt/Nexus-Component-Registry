import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useTheme } from '@/context/ThemeContext'
import { getRadius } from '@/data/variants'
import type { KnobValues } from '../HookKnobs'

interface DebounceDemoProps {
    values: KnobValues
}

/**
 * Interactive demo for useDebounce hook.
 * Shows instant vs debounced value with adjustable delay.
 */
export function DebounceDemo({ values }: DebounceDemoProps) {
    const { currentPlaygroundTheme: theme } = useTheme()
    const [inputValue, setInputValue] = useState('')
    const delay = (values.delay as number) ?? 300
    const debouncedValue = useDebounce(inputValue, delay)
    const [updateCount, setUpdateCount] = useState(0)

    useEffect(() => {
        if (debouncedValue) {
            setUpdateCount((c) => c + 1)
        }
    }, [debouncedValue])

    return (
        <div style={{ width: '100%', maxWidth: '400px' }}>
            {/* Input */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '14px',
                    borderRadius: getRadius(theme.radius),
                    border: `1px solid ${theme.colors.border}`,
                    backgroundColor: theme.colors.background,
                    color: theme.colors.foreground,
                    marginBottom: '20px',
                    outline: 'none',
                    transition: 'border-color 0.15s',
                }}
            />

            {/* Value Comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Instant Value */}
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
                            marginBottom: '8px',
                        }}
                    >
                        Instant Value
                    </div>
                    <div
                        style={{
                            fontSize: '14px',
                            fontFamily: 'monospace',
                            color: theme.colors.foreground,
                            wordBreak: 'break-all',
                            minHeight: '20px',
                        }}
                    >
                        {inputValue || '—'}
                    </div>
                </div>

                {/* Debounced Value */}
                <div
                    style={{
                        padding: '16px',
                        backgroundColor: `${theme.colors.primary}10`,
                        borderRadius: getRadius(theme.radius),
                        border: `1px solid ${theme.colors.primary}40`,
                    }}
                >
                    <div
                        style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: theme.colors.primary,
                            marginBottom: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>Debounced ({delay}ms)</span>
                        <span style={{ opacity: 0.7 }}>×{updateCount}</span>
                    </div>
                    <div
                        style={{
                            fontSize: '14px',
                            fontFamily: 'monospace',
                            color: theme.colors.foreground,
                            wordBreak: 'break-all',
                            minHeight: '20px',
                        }}
                    >
                        {debouncedValue || '—'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DebounceDemo
