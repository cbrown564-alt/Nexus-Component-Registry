import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface LegacyWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  onClose?: () => void;
}

const LegacyWindow: React.FC<LegacyWindowProps> = ({
  title,
  children,
  className = "",
  isActive = true,
  onClose
}) => {
  return (
    <div className={`flex flex-col bg-[#c0c0c0] p-1 shadow-[1px_1px_0px_#000000,inset_1px_1px_#ffffff,inset_-1px_-1px_#808080] ${className}`}>
      {/* Title Bar */}
      <div className="flex items-center justify-between px-1 py-1 mb-1" style={{
        backgroundColor: isActive ? '#000080' : '#808080',
        color: isActive ? '#ffffff' : '#c0c0c0'
      }}>
        <div className="flex items-center gap-2 pl-1">
          <span className="font-mono text-lg font-bold tracking-wide">{title}</span>
        </div>
        <div className="flex gap-1">
          <button
            aria-label="Minimize window"
            className="flex h-4 w-4 items-center justify-center bg-[#c0c0c0] shadow-[inset_1px_1px_#ffffff,inset_-1px_-1px_#000000] active:shadow-[inset_1px_1px_#000000]"
          >
            <Minus className="h-3 w-3" strokeWidth={3} style={{ color: '#000000' }} />
          </button>
          <button
            aria-label="Maximize window"
            className="flex h-4 w-4 items-center justify-center bg-[#c0c0c0] shadow-[inset_1px_1px_#ffffff,inset_-1px_-1px_#000000] active:shadow-[inset_1px_1px_#000000]"
          >
            <Square className="h-2 w-2 fill-transparent stroke-[3px]" style={{ color: '#000000' }} />
          </button>
          <button
            onClick={onClose}
            aria-label="Close window"
            className="flex h-4 w-4 items-center justify-center bg-[#c0c0c0] shadow-[inset_1px_1px_#ffffff,inset_-1px_-1px_#000000] active:shadow-[inset_1px_1px_#000000]"
          >
            <X className="h-3 w-3" strokeWidth={3} style={{ color: '#000000' }} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 font-mono" style={{ color: '#000000' }}>
        {children}
      </div>
    </div>
  );
};

export default LegacyWindow;