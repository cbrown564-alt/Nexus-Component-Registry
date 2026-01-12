import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme } = useTheme();
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses = {
    blue: 'from-blue-400 to-blue-500 shadow-blue-300/50',
    green: 'from-emerald-400 to-emerald-500 shadow-emerald-300/50',
    purple: 'from-purple-400 to-purple-500 shadow-purple-300/50',
    orange: 'from-orange-400 to-orange-500 shadow-orange-300/50',
  };

  return (
    <div
      className={`p-5 rounded-3xl ${className}`}
      style={{
        background: `linear-gradient(to bottom right, ${theme.colors.muted || '#f1f5f9'}, ${theme.colors.card || '#f8fafc'})`,
        boxShadow: `8px 8px 16px ${theme.colors.border ? theme.colors.border + '1A' : 'rgba(0,0,0,0.1)'}, -4px -4px 12px ${theme.colors.background === '#000000' ? '#333333' : 'rgba(255,255,255,0.9)'}`
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-sm font-semibold"
          style={{ color: theme.colors.mutedForeground }}
        >
          {label}
        </span>
        <span
          className="text-sm font-bold"
          style={{ color: theme.colors.foreground }}
        >
          {Math.round(percentage)}%
        </span>
      </div>

      {/* Track */}
      <div
        className="h-4 rounded-full shadow-inner overflow-hidden"
        style={{ backgroundColor: theme.colors.background ? `${theme.colors.background}80` : 'rgba(255,255,255,0.5)' }}
      >
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colorClasses[color]} shadow-lg`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      <div
        className="mt-2 text-xs text-right"
        style={{ color: theme.colors.mutedForeground }}
      >
        {value} / {max}
      </div>
    </div>
  );
};

export default ClayProgress;
