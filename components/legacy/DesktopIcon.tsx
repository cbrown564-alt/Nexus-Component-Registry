import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  selected?: boolean;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, label, onClick, selected }) => {
  return (
    <div 
      onClick={onClick}
      className="flex w-20 flex-col items-center gap-1 cursor-pointer group"
    >
      <Icon 
        className={`h-8 w-8 ${selected ? 'text-blue-800 mix-blend-hard-light' : 'text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)]'}`} 
        strokeWidth={1.5}
      />
      <span className={`px-1 text-center font-mono text-sm leading-tight ${
        selected 
          ? 'bg-[#000080] text-white border border-dotted border-white' 
          : 'text-white bg-transparent drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]'
      }`}>
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;