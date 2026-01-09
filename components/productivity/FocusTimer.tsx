import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import ProductivityCard from './ProductivityCard';
import FlowButton from './FlowButton';

const FocusTimer = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <ProductivityCard className="p-6">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-medium text-zinc-200">Focus Session</h3>
                <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[10px] font-medium text-amber-500 uppercase tracking-wider">Deep Work</span>
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-center py-4">
                {/* Ring Background */}
                <div className="absolute h-48 w-48 rounded-full border-4 border-zinc-800" />

                {/* Ring Progress (Static representation for 25:00) */}
                <svg className="absolute h-48 w-48 -rotate-90">
                    <circle
                        cx="96" cy="96" r="94"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeDasharray="590"
                        strokeDashoffset="100"
                        className="text-amber-500 transition-all duration-1000"
                    />
                </svg>

                <div className="text-center z-10">
                    <div className="font-mono text-5xl font-bold tracking-tight text-white mb-2">24:12</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-widest">Minutes Remaining</div>
                </div>
            </div>

            <div className="mt-10 flex justify-center gap-4">
                <FlowButton variant="ghost" className="rounded-full p-3">
                    <RefreshCw className="h-5 w-5" />
                </FlowButton>
                <FlowButton
                    variant="primary"
                    onClick={() => setIsActive(!isActive)}
                    className="rounded-full px-8 py-3"
                >
                    {isActive ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
                    {isActive ? 'Pause' : 'Start Focus'}
                </FlowButton>
            </div>
        </ProductivityCard>
    );
};

export default FocusTimer;