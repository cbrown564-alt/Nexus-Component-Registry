import React from 'react';
import { motion } from 'framer-motion';

interface ClayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const ClayButton: React.FC<ClayButtonProps> = ({ 
  children, 
  className = "", 
  variant = 'primary',
  ...props 
}) => {
  const getStyles = () => {
    switch(variant) {
      case 'primary': return 'bg-sky-400 text-white shadow-sky-200';
      case 'secondary': return 'bg-white text-slate-600 shadow-slate-200';
      case 'danger': return 'bg-rose-400 text-white shadow-rose-200';
      default: return 'bg-sky-400 text-white shadow-sky-200';
    }
  }

  // Base base color mapping for custom shadows if needed, 
  // but for simplicity we'll use a generic formula in style or tailwind classes where possible.
  // Here we use inline styles for the complex clay shadow.
  
  const getShadowColor = () => {
      switch(variant) {
          case 'primary': return '#7dd3fc'; // sky-300
          case 'secondary': return '#cbd5e1'; // slate-300
          case 'danger': return '#fda4af'; // rose-300
          default: return '#7dd3fc';
      }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-2xl px-6 py-3 font-bold tracking-wide transition-all ${getStyles()} ${className}`}
      style={{
        boxShadow: `
          8px 8px 16px ${getShadowColor()}aa, 
          -8px -8px 16px #ffffff, 
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