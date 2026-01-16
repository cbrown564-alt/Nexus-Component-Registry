import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';

interface WellnessCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const WellnessCard: React.FC<WellnessCardProps> = ({
  children,
  className = "",
  delay = 0,
  style
}) => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: motionTokens.duration.normal, delay, ease: motionTokens.ease.velvet }} // Soft, organic ease
      className={`rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        color: theme.colors.cardForeground,
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)', // Soft shadow
        borderRadius: theme.radius === 'lg' ? '1.5rem' : theme.radius === 'md' ? '0.75rem' : '0',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default WellnessCard;