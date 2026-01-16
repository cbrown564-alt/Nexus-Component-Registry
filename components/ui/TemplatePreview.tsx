import React from 'react'
import { LegacyTheme as Theme } from '@/lib/registry'

interface TemplatePreviewProps {
    theme: Theme
    className?: string
    size?: 'sm' | 'md' | 'lg'
}

/**
 * A unified template preview component that shows a meaningful visual
 * representation of each template's unique identity.
 * 
 * Uses template-specific "signature" wireframes that capture the essence
 * of each template's layout and aesthetic.
 */
export default function TemplatePreview({ theme, className = '', size = 'md' }: TemplatePreviewProps) {
    const sizeStyles = {
        sm: 'min-h-[80px]',
        md: 'min-h-[120px]',
        lg: 'min-h-[160px]',
    }

    // Get the appropriate wireframe for this template
    const WireframeComponent = getTemplateWireframe(theme.id)

    return (
        <div
            className={`relative w-full h-full overflow-hidden rounded-lg ${theme.backgroundColor} ${sizeStyles[size]} ${className}`}
        >
            <WireframeComponent theme={theme} />
        </div>
    )
}

// ========================================
// Template-specific wireframe components
// ========================================

interface WireframeProps {
    theme: Theme
}

// Dashboard archetype - for SaaS, Engineering, Terminal, etc.
function DashboardWireframe({ theme }: WireframeProps) {
    const isLight = theme.category === 'light'
    const baseColor = isLight ? '#000000' : '#ffffff'
    const borderColor = isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'

    return (
        <div className="absolute inset-0 flex">
            {/* Sidebar */}
            <div
                className={`w-[18%] border-r p-1.5 flex flex-col gap-1`}
                style={{ borderColor }}
            >
                <div className={`h-2 w-3/4 rounded-sm ${theme.colorClass} opacity-80`} />
                <div className={`h-1.5 w-full rounded-sm opacity-15`} style={{ backgroundColor: baseColor }} />
                <div className={`h-1.5 w-4/5 rounded-sm opacity-15`} style={{ backgroundColor: baseColor }} />
                <div className={`h-1.5 w-3/5 rounded-sm opacity-15`} style={{ backgroundColor: baseColor }} />
            </div>
            {/* Main */}
            <div className="flex-1 p-2 flex flex-col gap-1.5">
                <div className={`h-2.5 w-1/3 rounded-sm opacity-10`} style={{ backgroundColor: baseColor }} />
                <div className="flex gap-1.5 flex-1">
                    <div className={`flex-1 rounded border`} style={{ borderColor }} />
                    <div className={`flex-1 rounded border`} style={{ borderColor }} />
                    <div className={`flex-1 rounded ${theme.colorClass} opacity-30`} />
                </div>
                <div className={`flex-[1.5] rounded border`} style={{ borderColor }}>
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path
                            d="M0,35 Q20,30 35,25 T60,18 T85,12 L100,16"
                            fill="none"
                            className=""
                            style={{ stroke: isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)' }}
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

// Legacy / Retro Windows wireframe
function LegacyWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-2 flex flex-col gap-2">
            {/* Window 1 */}
            <div className="flex-1 border-2 border-t-white border-l-white border-b-[#808080] flex flex-col" style={{ backgroundColor: '#c0c0c0', borderRightColor: '#808080' }}>
                <div className="h-5 flex items-center px-1 gap-1" style={{ backgroundColor: '#000080' }}>
                    <div className="w-3 h-3 border border-t-white border-l-white border-b-[#808080] flex items-center justify-center text-[6px]" style={{ backgroundColor: '#c0c0c0', borderRightColor: '#808080' }}>▣</div>
                    <div className="flex-1 text-[7px] font-bold truncate" style={{ color: '#ffffff' }}>Dashboard.exe</div>
                    <div className="flex gap-0.5">
                        <div className="w-3 h-3 border border-t-white border-l-white border-b-[#808080] text-[6px] flex items-center justify-center" style={{ backgroundColor: '#c0c0c0', borderRightColor: '#808080' }}>_</div>
                        <div className="w-3 h-3 border border-t-white border-l-white border-b-[#808080] text-[6px] flex items-center justify-center" style={{ backgroundColor: '#c0c0c0', borderRightColor: '#808080' }}>□</div>
                        <div className="w-3 h-3 border border-t-white border-l-white border-b-[#808080] text-[6px] flex items-center justify-center" style={{ backgroundColor: '#c0c0c0', borderRightColor: '#808080' }}>×</div>
                    </div>
                </div>
                <div className="flex-1 m-0.5" style={{ backgroundColor: '#ffffff' }} />
            </div>
            {/* Window 2 (behind) */}
            <div className="absolute bottom-4 right-4 w-2/3 h-1/2 border-2 border-t-white border-l-white border-b-[#808080] opacity-80" style={{ backgroundColor: '#c0c0c0', borderRightColor: '#808080' }}>
                <div className="h-4 flex items-center px-1" style={{ backgroundColor: '#808080' }}>
                    <div className="text-[6px] truncate" style={{ color: '#ffffff' }}>Statistics.exe</div>
                </div>
            </div>
        </div>
    )
}

// Cockpit / Automotive wireframe with gauges
function CockpitWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center gap-4 p-3">
            {/* Left gauge */}
            <div
                className="relative w-[20%] aspect-square rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: '#3f3f46', backgroundColor: '#18181b80' }}
            >
                <div className="absolute inset-[10%] rounded-full border" style={{ borderColor: '#27272a' }}>
                    <div className={`absolute w-[2px] h-[40%] ${theme.colorClass} left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[-30deg]`} />
                </div>
                <div className="absolute bottom-[15%] text-[10px] sm:text-xs font-mono" style={{ color: '#71717a' }}>RPM</div>
            </div>
            {/* Center speedometer */}
            <div
                className="relative w-[30%] aspect-square rounded-full border-4 flex items-center justify-center shadow-lg"
                style={{ borderColor: '#3f3f46', backgroundColor: '#18181b' }}
            >
                <div className="absolute inset-[8%] rounded-full border" style={{ borderColor: '#27272a' }}>
                    <div className={`absolute w-[3px] h-[45%] ${theme.colorClass} left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[15deg]`} />
                </div>
                <div className="absolute bottom-[20%] text-xs sm:text-lg font-mono font-bold" style={{ color: '#ffffff' }}>88</div>
                <div className="absolute bottom-[10%] text-[8px] sm:text-xs" style={{ color: '#52525b' }}>MPH</div>
            </div>
            {/* Right gauge */}
            <div
                className="relative w-[20%] aspect-square rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: '#3f3f46', backgroundColor: '#18181b80' }}
            >
                <div className="absolute inset-[10%] rounded-full border" style={{ borderColor: '#27272a' }}>
                    <div className={`absolute w-[2px] h-[40%] ${theme.colorClass} opacity-60 left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[45deg]`} />
                </div>
                <div className="absolute bottom-[15%] text-[10px] sm:text-xs font-mono" style={{ color: '#71717a' }}>FUEL</div>
            </div>
        </div>
    )
}

// Swiss Design wireframe with grid typography
function SwissWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-3 flex flex-col">
            {/* Bold typographic header */}
            <div className="flex items-baseline gap-2 mb-2">
                <div className="h-6 w-6 bg-[#DC2626]" />
                <div className="h-4 w-24 rounded-sm" style={{ backgroundColor: '#000000' }} />
            </div>
            {/* Grid */}
            <div className="flex-1 grid grid-cols-3 gap-1.5">
                <div className="border flex items-end p-1" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    <div className="h-1 w-full" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
                </div>
                <div className="border flex items-end p-1" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    <div className="h-2 w-full" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
                </div>
                <div className="bg-[#DC2626] flex items-center justify-center">
                    <div className="text-[8px] font-bold" style={{ color: '#ffffff' }}>→</div>
                </div>
                <div className="col-span-2 border flex items-center p-1" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    <div className="h-1.5 w-3/4" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} />
                </div>
                <div className="border" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
            </div>
        </div>
    )
}

