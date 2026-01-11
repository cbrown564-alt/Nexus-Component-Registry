import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface EducationCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  featured?: boolean;
  style?: React.CSSProperties;
}

const EducationCard: React.FC<EducationCardProps> = ({
  children,
  className = "",
  delay = 0,
  featured = false,
  style
}) => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        backgroundColor: featured ? theme.colors.primary : theme.colors.card, // Primary for featured
        color: featured ? theme.colors.primaryForeground : theme.colors.cardForeground,
        borderColor: featured ? theme.colors.primary : theme.colors.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        boxShadow: featured ? `0 10px 15px -3px ${theme.colors.primary}40` : theme.shadow === 'none' ? 'none' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderRadius: theme.radius === 'lg' ? '1rem' : theme.radius === 'md' ? '0.75rem' : '0',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default EducationCard;