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
    <button
      type="button"
      onClick={() => setIsOn(!isOn)}
      role="switch"
      aria-checked={isOn}
      aria-label={`Toggle ${label}`}
      className="cursor-pointer group select-none w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded-2xl"
    >
      <NeumorphicCard
        className={`flex items-center justify-between p-5 transition-all ${!isOn ? 'hover:-translate-y-1' : ''}`}
        inset={isOn}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${isOn ? 'shadow-inner' : ''}`}
            style={isOn
              ? { backgroundColor: '#3b82f6', color: '#ffffff' }
              : { backgroundColor: '#EFEEEE', color: '#94a3b8', boxShadow: '4px 4px 8px #D1D9E6,-4px -4px 8px #FFFFFF' }
            }
          >
            <Icon size={20} />
          </div>
          <span
            className="font-sans font-bold text-sm transition-colors"
            style={{ color: isOn ? '#334155' : '#64748b' }}
          >
            {label}
          </span>
        </div>

        {/* Toggle Switch Visual */}
        <div className={`relative h-6 w-12 rounded-full p-1 transition-colors duration-300 ${isOn
            ? 'bg-blue-500 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]'
            : 'bg-[#EFEEEE] shadow-[inset_3px_3px_6px_#D1D9E6,inset_-3px_-3px_6px_#FFFFFF]'
          }`}>
          <div className={`h-4 w-4 rounded-full bg-[#EFEEEE] shadow-sm transition-transform duration-300 ${isOn ? 'translate-x-6' : 'translate-x-0'
            }`} />
        </div>
      </NeumorphicCard>
    </button>
  );
};

export default DeviceToggle;