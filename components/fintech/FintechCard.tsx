import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface FintechCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const FintechCard: React.FC<FintechCardProps> = ({
  children,
  className = "",
  delay = 0,
  style
}) => {
  const { currentPlaygroundTheme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden ${className}`}
      style={{
        backgroundColor: currentPlaygroundTheme.colors.card,
        borderColor: currentPlaygroundTheme.colors.border,
        color: currentPlaygroundTheme.colors.cardForeground,
        borderRadius: currentPlaygroundTheme.radius === 'none' ? '0' :
          currentPlaygroundTheme.radius === 'sm' ? '0.375rem' :
            currentPlaygroundTheme.radius === 'md' ? '0.5rem' :
              currentPlaygroundTheme.radius === 'lg' ? '0.75rem' : '1rem',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default FintechCard;