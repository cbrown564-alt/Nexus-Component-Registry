import React from 'react'

interface VisuallyHiddenProps {
    children: React.ReactNode
    as?: 'span' | 'div'
}

/**
 * Component to hide content visually while keeping it accessible to screen readers.
 * Use for labels, announcements, and other text that should only be read by assistive technology.
 */
export function VisuallyHidden({ children, as: Component = 'span' }: VisuallyHiddenProps) {
    return (
        <Component
            style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: '0',
            }}
        >
            {children}
        </Component>
    )
}

export default VisuallyHidden
