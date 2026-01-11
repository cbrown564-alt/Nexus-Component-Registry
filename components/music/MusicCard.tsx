import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface MusicCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const MusicCard: React.FC<MusicCardProps> = ({
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
      transition={{ duration: 0.4, delay }}
      className={`group relative overflow-hidden ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        borderRadius: theme.radius === 'md' ? '0.375rem' : '0.5rem',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default MusicCard;