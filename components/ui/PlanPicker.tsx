import React, { useState } from 'react';
import { Check } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const PlanPicker = () => {
    const [selected, setSelected] = useState('pro');

    return (
        <SpotlightCard className="p-6">
            <h3 className="mb-4 text-sm font-medium text-zinc-100">Subscription Plan</h3>
            <div className="space-y-3">
                <div 
                    onClick={() => setSelected('starter')}
                    className={`relative flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200 ${
                        selected === 'starter' 
                        ? 'border-blue-500/50 bg-blue-500/10' 
                        : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <div className={`flex h-4 w-4 items-center justify-center rounded-full border ${selected === 'starter' ? 'border-blue-500 bg-blue-500' : 'border-zinc-600'}`}>
                             {selected === 'starter' && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                            <div className={`text-sm font-medium ${selected === 'starter' ? 'text-blue-100' : 'text-zinc-300'}`}>Starter</div>
                            <div className="text-xs text-zinc-500">$0/mo</div>
                        </div>
                    </div>
                </div>

                <div 
                    onClick={() => setSelected('pro')}
                    className={`relative flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200 ${
                        selected === 'pro' 
                        ? 'border-blue-500/50 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                        : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <div className={`flex h-4 w-4 items-center justify-center rounded-full border ${selected === 'pro' ? 'border-blue-500 bg-blue-500' : 'border-zinc-600'}`}>
                             {selected === 'pro' && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                            <div className={`text-sm font-medium ${selected === 'pro' ? 'text-blue-100' : 'text-zinc-300'}`}>Professional</div>
                            <div className="text-xs text-zinc-500">$29/mo</div>
                        </div>
                    </div>
                    {selected === 'pro' && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-medium text-blue-300">
                            Current
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-zinc-500">
                <Check className="h-3 w-3 text-emerald-500" />
                <span>Next billing date: November 1st</span>
            </div>
        </SpotlightCard>
    );
};
export default PlanPicker;