import React from 'react';
import { motion } from 'framer-motion';

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
  const variantStyles = {
    approved: 'border-green-600 text-green-600',
    rejected: 'border-red-600 text-red-600',
    pending: 'border-amber-600 text-amber-600',
    custom: 'border-black text-black',
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: rotation - 30 }}
      animate={{ scale: 1, rotate: rotation }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`inline-block px-6 py-2 border-4 ${variantStyles[variant]} ${className}`}
      style={{
        borderStyle: 'double',
        fontFamily: 'monospace',
      }}
    >
      <span className="text-lg font-black uppercase tracking-[0.3em]">
        {text}
      </span>
    </motion.div>
  );
};

export default StampBadge;
