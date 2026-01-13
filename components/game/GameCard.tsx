import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface GameCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'primary' | 'secondary' | 'accent';
}

const GameCard: React.FC<GameCardProps> = ({
  children,
  className = "",
  delay = 0,
  variant = 'primary',
  ...props
}) => {
  const { theme } = useTheme();

  const getBorderColor = () => {
    switch (variant) {
      case 'secondary':
        return {
          borderColor: `${theme.colors.secondary}4d`,
          backgroundColor: `${theme.colors.secondary}1a`,
        };
      case 'accent':
        return {
          borderColor: `${theme.colors.accent}4d`,
          backgroundColor: `${theme.colors.accent}1a`,
        };
      default:
        return {
          borderColor: `${theme.colors.primary}4d`,
          backgroundColor: `${theme.colors.primary}1a`,
        };
    }
  };

  const styles = getBorderColor();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay }}
      className={`relative overflow-hidden rounded-2xl border backdrop-blur-md shadow-lg ${className}`}
      style={styles}
      {...props}
    >
      {/* Glossy sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GameCard;