// Brutalist wireframe with bold blocks
function BrutalistWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2">
            {/* Bold header bar */}
            <div className="h-6 mb-2 flex items-center px-2" style={{ backgroundColor: '#000000' }}>
                <div className="text-[8px] font-black uppercase tracking-widest" style={{ color: '#ffffff' }}>RAW DESIGN</div>
            </div>
            {/* Asymmetric blocks */}
            <div className="flex gap-2 h-[calc(100%-32px)]">
                <div
                    className="w-2/3 border-4 flex items-center justify-center"
                    style={{ borderColor: '#000000', backgroundColor: '#ffffff' }}
                >
                    <div className="text-[10px] font-black rotate-[-5deg]" style={{ color: '#000000' }}>NO RULES</div>
                </div>
                <div className="w-1/3 flex flex-col gap-2">
                    <div className="flex-1 bg-yellow-400 border-2" style={{ borderColor: '#000000' }} />
                    <div className="flex-1" style={{ backgroundColor: '#000000' }} />
                </div>
            </div>
        </div>
    )
}

// Sci-Fi / Helix wireframe with holographic elements
function SciFiWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Hexagonal grid background */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                    <pattern id="hex" width="10" height="10" patternUnits="userSpaceOnUse">
                        <polygon points="5,0 10,3 10,8 5,10 0,8 0,3" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-cyan-500" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#hex)" />
                </svg>
            </div>
            {/* Central HUD element */}
            <div className={`relative w-[30%] aspect-square flex items-center justify-center`}>
                <div className={`absolute inset-0 rounded-full border-2 ${theme.colorClass.replace('bg-', 'border-')} opacity-60`} />
                <div className={`absolute inset-[10%] rounded-full border ${theme.colorClass.replace('bg-', 'border-')} opacity-40`} />
                <div className={`absolute inset-[20%] rounded-full ${theme.colorClass} opacity-30`} />
                {/* Scanner lines */}
                <div className={`absolute left-1/2 top-0 bottom-0 w-[1px] ${theme.colorClass} opacity-60`} />
                <div className={`absolute top-1/2 left-0 right-0 h-[1px] ${theme.colorClass} opacity-60`} />
            </div>
            {/* Side data */}
            <div className="absolute right-[10%] top-[10%] space-y-2 w-[15%]">
                <div className={`h-1.5 w-full ${theme.colorClass} opacity-50`} />
                <div className={`h-1.5 w-3/4 ${theme.colorClass} opacity-30`} />
                <div className={`h-1.5 w-5/6 ${theme.colorClass} opacity-40`} />
            </div>
        </div>
    )
}

// Gaming / Arcade wireframe with neon
function ArcadeWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex flex-col p-2">
            {/* Neon header */}
            <div className="text-center mb-2">
                <span className={`text-[10px] font-black ${theme.colorClass.replace('bg-', 'text-')} drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]`}>
                    PLAYER ONE
                </span>
            </div>
            {/* Stats row */}
            <div className="flex justify-around mb-2 text-[7px]">
                <div style={{ color: '#e879f9' }}>SCORE: 99999</div>
                <div style={{ color: '#22d3ee' }}>LEVEL: 42</div>
            </div>
            {/* Game area */}
            <div
                className="flex-1 border-2 rounded relative overflow-hidden"
                style={{ borderColor: 'rgba(217,70,239,0.5)' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent" />
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute h-px"
                            style={{
                                top: `${20 * (i + 1)}%`,
                                left: 0,
                                right: 0,
                                backgroundColor: 'rgba(217,70,239,0.5)'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

// E-Ink / Canvas minimal wireframe
function EInkWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-3 flex">
            {/* Sidebar */}
            <div className="w-1/4 border-r-2 pr-2 flex flex-col gap-1" style={{ borderColor: '#000000' }}>
                <div className="h-3 w-full mb-2" style={{ backgroundColor: '#000000' }} />
                <div className="h-1 w-full" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
                <div className="h-1 w-4/5" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
                <div className="h-1 w-full" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
            </div>
            {/* Content */}
            <div className="flex-1 pl-3 flex flex-col">
                <div className="h-2 w-2/3 mb-2" style={{ backgroundColor: '#000000' }} />
                <div className="space-y-0.5 flex-1">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-0.5 w-full" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} />
                    ))}
                </div>
            </div>
        </div>
    )
}

// Festival / Pulse wireframe with energy
function FestivalWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
            {/* Audio bars */}
            <div className="flex items-end gap-1 h-12">
                {[0.6, 0.9, 0.4, 1, 0.7, 0.5, 0.85, 0.3, 0.75, 0.95, 0.5, 0.65].map((h, i) => (
                    <div
                        key={i}
                        className={`w-2 rounded-t`}
                        style={{ height: `${h * 100}%`, backgroundColor: i % 2 === 0 ? '#d946ef' : '#22d3ee' }}
                    />
                ))}
            </div>
            {/* Beat text */}
            <div className="text-[8px] font-black tracking-[0.3em] opacity-60" style={{ color: '#ffffff' }}>
                ▶ LIVE
            </div>
        </div>
    )
}

// Wellness / Organic wireframe
function WellnessWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-3 flex items-center justify-center">
            {/* Organic circle */}
            <div className="relative">
                {/* fallback colors for sage if not present: #C4D7D1 and #F2F7F5 */}
                <div
                    className={`w-16 h-16 rounded-full border-2`}
                    style={{ borderColor: '#becebe', backgroundColor: '#f5f7f5' }} // approximated sage-300 / sage-50
                />
                {/* Breathing animation ring */}
                <div
                    className={`absolute inset-[-4px] rounded-full border`}
                    style={{ borderColor: '#dce5dc' }} // sage-200
                />
                <div
                    className={`absolute inset-[-8px] rounded-full border`}
                    style={{ borderColor: '#edf2ed' }} // sage-100
                />
                {/* Inner content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-[8px] font-medium" style={{ color: '#576657' }}>Breathe</div>
                    <div className={`h-0.5 w-8 ${theme.colorClass} opacity-60 mt-1 rounded-full`} />
                </div>
            </div>
            {/* Stats */}
            <div className="absolute bottom-3 left-3 right-3 flex justify-around">
                {['72 bpm', '98%', '8h'].map((stat, i) => (
                    <div key={i} className="text-[6px]" style={{ color: '#78716c' }}>{stat}</div>
                ))}
            </div>
        </div>
    )
}

// Education wireframe
function EducationWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-3">
            {/* Course cards */}
            <div className="grid grid-cols-2 gap-2 h-full">
                <div
                    className={`rounded-lg border p-2 flex flex-col`}
                    style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff' }}
                >
                    <div className={`h-2 w-full ${theme.colorClass} rounded mb-1.5`} />
                    <div className="h-1 w-3/4 mb-1" style={{ backgroundColor: '#e2e8f0' }} />
                    <div className="h-1 w-1/2" style={{ backgroundColor: '#e2e8f0' }} />
                    <div className="mt-auto h-2 w-8 rounded text-[5px] flex items-center justify-center" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>85%</div>
                </div>
                <div
                    className={`rounded-lg border p-2 flex flex-col`}
                    style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff' }}
                >
                    <div className={`h-2 w-full rounded mb-1.5`} style={{ backgroundColor: '#818cf8' }} />
                    <div className="h-1 w-4/5 mb-1" style={{ backgroundColor: '#e2e8f0' }} />
                    <div className="h-1 w-2/3" style={{ backgroundColor: '#e2e8f0' }} />
                    <div className="mt-auto h-2 w-8 rounded text-[5px] flex items-center justify-center" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>42%</div>
                </div>
            </div>
        </div>
    )
}

