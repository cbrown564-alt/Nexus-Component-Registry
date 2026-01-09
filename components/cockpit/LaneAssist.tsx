import React from 'react';
import { CarFront, AlertTriangle } from 'lucide-react';
import CockpitCard from './CockpitCard';

const LaneAssist = () => {
  return (
    <CockpitCard className="h-full p-0 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]" />
        
        {/* Horizon Line */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-zinc-800" />

        {/* Road Perspective */}
        <div className="absolute top-1/3 bottom-0 left-1/2 -translate-x-1/2 w-3/4 flex justify-center perspective-[500px]">
            {/* Left Lane Marker */}
            <div className="absolute h-full w-2 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] blur-[1px]" 
                 style={{ transform: 'perspective(300px) rotateX(60deg) translateX(-60px) skewX(20deg)', transformOrigin: 'bottom' }} 
            />
            
            {/* Right Lane Marker */}
            <div className="absolute h-full w-2 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] blur-[1px]" 
                 style={{ transform: 'perspective(300px) rotateX(60deg) translateX(60px) skewX(-20deg)', transformOrigin: 'bottom' }} 
            />

            {/* Center Dashed Line */}
            <div className="absolute h-full w-1 border-l-2 border-dashed border-zinc-700/50" 
                 style={{ transform: 'perspective(300px) rotateX(60deg)' }} 
            />
        </div>

        {/* Other Car (Simulated) */}
        <div className="absolute top-[45%] left-[60%] bg-zinc-800 w-12 h-8 rounded-lg shadow-lg opacity-50 blur-[1px]" />

        {/* User Car */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="relative">
                <CarFront className="w-24 h-24 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]" strokeWidth={1.5} />
                {/* Headlight Beams */}
                <div className="absolute top-1/2 left-2 w-32 h-64 bg-gradient-to-t from-white/10 to-transparent -rotate-[15deg] blur-xl origin-top rounded-full pointer-events-none" />
                <div className="absolute top-1/2 right-2 w-32 h-64 bg-gradient-to-t from-white/10 to-transparent rotate-[15deg] blur-xl origin-top rounded-full pointer-events-none" />
            </div>
        </div>

        {/* Blind Spot Warning */}
        <div className="absolute top-1/2 right-4 animate-pulse">
            <AlertTriangle className="w-8 h-8 text-amber-500" fill="currentColor" fillOpacity={0.2} />
        </div>
    </CockpitCard>
  );
};

export default LaneAssist;