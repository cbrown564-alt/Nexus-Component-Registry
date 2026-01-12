import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ClayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const ClayButton: React.FC<ClayButtonProps> = ({
  children,
  className = "",
  variant = 'primary',
  ...props
}) => {
  const { theme } = useTheme();

  const getStyles = () => {
    switch (variant) {
      case 'primary': return 'bg-sky-400 shadow-sky-200';
      case 'secondary': return 'shadow-slate-200';
      case 'danger': return 'bg-rose-400 shadow-rose-200';
      default: return 'bg-sky-400 shadow-sky-200';
    }
  }

  const getShadowColor = () => {
    switch (variant) {
      case 'primary': return '#7dd3fc';
      case 'secondary': return theme.colors.border ? theme.colors.border : '#cbd5e1';
      case 'danger': return '#fda4af';
      default: return '#7dd3fc';
    }
  }

  const getVariantTextColor = () => {
    switch (variant) {
      case 'primary': return '#ffffff';
      case 'secondary': return theme.colors.mutedForeground;
      case 'danger': return '#ffffff';
      default: return '#ffffff';
    }
  }

  const getBaseBgColor = () => {
    if (variant === 'secondary') return theme.colors.card;
    return undefined;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-2xl px-6 py-3 font-bold tracking-wide transition-all ${getStyles()} ${className}`}
      style={{
        color: getVariantTextColor(),
        backgroundColor: getBaseBgColor(),
        boxShadow: `
          8px 8px 16px ${getShadowColor()}aa, 
          -8px -8px 16px ${theme.colors.background === '#ffffff' ? '#ffffff' : theme.colors.card}, 
          inset 2px 2px 4px rgba(255,255,255,0.4), 
          inset -2px -2px 4px rgba(0,0,0,0.1)
        `
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ClayButton;