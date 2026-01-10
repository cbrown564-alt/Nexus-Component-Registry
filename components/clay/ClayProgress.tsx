import React from 'react';
import { motion } from 'framer-motion';

interface ClayProgressProps {
  value?: number;
  max?: number;
  label?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
  className?: string;
}

const ClayProgress: React.FC<ClayProgressProps> = ({
  value = 65,
  max = 100,
  label = "Progress",
  color = 'blue',
  className = "",
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses = {
    blue: 'from-blue-400 to-blue-500 shadow-blue-300/50',
    green: 'from-emerald-400 to-emerald-500 shadow-emerald-300/50',
    purple: 'from-purple-400 to-purple-500 shadow-purple-300/50',
    orange: 'from-orange-400 to-orange-500 shadow-orange-300/50',
  };

  return (
    <div className={`p-5 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-4px_-4px_12px_rgba(255,255,255,0.9)] ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-slate-600">{label}</span>
        <span className="text-sm font-bold text-slate-700">{Math.round(percentage)}%</span>
      </div>
      
      {/* Track */}
      <div className="h-4 rounded-full bg-white/50 shadow-inner overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colorClasses[color]} shadow-lg`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      
      <div className="mt-2 text-xs text-slate-500 text-right">
        {value} / {max}
      </div>
    </div>
  );
};

export default ClayProgress;