// Magazine / Editorial wireframe
function MagazineWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-3 flex gap-2">
            {/* Main article */}
            <div className="flex-[2] flex flex-col">
                <div className="h-3 w-4/5 mb-1.5" style={{ backgroundColor: '#171717' }} />
                <div className="h-1.5 w-1/3 mb-2" style={{ backgroundColor: '#d4d4d4' }} />
                <div className="flex-1 space-y-0.5">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-0.5 w-full" style={{ backgroundColor: '#e5e5e5' }} />
                    ))}
                </div>
            </div>
            {/* Sidebar articles */}
            <div className="flex-1 flex flex-col gap-1.5">
                <div className="flex-1 border-l-2 pl-2 flex flex-col justify-center" style={{ borderColor: '#171717' }}>
                    <div className="h-1.5 w-full mb-1" style={{ backgroundColor: '#a3a3a3' }} />
                    <div className="h-0.5 w-3/4" style={{ backgroundColor: '#e5e5e5' }} />
                </div>
                <div className="flex-1 border-l-2 pl-2 flex flex-col justify-center" style={{ borderColor: '#d4d4d4' }}>
                    <div className="h-1.5 w-full mb-1" style={{ backgroundColor: '#a3a3a3' }} />
                    <div className="h-0.5 w-4/5" style={{ backgroundColor: '#e5e5e5' }} />
                </div>
            </div>
        </div>
    )
}

// Kids / Play wireframe - bright colorful activity tiles
function KidsWireframe({ theme }: WireframeProps) {
    // Explicit hex colors to avoid tailwind class composition
    const colors = [
        { bg: '#f87171', border: 'rgba(255,255,255,0.5)' }, // red-400
        { bg: '#fde047', border: 'rgba(255,255,255,0.5)' }, // yellow-300
        { bg: '#60a5fa', border: 'rgba(255,255,255,0.5)' }, // blue-400
        { bg: '#4ade80', border: 'rgba(255,255,255,0.5)' }, // green-400
        { bg: '#c084fc', border: 'rgba(255,255,255,0.5)' }, // purple-400
        { bg: '#fb923c', border: 'rgba(255,255,255,0.5)' }  // orange-400
    ]
    return (
        <div className="absolute inset-0 p-2">
            {/* Cloud decorations */}
            <div className="absolute top-2 left-4 w-8 h-3 rounded-full blur-sm" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
            <div className="absolute top-4 right-6 w-6 h-2 rounded-full blur-sm" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
            {/* Activity grid */}
            <div className="grid grid-cols-3 gap-1.5 h-full p-1">
                {colors.map((color, i) => (
                    <div
                        key={i}
                        className="rounded-xl border-2 flex items-center justify-center shadow-md"
                        style={{ backgroundColor: color.bg, borderColor: color.border }}
                    >
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    </div>
                ))}
            </div>
            {/* Star progress indicator */}
            <div className="absolute top-1 right-1 flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="text-[8px]" style={{ color: '#facc15' }}>★</div>
                ))}
            </div>
        </div>
    )
}

// Kitchen / Mise wireframe - recipe step display
function KitchenWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex gap-2">
            {/* Left: Ingredients */}
            <div
                className="w-1/4 rounded-lg border p-1.5 flex flex-col gap-1"
                style={{ backgroundColor: '#ffffff', borderColor: '#e7e5e4' }}
            >
                <div className="h-1.5 w-full rounded" style={{ backgroundColor: '#fb923c' }} />
                <div className="h-1 w-3/4 rounded" style={{ backgroundColor: '#e7e5e4' }} />
                <div className="h-1 w-1/2 rounded" style={{ backgroundColor: '#e7e5e4' }} />
                <div className="h-1 w-2/3 rounded" style={{ backgroundColor: '#e7e5e4' }} />
            </div>
            {/* Center: Recipe step */}
            <div
                className="flex-1 rounded-lg border p-2 flex flex-col items-center justify-center"
                style={{ backgroundColor: '#ffffff', borderColor: '#e7e5e4' }}
            >
                <div
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold mb-1"
                    style={{ backgroundColor: '#ffedd5', borderColor: '#fb923c', color: '#ea580c' }}
                >2</div>
                <div className="h-1.5 w-3/4 rounded mb-1" style={{ backgroundColor: '#292524' }} />
                <div className="h-1 w-1/2 rounded" style={{ backgroundColor: '#d6d3d1' }} />
            </div>
            {/* Right: Timer */}
            <div className="w-1/4 flex flex-col gap-1.5">
                <div className="flex-1 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1c1917' }}>
                    <div className="text-[10px] font-mono font-bold" style={{ color: '#fb923c' }}>12:45</div>
                </div>
                <div
                    className="h-8 rounded-lg border flex items-center justify-center"
                    style={{ backgroundColor: '#dcfce7', borderColor: '#bbf7d0' }}
                >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#4ade80' }} />
                </div>
            </div>
        </div>
    )
}

