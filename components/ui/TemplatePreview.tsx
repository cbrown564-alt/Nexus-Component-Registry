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
            <div className="relative w-12 h-12 rounded-full border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center">
                <div className="absolute inset-1 rounded-full border border-zinc-800">
                    <div className={`absolute w-0.5 h-4 ${theme.colorClass} left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[-30deg]`} />
                </div>
                <div className="absolute bottom-1 text-[5px] text-zinc-500 font-mono">RPM</div>
            </div>
            {/* Center speedometer */}
            <div className="relative w-20 h-20 rounded-full border-4 border-zinc-700 bg-zinc-900 flex items-center justify-center shadow-lg">
                <div className="absolute inset-2 rounded-full border border-zinc-800">
                    <div className={`absolute w-0.5 h-7 ${theme.colorClass} left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[15deg]`} />
                </div>
                <div className="absolute bottom-2 text-[6px] text-white font-mono font-bold">88</div>
                <div className="absolute bottom-0.5 text-[4px] text-zinc-600">MPH</div>
            </div>
            {/* Right gauge */}
            <div className="relative w-12 h-12 rounded-full border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center">
                <div className="absolute inset-1 rounded-full border border-zinc-800">
                    <div className={`absolute w-0.5 h-4 ${theme.colorClass} opacity-60 left-1/2 bottom-1/2 origin-bottom -translate-x-1/2 rotate-[45deg]`} />
                </div>
                <div className="absolute bottom-1 text-[5px] text-zinc-500 font-mono">FUEL</div>
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
            <div className="relative">
                <div className={`w-16 h-16 rounded-full border-2 ${theme.colorClass.replace('bg-', 'border-')} opacity-60`} />
                <div className={`absolute inset-2 rounded-full border ${theme.colorClass.replace('bg-', 'border-')} opacity-40`} />
                <div className={`absolute inset-4 rounded-full ${theme.colorClass} opacity-30`} />
                {/* Scanner lines */}
                <div className={`absolute left-1/2 top-0 bottom-0 w-px ${theme.colorClass} opacity-60`} />
                <div className={`absolute top-1/2 left-0 right-0 h-px ${theme.colorClass} opacity-60`} />
            </div>
            {/* Side data */}
            <div className="absolute right-3 top-3 space-y-1">
                <div className={`h-1 w-8 ${theme.colorClass} opacity-50`} />
                <div className={`h-1 w-6 ${theme.colorClass} opacity-30`} />
                <div className={`h-1 w-10 ${theme.colorClass} opacity-40`} />
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

// Map template IDs to their wireframe components
function getTemplateWireframe(templateId: string): React.FC<WireframeProps> {
    const wireframes: Record<string, React.FC<WireframeProps>> = {
        // Dark themes - dashboard variants
        engineering: DashboardWireframe,
        saas: DashboardWireframe,
        fintech: DashboardWireframe,
        productivity: DashboardWireframe,
        grid: DashboardWireframe,
        social: DashboardWireframe,
        music: DashboardWireframe,
        food: DashboardWireframe,
        
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
        
        // Light themes - map to closest archetype
        ecommerce: DashboardWireframe,
        kitchen: WellnessWireframe,
        kids: ArcadeWireframe,
        solarpunk: WellnessWireframe,
        legal: MagazineWireframe,
        softplastic: DashboardWireframe,
        acid: BrutalistWireframe,
        clay: DashboardWireframe,
        blueprint: SciFiWireframe,
    }
    
    return wireframes[templateId] || DashboardWireframe
}
