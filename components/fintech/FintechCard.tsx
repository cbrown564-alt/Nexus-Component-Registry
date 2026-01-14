import React from 'react';
import { motion } from 'framer-motion';
import { motion as tokens } from '@/data/motion';
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
      transition={{ ...tokens.transition.card, delay }}
      className={`rounded-xl overflow-hidden ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)',
        color: 'var(--card-foreground)',
        borderRadius: 'var(--radius)',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default FintechCard;