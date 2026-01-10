import React, { useState } from 'react';
import { Minus, Plus, Fan, Droplets } from 'lucide-react';
import NeumorphicCard from './NeumorphicCard';
import NeumorphicButton from './NeumorphicButton';

const ThermostatDial = () => {
  const [temp, setTemp] = useState(72);

  return (
    <NeumorphicCard className="flex flex-col items-center p-8 h-full justify-center">
      
      {/* Outer Dial Ring */}
      <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-[#EFEEEE] shadow-[12px_12px_24px_#D1D9E6,-12px_-12px_24px_#FFFFFF]">
        
        {/* Inner Pressed Ring (Track) */}
        <div className="flex h-48 w-48 items-center justify-center rounded-full bg-[#EFEEEE] shadow-[inset_8px_8px_16px_#D1D9E6,inset_-8px_-8px_16px_#FFFFFF]">
            
            {/* Center Floating Knob */}
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#EFEEEE] shadow-[6px_6px_12px_#D1D9E6,-6px_-6px_12px_#FFFFFF]">
                <div className="text-center">
                    <span className="block font-sans text-4xl font-bold text-slate-700">{temp}°</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Cooling</span>
                </div>
            </div>

        </div>

        {/* Indicator Dot (Calculated position roughly for visual) */}
        <div className="absolute top-8 right-8 h-4 w-4 rounded-full bg-blue-500 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]" />
        
        {/* Tick Marks (Decor) */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-20">
            <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 8" />
        </svg>
      </div>

      {/* Controls */}
      <div className="mt-10 flex w-full max-w-xs items-center justify-between gap-6">
          <NeumorphicButton 
            icon={Minus} 
            variant="circle" 
            className="h-14 w-14" 
            onClick={() => setTemp(temp - 1)}
            aria-label="Decrease temperature"
          />
          
          <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold uppercase text-slate-400">Humidity</span>
              <div className="flex items-center gap-1 text-slate-600 font-bold">
                  <Droplets className="h-4 w-4 text-blue-400" /> 45%
              </div>
          </div>

          <NeumorphicButton 
            icon={Plus} 
            variant="circle" 
            className="h-14 w-14" 
            onClick={() => setTemp(temp + 1)}
            aria-label="Increase temperature"
          />
      </div>
    </NeumorphicCard>
  );
};

export default ThermostatDial;