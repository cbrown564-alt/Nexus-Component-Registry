import React from 'react';
import SaasCard from './SaasCard';

const RevenueChart = () => {
  return (
    <SaasCard className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-medium text-slate-100">Revenue Over Time</h3>
          <p className="text-xs text-slate-500">Gross volume vs Net volume</p>
        </div>
        <div className="flex rounded-lg border border-slate-800 bg-slate-900/50 p-0.5">
            {['12M', '30D', '7D', '24H'].map((range, i) => (
                <button 
                    key={range}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                        i === 1 ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'
                    }`}
                >
                    {range}
                </button>
            ))}
        </div>
      </div>

      <div className="flex-1 relative w-full min-h-[200px]">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full border-t border-slate-800/50 border-dashed" />
            ))}
        </div>

        {/* Chart */}
        <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path 
                d="M0 100 L0 65 C10 65, 10 55, 20 58 C30 61, 30 70, 40 65 C50 60, 50 40, 60 35 C70 30, 70 35, 80 25 C90 15, 90 20, 100 10 L100 100 Z" 
                fill="url(#chartGradient)" 
            />
            <path 
                d="M0 65 C10 65, 10 55, 20 58 C30 61, 30 70, 40 65 C50 60, 50 40, 60 35 C70 30, 70 35, 80 25 C90 15, 90 20, 100 10" 
                fill="none" 
                stroke="#6366f1" 
                strokeWidth="2" 
                strokeLinecap="round" 
                vectorEffect="non-scaling-stroke"
            />
            {/* Dashed secondary line */}
            <path 
                d="M0 80 C10 82, 20 75, 30 78 C40 81, 50 65, 60 70 C70 75, 80 60, 90 55 L100 50" 
                fill="none" 
                stroke="#475569" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
            />
        </svg>

        {/* Tooltip Overlay (Mock) */}
        <div className="absolute left-[60%] top-[35%] -translate-x-1/2 flex flex-col items-center">
             <div className="h-3 w-3 rounded-full border-2 border-indigo-500 bg-slate-950" />
             <div className="mt-2 rounded-lg border border-slate-700 bg-slate-800 p-2 shadow-xl">
                 <div className="text-[10px] text-slate-400">Apr 12, 2024</div>
                 <div className="text-sm font-bold text-white">$48,294</div>
             </div>
        </div>
      </div>
    </SaasCard>
  );
};

export default RevenueChart;