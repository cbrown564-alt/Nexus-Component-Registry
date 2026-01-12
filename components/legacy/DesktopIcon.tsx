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
        className={`h-8 w-8`}
        style={{
          color: selected ? '#1e40af' : '#ffffff',
          mixBlendMode: selected ? 'hard-light' : undefined,
          filter: selected ? undefined : 'drop-shadow(1px 1px 0px rgba(0,0,0,0.5))'
        }}
        strokeWidth={1.5}
      />
      <span className="px-1 text-center font-mono text-sm leading-tight" style={{
        backgroundColor: selected ? '#000080' : 'transparent',
        color: '#ffffff',
        border: selected ? '1px dotted white' : undefined,
        filter: selected ? undefined : 'drop-shadow(1px 1px 0px rgba(0,0,0,1))'
      }}>
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;