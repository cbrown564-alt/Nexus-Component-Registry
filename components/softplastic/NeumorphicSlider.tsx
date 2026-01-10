import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NeumorphicSliderProps {
  min?: number;
  max?: number;
  initialValue?: number;
  label?: string;
  unit?: string;
  onChange?: (value: number) => void;
  className?: string;
}

const NeumorphicSlider: React.FC<NeumorphicSliderProps> = ({
  min = 0,
  max = 100,
  initialValue = 50,
  label = "Brightness",
  unit = "%",
  onChange,
  className = "",
}) => {
  const [value, setValue] = useState(initialValue);
  const percentage = ((value - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={`p-6 rounded-3xl bg-[#e0e5ec] ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-slate-600">{label}</span>
        <span className="text-lg font-bold text-slate-700">
          {value}{unit}
        </span>
      </div>
      
      <div className="relative">
        {/* Track - inset neumorphic */}
        <div 
          className="h-3 rounded-full"
          style={{
            background: '#e0e5ec',
            boxShadow: 'inset 4px 4px 8px #b8bec5, inset -4px -4px 8px #ffffff',
          }}
        >
          {/* Fill */}
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{ width: `${percentage}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        {/* Thumb */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full cursor-pointer"
          style={{
            left: `calc(${percentage}% - 12px)`,
            background: '#e0e5ec',
            boxShadow: '4px 4px 8px #b8bec5, -4px -4px 8px #ffffff',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
        
        {/* Hidden input for accessibility */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NeumorphicSlider;
