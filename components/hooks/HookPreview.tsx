import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { motion as motionTokens } from '@/data/motion'
import { useTheme } from '@/context/ThemeContext'
import { getRadius, getShadow } from '@/data/variants'
import { HookKnobs, type KnobConfig, type KnobValues } from './HookKnobs'

interface HookPreviewProps {
    /** Human-readable title for the demo */
    title: string
    /** Brief description of what the demo shows */
    description?: string
    /** Knob configurations for adjustable parameters */
    knobs?: KnobConfig[]
    /** Render function receiving current knob values */
    children: (values: KnobValues) => React.ReactNode
}

/**
 * Framework component wrapping each hook's interactive demo.
 * Provides consistent styling and handles knob state management.
 */
export function HookPreview({ title, description, knobs = [], children }: HookPreviewProps) {
    const { currentPlaygroundTheme: theme } = useTheme()

    // Initialize knob values from defaults
    const initialValues = useMemo(() => {
        const values: KnobValues = {}
        knobs.forEach((knob) => {
            values[knob.id] = knob.value
        })
        return values
    }, [knobs])

    const [knobValues, setKnobValues] = useState<KnobValues>(initialValues)

    const handleKnobChange = (id: string, value: number | string | boolean) => {
        setKnobValues((prev) => ({ ...prev, [id]: value }))
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                display: 'grid',
                gridTemplateColumns: knobs.length > 0 ? '1fr 240px' : '1fr',
                gap: '20px',
                padding: '20px',
                backgroundColor: theme.colors.card,
                borderRadius: getRadius(theme.radius),
                border: `1px solid ${theme.colors.border}`,
                boxShadow: getShadow('sm', theme),
            }}
        >
            {/* Demo Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                    <h4
                        style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: theme.colors.foreground,
                            marginBottom: '4px',
                        }}
                    >
                        {title}
                    </h4>
                    {description && (
                        <p style={{ fontSize: '12px', color: theme.colors.mutedForeground }}>
                            {description}
                        </p>
                    )}
                </div>

                {/* Interactive Demo */}
                <div
                    style={{
                        minHeight: '180px',
                        padding: '24px',
                        backgroundColor: theme.colors.background,
                        borderRadius: getRadius(theme.radius),
                        border: `1px dashed ${theme.colors.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {children(knobValues)}
                </div>
            </div>

            {/* Knobs Panel */}
            {knobs.length > 0 && (
                <HookKnobs knobs={knobs} values={knobValues} onChange={handleKnobChange} />
            )}
        </motion.div>
    )
}

export default HookPreview
