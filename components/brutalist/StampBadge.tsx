import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';

interface StampBadgeProps {
  text?: string;
  variant?: 'approved' | 'rejected' | 'pending' | 'custom';
  rotation?: number;
  className?: string;
}

const StampBadge: React.FC<StampBadgeProps> = ({
  text = "APPROVED",
  variant = 'approved',
  rotation = -12,
  className = "",
}) => {
  const { theme } = useTheme();

  const variantStyles = {
    approved: { borderColor: '#16a34a', color: '#16a34a' }, // green-600
    rejected: { borderColor: '#dc2626', color: '#dc2626' }, // red-600
    pending: { borderColor: '#d97706', color: '#d97706' }, // amber-600
    custom: { borderColor: theme.colors.foreground, color: theme.colors.foreground }, // black -> foreground
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: rotation - 30 }}
      animate={{ scale: 1, rotate: rotation }}
      transition={{ ...motionTokens.transition.spring }}
      className={`inline-block px-6 py-2 border-4 ${className}`}
      style={{
        borderStyle: 'double',
        fontFamily: 'monospace',
        ...variantStyles[variant]
      }}
    >
      <span className="text-lg font-black uppercase tracking-[0.3em]">
        {text}
      </span>
    </motion.div>
  );
};

export default StampBadge;