// Solarpunk / Eden wireframe - plants and energy
function SolarpunkWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex gap-2">
            {/* Left: Sun/Energy visualization */}
            <div className="w-2/5 rounded-xl p-2 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #fef9c3, #ecfdf5)' }}>
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(to bottom right, #fde047, #fbbf24)', boxShadow: '0 10px 15px -3px rgba(253, 224, 71, 0.5)' }}
                >
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#fef08a' }} />
                </div>
                <div className="mt-2 text-[7px] font-bold" style={{ color: '#047857' }}>2.4 kWh</div>
            </div>
            {/* Right: Plant progress */}
            <div className="flex-1 rounded-xl p-2 flex flex-col gap-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                <div className="text-[6px] font-bold uppercase" style={{ color: '#065f46' }}>Hydroponics</div>
                {[
                    { name: 'Basil', progress: 100, color: '#10b981' },
                    { name: 'Tomato', progress: 65, color: '#34d399' },
                    { name: 'Lettuce', progress: 30, color: '#6ee7b7' },
                ].map((plant, i) => (
                    <div key={i} className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: plant.color }} />
                        <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#d1fae5' }}>
                            <div className="h-full" style={{ backgroundColor: plant.color, width: `${plant.progress}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Engineering / IDE wireframe - code editor layout
function EngineeringWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex">
            {/* Activity bar */}
            <div
                className="w-[10%] border-r flex flex-col items-center gap-1 py-1"
                style={{ backgroundColor: '#09090b', borderColor: '#27272a' }}
            >
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#3b82f6' }} />
                <div className="w-2 h-2 rounded" style={{ backgroundColor: '#3f3f46' }} />
                <div className="w-2 h-2 rounded" style={{ backgroundColor: '#3f3f46' }} />
                <div className="w-2 h-2 rounded" style={{ backgroundColor: '#3f3f46' }} />
            </div>
            {/* File explorer */}
            <div
                className="w-[20%] border-r p-1 flex flex-col gap-0.5"
                style={{ backgroundColor: '#18181b', borderColor: '#27272a' }}
            >
                <div className="h-1.5 w-full rounded" style={{ backgroundColor: '#3f3f46' }} />
                <div className="h-1 w-4/5 rounded ml-1" style={{ backgroundColor: '#27272a' }} />
                <div className="h-1 w-3/5 rounded ml-2" style={{ backgroundColor: 'rgba(59,130,246,0.5)' }} />
                <div className="h-1 w-4/5 rounded ml-1" style={{ backgroundColor: '#27272a' }} />
            </div>
            {/* Editor area */}
            <div className="flex-1 flex flex-col">
                {/* Tabs */}
                <div
                    className="h-3 border-b flex"
                    style={{ backgroundColor: '#18181b', borderColor: '#27272a' }}
                >
                    <div
                        className="w-12 border-t-2 flex items-center justify-center"
                        style={{ backgroundColor: '#09090b', borderColor: '#3b82f6' }}
                    >
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#60a5fa' }} />
                    </div>
                    <div className="w-10 flex items-center justify-center" style={{ backgroundColor: '#18181b' }}>
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#52525b' }} />
                    </div>
                </div>
                {/* Code */}
                <div className="flex-1 p-1 flex flex-col gap-0.5" style={{ backgroundColor: '#09090b' }}>
                    <div className="flex gap-1">
                        <div className="w-2 text-[4px]" style={{ color: '#52525b' }}>1</div>
                        <div className="h-1 w-8 rounded" style={{ backgroundColor: 'rgba(192,132,252,0.5)' }} />
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 text-[4px]" style={{ color: '#52525b' }}>2</div>
                        <div className="h-1 w-12 rounded" style={{ backgroundColor: 'rgba(96,165,250,0.5)' }} />
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 text-[4px]" style={{ color: '#52525b' }}>3</div>
                        <div className="h-1 w-6 rounded" style={{ backgroundColor: '#3f3f46' }} />
                    </div>
                </div>
                {/* Terminal */}
                <div
                    className="h-1/3 border-t p-1"
                    style={{ backgroundColor: '#18181b', borderColor: '#27272a' }}
                >
                    <div className="flex gap-1 items-center">
                        <div className="text-[5px]" style={{ color: '#34d399' }}>➜</div>
                        <div className="h-0.5 w-8 rounded" style={{ backgroundColor: '#52525b' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Music / Sonic wireframe - album + tracks layout
function MusicWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex">
            {/* Sidebar with playlists */}
            <div
                className="w-[22%] border-r p-1.5 flex flex-col gap-1"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.05)' }}
            >
                <div className="h-2 w-3/4 rounded" style={{ backgroundColor: 'rgba(244,63,94,0.8)' }} />
                <div className="h-1 w-full rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <div className="h-1 w-4/5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <div className="h-1 w-3/5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
            </div>
            {/* Main content */}
            <div className="flex-1 p-2 flex flex-col">
                {/* Album header */}
                <div className="flex gap-2 mb-2">
                    <div className="w-10 h-10 rounded bg-gradient-to-br from-indigo-500 to-rose-500 shadow-lg" />
                    <div className="flex-1 flex flex-col justify-center gap-1">
                        <div className="h-2 w-3/4 rounded" style={{ backgroundColor: '#ffffff' }} />
                        <div className="h-1 w-1/2 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
                    </div>
                </div>
                {/* Track list */}
                <div className="flex-1 flex flex-col gap-0.5">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-1 px-1 py-0.5 rounded transition-colors" style={{ backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.05)' }}>
                            <div className="w-2 text-[5px]" style={{ color: '#71717a' }}>{i + 1}</div>
                            <div className="h-1 flex-1 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                            <div className="text-[5px]" style={{ color: '#71717a' }}>3:42</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Social / Stream wireframe - feed layout
function SocialWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex p-1.5 gap-1.5">
            {/* Left sidebar */}
            <div className="w-[20%] flex flex-col gap-1">
                <div className="w-6 h-6 rounded-full mx-auto" style={{ backgroundColor: '#3f3f46' }} />
                <div className="h-1 w-full rounded" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                <div className="h-1 w-3/4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
            </div>
            {/* Feed */}
            <div className="flex-1 flex flex-col gap-1.5">
                {/* Stories */}
                <div className="flex gap-1 px-1">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-4 h-4 rounded-full border-2`}
                            style={{
                                borderColor: i === 0 ? '#38bdf8' : '#3f3f46',
                                backgroundColor: '#27272a'
                            }}
                        />
                    ))}
                </div>
                {/* Posts */}
                {[...Array(2)].map((_, i) => (
                    <div
                        key={i}
                        className="rounded p-1 border"
                        style={{ backgroundColor: 'rgba(24,24,27,0.5)', borderColor: '#27272a' }}
                    >
                        <div className="flex items-center gap-1 mb-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#52525b' }} />
                            <div className="h-1 w-8 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
                        </div>
                        <div className="h-1 w-full rounded mb-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                        <div className="h-1 w-2/3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                    </div>
                ))}
            </div>
            {/* Right sidebar */}
            <div className="w-[20%] hidden md:flex flex-col gap-1">
                <div className="h-1 w-full rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <div className="h-1 w-4/5 rounded" style={{ backgroundColor: 'rgba(14,165,233,0.3)' }} />
                <div className="h-1 w-3/5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
            </div>
        </div>
    )
}

