import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

const DiffViewer = () => {
  return (
    <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-4 py-2">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-stone-500 uppercase">Version History</span>
          <div className="flex items-center gap-2">
            <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-mono font-medium text-red-700">v2.1 (Current)</span>
            <ArrowRightLeft className="h-3 w-3 text-stone-400" />
            <span className="rounded bg-stone-200 px-2 py-0.5 text-xs font-mono font-medium text-stone-600">v2.0 (Original)</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 divide-x divide-stone-200 min-h-[150px]">
        {/* Left Side (Old) */}
        <div className="p-4 bg-stone-50/50 text-xs font-mono leading-relaxed text-stone-500">
          <p>
            12.1 The Service Provider shall ensure 99.0% uptime availability during business hours.
          </p>
          <p className="mt-2 bg-red-100/50 -mx-1 px-1 text-red-800 line-through decoration-red-400">
            Penalties for downtime shall not exceed 5% of monthly fees.
          </p>
        </div>

        {/* Right Side (New) */}
        <div className="p-4 bg-white text-xs font-mono leading-relaxed text-stone-800">
          <p>
            12.1 The Service Provider shall ensure <span className="bg-blue-100 text-blue-800 font-bold px-1">99.9%</span> uptime availability <span className="bg-blue-100 text-blue-800 font-bold px-1">24/7</span>.
          </p>
          <p className="mt-2 bg-green-100/50 -mx-1 px-1 text-green-800">
            Penalties for downtime shall follow the SLA Credit Schedule attached in Exhibit B.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiffViewer;