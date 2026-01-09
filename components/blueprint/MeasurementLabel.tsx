import React from 'react';

interface MeasurementLabelProps {
  value: string;
  width?: string;
  orientation?: 'horizontal' | 'vertical';
}

const MeasurementLabel: React.FC<MeasurementLabelProps> = ({ 
  value, 
  width = "100%",
  orientation = 'horizontal'
}) => {
  if (orientation === 'vertical') {
    return (
      <div className="flex h-full flex-col items-center w-8" style={{ height: width }}>
        <div className="w-2 border-t border-white/50" />
        <div className="h-full border-l border-white/50 relative flex items-center justify-center">
            <span className="bg-[#1e3a8a] px-1 text-[10px] font-arch text-white -rotate-90 whitespace-nowrap">{value}</span>
        </div>
        <div className="w-2 border-t border-white/50" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full" style={{ width }}>
      <div className="flex items-end w-full h-3">
        <div className="h-2 border-l border-white/50" />
        <div className="flex-1 border-b border-white/50 relative -mb-[1px]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1e3a8a] px-1 text-[10px] font-arch text-white">
                {value}
            </div>
        </div>
        <div className="h-2 border-l border-white/50" />
      </div>
    </div>
  );
};

export default MeasurementLabel;