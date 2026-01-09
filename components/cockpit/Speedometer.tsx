import React from 'react';
import CockpitCard from './CockpitCard';

const Speedometer = () => {
  const speed = 64;
  const maxSpeed = 160;
  const percentage = (speed / maxSpeed) * 100;
  // Arc calculation
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - ((percentage * 0.75) / 100) * circumference; // 0.75 for 270 degree arc

  return (
    <CockpitCard className="h-full flex items-center justify-center relative">
        {/* RPM/Speed Ring */}
        <div className="relative h-64 w-64 flex items-center justify-center">
            <svg className="absolute h-full w-full rotate-[135deg]" viewBox="0 0 200 200">
                {/* Background Track */}
                <circle 
                    cx="100" cy="100" r={radius} 
                    fill="none" stroke="#27272a" strokeWidth="16" 
                    strokeDasharray={circumference} 
                    strokeDashoffset={circumference * 0.25} 
                    strokeLinecap="round"
                />
                {/* Active Speed Track */}
                <circle 
                    cx="100" cy="100" r={radius} 
                    fill="none" stroke="#3b82f6" strokeWidth="16" 
                    strokeDasharray={circumference} 
                    strokeDashoffset={strokeDashoffset + (circumference * 0.25)} 
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out"
                />
            </svg>
            
            <div className="flex flex-col items-center z-10 mt-4">
                <span className="text-8xl font-black text-white tracking-tighter leading-none">{speed}</span>
                <span className="text-xl font-bold text-zinc-500 mt-1">MPH</span>
            </div>

            {/* Gear Indicator */}
            <div className="absolute bottom-8 flex gap-3">
                {['P', 'R', 'N', 'D'].map((gear) => (
                    <span key={gear} className={`text-lg font-bold ${gear === 'D' ? 'text-white scale-125' : 'text-zinc-700'}`}>
                        {gear}
                    </span>
                ))}
            </div>
        </div>
        
        {/* Battery / Range */}
        <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-sm font-medium">
            <div className="flex items-center gap-2 text-emerald-500">
                <div className="h-2 w-8 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-emerald-500" />
                </div>
                240 mi
            </div>
            <div className="text-zinc-500">Econ Mode</div>
        </div>
    </CockpitCard>
  );
};

export default Speedometer;