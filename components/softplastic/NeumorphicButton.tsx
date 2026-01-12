import React from 'react';
import { motion } from 'framer-motion';

interface NeumorphicButtonProps {
  icon?: React.ElementType;
  label?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: 'circle' | 'pill' | 'square';
  'aria-label'?: string;
  style?: React.CSSProperties;
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  icon: Icon,
  label,
  active = false,
  className = "",
  variant = 'square',
  'aria-label': ariaLabel,
  style,
  onClick,
  ...props
}) => {
  const shapeClass = variant === 'circle' ? 'rounded-full' : variant === 'pill' ? 'rounded-full' : 'rounded-2xl';

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={`group relative flex items-center justify-center transition-all duration-200 outline-none select-none ${shapeClass} ${active
        ? 'bg-[#EFEEEE] shadow-[inset_5px_5px_10px_#D1D9E6,inset_-5px_-5px_10px_#FFFFFF]'
        : 'bg-[#EFEEEE] shadow-[8px_8px_16px_#D1D9E6,-8px_-8px_16px_#FFFFFF] hover:shadow-[5px_5px_10px_#D1D9E6,-5px_-5px_10px_#FFFFFF] active:shadow-[inset_4px_4px_8px_#D1D9E6,inset_-4px_-4px_8px_#FFFFFF] active:scale-[0.98]'
        } ${className}`}
      style={style}
    >
      <div className={`flex flex-col items-center gap-2 ${variant === 'pill' ? 'flex-row px-6 py-3' : 'p-4'}`}>
        {Icon && (
          <Icon
            className="transition-colors duration-300"
            style={{ color: active ? '#3b82f6' : '#94a3b8', fill: active ? 'rgba(59,130,246,0.1)' : undefined }}
            size={24}
            strokeWidth={2.5}
          />
        )}
        {label && (
          <span
            className="font-sans text-sm font-bold tracking-wide transition-colors"
            style={{ color: active ? '#334155' : '#94a3b8' }}
          >
            {label}
          </span>
        )}
      </div>

      {/* Active Indicator Dot */}
      {active && variant !== 'pill' && (
        <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
      )}
    </button>
  );
};

export default NeumorphicButton;