import React from 'react'
import { Theme } from '@/data/themes'

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
    const baseColor = isLight ? 'bg-black' : 'bg-white'
    const borderColor = isLight ? 'border-black/10' : 'border-white/10'

    return (
        <div className="absolute inset-0 flex">
            {/* Sidebar */}
            <div className={`w-[18%] border-r ${borderColor} p-1.5 flex flex-col gap-1`}>
                <div className={`h-2 w-3/4 rounded-sm ${theme.colorClass} opacity-80`} />
                <div className={`h-1.5 w-full rounded-sm ${baseColor} opacity-15`} />
                <div className={`h-1.5 w-4/5 rounded-sm ${baseColor} opacity-15`} />
                <div className={`h-1.5 w-3/5 rounded-sm ${baseColor} opacity-15`} />
            </div>
            {/* Main */}
            <div className="flex-1 p-2 flex flex-col gap-1.5">
                <div className={`h-2.5 w-1/3 rounded-sm ${baseColor} opacity-10`} />
                <div className="flex gap-1.5 flex-1">
                    <div className={`flex-1 rounded border ${borderColor}`} />
                    <div className={`flex-1 rounded border ${borderColor}`} />
                    <div className={`flex-1 rounded ${theme.colorClass} opacity-30`} />
                </div>
                <div className={`flex-[1.5] rounded border ${borderColor}`}>
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path
                            d="M0,35 Q20,30 35,25 T60,18 T85,12 L100,16"
                            fill="none"
                            className={isLight ? 'stroke-black/20' : 'stroke-white/20'}
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
            <div className="flex-1 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] flex flex-col">
                <div className="h-5 bg-[#000080] flex items-center px-1 gap-1">
                    <div className="w-3 h-3 bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] flex items-center justify-center text-[6px]">▣</div>
                    <div className="flex-1 text-white text-[7px] font-bold truncate">Dashboard.exe</div>
                    <div className="flex gap-0.5">
                        <div className="w-3 h-3 bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-[6px] flex items-center justify-center">_</div>
                        <div className="w-3 h-3 bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-[6px] flex items-center justify-center">□</div>
                        <div className="w-3 h-3 bg-[#c0c0c0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-[6px] flex items-center justify-center">×</div>
                    </div>
                </div>
                <div className="flex-1 bg-white m-0.5" />
            </div>
            {/* Window 2 (behind) */}
            <div className="absolute bottom-4 right-4 w-2/3 h-1/2 bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] opacity-80">
                <div className="h-4 bg-[#808080] flex items-center px-1">
                    <div className="text-white text-[6px] truncate">Statistics.exe</div>
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
            <div className="relative w-[20%] aspect-square rounded-full border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center">
                <div className="absolute inset-[10%] rounded-full border border-zinc-800">
                    <div className={`absolute w-[2px] h-[40%] ${theme.colorClass} left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[-30deg]`} />
                </div>
                <div className="absolute bottom-[15%] text-[10px] sm:text-xs text-zinc-500 font-mono">RPM</div>
            </div>
            {/* Center speedometer */}
            <div className="relative w-[30%] aspect-square rounded-full border-4 border-zinc-700 bg-zinc-900 flex items-center justify-center shadow-lg">
                <div className="absolute inset-[8%] rounded-full border border-zinc-800">
                    <div className={`absolute w-[3px] h-[45%] ${theme.colorClass} left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[15deg]`} />
                </div>
                <div className="absolute bottom-[20%] text-xs sm:text-lg text-white font-mono font-bold">88</div>
                <div className="absolute bottom-[10%] text-[8px] sm:text-xs text-zinc-600">MPH</div>
            </div>
            {/* Right gauge */}
            <div className="relative w-[20%] aspect-square rounded-full border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center">
                <div className="absolute inset-[10%] rounded-full border border-zinc-800">
                    <div className={`absolute w-[2px] h-[40%] ${theme.colorClass} opacity-60 left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[45deg]`} />
                </div>
                <div className="absolute bottom-[15%] text-[10px] sm:text-xs text-zinc-500 font-mono">FUEL</div>
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
                <div className="h-4 w-24 bg-black rounded-sm" />
            </div>
            {/* Grid */}
            <div className="flex-1 grid grid-cols-3 gap-1.5">
                <div className="border border-black/10 flex items-end p-1">
                    <div className="h-1 w-full bg-black/30" />
                </div>
                <div className="border border-black/10 flex items-end p-1">
                    <div className="h-2 w-full bg-black/30" />
                </div>
                <div className="bg-[#DC2626] flex items-center justify-center">
                    <div className="text-white text-[8px] font-bold">→</div>
                </div>
                <div className="col-span-2 border border-black/10 flex items-center p-1">
                    <div className="h-1.5 w-3/4 bg-black/20" />
                </div>
                <div className="border border-black/10" />
            </div>
        </div>
    )
}

