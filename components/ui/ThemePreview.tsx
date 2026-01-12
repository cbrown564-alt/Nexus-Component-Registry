import React from 'react'
import { LegacyTheme as Theme } from '@/lib/registry'

interface ThemePreviewProps {
    theme: Theme
    className?: string
}

/**
 * A miniaturized, stylized "wireframe" preview of a dashboard.
 * Uses the theme's actual colors to render abstract UI elements.
 */
export default function ThemePreview({ theme, className = '' }: ThemePreviewProps) {
    // Extract color for accent elements (strip 'bg-' prefix for use in style)
    const accentClass = theme.colorClass

    return (
        <div
            className={`relative w-full h-full overflow-hidden rounded-lg ${theme.backgroundColor} ${className}`}
            style={{ minHeight: '120px' }}
        >
            {/* Sidebar */}
            <div
                className={`absolute left-0 top-0 bottom-0 w-[20%] border-r ${theme.sidebarStyles}`}
            >
                {/* Logo placeholder */}
                <div className={`mx-auto mt-2 h-2 w-[60%] rounded-sm ${accentClass} opacity-80`} />

                {/* Nav items */}
                <div className="mt-3 space-y-1.5 px-1">
                    <div className={`h-1.5 w-full rounded-sm ${accentClass} opacity-60`} />
                    <div
                        className={`h-1.5 w-[80%] rounded-sm opacity-20`}
                        style={{ backgroundColor: theme.category === 'light' ? '#000000' : '#ffffff' }}
                    />
                    <div
                        className={`h-1.5 w-[70%] rounded-sm opacity-20`}
                        style={{ backgroundColor: theme.category === 'light' ? '#000000' : '#ffffff' }}
                    />
                    <div
                        className={`h-1.5 w-[85%] rounded-sm opacity-20`}
                        style={{ backgroundColor: theme.category === 'light' ? '#000000' : '#ffffff' }}
                    />
                </div>
            </div>

            {/* Main content area */}
            <div className="absolute left-[22%] right-2 top-2 bottom-2 flex flex-col gap-2">
                {/* Header bar */}
                {/* Header bar */}
                <div
                    className={`h-3 rounded-sm opacity-10`}
                    style={{ backgroundColor: theme.category === 'light' ? '#000000' : '#ffffff' }}
                />

                {/* Stats row */}
                <div className="flex gap-1.5 h-[30%]">
                    <div
                        className={`flex-1 rounded-md border opacity-60`}
                        style={{
                            borderColor: theme.category === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                            backgroundColor: theme.category === 'light' ? '#ffffff' : 'rgba(255,255,255,0.05)'
                        }}
                    />
                    <div
                        className={`flex-1 rounded-md border opacity-60`}
                        style={{
                            borderColor: theme.category === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                            backgroundColor: theme.category === 'light' ? '#ffffff' : 'rgba(255,255,255,0.05)'
                        }}
                    />
                    <div className={`flex-1 rounded-md border ${accentClass} opacity-40`} />
                </div>

                {/* Main chart area */}
                <div
                    className={`flex-1 rounded-md border opacity-40`}
                    style={{
                        borderColor: theme.category === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                        backgroundColor: theme.category === 'light' ? '#ffffff' : 'rgba(255,255,255,0.05)'
                    }}
                >
                    {/* Chart line */}
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path
                            d="M0,35 Q20,30 35,25 T60,20 T80,10 L100,15"
                            fill="none"
                            className=""
                            style={{ stroke: theme.category === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)' }}
                            strokeWidth="1"
                        />
                        <path
                            d="M0,35 Q20,30 35,25 T60,20 T80,10 L100,15 L100,40 L0,40 Z"
                            className={`${accentClass} opacity-20`}
                            fill="currentColor"
                        />
                    </svg>
                </div>

                <div className="flex gap-1.5 h-[15%]">
                    <div
                        className={`flex-[2] rounded-md border opacity-30`}
                        style={{
                            borderColor: theme.category === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                            backgroundColor: theme.category === 'light' ? '#ffffff' : 'rgba(255,255,255,0.05)'
                        }}
                    />
                    <div className={`flex-1 rounded-md ${accentClass} opacity-50`} />
                </div>
            </div>
        </div>
    )
}
