import React from 'react';
import { TrendingUp } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const StatsCard = () => (
  <SpotlightCard className="p-6">
    <div className="flex items-start justify-between">
      <div>
        <div className="text-sm font-medium text-zinc-500">Global Requests</div>
        <div className="mt-2 text-3xl font-bold text-white tracking-tight">14.2M</div>
      </div>
      <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
        <TrendingUp className="h-3 w-3" />
        +12.5%
      </div>
    </div>
    
    <div className="mt-8 h-16 w-full relative">
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-10">
        <div className="h-px w-full bg-zinc-500" />
        <div className="h-px w-full bg-zinc-500" />
        <div className="h-px w-full bg-zinc-500" />
      </div>

      {/* SVG Sparkline */}
      <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
        <defs>
          <linearGradient id="sparklineGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path
           d="M0 40 L10 32 L20 36 L30 20 L40 25 L50 15 L60 18 L70 5 L80 12 L90 8 L100 0 V 40 H 0 Z"
           fill="url(#sparklineGradient)"
        />
        <path
          d="M0 40 L10 32 L20 36 L30 20 L40 25 L50 15 L60 18 L70 5 L80 12 L90 8 L100 0"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </SpotlightCard>
);
export default StatsCard;