// Brutalist wireframe with bold blocks
function BrutalistWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 p-2">
            {/* Bold header bar */}
            <div className="h-6 bg-black mb-2 flex items-center px-2">
                <div className="text-white text-[8px] font-black uppercase tracking-widest">RAW DESIGN</div>
            </div>
            {/* Asymmetric blocks */}
            <div className="flex gap-2 h-[calc(100%-32px)]">
                <div className="w-2/3 border-4 border-black bg-white flex items-center justify-center">
                    <div className="text-black text-[10px] font-black rotate-[-5deg]">NO RULES</div>
                </div>
                <div className="w-1/3 flex flex-col gap-2">
                    <div className="flex-1 bg-yellow-400 border-2 border-black" />
                    <div className="flex-1 bg-black" />
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
                <div className="text-fuchsia-400">SCORE: 99999</div>
                <div className="text-cyan-400">LEVEL: 42</div>
            </div>
            {/* Game area */}
            <div className="flex-1 border-2 border-fuchsia-500/50 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent" />
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="absolute h-px bg-fuchsia-500/50" style={{ top: `${20 * (i + 1)}%`, left: 0, right: 0 }} />
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
            <div className="w-1/4 border-r-2 border-black pr-2 flex flex-col gap-1">
                <div className="h-3 w-full bg-black mb-2" />
                <div className="h-1 w-full bg-black/30" />
                <div className="h-1 w-4/5 bg-black/30" />
                <div className="h-1 w-full bg-black/30" />
            </div>
            {/* Content */}
            <div className="flex-1 pl-3 flex flex-col">
                <div className="h-2 w-2/3 bg-black mb-2" />
                <div className="space-y-0.5 flex-1">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-0.5 w-full bg-black/20" />
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
                        className={`w-2 rounded-t ${i % 2 === 0 ? 'bg-fuchsia-500' : 'bg-cyan-400'}`}
                        style={{ height: `${h * 100}%` }}
                    />
                ))}
            </div>
            {/* Beat text */}
            <div className="text-white text-[8px] font-black tracking-[0.3em] opacity-60">
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
                <div className={`w-16 h-16 rounded-full border-2 border-sage-300 bg-sage-50`} />
                {/* Breathing animation ring */}
                <div className={`absolute inset-[-4px] rounded-full border border-sage-200`} />
                <div className={`absolute inset-[-8px] rounded-full border border-sage-100`} />
                {/* Inner content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-[8px] text-sage-600 font-medium">Breathe</div>
                    <div className={`h-0.5 w-8 ${theme.colorClass} opacity-60 mt-1 rounded-full`} />
                </div>
            </div>
            {/* Stats */}
            <div className="absolute bottom-3 left-3 right-3 flex justify-around">
                {['72 bpm', '98%', '8h'].map((stat, i) => (
                    <div key={i} className="text-[6px] text-stone-500">{stat}</div>
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
                <div className={`rounded-lg border border-slate-200 bg-white p-2 flex flex-col`}>
                    <div className={`h-2 w-full ${theme.colorClass} rounded mb-1.5`} />
                    <div className="h-1 w-3/4 bg-slate-200 mb-1" />
                    <div className="h-1 w-1/2 bg-slate-200" />
                    <div className="mt-auto h-2 w-8 bg-slate-100 rounded text-[5px] text-slate-500 flex items-center justify-center">85%</div>
                </div>
                <div className={`rounded-lg border border-slate-200 bg-white p-2 flex flex-col`}>
                    <div className={`h-2 w-full bg-indigo-400 rounded mb-1.5`} />
                    <div className="h-1 w-4/5 bg-slate-200 mb-1" />
                    <div className="h-1 w-2/3 bg-slate-200" />
                    <div className="mt-auto h-2 w-8 bg-slate-100 rounded text-[5px] text-slate-500 flex items-center justify-center">42%</div>
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
                <div className="h-3 w-4/5 bg-neutral-900 mb-1.5" />
                <div className="h-1.5 w-1/3 bg-neutral-300 mb-2" />
                <div className="flex-1 space-y-0.5">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-0.5 w-full bg-neutral-200" />
                    ))}
                </div>
            </div>
            {/* Sidebar articles */}
            <div className="flex-1 flex flex-col gap-1.5">
                <div className="flex-1 border-l-2 border-neutral-900 pl-2 flex flex-col justify-center">
                    <div className="h-1.5 w-full bg-neutral-400 mb-1" />
                    <div className="h-0.5 w-3/4 bg-neutral-200" />
                </div>
                <div className="flex-1 border-l-2 border-neutral-300 pl-2 flex flex-col justify-center">
                    <div className="h-1.5 w-full bg-neutral-400 mb-1" />
                    <div className="h-0.5 w-4/5 bg-neutral-200" />
                </div>
            </div>
        </div>
    )
}

