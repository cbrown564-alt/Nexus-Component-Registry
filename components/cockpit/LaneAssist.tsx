import React from 'react';
import { CarFront, AlertTriangle } from 'lucide-react';
import CockpitCard from './CockpitCard';
import { useTheme } from '@/context/ThemeContext';

import { motion, AnimatePresence } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';

interface LaneAssistProps {
    children?: React.ReactNode;
    activeMode?: string;
    onModeChange?: (mode: string) => void;
    className?: string; // Accept className from parent
}

const LaneAssist = ({ children, activeMode = 'comfort', onModeChange, className = '' }: LaneAssistProps) => {
    const { theme } = useTheme();

    const modes = [
        { id: 'eco', label: 'ECO', color: 'emerald', icon: '🍃' },
        { id: 'comfort', label: 'COMFORT', color: 'blue', icon: '☁️' },
        { id: 'sport', label: 'SPORT', color: 'orange', icon: '🔥' },
        { id: 'sport+', label: 'SPORT+', color: 'red', icon: '⚡' },
    ];

    return (
        <CockpitCard className={`h-full p-0 overflow-hidden relative group ${className}`} noPadding>
            {/* Background Sky/Road Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#050505]" />

            {/* Drive Mode Top Bar - Compacted */}
            <div className="absolute top-0 left-0 right-0 p-6 z-30 flex justify-center">
                <div className="backdrop-blur-xl border border-white/10 rounded-full p-1 flex gap-1 shadow-xl ring-1 ring-white/5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    {modes.map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => onModeChange?.(mode.id)}
                            className={`
                                relative px-3 py-1.5 rounded-full flex items-center gap-2 transition-all duration-300
                                ${activeMode === mode.id ? `text-${mode.color}-400` : ''} 
                            `}
                            style={{
                                color: activeMode !== mode.id ? theme.colors.mutedForeground : undefined
                            }}
                        >
                            {activeMode === mode.id && (
                                <motion.div
                                    layoutId="activeMode"
                                    className={`absolute inset-0 bg-${mode.color}-500/10 border border-${mode.color}-500/50 rounded-full`}
                                    transition={{ ...motionTokens.transition.spring }}
                                />
                            )}
                            <span className="text-base relative z-10">{mode.icon}</span>
                            <span className={`text-[10px] font-black uppercase tracking-wider relative z-10 ${activeMode === mode.id ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden group-hover:opacity-100 group-hover:w-auto transition-all'}`}>
                                {mode.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Starfield / Subtle Noise */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

            {/* Horizon Line with Glow */}
            <div
                className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                style={{ backgroundImage: `linear-gradient(to right, transparent, ${theme.colors.primary}80, transparent)` }}
            />

            {/* Road Perspective */}
            <div className="absolute top-[45%] bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl flex justify-center perspective-[500px]">
                {/* Left Lane Marker */}
                <div
                    className="absolute h-[150%] w-3 shadow-[0_0_25px_rgba(59,130,246,0.6)] blur-[1px]"
                    style={{
                        background: `linear-gradient(to bottom, transparent, ${theme.colors.primary}80, ${theme.colors.primary})`,
                        transform: 'perspective(300px) rotateX(60deg) translateX(-120px) skewX(25deg)',
                        transformOrigin: 'bottom'
                    }}
                />

                {/* Right Lane Marker */}
                <div
                    className="absolute h-[150%] w-3 shadow-[0_0_25px_rgba(59,130,246,0.6)] blur-[1px]"
                    style={{
                        background: `linear-gradient(to bottom, transparent, ${theme.colors.primary}80, ${theme.colors.primary})`,
                        transform: 'perspective(300px) rotateX(60deg) translateX(120px) skewX(-25deg)',
                        transformOrigin: 'bottom'
                    }}
                />

                {/* Center Dashed Line */}
                <div
                    className="absolute h-full w-0.5 border-l-2 border-dashed"
                    style={{
                        borderColor: `${theme.colors.border}50`,
                        transform: 'perspective(300px) rotateX(60deg)'
                    }}
                />
            </div>

            {/* Other Car (Simulated) */}
            <div className="absolute top-[55%] left-[55%] transition-all duration-[3000ms] ease-in-out scale-50">
                <div
                    className="w-16 h-10 rounded-lg shadow-lg opacity-40 blur-[1px] relative"
                    style={{ backgroundColor: theme.colors.secondary }}
                >
                    <div className="absolute bottom-1 w-full flex justify-between px-1">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full blur-[1px]" />
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full blur-[1px]" />
                    </div>
                </div>
            </div>

            {/* Battery / Range Indicator - Top Left */}
            <div className="absolute top-6 left-6 z-40 flex items-center gap-3 text-emerald-400/90">
                <div
                    className="h-1.5 w-10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5"
                    style={{ backgroundColor: `${theme.colors.secondary}80` }}
                >
                    <div className="h-full w-[80%] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wider">240 MI</span>
            </div>

            {/* User Car - Moved Up and Scaled Down to sit 'behind' the speedometer */}
            <div className="absolute bottom-48 left-1/2 -translate-x-1/2 z-10 perspective-[1000px]">
                <div className="relative transform transition-transform duration-700 hover:scale-105">
                    <CarFront
                        className="w-24 h-24 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                        strokeWidth={1}
                        style={{ color: theme.colors.foreground }}
                    />
                    {/* Headlight Beams */}
                    <div className="absolute top-2/3 left-2 w-32 h-64 bg-gradient-to-t from-blue-100/10 to-transparent -rotate-[15deg] blur-2xl origin-top rounded-full pointer-events-none" />
                    <div className="absolute top-2/3 right-2 w-32 h-64 bg-gradient-to-t from-blue-100/10 to-transparent rotate-[15deg] blur-2xl origin-top rounded-full pointer-events-none" />
                </div>
            </div>

            {/* Blind Spot Warning */}
            <div className="absolute top-1/2 right-12 animate-pulse hidden lg:block">
                <AlertTriangle className="w-10 h-10 text-amber-500 filter drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" fill="currentColor" fillOpacity={0.2} />
            </div>

            {/* Overlaid Children (Speedometer) - Moved Down */}
            <div className="absolute top-24 left-0 right-0 z-20 flex justify-center pointer-events-none">
                <div className="pointer-events-auto">
                    {children}
                </div>
            </div>
        </CockpitCard>
    );
};

export default LaneAssist;