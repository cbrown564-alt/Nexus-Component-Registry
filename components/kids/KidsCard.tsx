import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface KidsCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  color?: string; // Keep these for specific override if needed, but default to theme
  borderColor?: string;
  style?: React.CSSProperties;
}

const KidsCard: React.FC<KidsCardProps> = ({
  children,
  className = "",
  delay = 0,
  color,
  borderColor,
  style
}) => {
  const { currentPlaygroundTheme: theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", bounce: 0.5, delay }}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: color || theme.colors.card,
        borderColor: borderColor || theme.colors.border,
        borderRadius: theme.radius === 'full' ? '2rem' : '1rem',
        borderWidth: '4px',
        boxShadow: theme.shadow === 'xl' ? '0 10px 15px -3px rgba(0, 0, 0, 0.2)' : 'none',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default KidsCard;