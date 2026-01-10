import React from 'react';
import CockpitCard from './CockpitCard';

interface SpeedometerProps {
    embedded?: boolean;
}

const Speedometer = ({ embedded = false }: SpeedometerProps) => {
    const speed = 64;
    const maxSpeed = 160;
    const percentage = (speed / maxSpeed) * 100;
    // Arc calculation
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - ((percentage * 0.75) / 100) * circumference; // 0.75 for 270 degree arc

    const content = (
        <div className={`w-full relative ${embedded ? 'h-full flex items-center justify-center' : 'h-full flex items-center justify-center'}`}>

            {/* RPM/Speed Ring */}
            <div className="relative h-64 w-64 flex items-center justify-center scale-90 lg:scale-100">
                <svg className="absolute h-full w-full rotate-[135deg]" viewBox="0 0 200 200">
                    {/* Background Track */}
                    <circle
                        cx="100" cy="100" r={radius}
                        fill="none" stroke={embedded ? "rgba(255,255,255,0.05)" : "#27272a"} strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference * 0.25}
                        strokeLinecap="round"
                    />
                    {/* Active Speed Track */}
                    <circle
                        cx="100" cy="100" r={radius}
                        fill="none" stroke="#3b82f6" strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset + (circumference * 0.25)}
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out"
                    />
                </svg>

                <div className="flex flex-col items-center z-10 mt-2">
                    <span className="text-8xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">{speed}</span>
                    <span className="text-sm font-bold text-zinc-500 mt-2 tracking-[0.2em]">{embedded ? '' : 'MPH'}</span>
                </div>

                {/* Gear Indicator */}
                <div className="absolute -bottom-2 flex gap-4">
                    {['P', 'R', 'N', 'D'].map((gear) => (
                        <span key={gear} className={`text-sm font-bold ${gear === 'D' ? 'text-white scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-zinc-600'}`}>
                            {gear}
                        </span>
                    ))}
                </div>
            </div>

            {/* Battery / Range - Bottom Position for Non-Embedded */}
            {!embedded && (
                <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center text-sm font-medium">
                    <div className="flex items-center gap-3 text-emerald-400">
                        <div className="h-1.5 w-10 bg-zinc-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                            <div className="h-full w-[80%] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        </div>
                        <span className="font-mono">240 mi</span>
                    </div>
                </div>
            )}
        </div>
    );

    if (embedded) {
        return content;
    }

    return (
        <CockpitCard className="h-full flex items-center justify-center relative" noPadding>
            {content}
        </CockpitCard>
    );
};

export default Speedometer;