import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { getRadius } from '@/data/variants'

// Types
export interface KnobConfig {
    id: string
    label: string
    type: 'number' | 'select' | 'boolean' | 'color'
    value: number | string | boolean
    options?: { label: string; value: string | number }[]
    min?: number
    max?: number
    step?: number
}

export type KnobValues = Record<string, number | string | boolean>

interface HookKnobsProps {
    knobs: KnobConfig[]
    values: KnobValues
    onChange: (id: string, value: number | string | boolean) => void
}

/**
 * Reusable controls for adjusting hook parameters in real-time.
 * Renders appropriate input types based on knob configuration.
 */
export function HookKnobs({ knobs, values, onChange }: HookKnobsProps) {
    const { currentPlaygroundTheme: theme } = useTheme()

    if (knobs.length === 0) return null

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '16px',
                backgroundColor: theme.colors.secondary,
                borderRadius: getRadius(theme.radius),
                border: `1px solid ${theme.colors.border}`,
            }}
        >
            <div
                style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: theme.colors.mutedForeground,
                }}
            >
                Parameters
            </div>

            {knobs.map((knob) => (
                <div key={knob.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label
                        style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            color: theme.colors.foreground,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {knob.label}
                        {knob.type === 'number' && (
                            <span style={{ fontFamily: 'monospace', color: theme.colors.primary }}>
                                {values[knob.id]}
                            </span>
                        )}
                    </label>

                    {knob.type === 'number' && (
                        <input
                            type="range"
                            min={knob.min ?? 0}
                            max={knob.max ?? 100}
                            step={knob.step ?? 1}
                            value={values[knob.id] as number}
                            onChange={(e) => onChange(knob.id, Number(e.target.value))}
                            style={{
                                width: '100%',
                                accentColor: theme.colors.primary,
                                cursor: 'pointer',
                            }}
                        />
                    )}

                    {knob.type === 'select' && (
                        <select
                            value={values[knob.id] as string}
                            onChange={(e) => onChange(knob.id, e.target.value)}
                            style={{
                                padding: '8px 12px',
                                borderRadius: getRadius(theme.radius),
                                border: `1px solid ${theme.colors.border}`,
                                backgroundColor: theme.colors.background,
                                color: theme.colors.foreground,
                                fontSize: '13px',
                                cursor: 'pointer',
                                outline: 'none',
                            }}
                        >
                            {knob.options?.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    )}

                    {knob.type === 'boolean' && (
                        <button
                            onClick={() => onChange(knob.id, !values[knob.id])}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 12px',
                                borderRadius: getRadius(theme.radius),
                                border: `1px solid ${theme.colors.border}`,
                                backgroundColor: values[knob.id] ? theme.colors.primary : theme.colors.background,
                                color: values[knob.id] ? theme.colors.primaryForeground : theme.colors.foreground,
                                fontSize: '13px',
                                cursor: 'pointer',
                                transition: 'all 0.15s',
                            }}
                        >
                            <span
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: values[knob.id] ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                                }}
                            />
                            {values[knob.id] ? 'Enabled' : 'Disabled'}
                        </button>
                    )}

                    {knob.type === 'color' && (
                        <input
                            type="color"
                            value={values[knob.id] as string}
                            onChange={(e) => onChange(knob.id, e.target.value)}
                            style={{
                                width: '100%',
                                height: '32px',
                                padding: '2px',
                                borderRadius: getRadius(theme.radius),
                                border: `1px solid ${theme.colors.border}`,
                                backgroundColor: theme.colors.background,
                                cursor: 'pointer',
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default HookKnobs
