import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { motion as motionTokens } from '@/data/motion';

interface ProductivityCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const ProductivityCard: React.FC<ProductivityCardProps> = ({
  children,
  className = "",
  delay = 0,
  style
}) => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative rounded-lg shadow-sm backdrop-blur-sm ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        color: theme.colors.cardForeground,
        borderWidth: '1px',
        borderStyle: 'solid',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default ProductivityCard;