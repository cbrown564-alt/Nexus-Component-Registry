import React from 'react';
import { motion } from 'framer-motion';

interface FintechCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

import { useTheme } from '@/context/ThemeContext';

const FintechCard: React.FC<FintechCardProps> = ({
  children,
  className = "",
  delay = 0
}) => {
  const { currentPlaygroundTheme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-xl border shadow-sm ${className}`}
      style={{
        backgroundColor: currentPlaygroundTheme.colors.card,
        borderColor: currentPlaygroundTheme.colors.border,
        color: currentPlaygroundTheme.colors.cardForeground,
        borderRadius: currentPlaygroundTheme.radius === 'none' ? '0' :
          currentPlaygroundTheme.radius === 'sm' ? '0.375rem' :
            currentPlaygroundTheme.radius === 'md' ? '0.5rem' :
              currentPlaygroundTheme.radius === 'lg' ? '0.75rem' : '1rem'
      }}
    >
      {children}
    </motion.div>
  );
};

export default FintechCard;