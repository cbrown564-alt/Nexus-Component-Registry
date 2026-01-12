/**
 * Skip link component for keyboard accessibility
 * Allows keyboard users to skip navigation and jump to main content
 */
import React, { useState } from 'react';

export default function SkipLink() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <a
            href="#main-content"
            className="sr-only"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={isFocused ? {
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 200,
                padding: '0.5rem 1rem',
                backgroundColor: '#ffffff',
                color: '#09090b',
                borderRadius: '0.5rem',
                fontWeight: 500,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                outline: 'none',
                width: 'auto',
                height: 'auto',
                clip: 'auto',
                whiteSpace: 'normal',
                overflow: 'visible'
            } : undefined}
        >
            Skip to main content
        </a>
    )
}
