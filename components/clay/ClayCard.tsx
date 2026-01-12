import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ClayCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // Tailwind bg class
  shadowColor?: string; // Hex code for shadow base
  delay?: number;
}

const ClayCard: React.FC<ClayCardProps> = ({
  children,
  className = "",
  color = "",
  shadowColor = "",
  delay = 0
}) => {
  const { theme } = useTheme();

  // Defaults
  const appliedColor = color || theme.colors.card;
  const appliedShadowColor = shadowColor || (theme.colors.border || "#cad4e0");

  const isColorClass = color.startsWith('bg-');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay
      }}
      className={`relative rounded-[2rem] p-6 ${isColorClass ? appliedColor : ''} ${className}`}
      style={{
        backgroundColor: !isColorClass ? appliedColor : undefined,
        boxShadow: `
          12px 12px 24px ${appliedShadowColor}, 
          -12px -12px 24px ${theme.colors.background === '#000000' ? '#333333' : '#ffffff'}, 
          inset 4px 4px 8px rgba(255,255,255,0.5), 
          inset -4px -4px 8px rgba(0,0,0,0.05)
        `
      }}
    >
      {children}
    </motion.div>
  );
};

export default ClayCard;