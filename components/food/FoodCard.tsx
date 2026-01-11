import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface FoodCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const FoodCard: React.FC<FoodCardProps> = ({
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
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`border shadow-sm ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        borderRadius: theme.radius === 'xl' ? '1rem' : '0.75rem',
        color: theme.colors.cardForeground,
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default FoodCard;