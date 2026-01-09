import React, { type KeyboardEvent } from 'react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import { sizeStyles } from '@/data/variants'

export type ToggleSize = 'sm' | 'md'

export interface PlaygroundToggleProps {
    checked: boolean
    onChange?: (checked: boolean) => void
    size?: ToggleSize
    theme: PlaygroundTheme
    disabled?: boolean
    /** Accessible label for screen readers */
    'aria-label'?: string
}

export function PlaygroundToggle({
    checked,
    onChange,
    size = 'md',
    theme,
    disabled = false,
    'aria-label': ariaLabel,
}: PlaygroundToggleProps) {
    const sizeStyle = sizeStyles.toggle[size]
    const knobSize = parseInt(sizeStyle.knob)

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            onChange?.(!checked)
        }
    }

    const trackStyles: React.CSSProperties = {
        width: sizeStyle.width,
        height: sizeStyle.height,
        backgroundColor: checked ? theme.colors.primary : theme.colors.muted,
        borderRadius: '9999px',
        padding: '2px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        opacity: disabled ? 0.5 : 1,
        outline: 'none',
    }

    const knobStyles: React.CSSProperties = {
        width: `${knobSize}px`,
        height: `${knobSize}px`,
        backgroundColor: checked ? theme.colors.primaryForeground : theme.colors.mutedForeground,
        borderRadius: '9999px',
        transform: checked ? `translateX(${knobSize}px)` : 'translateX(0)',
        transition: 'all 0.2s',
    }

    return (
        <div
            style={trackStyles}
            className="playground-toggle-focus"
            onClick={() => !disabled && onChange?.(!checked)}
            onKeyDown={handleKeyDown}
            role="switch"
            aria-checked={checked}
            aria-label={ariaLabel}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
        >
            <div style={knobStyles} />
        </div>
    )
}

export default PlaygroundToggle

