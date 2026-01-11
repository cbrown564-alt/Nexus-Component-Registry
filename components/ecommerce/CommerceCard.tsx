import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface CommerceCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const CommerceCard: React.FC<CommerceCardProps> = ({
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
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        borderWidth: theme.radius === 'none' ? '1px' : '0', // Border for square, shadow for round usually
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default CommerceCard;