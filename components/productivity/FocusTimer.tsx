import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import ProductivityCard from './ProductivityCard';
import FlowButton from './FlowButton';

const FocusTimer = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <ProductivityCard className="p-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium" style={{ color: '#e4e4e7' }}>Focus Session</h3>
                <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#f59e0b' }} />
                    <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#f59e0b' }}>Deep Work</span>
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-center py-2 mx-auto">
                {/* Ring Progress with Background */}
                <svg className="absolute h-40 w-40 -rotate-90">
                    {/* Background Ring */}
                    <circle
                        cx="80" cy="80" r="77"
                        fill="none"
                        style={{ stroke: '#27272a' }}
                        strokeWidth="6"
                    />
                    {/* Progress Ring */}
                    <circle
                        cx="80" cy="80" r="77"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeDasharray="484"
                        strokeDashoffset="83"
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                        style={{ color: '#f59e0b' }}
                    />
                </svg>

                <div className="text-center z-10 h-40 w-40 flex flex-col items-center justify-center">
                    <div className="font-mono text-4xl font-bold tracking-tight mb-1" style={{ color: '#ffffff' }}>24:12</div>
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: '#71717a' }}>Remaining</div>
                </div>
            </div>

            <div className="mt-4 flex justify-center gap-3">
                <FlowButton variant="ghost" className="rounded-full p-2.5">
                    <RefreshCw className="h-4 w-4" />
                </FlowButton>
                <FlowButton
                    variant="primary"
                    onClick={() => setIsActive(!isActive)}
                    className="rounded-full px-6 py-2.5"
                >
                    {isActive ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
                    {isActive ? 'Pause' : 'Start'}
                </FlowButton>
            </div>
        </ProductivityCard>
    );
};

export default FocusTimer;