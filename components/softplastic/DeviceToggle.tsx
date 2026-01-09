import React, { useState } from 'react';
import NeumorphicCard from './NeumorphicCard';

interface DeviceToggleProps {
  label: string;
  icon: React.ElementType;
  initialState?: boolean;
}

const DeviceToggle: React.FC<DeviceToggleProps> = ({ label, icon: Icon, initialState = false }) => {
  const [isOn, setIsOn] = useState(initialState);

  return (
    <div 
      onClick={() => setIsOn(!isOn)}
      className="cursor-pointer group select-none"
    >
      <NeumorphicCard 
        className={`flex items-center justify-between p-5 transition-all ${!isOn ? 'hover:-translate-y-1' : ''}`}
        inset={isOn}
      >
        <div className="flex items-center gap-4">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
                isOn 
                ? 'bg-blue-500 text-white shadow-inner' 
                : 'bg-[#EFEEEE] text-slate-400 shadow-[4px_4px_8px_#D1D9E6,-4px_-4px_8px_#FFFFFF]'
            }`}>
                <Icon size={20} />
            </div>
            <span className={`font-sans font-bold text-sm transition-colors ${isOn ? 'text-slate-700' : 'text-slate-500'}`}>
                {label}
            </span>
        </div>

        {/* Toggle Switch Visual */}
        <div className={`relative h-6 w-12 rounded-full p-1 transition-colors duration-300 ${
            isOn 
            ? 'bg-blue-500 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]' 
            : 'bg-[#EFEEEE] shadow-[inset_3px_3px_6px_#D1D9E6,inset_-3px_-3px_6px_#FFFFFF]'
        }`}>
            <div className={`h-4 w-4 rounded-full bg-[#EFEEEE] shadow-sm transition-transform duration-300 ${
                isOn ? 'translate-x-6' : 'translate-x-0'
            }`} />
        </div>
      </NeumorphicCard>
    </div>
  );
};

export default DeviceToggle;