import React from 'react';
import { Activity, Heart, Wind } from 'lucide-react';
import SciFiCard from './SciFiCard';

const SineWave = ({ color = "#06b6d4", speed = "2s" }) => (
  <div className="flex items-end h-16 gap-0.5 overflow-hidden">
    {[...Array(40)].map((_, i) => (
      <div 
        key={i}
        className="w-1 bg-cyan-500/20"
        style={{
            height: `${20 + Math.random() * 60}%`,
            backgroundColor: color,
            opacity: 0.6,
            animation: `pulseHeight ${speed} infinite ease-in-out`
        }}
      />
    ))}
    <style>{`
      @keyframes pulseHeight {
        0%, 100% { transform: scaleY(0.5); }
        50% { transform: scaleY(1); }
      }
    `}</style>
  </div>
);

const VitalsMonitor = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SciFiCard className="flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
            <div className="text-xs font-mono text-cyan-500 uppercase">Heart Rate</div>
            <Heart className="h-4 w-4 text-cyan-400 animate-pulse" />
        </div>
        <div className="flex items-end gap-2">
            <span className="text-4xl font-mono font-bold text-white text-shadow-glow">72</span>
            <span className="text-xs font-mono text-cyan-600 mb-1">BPM</span>
        </div>
        <div className="mt-2 h-12 border-t border-cyan-900/30 relative overflow-hidden">
             <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
                 <path d="M0 20 L10 20 L15 5 L20 35 L25 20 L35 20 L40 5 L45 35 L50 20 L100 20" fill="none" stroke="#06b6d4" strokeWidth="2" className="animate-[dash_2s_linear_infinite]" strokeDasharray="100" />
             </svg>
        </div>
      </SciFiCard>

      <SciFiCard className="flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
            <div className="text-xs font-mono text-teal-500 uppercase">Oxygen (SpO2)</div>
            <Activity className="h-4 w-4 text-teal-400" />
        </div>
        <div className="flex items-end gap-2">
            <span className="text-4xl font-mono font-bold text-white text-shadow-glow">98</span>
            <span className="text-xs font-mono text-teal-600 mb-1">%</span>
        </div>
        <div className="mt-2 h-12 border-t border-teal-900/30 pt-2">
             <div className="flex gap-1 h-full items-end">
                 {[...Array(15)].map((_,i) => (
                     <div key={i} className="flex-1 bg-teal-500/40" style={{ height: `${80 + Math.random() * 20}%` }} />
                 ))}
             </div>
        </div>
      </SciFiCard>

      <SciFiCard className="flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
            <div className="text-xs font-mono text-indigo-400 uppercase">Respiration</div>
            <Wind className="h-4 w-4 text-indigo-400" />
        </div>
        <div className="flex items-end gap-2">
            <span className="text-4xl font-mono font-bold text-white text-shadow-glow">16</span>
            <span className="text-xs font-mono text-indigo-600 mb-1">RPM</span>
        </div>
        <div className="mt-2 h-12 border-t border-indigo-900/30 relative">
             <svg className="absolute bottom-0 w-full h-full">
                 <path d="M0 25 Q 25 5, 50 25 T 100 25" fill="none" stroke="#818cf8" strokeWidth="2" />
             </svg>
        </div>
      </SciFiCard>
    </div>
  );
};

export default VitalsMonitor;