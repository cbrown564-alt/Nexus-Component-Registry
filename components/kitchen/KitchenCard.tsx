import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface KitchenCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const KitchenCard: React.FC<KitchenCardProps> = ({
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
      className={`shadow-sm ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        borderRadius: theme.radius === 'lg' ? '0.5rem' : '0.25rem',
        color: theme.colors.cardForeground,
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default KitchenCard;