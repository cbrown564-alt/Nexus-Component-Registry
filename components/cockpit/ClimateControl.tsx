import React, { useState } from 'react';
import { Minus, Plus, Fan } from 'lucide-react';
import CockpitCard from './CockpitCard';

interface ClimateControlProps {
    temperature?: number;
}

const ClimateControl = ({ temperature = 72 }: ClimateControlProps) => {
    const [temp, setTemp] = useState(temperature);

    return (
        <CockpitCard className="flex flex-col justify-between" label="Climate">
            <div className="flex items-center justify-between">
                <button
                    onClick={() => setTemp(t => t - 1)}
                    className="h-16 w-16 rounded-xl border-2 border-zinc-700 flex items-center justify-center text-blue-400 hover:border-blue-400 hover:bg-blue-900/20 active:scale-95 transition-all"
                >
                    <Minus className="w-8 h-8" />
                </button>

                <div className="text-center">
                    <span className="block text-5xl font-black text-white tracking-tighter">{temp}°</span>
                    <div className="flex items-center justify-center gap-2 text-zinc-500 mt-1 font-bold text-xs uppercase tracking-wider">
                        <Fan className="w-3 h-3 animate-[spin_3s_linear_infinite]" /> Auto
                    </div>
                </div>

                <button
                    onClick={() => setTemp(t => t + 1)}
                    className="h-16 w-16 rounded-xl border-2 border-zinc-700 flex items-center justify-center text-red-400 hover:border-red-400 hover:bg-red-900/20 active:scale-95 transition-all"
                >
                    <Plus className="w-8 h-8" />
                </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="py-4 rounded-xl bg-zinc-800 font-bold text-white uppercase text-sm tracking-wider active:bg-zinc-700">AC Max</button>
                <button className="py-4 rounded-xl border-2 border-zinc-700 text-zinc-400 font-bold uppercase text-sm tracking-wider active:bg-zinc-800">Recirc</button>
            </div>
        </CockpitCard>
    );
};

export default ClimateControl;