// Kids / Play wireframe - bright colorful activity tiles
function KidsWireframe({ theme }: WireframeProps) {
    const colors = ['bg-red-400', 'bg-yellow-300', 'bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-orange-400']
    return (
        <div className="absolute inset-0 p-2">
            {/* Cloud decorations */}
            <div className="absolute top-2 left-4 w-8 h-3 bg-white/40 rounded-full blur-sm" />
            <div className="absolute top-4 right-6 w-6 h-2 bg-white/30 rounded-full blur-sm" />
            {/* Activity grid */}
            <div className="grid grid-cols-3 gap-1.5 h-full p-1">
                {colors.map((color, i) => (
                    <div key={i} className={`${color} rounded-xl border-2 border-white/50 flex items-center justify-center shadow-md`}>
                        <div className="w-4 h-4 bg-white/40 rounded-full" />
                    </div>
                ))}
            </div>
            {/* Star progress indicator */}
            <div className="absolute top-1 right-1 flex gap-0.5">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="text-[8px] text-yellow-400">★</div>
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
            <div className="w-1/4 bg-white rounded-lg border border-stone-200 p-1.5 flex flex-col gap-1">
                <div className="h-1.5 w-full bg-orange-400 rounded" />
                <div className="h-1 w-3/4 bg-stone-200 rounded" />
                <div className="h-1 w-1/2 bg-stone-200 rounded" />
                <div className="h-1 w-2/3 bg-stone-200 rounded" />
            </div>
            {/* Center: Recipe step */}
            <div className="flex-1 bg-white rounded-lg border border-stone-200 p-2 flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center text-[10px] font-bold text-orange-600 mb-1">2</div>
                <div className="h-1.5 w-3/4 bg-stone-800 rounded mb-1" />
                <div className="h-1 w-1/2 bg-stone-300 rounded" />
            </div>
            {/* Right: Timer */}
            <div className="w-1/4 flex flex-col gap-1.5">
                <div className="flex-1 bg-stone-900 rounded-lg flex items-center justify-center">
                    <div className="text-[10px] font-mono text-orange-400 font-bold">12:45</div>
                </div>
                <div className="h-8 bg-green-100 rounded-lg border border-green-200 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
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
            <div className="w-2/5 bg-gradient-to-b from-yellow-100 to-emerald-50 rounded-xl p-2 flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 shadow-lg shadow-yellow-300/50 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-yellow-200" />
                </div>
                <div className="mt-2 text-[7px] text-emerald-700 font-bold">2.4 kWh</div>
            </div>
            {/* Right: Plant progress */}
            <div className="flex-1 bg-white/60 rounded-xl p-2 flex flex-col gap-1.5">
                <div className="text-[6px] font-bold text-emerald-800 uppercase">Hydroponics</div>
                {[
                    { name: 'Basil', progress: 100, color: 'bg-emerald-500' },
                    { name: 'Tomato', progress: 65, color: 'bg-emerald-400' },
                    { name: 'Lettuce', progress: 30, color: 'bg-emerald-300' },
                ].map((plant, i) => (
                    <div key={i} className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${plant.color}`} />
                        <div className="flex-1 h-1.5 bg-emerald-100 rounded-full overflow-hidden">
                            <div className={`h-full ${plant.color}`} style={{ width: `${plant.progress}%` }} />
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
            <div className="w-[10%] bg-zinc-950 border-r border-zinc-800 flex flex-col items-center gap-1 py-1">
                <div className="w-3 h-3 rounded bg-blue-500" />
                <div className="w-2 h-2 rounded bg-zinc-700" />
                <div className="w-2 h-2 rounded bg-zinc-700" />
                <div className="w-2 h-2 rounded bg-zinc-700" />
            </div>
            {/* File explorer */}
            <div className="w-[20%] bg-zinc-900 border-r border-zinc-800 p-1 flex flex-col gap-0.5">
                <div className="h-1.5 w-full bg-zinc-700 rounded" />
                <div className="h-1 w-4/5 bg-zinc-800 rounded ml-1" />
                <div className="h-1 w-3/5 bg-blue-500/50 rounded ml-2" />
                <div className="h-1 w-4/5 bg-zinc-800 rounded ml-1" />
            </div>
            {/* Editor area */}
            <div className="flex-1 flex flex-col">
                {/* Tabs */}
                <div className="h-3 bg-zinc-900 border-b border-zinc-800 flex">
                    <div className="w-12 bg-zinc-950 border-t-2 border-t-blue-500 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-blue-400" />
                    </div>
                    <div className="w-10 bg-zinc-900 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-zinc-600" />
                    </div>
                </div>
                {/* Code */}
                <div className="flex-1 bg-zinc-950 p-1 flex flex-col gap-0.5">
                    <div className="flex gap-1">
                        <div className="w-2 text-[4px] text-zinc-600">1</div>
                        <div className="h-1 w-8 bg-purple-400/50 rounded" />
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 text-[4px] text-zinc-600">2</div>
                        <div className="h-1 w-12 bg-blue-400/50 rounded" />
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 text-[4px] text-zinc-600">3</div>
                        <div className="h-1 w-6 bg-zinc-700 rounded" />
                    </div>
                </div>
                {/* Terminal */}
                <div className="h-1/3 bg-zinc-900 border-t border-zinc-800 p-1">
                    <div className="flex gap-1 items-center">
                        <div className="text-[5px] text-emerald-400">➜</div>
                        <div className="h-0.5 w-8 bg-zinc-600 rounded" />
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
            <div className="w-[22%] bg-black/40 border-r border-white/5 p-1.5 flex flex-col gap-1">
                <div className="h-2 w-3/4 bg-rose-500/80 rounded" />
                <div className="h-1 w-full bg-white/10 rounded" />
                <div className="h-1 w-4/5 bg-white/10 rounded" />
                <div className="h-1 w-3/5 bg-white/10 rounded" />
            </div>
            {/* Main content */}
            <div className="flex-1 p-2 flex flex-col">
                {/* Album header */}
                <div className="flex gap-2 mb-2">
                    <div className="w-10 h-10 rounded bg-gradient-to-br from-indigo-500 to-rose-500 shadow-lg" />
                    <div className="flex-1 flex flex-col justify-center gap-1">
                        <div className="h-2 w-3/4 bg-white rounded" />
                        <div className="h-1 w-1/2 bg-white/30 rounded" />
                    </div>
                </div>
                {/* Track list */}
                <div className="flex-1 flex flex-col gap-0.5">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-1 px-1 py-0.5 rounded hover:bg-white/5">
                            <div className="w-2 text-[5px] text-zinc-500">{i + 1}</div>
                            <div className="h-1 flex-1 bg-white/20 rounded" />
                            <div className="text-[5px] text-zinc-500">3:42</div>
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
                <div className="w-6 h-6 rounded-full bg-zinc-700 mx-auto" />
                <div className="h-1 w-full bg-white/20 rounded" />
                <div className="h-1 w-3/4 bg-white/10 rounded" />
            </div>
            {/* Feed */}
            <div className="flex-1 flex flex-col gap-1.5">
                {/* Stories */}
                <div className="flex gap-1 px-1">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className={`w-4 h-4 rounded-full border-2 ${i === 0 ? 'border-sky-400' : 'border-zinc-700'} bg-zinc-800`} />
                    ))}
                </div>
                {/* Posts */}
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="bg-zinc-900/50 rounded p-1 border border-zinc-800">
                        <div className="flex items-center gap-1 mb-1">
                            <div className="w-2 h-2 rounded-full bg-zinc-600" />
                            <div className="h-1 w-8 bg-white/30 rounded" />
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded mb-0.5" />
                        <div className="h-1 w-2/3 bg-white/10 rounded" />
                    </div>
                ))}
            </div>
            {/* Right sidebar */}
            <div className="w-[20%] hidden md:flex flex-col gap-1">
                <div className="h-1 w-full bg-white/10 rounded" />
                <div className="h-1 w-4/5 bg-sky-500/30 rounded" />
                <div className="h-1 w-3/5 bg-white/10 rounded" />
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
                        <div key={i} className="flex-1 bg-zinc-900 border border-zinc-800 rounded p-1">
                            <div className="h-0.5 w-2/3 bg-zinc-600 rounded mb-0.5" />
                            <div className="h-1.5 w-1/2 bg-white rounded" />
                        </div>
                    ))}
                </div>
                {/* Chart */}
                <div className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded p-1">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path d="M0,35 Q15,30 30,28 T50,20 T75,15 L100,18" fill="none" className="stroke-emerald-500" strokeWidth="2" />
                        <path d="M0,35 Q15,30 30,28 T50,20 T75,15 L100,18 L100,40 L0,40 Z" className="fill-emerald-500/20" />
                    </svg>
                </div>
            </div>
            {/* Right sidebar */}
            <div className="w-1/3 flex flex-col gap-1.5">
                {/* Credit card */}
                <div className="h-12 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-1.5 border border-zinc-700">
                    <div className="h-2 w-4 bg-amber-400/60 rounded mb-1" />
                    <div className="h-1 w-3/4 bg-white/20 rounded" />
                </div>
                {/* Ticker */}
                <div className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded p-1 flex flex-col gap-0.5">
                    {['+2.4%', '-0.8%', '+1.2%'].map((val, i) => (
                        <div key={i} className="flex justify-between items-center">
                            <div className="h-1 w-6 bg-zinc-700 rounded" />
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
            <div className="w-[20%] bg-zinc-950 border-r border-zinc-800 p-1.5 flex flex-col gap-1">
                <div className="h-2 w-3/4 flex items-center gap-1">
                    <div className="w-2 h-2 rounded bg-amber-500" />
                    <div className="h-1.5 flex-1 bg-white rounded" />
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded" />
                <div className="h-1 w-4/5 bg-zinc-800 rounded" />
                <div className="h-1 w-3/4 bg-amber-500/30 rounded" />
            </div>
            {/* Main */}
            <div className="flex-1 p-2 flex gap-2">
                {/* Timer widget */}
                <div className="w-1/3 bg-zinc-900/50 border border-zinc-800 rounded-lg flex flex-col items-center justify-center p-2">
                    <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center mb-1">
                        <div className="text-[8px] font-mono text-amber-400">25:00</div>
                    </div>
                    <div className="h-1 w-8 bg-amber-500/30 rounded" />
                </div>
                {/* Kanban columns */}
                <div className="flex-1 flex gap-1">
                    {['To Do', 'In Progress', 'Done'].map((col, i) => (
                        <div key={col} className="flex-1 bg-zinc-900/30 rounded p-1 flex flex-col gap-0.5">
                            <div className="h-1 w-full bg-zinc-700 rounded mb-1" />
                            {[...Array(3 - i)].map((_, j) => (
                                <div key={j} className="h-3 bg-zinc-800 rounded border border-zinc-700" />
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
                {['🍕', '🍣', '🍔', '🥗'].map((emoji, i) => (
                    <div key={i} className={`h-4 px-2 rounded-full flex items-center justify-center text-[8px] ${i === 0 ? 'bg-orange-500' : 'bg-stone-800 border border-stone-700'}`}>
                        {emoji}
                    </div>
                ))}
            </div>
            {/* Menu grid */}
            <div className="flex-1 grid grid-cols-3 gap-1">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-lg overflow-hidden">
                        <div className="h-3/5 bg-gradient-to-br from-stone-700 to-stone-800" />
                        <div className="p-1">
                            <div className="h-1 w-3/4 bg-stone-600 rounded mb-0.5" />
                            <div className="h-1 w-1/2 bg-orange-500/50 rounded" />
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
            <div className="flex-1 bg-slate-900 border border-blue-900/50 rounded overflow-hidden relative">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="absolute h-px bg-blue-500/50" style={{ top: `${25 * (i + 1)}%`, left: 0, right: 0 }} />
                    ))}
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="absolute w-px bg-blue-500/50" style={{ left: `${25 * (i + 1)}%`, top: 0, bottom: 0 }} />
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
                <div className="flex-1 bg-slate-900 border border-blue-900/50 rounded p-1.5 flex flex-col justify-around">
                    {['Power', 'Load', 'Temp'].map((label, i) => (
                        <div key={label} className="flex items-center gap-1">
                            <div className="text-[5px] text-blue-400 w-6">{label}</div>
                            <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${i === 0 ? 'bg-emerald-500 w-4/5' : i === 1 ? 'bg-blue-500 w-3/5' : 'bg-amber-500 w-2/5'}`} />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Status indicator */}
                <div className="h-6 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center gap-1">
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
                            className={`flex-1 h-6 rounded-lg flex flex-col items-center justify-center ${i === 2 ? 'bg-sky-400 text-white' : 'bg-white'
                                }`}
                            style={{ boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff' }}
                        >
                            <div className="text-[5px] font-bold">{day}</div>
                            <div className="text-[7px] font-black">{22 + i}</div>
                        </div>
                    ))}
                </div>
                {/* Task cards */}
                {[
                    { color: 'bg-rose-200' },
                    { color: 'bg-violet-200' },
                ].map((task, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl p-1.5 flex items-center gap-1.5"
                        style={{ boxShadow: '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff' }}
                    >
                        <div className={`w-4 h-4 rounded-lg ${task.color}`}
                            style={{ boxShadow: 'inset 2px 2px 4px rgba(255,255,255,0.6), inset -2px -2px 4px rgba(0,0,0,0.05)' }} />
                        <div className="flex-1">
                            <div className="h-1 w-3/4 bg-slate-300 rounded" />
                            <div className="h-0.5 w-1/2 bg-slate-200 rounded mt-0.5" />
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
                        <div className="text-[8px] font-black text-slate-700">75%</div>
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
                    <div key={i} className="bg-neutral-50 border border-neutral-100 flex flex-col">
                        <div className="flex-1 bg-neutral-100" />
                        <div className="p-1">
                            <div className="h-1 w-3/4 bg-neutral-300 rounded mb-0.5" />
                            <div className="h-1 w-1/2 bg-black rounded" />
                        </div>
                    </div>
                ))}
            </div>
            {/* Cart sidebar */}
            <div className="w-1/4 bg-neutral-50 border border-neutral-100 p-1.5 flex flex-col">
                <div className="h-1.5 w-full bg-black rounded mb-2" />
                <div className="flex-1 flex flex-col gap-1">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-1 items-center">
                            <div className="w-4 h-4 bg-neutral-200 rounded" />
                            <div className="flex-1">
                                <div className="h-0.5 w-full bg-neutral-300 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-4 bg-black rounded flex items-center justify-center">
                    <div className="h-1 w-8 bg-white/30 rounded" />
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
            <div className="relative border-2 border-white/50 w-3/4 h-3/4 flex items-center justify-center">
                <div className="absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 border-white" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2 border-white" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 border-white" />

                {/* Crosshair */}
                <div className="absolute w-full h-px bg-white/30" />
                <div className="absolute h-full w-px bg-white/30" />

                {/* Object */}
                <div className="w-10 h-10 border border-white rotate-45" />
                <div className="absolute w-14 h-14 border border-white/50 rounded-full" />
            </div>
            {/* Measurement labels */}
            <div className="absolute bottom-2 right-2 text-[5px] text-white/70 font-mono">
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
            <div className="w-1/4 border-r border-stone-300 flex flex-col gap-1">
                <div className="w-full h-1.5 bg-stone-300 rounded mb-1" />
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4/5 h-1 bg-stone-200 rounded" />
                ))}
            </div>
            {/* Main document */}
            <div className="flex-1 bg-white shadow-sm border border-stone-200 p-2 flex flex-col gap-1">
                <div className="w-1/3 h-2 bg-stone-800 mb-2" /> {/* Title */}
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-1 bg-stone-400 rounded-sm" />
                ))}
                <div className="flex gap-1 mt-2">
                    <div className="w-1/4 h-1.5 bg-red-700 rounded-sm" /> {/* Action button */}
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
            <div className="w-full max-w-[80%] p-2 rounded-xl bg-[#EFEEEE] flex justify-between items-center"
                style={{ boxShadow: 'inset 3px 3px 6px #cbcaca, inset -3px -3px 6px #ffffff' }}>

                {/* Toggle button */}
                <div className="w-8 h-4 rounded-full bg-[#EFEEEE] relative"
                    style={{ boxShadow: '3px 3px 6px #cbcaca, -3px -3px 6px #ffffff' }}>
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-slate-400" />
                </div>

                {/* Push button */}
                <div className="w-8 h-8 rounded-full bg-[#EFEEEE] flex items-center justify-center"
                    style={{ boxShadow: '3px 3px 6px #cbcaca, -3px -3px 6px #ffffff' }}>
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
            </div>

            {/* Slider track */}
            <div className="w-[80%] h-3 rounded-full bg-[#EFEEEE] relative"
                style={{ boxShadow: 'inset 2px 2px 5px #cbcaca, inset -2px -2px 5px #ffffff' }}>
                <div className="absolute top-0 bottom-0 left-0 w-1/2 rounded-full bg-slate-300" />
                <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[#EFEEEE] -translate-y-1/2 -translate-x-1/2"
                    style={{ boxShadow: '2px 2px 5px #cbcaca, -2px -2px 5px #ffffff' }} />
            </div>
        </div>
    )
}

// Acid wireframe
function AcidWireframe({ theme }: WireframeProps) {
    return (
        <div className="absolute inset-0 flex flex-col overflow-hidden">
            {/* Marquee header */}
            <div className="bg-black text-[#ccff00] text-[8px] font-black p-1 whitespace-nowrap overflow-hidden">
                ACID MODE /// ACID MODE /// ACID MODE
            </div>

            {/* Content chaos */}
            <div className="flex-1 relative p-2">
                <div className="absolute top-4 left-4 w-12 h-12 border-2 border-black bg-[#ccff00] rotate-6 z-10 flex items-center justify-center">
                    <div className="text-[14px] font-black">:)</div>
                </div>

                <div className="absolute bottom-4 right-4 w-16 h-8 bg-black text-white flex items-center justify-center -rotate-3 z-0">
                    <div className="text-[6px] font-mono">ERROR_404</div>
                </div>

                {/* Glitch lines */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-black rotate-12" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-black -rotate-12" />
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
    }

    return wireframes[templateId] || DashboardWireframe
}