// Fintech / Terminal wireframe - chart + card + ticker
function FintechWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex gap-2">
            {/* Main chart area */}
            <div className="flex-1 flex flex-col gap-1.5">
                {/* Metric cards row */}
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="flex-1 border rounded p-1"
                            style={{ backgroundColor: '#18181b', borderColor: '#27272a' }}
                        >
                            <div className="h-0.5 w-2/3 rounded mb-0.5" style={{ backgroundColor: '#52525b' }} />
                            <div className="h-1.5 w-1/2 rounded" style={{ backgroundColor: '#ffffff' }} />
                        </div>
                    ))}
                </div>
                {/* Chart */}
                <div
                    className="flex-1 border rounded p-1"
                    style={{ backgroundColor: 'rgba(24,24,27,0.5)', borderColor: '#27272a' }}
                >
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path d="M0,35 Q15,30 30,28 T50,20 T75,15 L100,18" fill="none" className="stroke-emerald-500" strokeWidth="2" />
                        <path d="M0,35 Q15,30 30,28 T50,20 T75,15 L100,18 L100,40 L0,40 Z" className="fill-emerald-500/20" />
                    </svg>
                </div>
            </div>
            {/* Right sidebar */}
            <div className="w-1/3 flex flex-col gap-1.5">
                {/* Credit card */}
                <div className="h-12 rounded-lg p-1.5 border" style={{ background: 'linear-gradient(to bottom right, #27272a, #18181b)', borderColor: '#3f3f46' }}>
                    <div className="h-2 w-4 rounded mb-1" style={{ backgroundColor: 'rgba(251,191,36,0.6)' }} />
                    <div className="h-1 w-3/4 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                </div>
                {/* Ticker */}
                <div
                    className="flex-1 border rounded p-1 flex flex-col gap-0.5"
                    style={{ backgroundColor: 'rgba(24,24,27,0.5)', borderColor: '#27272a' }}
                >
                    {['+2.4%', '-0.8%', '+1.2%'].map((val, i) => (
                        <div key={i} className="flex justify-between items-center">
                            <div className="h-1 w-6 rounded" style={{ backgroundColor: '#3f3f46' }} />
                            <div className={`text-[5px] ${val.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>{val}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Productivity / Flow wireframe - kanban + timer
function ProductivityWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex">
            {/* Sidebar */}
            <div
                className="w-[20%] border-r p-1.5 flex flex-col gap-1"
                style={{ backgroundColor: '#09090b', borderColor: '#27272a' }}
            >
                <div className="h-2 w-3/4 flex items-center gap-1">
                    <div className="w-2 h-2 rounded bg-amber-500" />
                    <div className="h-1.5 flex-1 rounded" style={{ backgroundColor: '#ffffff' }} />
                </div>
                <div className="h-1 w-full rounded" style={{ backgroundColor: '#27272a' }} />
                <div className="h-1 w-4/5 rounded" style={{ backgroundColor: '#27272a' }} />
                <div className="h-1 w-3/4 rounded" style={{ backgroundColor: 'rgba(245,158,11,0.3)' }} />
            </div>
            {/* Main */}
            <div className="flex-1 p-2 flex gap-2">
                {/* Timer widget */}
                <div
                    className="w-1/3 border rounded-lg flex flex-col items-center justify-center p-2"
                    style={{ backgroundColor: 'rgba(24,24,27,0.5)', borderColor: '#27272a' }}
                >
                    <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center mb-1">
                        <div className="text-[8px] font-mono text-amber-400">25:00</div>
                    </div>
                    <div className="h-1 w-8 rounded" style={{ backgroundColor: 'rgba(245,158,11,0.3)' }} />
                </div>
                {/* Kanban columns */}
                <div className="flex-1 flex gap-1">
                    {['To Do', 'In Progress', 'Done'].map((col, i) => (
                        <div key={col} className="flex-1 rounded p-1 flex flex-col gap-0.5" style={{ backgroundColor: 'rgba(24,24,27,0.3)' }}>
                            <div className="h-1 w-full rounded mb-1" style={{ backgroundColor: '#3f3f46' }} />
                            {[...Array(3 - i)].map((_, j) => (
                                <div key={j} className="h-3 rounded border" style={{ backgroundColor: '#27272a', borderColor: '#3f3f46' }} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Food / Crave wireframe - categories + menu grid
function FoodWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex flex-col gap-1.5">
            {/* Category chips */}
            <div className="flex gap-1 px-1">
                {/* Right Control removed */}
                {['🍕', '🍣', '🍔', '🥗'].map((emoji, i) => (
                    <div
                        key={i}
                        className={`h-4 px-2 rounded-full flex items-center justify-center text-[8px]`}
                        style={{
                            backgroundColor: i === 0 ? '#f97316' : '#292524',
                            borderWidth: i === 0 ? 0 : 1,
                            borderColor: i === 0 ? 'transparent' : '#44403c'
                        }}
                    >
                        {emoji}
                    </div>
                ))}
            </div>
            {/* Menu grid */}
            <div className="flex-1 grid grid-cols-3 gap-1">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="rounded-lg overflow-hidden border"
                        style={{ backgroundColor: 'rgba(28,25,23,0.5)', borderColor: '#292524' }}
                    >
                        <div className="h-3/5" style={{ background: 'linear-gradient(to bottom right, #44403c, #292524)' }} />
                        <div className="p-1">
                            <div className="h-1 w-3/4 rounded mb-0.5" style={{ backgroundColor: '#57534e' }} />
                            <div className="h-1 w-1/2 rounded" style={{ backgroundColor: 'rgba(249,115,22,0.5)' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Grid / Matrix wireframe - map + gauges
function GridWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex gap-2">
            {/* Map area */}
            <div
                className="flex-1 border rounded overflow-hidden relative"
                style={{ backgroundColor: '#0f172a', borderColor: 'rgba(30,58,138,0.5)' }}
            >
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="absolute h-px" style={{ top: `${25 * (i + 1)}%`, left: 0, right: 0, backgroundColor: 'rgba(59,130,246,0.5)' }} />
                    ))}
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="absolute w-px" style={{ left: `${25 * (i + 1)}%`, top: 0, bottom: 0, backgroundColor: 'rgba(59,130,246,0.5)' }} />
                    ))}
                </div>
                {/* Nodes */}
                <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse" />
                <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            </div>
            {/* Controls sidebar */}
            <div className="w-1/3 flex flex-col gap-1">
                {/* Gauges */}
                <div
                    className="flex-1 border rounded p-1.5 flex flex-col justify-around"
                    style={{ backgroundColor: '#0f172a', borderColor: 'rgba(30,58,138,0.5)' }}
                >
                    {['Power', 'Load', 'Temp'].map((label, i) => (
                        <div key={label} className="flex items-center gap-1">
                            <div className="text-[5px] text-blue-400 w-6">{label}</div>
                            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#1e293b' }}>
                                <div className={`h-full rounded-full ${i === 0 ? 'bg-emerald-500 w-4/5' : i === 1 ? 'bg-blue-500 w-3/5' : 'bg-amber-500 w-2/5'}`} />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Status indicator */}
                <div
                    className="h-6 rounded flex items-center justify-center gap-1"
                    style={{ backgroundColor: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px' }}
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="text-[6px] text-emerald-400">ONLINE</div>
                </div>
            </div>
        </div>
    )
}

// Clay / Claymorphism wireframe - soft shadows + calendar
function ClayWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex gap-2">
            {/* Task list */}
            <div className="flex-1 flex flex-col gap-1">
                {/* Calendar strip */}
                <div className="flex gap-1 mb-1">
                    {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
                        <div
                            key={i}
                            className={`flex-1 h-6 rounded-lg flex flex-col items-center justify-center`}
                            style={{
                                backgroundColor: i === 2 ? '#38bdf8' : '#ffffff',
                                color: i === 2 ? '#ffffff' : 'inherit',
                                boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
                            }}
                        >
                            <div className="text-[5px] font-bold">{day}</div>
                            <div className="text-[7px] font-black">{22 + i}</div>
                        </div>
                    ))}
                </div>
                {/* Task cards */}
                {[
                    { color: '#fecdd3' }, // rose-200
                    { color: '#ddd6fe' }, // violet-200
                ].map((task, i) => (
                    <div
                        key={i}
                        className="rounded-xl p-1.5 flex items-center gap-1.5"
                        style={{ backgroundColor: '#ffffff', boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff' }}
                    >
                        <div
                            className={`w-4 h-4 rounded-lg`}
                            style={{ backgroundColor: task.color, boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.6), inset -2px -2px 4px rgba(0,0,0,0.05)' }}
                        />
                        <div className="flex-1">
                            <div className="h-1 w-3/4 rounded" style={{ backgroundColor: '#cbd5e1' }} />
                            <div className="h-0.5 w-1/2 rounded mt-0.5" style={{ backgroundColor: '#e2e8f0' }} />
                        </div>
                    </div>
                ))}
            </div>
            {/* Progress circle */}
            <div className="w-1/3 flex items-center justify-center">
                <div className="relative w-12 h-12">
                    <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="16" stroke="#e2e8f0" strokeWidth="4" fill="none" />
                        <circle cx="20" cy="20" r="16" stroke="#7dd3fc" strokeWidth="4" fill="none"
                            strokeDasharray="100" strokeDashoffset="25" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-[8px] font-black" style={{ color: '#334155' }}>75%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Ecommerce / Storefront wireframe - product grid
function EcommerceWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex gap-2">
            {/* Product grid */}
            <div className="flex-1 grid grid-cols-3 gap-1.5">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="border flex flex-col"
                        style={{ backgroundColor: '#fafafa', borderColor: '#f5f5f5' }}
                    >
                        <div className="flex-1" style={{ backgroundColor: '#f5f5f5' }} />
                        <div className="p-1">
                            <div className="h-1 w-3/4 rounded mb-0.5" style={{ backgroundColor: '#d4d4d4' }} />
                            <div className="h-1 w-1/2 rounded" style={{ backgroundColor: '#000000' }} />
                        </div>
                    </div>
                ))}
            </div>
            {/* Cart sidebar */}
            <div
                className="w-1/4 border p-1.5 flex flex-col"
                style={{ backgroundColor: '#fafafa', borderColor: '#f5f5f5' }}
            >
                <div className="h-1.5 w-full rounded mb-2" style={{ backgroundColor: '#000000' }} />
                <div className="flex-1 flex flex-col gap-1">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-1 items-center">
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#e5e5e5' }} />
                            <div className="flex-1">
                                <div className="h-0.5 w-full rounded" style={{ backgroundColor: '#d4d4d4' }} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-4 rounded flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
                    <div className="h-1 w-8 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
                </div>
            </div>
        </div>
    )
}

// Blueprint / Technical wireframe
function BlueprintWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex flex-col items-center justify-center">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '10px 10px' }}
            />
            {/* Main schematic */}
            <div
                className="relative border-2 w-3/4 h-3/4 flex items-center justify-center"
                style={{ borderColor: 'rgba(255,255,255,0.5)' }}
            >
                <div
                    className="absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2"
                    style={{ borderColor: '#ffffff' }}
                />
                <div
                    className="absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2"
                    style={{ borderColor: '#ffffff' }}
                />
                <div
                    className="absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2"
                    style={{ borderColor: '#ffffff' }}
                />
                <div
                    className="absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2"
                    style={{ borderColor: '#ffffff' }}
                />

                {/* Crosshair */}
                <div className="absolute w-full h-px" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
                <div className="absolute h-full w-px" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />

                {/* Object */}
                <div className="w-10 h-10 border rotate-45" style={{ borderColor: '#ffffff' }} />
                <div className="absolute w-14 h-14 border rounded-full" style={{ borderColor: 'rgba(255,255,255,0.5)' }} />
            </div>
            {/* Measurement labels */}
            <div className="absolute bottom-2 right-2 text-[5px] font-mono" style={{ color: 'rgba(255,255,255,0.7)' }}>
                SCALE 1:100<br />DWG-001
            </div>
        </div>
    )
}

// Legal / Eagle wireframe
function LegalWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-3 flex gap-2">
            {/* Document list sidebar */}
            <div
                className="w-1/4 border-r flex flex-col gap-1"
                style={{ borderColor: '#d6d3d1' }} // stone-300
            >
                <div className="w-full h-1.5 rounded mb-1" style={{ backgroundColor: '#d6d3d1' }} />
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4/5 h-1 rounded" style={{ backgroundColor: '#e7e5e4' }} />
                ))}
            </div>
            {/* Main document */}
            <div
                className="flex-1 shadow-sm border p-2 flex flex-col gap-1"
                style={{ backgroundColor: '#ffffff', borderColor: '#e7e5e4' }}
            >
                <div className="w-1/3 h-2 mb-2" style={{ backgroundColor: '#292524' }} /> {/* Title */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-1 rounded-sm" style={{ backgroundColor: '#a8a29e' }} />
                ))}
                <div className="flex gap-1 mt-2">
                    <div className="w-1/4 h-1.5 rounded-sm" style={{ backgroundColor: '#b91c1c' }} /> {/* Action button */}
                </div>
            </div>
        </div>
    )
}

// Soft Plastic / Neumorphic wireframe
function SoftPlasticWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-3 flex flex-col gap-2 items-center justify-center">
            {/* Control panel */}
            <div className="w-full max-w-[80%] p-2 rounded-xl flex justify-between items-center"
                style={{ backgroundColor: '#EFEEEE', boxShadow: 'inset 3px 3px 6px #cbcaca, inset -3px -3px 6px #ffffff' }}>

                {/* Toggle button */}
                <div className="w-8 h-4 rounded-full relative"
                    style={{ backgroundColor: '#EFEEEE', boxShadow: '3px 3px 6px #cbcaca, -3px -3px 6px #ffffff' }}>
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full" style={{ backgroundColor: '#94a3b8' }} />
                </div>

                {/* Push button */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#EFEEEE', boxShadow: '3px 3px 6px #cbcaca, -3px -3px 6px #ffffff' }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#cbd5e1' }} />
                </div>
            </div>

            {/* Slider track */}
            <div className="w-[80%] h-3 rounded-full relative"
                style={{ backgroundColor: '#EFEEEE', boxShadow: 'inset 2px 2px 5px #cbcaca, inset -2px -2px 5px #ffffff' }}>
                <div className="absolute top-0 bottom-0 left-0 w-1/2 rounded-full" style={{ backgroundColor: '#cbd5e1' }} />
                <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full -translate-y-1/2 -translate-x-1/2"
                    style={{ backgroundColor: '#EFEEEE', boxShadow: '2px 2px 5px #cbcaca, -2px -2px 5px #ffffff' }} />
            </div>
        </div>
    )
}

// Acid wireframe
function AcidWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex flex-col overflow-hidden">
            {/* Marquee header */}
            <div className="text-[8px] font-black p-1 whitespace-nowrap overflow-hidden"
                style={{ backgroundColor: '#000000', color: '#ccff00' }}>
                ACID MODE /// ACID MODE /// ACID MODE
            </div>

            {/* Content chaos */}
            <div className="flex-1 relative p-2">
                <div
                    className="absolute top-4 left-4 w-12 h-12 border-2 rotate-6 z-10 flex items-center justify-center"
                    style={{ borderColor: '#000000', backgroundColor: '#ccff00' }}
                >
                    <div className="text-[14px] font-black">:)</div>
                </div>

                <div
                    className="absolute bottom-4 right-4 w-16 h-8 flex items-center justify-center -rotate-3 z-0"
                    style={{ backgroundColor: '#000000', color: '#ffffff' }}
                >
                    <div className="text-[6px] font-mono">ERROR_404</div>
                </div>

                {/* Glitch lines */}
                <div className="absolute top-1/2 left-0 w-full h-px rotate-12" style={{ backgroundColor: '#000000' }} />
                <div className="absolute top-1/2 left-0 w-full h-px -rotate-12" style={{ backgroundColor: '#000000' }} />
            </div>
        </div>
    )
}

// Clinic / Healthcare wireframe - patient portal
function ClinicWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex gap-2">
            {/* Left: Appointment card */}
            <div className="flex-1 flex flex-col gap-1.5">
                {/* Header stats */}
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="flex-1 rounded-lg p-1 border"
                            style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
                        >
                            <div className="w-3 h-3 rounded-full mb-0.5" style={{ backgroundColor: i === 0 ? 'rgba(13,148,136,0.2)' : '#f1f5f9' }} />
                            <div className="h-1 w-2/3 rounded" style={{ backgroundColor: '#e2e8f0' }} />
                        </div>
                    ))}
                </div>
                {/* Appointment */}
                <div
                    className="flex-1 rounded-lg border p-1.5"
                    style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
                >
                    <div className="flex items-center gap-1 mb-1.5">
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: 'rgba(13,148,136,0.2)' }} />
                        <div className="flex-1">
                            <div className="h-1.5 w-3/4 rounded mb-0.5" style={{ backgroundColor: '#0f172a' }} />
                            <div className="h-1 w-1/2 rounded" style={{ backgroundColor: '#94a3b8' }} />
                        </div>
                        <div className="h-3 w-8 rounded-full" style={{ backgroundColor: '#d1fae5', color: '#065f46' }}>
                            <div className="text-[4px] text-center leading-[12px]">✓</div>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-1">
                        <div className="h-4 flex-1 rounded" style={{ backgroundColor: '#0d9488' }} />
                        <div className="h-4 w-8 rounded" style={{ backgroundColor: '#e2e8f0' }} />
                    </div>
                </div>
            </div>
            {/* Right: Medications */}
            <div className="w-2/5 flex flex-col gap-1.5">
                <div
                    className="flex-1 rounded-lg border p-1.5"
                    style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
                >
                    <div className="flex items-center gap-1 mb-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(13,148,136,0.2)' }} />
                        <div className="h-1.5 w-2/3 rounded" style={{ backgroundColor: '#0f172a' }} />
                    </div>
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center gap-1 p-1 rounded mb-0.5" style={{ backgroundColor: i === 0 ? '#d1fae5' : '#f1f5f9' }}>
                            <div className="h-1 flex-1 rounded" style={{ backgroundColor: '#64748b' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: i === 0 ? '#059669' : '#e2e8f0' }}>
                                {i === 0 && <div className="text-[4px] text-center text-white leading-[8px]">✓</div>}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Insurance card mini */}
                <div
                    className="h-10 rounded-lg p-1.5"
                    style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' }}
                >
                    <div className="h-1 w-3/4 rounded mb-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />
                    <div className="h-2 w-full rounded font-mono" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                </div>
            </div>
        </div>
    )
}

// Departure / Aviation wireframe
function DepartureWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex gap-2 bg-zinc-950">
            {/* Left: Flight Board */}
            <div className="flex-1 flex flex-col gap-1">
                {/* Header */}
                <div className="h-4 border border-zinc-700 rounded-sm mb-1 flex items-center px-1">
                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                </div>
                {/* Rows */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-3 w-full border-b border-zinc-800 flex items-center gap-1">
                        <div className="w-1/4 h-1 bg-zinc-800 rounded-sm" />
                        <div className="w-1/4 h-1 bg-zinc-800 rounded-sm" />
                        <div className="w-1/4 h-1 bg-zinc-800 rounded-sm ml-auto" />
                    </div>
                ))}
            </div>
            {/* Right: Gate Info */}
            <div className="w-1/3 flex flex-col gap-2">
                <div className="flex-1 border border-zinc-700 rounded-sm p-1 flex flex-col justify-between">
                    <div className="w-4 h-4 rounded-sm bg-amber-500/20" />
                    <div className="h-6 w-full bg-amber-500 rounded-sm" />
                </div>
                <div className="h-10 border border-zinc-700 rounded-sm" />
            </div>
        </div>
    )
}

// Estate / Real Estate Wireframe
function EstateWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex flex-col gap-2 bg-stone-50">
            {/* Hero Image */}
            <div className="h-1/3 w-full bg-stone-200 rounded-sm relative overflow-hidden">
                <div className="absolute bottom-2 left-2 w-1/2 h-3 bg-white/50 backdrop-blur-sm rounded-sm" />
            </div>
            {/* Grid of Listings */}
            <div className="grid grid-cols-2 gap-2 flex-1">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white p-1 rounded-sm border border-stone-200 flex flex-col gap-1">
                        <div className="flex-1 bg-stone-100 rounded-sm" />
                        <div className="h-2 w-3/4 bg-stone-200 rounded-sm" />
                        <div className="h-1.5 w-1/2 bg-stone-200 rounded-sm" />
                    </div>
                ))}
            </div>
        </div>
    )
}

// Nomad / Travel Wireframe
function NomadWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2 flex flex-col items-center bg-stone-100">
            {/* Hero Blob */}
            <div className="w-2/3 h-1/2 bg-stone-200 mb-2" style={{ borderRadius: '2rem 2rem 1rem 1rem' }} />
            {/* Text Lines */}
            <div className="w-1/2 h-2 bg-stone-300 rounded-full mb-4" />

            {/* Feed */}
            <div className="w-full flex-1 flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                    <div className="w-1/3 h-10 bg-stone-200 rounded-lg" style={{ borderRadius: '1rem 0.5rem 1rem 1rem' }} />
                    <div className="flex-1 space-y-1">
                        <div className="h-1.5 w-full bg-stone-200 rounded-full" />
                        <div className="h-1.5 w-2/3 bg-stone-200 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}


// Neo / Wallet Wireframe
function NeoWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 bg-black p-2 flex flex-col items-center justify-center overflow-hidden">
            {/* Stacked Cards with Parallax Hint */}
            <div className="relative w-3/4 h-3/4">
                {/* Back card */}
                <div
                    className="absolute top-0 right-0 w-full h-full rounded-xl border border-white/10 bg-zinc-900 transform rotate-6 scale-95 origin-bottom-right"
                    style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)' }}
                />
                {/* Middle card */}
                <div
                    className="absolute top-2 right-2 w-full h-full rounded-xl border border-white/10 bg-zinc-800 transform rotate-3 scale-95 origin-bottom-right"
                />
                {/* Front card - Premium */}
                <div className="absolute inset-0 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/50 to-black backdrop-blur-md flex flex-col p-2 justify-between">
                    <div className="flex justify-between items-start">
                        <div className="w-4 h-4 rounded-full border border-emerald-500/50" />
                        <div className="text-[6px] text-emerald-500 font-mono tracking-widest">NEO</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-[5px] text-emerald-500/50 font-mono">BALANCE</div>
                        <div className="text-[10px] text-white font-bold tracking-tighter">$24,932.00</div>
                    </div>
                </div>
                {/* Glint effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 opacity-50" />
            </div>
        </div>
    )
}

// Zen / Reader Wireframe
function ZenWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 bg-stone-100 p-3 flex flex-col">
            {/* Minimal Typography Layout */}
            <div className="flex-1 px-1">
                <div className="w-8 h-8 rounded-full bg-stone-200 mb-4" />
                <div className="h-3 w-full bg-stone-800 mb-2" /> {/* Title */}
                <div className="h-3 w-2/3 bg-stone-800 mb-6" />

                <div className="space-y-1.5 opacity-60">
                    <div className="h-1 w-full bg-stone-600 rounded-sm" />
                    <div className="h-1 w-full bg-stone-600 rounded-sm" />
                    <div className="h-1 w-full bg-stone-600 rounded-sm" />
                    <div className="h-1 w-4/5 bg-stone-600 rounded-sm" />
                </div>
            </div>

            {/* Thumb Zone Controls */}
            <div className="h-12 border-t border-stone-200 mt-auto flex items-center justify-around px-4">
                <div className="w-8 h-1 rounded-full bg-stone-300" />
            </div>
        </div>
    )
}

// Touch / Remote Wireframe
function TouchWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-3 gap-3">
            {/* Neumorphic Dial */}
            <div
                className="w-16 h-16 rounded-full flex items-center justify-center relative"
                style={{
                    background: 'linear-gradient(145deg, #ffffff, #e2e8f0)',
                    boxShadow: '5px 5px 10px #cbd5e1, -5px -5px 10px #ffffff'
                }}
            >
                <div className="w-12 h-12 rounded-full border-4 border-slate-100" />
                <div className="absolute top-2 w-1 h-2 bg-sky-500 rounded-full" />
            </div>

            {/* Tactile Buttons */}
            <div className="flex gap-3">
                <div
                    className="w-8 h-8 rounded-lg"
                    style={{
                        background: 'linear-gradient(145deg, #ffffff, #e2e8f0)',
                        boxShadow: '3px 3px 6px #cbd5e1, -3px -3px 6px #ffffff'
                    }}
                />
                <div
                    className="w-8 h-8 rounded-lg border border-sky-200"
                    style={{
                        background: '#e0f2fe',
                        boxShadow: 'inset 2px 2px 4px #bae6fd, inset -2px -2px 4px #ffffff'
                    }}
                />
            </div>
        </div>
    )
}

// Signal / Chat Wireframe
function SignalWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 bg-slate-50 overflow-hidden font-sans select-none">
            {/* Ambient Background - Static approximations of the animated orbs */}
            <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] bg-purple-300 rounded-full blur-[40px] opacity-60" />
            <div className="absolute top-[10%] -right-[10%] w-[70%] h-[70%] bg-pink-400 rounded-full blur-[40px] opacity-50" />
            <div className="absolute -bottom-[10%] left-[20%] w-[90%] h-[90%] bg-rose-300 rounded-full blur-[50px] opacity-40" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col z-10">
                {/* Header */}
                <div className="h-10 border-b border-pink-100/50 bg-white/40 backdrop-blur-sm flex items-center px-3 gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-400 to-rose-400 p-[1.5px]">
                        <div className="w-full h-full rounded-full bg-white" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <div className="h-1.5 w-12 bg-gray-800/10 rounded-full" />
                        <div className="h-1 w-8 bg-pink-500/20 rounded-full" />
                    </div>
                </div>

                {/* Messages - FROM TOP as requested */}
                <div className="flex-1 p-3 flex flex-col gap-3">
                    {/* Received */}
                    <div className="self-start max-w-[85%]">
                        <div className="p-2 rounded-2xl rounded-bl-sm bg-white/80 shadow-sm border border-pink-100/50 backdrop-blur-sm">
                            <div className="h-1.5 w-24 bg-gray-400/20 rounded-full mb-1.5" />
                            <div className="h-1.5 w-16 bg-gray-400/20 rounded-full" />
                        </div>
                        <div className="text-[6px] text-gray-400 mt-1 ml-1">10:23 AM</div>
                    </div>

                    {/* Sent */}
                    <div className="self-end max-w-[85%] flex flex-col items-end">
                        <div className="p-2 rounded-2xl rounded-br-sm bg-gradient-to-tr from-pink-500 to-rose-500 shadow-md text-white">
                            <div className="h-1.5 w-20 bg-white/40 rounded-full mb-1.5" />
                            <div className="h-1.5 w-28 bg-white/40 rounded-full" />
                        </div>
                        <div className="text-[6px] text-gray-400 mt-1 mr-1">10:24 AM</div>
                    </div>

                    {/* Received w/ Image */}
                    <div className="self-start max-w-[85%]">
                        <div className="p-1 rounded-2xl rounded-bl-sm bg-white/80 shadow-sm border border-pink-100/50 backdrop-blur-sm">
                            <div className="w-full aspect-video bg-pink-100 rounded-xl mb-1 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-400 to-pink-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-2 pb-3">
                    <div className="h-8 bg-white/60 backdrop-blur-md border border-white/40 rounded-full shadow-sm flex items-center px-1 gap-1">
                        <div className="w-6 h-6 rounded-full bg-gray-100/50 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-sm border-2 border-gray-300" />
                        </div>
                        <div className="flex-1 h-2 bg-gray-400/10 rounded-full mx-1" />
                        <div className="w-6 h-6 rounded-full bg-pink-500/10 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-pink-500/20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Flux / Social Feed Wireframe
function FluxWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 bg-zinc-950 flex flex-col overflow-hidden font-sans select-none">
            {/* Background Gradient/Image Placeholder */}
            {/* Simulating a video feed content */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-zinc-950/90 z-0" />
            <div className="absolute inset-0 opacity-20 z-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-[60px]" />
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-[60px]" />
            </div>

            {/* Top Bar - For You / Following */}
            <div className="relative z-10 pt-3 flex justify-center gap-4 text-[8px] font-bold tracking-wide">
                <div className="text-white/40">Following</div>
                <div className="text-white border-b border-white pb-0.5">For You</div>
            </div>

            {/* Right Action Sidebar */}
            <div className="absolute right-2 bottom-12 z-20 flex flex-col items-center gap-3">
                {/* Profile */}
                <div className="w-6 h-6 rounded-full border border-white p-0.5 mb-1">
                    <div className="w-full h-full rounded-full bg-zinc-700" />
                    <div className="absolute -bottom-0.5 left-1.5 w-3 h-3 bg-pink-500 rounded-full flex items-center justify-center border border-black">
                        <div className="text-white text-[6px]">+</div>
                    </div>
                </div>

                {/* Like */}
                <div className="flex flex-col items-center gap-0.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full heart-shape" /> {/* Simple circle proxy for heart */}
                    </div>
                    <div className="text-[6px] text-white">8.2k</div>
                </div>

                {/* Comment */}
                <div className="flex flex-col items-center gap-0.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/80 rounded-sm" />
                    </div>
                    <div className="text-[6px] text-white">402</div>
                </div>

                {/* Share */}
                <div className="flex flex-col items-center gap-0.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/80 rounded-full" />
                    </div>
                    <div className="text-[6px] text-white">Share</div>
                </div>
            </div>



            {/* Tab Bar Shim */}
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-white/10 z-20" />
        </div>
    )
}

// Rave / Neo-Brutalist Wireframe
function RaveWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 bg-black p-2 flex flex-col font-mono select-none border-2 border-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-2 border-b-2 border-white pb-1">
                <div className="text-[10px] font-black italic text-[#ccff00]">RAVE</div>
                <div className="w-4 h-4 border border-white bg-white/10" />
            </div>

            {/* Marquee shim */}
            <div className="w-full h-2 bg-[#ccff00] mb-2 flex items-center overflow-hidden border border-black">
                <div className="text-[4px] font-bold text-black whitespace-nowrap">NON-STOP // RHYTHM // NO SLEEP</div>
            </div>

            {/* Cards */}
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex-1 border-2 border-white bg-zinc-900 shadow-[2px_2px_0px_0px_rgba(204,255,0,1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#ff00cc] text-white text-[4px] font-bold px-1 border-l border-b border-white">HOT</div>
                    <div className="h-full w-full opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black" />
                </div>
                <div className="h-1/3 border-2 border-white bg-zinc-900 shadow-[2px_2px_0px_0px_rgba(255,0,204,1)]" />
            </div>

            {/* Bottom Button */}
            <div className="absolute bottom-2 right-2">
                <div className="w-8 h-8 border-2 border-white bg-[#ff00cc] shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center">
                    <div className="text-white text-[10px]">⚡</div>
                </div>
            </div>
        </div>
    )
}

// Map template IDs to their wireframe components
function getTemplateWireframe(templateId: string): React.FC<WireframeProps> {
    const wireframes: Record<string, React.FC<WireframeProps>> = {
        // Templates with unique wireframes
        engineering: EngineeringWireframe,
        saas: DashboardWireframe,
        fintech: FintechWireframe,
        productivity: ProductivityWireframe,
        grid: GridWireframe,
        social: SocialWireframe,
        music: MusicWireframe,
        food: FoodWireframe,

        // Unique templates
        legacy: LegacyWireframe,
        cockpit: CockpitWireframe,
        swiss: SwissWireframe,
        brutalist: BrutalistWireframe,
        scifi: SciFiWireframe,
        game: ArcadeWireframe,
        festival: FestivalWireframe,
        wellness: WellnessWireframe,
        education: EducationWireframe,
        magazine: MagazineWireframe,
        eink: EInkWireframe,

        // Fixed mappings
        kids: KidsWireframe,
        kitchen: KitchenWireframe,
        solarpunk: SolarpunkWireframe,
        ecommerce: EcommerceWireframe,

        // Newly implemented wireframes
        legal: LegalWireframe,
        softplastic: SoftPlasticWireframe,
        acid: AcidWireframe,
        blueprint: BlueprintWireframe,
        clay: ClayWireframe,

        // Phase 4: New templates
        clinic: ClinicWireframe,
        departure: DepartureWireframe,
        estate: EstateWireframe,
        nomad: NomadWireframe,

        // Mobile First
        flux: FluxWireframe,
        neo: NeoWireframe,
        zen: ZenWireframe,
        touch: TouchWireframe,
        signal: SignalWireframe,
        rave: RaveWireframe,

        // Missing wireframes mapped to closest match
        vault: FintechWireframe,
        arena: ArcadeWireframe,
        evergreen: SolarpunkWireframe,
        concierge: ClinicWireframe,
        paradox: AcidWireframe,
        terminal: EngineeringWireframe,
    }

    return wireframes[templateId] || DashboardWireframe
}
