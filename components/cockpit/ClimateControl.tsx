import React, { useState } from 'react';
import { Minus, Plus, Fan } from 'lucide-react';
import CockpitCard from './CockpitCard';
import { useTheme } from '@/context/ThemeContext';

interface ClimateControlProps {
    temperature?: number;
}

const ClimateControl = ({ temperature = 72 }: ClimateControlProps) => {
    const [temp, setTemp] = useState(temperature);
    const { theme } = useTheme();

    return (
        <CockpitCard className="flex flex-col justify-between" label="Climate">
            <div className="flex items-center justify-between gap-4 mt-2">
                <button
                    onClick={() => setTemp(t => t - 1)}
                    aria-label="Decrease temperature"
                    className="h-12 w-12 rounded-xl border-2 flex items-center justify-center text-blue-400 hover:border-blue-400 hover:bg-blue-900/20 active:scale-95 transition-all shrink-0"
                    style={{ borderColor: theme.colors.border }}
                >
                    <Minus className="w-6 h-6" />
                </button>

                <div className="text-center flex-1">
                    <span
                        className="block text-5xl font-black tracking-tighter"
                        style={{ color: theme.colors.foreground }}
                    >
                        {temp}°
                    </span>
                    <div
                        className="flex items-center justify-center gap-2 mt-1 font-bold text-xs uppercase tracking-wider"
                        style={{ color: theme.colors.mutedForeground }}
                    >
                        <Fan className="w-3 h-3 animate-[spin_3s_linear_infinite]" /> Auto
                    </div>
                </div>

                <button
                    onClick={() => setTemp(t => t + 1)}
                    aria-label="Increase temperature"
                    className="h-12 w-12 rounded-xl border-2 flex items-center justify-center text-red-400 hover:border-red-400 hover:bg-red-900/20 active:scale-95 transition-all shrink-0"
                    style={{ borderColor: theme.colors.border }}
                >
                    <Plus className="w-6 h-6" />
                </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                    className="py-4 rounded-xl font-bold uppercase text-sm tracking-wider active:opacity-80"
                    style={{
                        backgroundColor: theme.colors.secondary,
                        color: theme.colors.foreground
                    }}
                >
                    AC Max
                </button>
                <button
                    className="py-4 rounded-xl border-2 font-bold uppercase text-sm tracking-wider active:opacity-80"
                    style={{
                        borderColor: theme.colors.border,
                        color: theme.colors.mutedForeground
                    }}
                >
                    Recirc
                </button>
            </div>
        </CockpitCard>
    );
};

export default ClimateControl;