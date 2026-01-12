import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

const DiffViewer = () => {
  return (
    <div className="rounded-xl border overflow-hidden shadow-sm" style={{ borderColor: '#e7e5e4', backgroundColor: '#ffffff' }}>
      <div className="flex items-center justify-between border-b px-4 py-2" style={{ borderColor: '#e7e5e4', backgroundColor: '#fafaf9' }}>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase" style={{ color: '#78716c' }}>Version History</span>
          <div className="flex items-center gap-2">
            <span className="rounded px-2 py-0.5 text-xs font-mono font-medium" style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}>v2.1 (Current)</span>
            <ArrowRightLeft className="h-3 w-3" style={{ color: '#a8a29e' }} />
            <span className="rounded px-2 py-0.5 text-xs font-mono font-medium" style={{ backgroundColor: '#e7e5e4', color: '#57534e' }}>v2.0 (Original)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x min-h-[150px]" style={{ borderColor: '#e7e5e4' }}>
        {/* Left Side (Old) */}
        <div className="p-4 text-xs font-mono leading-relaxed" style={{ backgroundColor: 'rgba(250, 250, 249, 0.5)', color: '#78716c' }}>
          <p>
            12.1 The Service Provider shall ensure 99.0% uptime availability during business hours.
          </p>
          <p className="mt-2 -mx-1 px-1 line-through decoration-2" style={{ backgroundColor: 'rgba(254, 226, 226, 0.5)', color: '#991b1b', textDecorationColor: '#f87171' }}>
            Penalties for downtime shall not exceed 5% of monthly fees.
          </p>
        </div>

        {/* Right Side (New) */}
        <div className="p-4 bg-white text-xs font-mono leading-relaxed" style={{ color: '#292524' }}>
          <p>
            12.1 The Service Provider shall ensure <span className="font-bold px-1" style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>99.9%</span> uptime availability <span className="font-bold px-1" style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>24/7</span>.
          </p>
          <p className="mt-2 -mx-1 px-1" style={{ backgroundColor: 'rgba(220, 252, 231, 0.5)', color: '#166534' }}>
            Penalties for downtime shall follow the SLA Credit Schedule attached in Exhibit B.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiffViewer;