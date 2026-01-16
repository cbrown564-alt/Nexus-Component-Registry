import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';

interface SocialCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const SocialCard: React.FC<SocialCardProps> = ({
  children,
  className = "",
  delay = 0,
  style
}) => {
  const { currentPlaygroundTheme: theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`border ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        borderRadius: theme.radius === 'lg' ? '0.75rem' : '0.5rem',
        color: theme.colors.cardForeground,
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default SocialCard;