import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, RefreshCcw } from 'lucide-react';
import FintechCard from './FintechCard';

const PortfolioChart = () => {
  const [range, setRange] = useState('1D');

  return (
    <FintechCard className="p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-8">
        <div>
            <h2 className="text-sm font-medium text-zinc-400">Total Balance</h2>
            <div className="flex items-baseline gap-3 mt-1">
                <span className="text-4xl font-bold text-white tracking-tight font-mono">$124,592.00</span>
                <span className="flex items-center gap-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    +$1,294 (1.2%)
                </span>
            </div>
        </div>
        <div className="flex rounded-lg border border-zinc-800 bg-zinc-900/50 p-1">
            {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map((r) => (
                <button
                    key={r}
                    onClick={() => setRange(r)}
                    className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                        range === r 
                        ? 'bg-zinc-800 text-white shadow-sm' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                    {r}
                </button>
            ))}
        </div>
      </div>

      <div className="flex-1 relative w-full min-h-[250px] lg:min-h-0">
         {/* Grid Lines */}
         <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
             <div className="border-t border-zinc-700 border-dashed w-full" />
             <div className="border-t border-zinc-700 border-dashed w-full" />
             <div className="border-t border-zinc-700 border-dashed w-full" />
             <div className="border-t border-zinc-700 border-dashed w-full" />
         </div>

         {/* Chart Path */}
         <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="fintechGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path 
                d="M0 80 C 15 85, 25 70, 35 75 C 45 80, 55 50, 65 45 C 75 40, 85 45, 100 20 L 100 100 L 0 100 Z" 
                fill="url(#fintechGradient)"
            />
            <path 
                d="M0 80 C 15 85, 25 70, 35 75 C 45 80, 55 50, 65 45 C 75 40, 85 45, 100 20" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
            />
            
            {/* Hover Dot */}
            <circle cx="65" cy="45" r="3" className="fill-emerald-400 stroke-zinc-950 stroke-2" />
         </svg>

         {/* Tooltip */}
         <div className="absolute top-[30%] left-[65%] -translate-x-1/2 -translate-y-[150%]">
             <div className="bg-zinc-800 text-white text-xs px-2 py-1 rounded border border-zinc-700 font-mono">
                 $112,400
             </div>
             <div className="w-px h-8 bg-zinc-700 mx-auto" />
         </div>
      </div>
    </FintechCard>
  );
};

export default PortfolioChart;