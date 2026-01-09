import React from 'react';
import { motion } from 'framer-motion';

interface GameCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'primary' | 'secondary' | 'accent';
}

const GameCard: React.FC<GameCardProps> = ({ 
  children, 
  className = "",
  delay = 0,
  variant = 'primary'
}) => {
  const getBorderColor = () => {
      switch(variant) {
          case 'secondary': return 'border-cyan-500/30 bg-cyan-950/30';
          case 'accent': return 'border-amber-500/30 bg-amber-950/30';
          default: return 'border-fuchsia-500/30 bg-fuchsia-950/30';
      }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.6, delay }}
      className={`relative overflow-hidden rounded-2xl border backdrop-blur-md shadow-lg ${getBorderColor()} ${className}`}
    >
      {/* Glossy sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GameCard;