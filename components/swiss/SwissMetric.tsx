import React from 'react';

interface SwissMetricProps {
  label: string;
  value: string;
  description?: string;
  size?: 'large' | 'medium' | 'small';
}

const SwissMetric: React.FC<SwissMetricProps> = ({ 
  label, 
  value, 
  description,
  size = 'medium'
}) => {
  const sizeClasses = {
    large: 'text-8xl md:text-9xl',
    medium: 'text-6xl md:text-7xl',
    small: 'text-4xl md:text-5xl'
  };

  return (
    <div className="flex flex-col items-start h-full justify-between group">
      <div className="border-t-2 border-current pt-2 w-12 group-hover:w-full transition-[width] duration-500 mb-4" />
      
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">{label}</h4>
        <div className={`font-black tracking-tighter leading-none ${sizeClasses[size]}`}>
          {value}
        </div>
      </div>
      
      {description && (
        <p className="mt-4 text-sm font-medium max-w-[200px] leading-snug opacity-70">
          {description}
        </p>
      )}
    </div>
  );
};

export default SwissMetric;