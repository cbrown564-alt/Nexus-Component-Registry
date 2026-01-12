import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const BrutalistCard: React.FC<BrutalistCardProps> = ({
  children,
  className = "",
  color = "" // Removed default "bg-white" literal
}) => {
  const { theme } = useTheme();

  // If no color provided, we default to theme card color via style
  const hasColorOverride = !!color;

  return (
    <motion.div
      whileHover={{
        x: 2,
        y: 2,
        boxShadow: `0px 0px 0px 0px ${theme.colors.foreground}`
      }}
      className={`relative border-[3px] p-4 transition-all duration-100 ${className} ${color}`}
      style={{
        borderColor: theme.colors.foreground, // border-black
        boxShadow: `4px 4px 0px 0px ${theme.colors.foreground}`, // shadow-[#000]
        backgroundColor: !hasColorOverride ? theme.colors.card : undefined,
        color: theme.colors.foreground
      }}
    >
      {children}
    </motion.div>
  );
};

export default BrutalistCard;