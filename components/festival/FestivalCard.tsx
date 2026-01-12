import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface FestivalCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  gradient?: string;
}

const FestivalCard: React.FC<FestivalCardProps> = ({
  children,
  className = "",
  delay = 0,
  gradient = "from-fuchsia-500 via-purple-500 to-cyan-500"
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-3xl backdrop-blur-xl border overflow-hidden ${className}`}
      style={{
        backgroundColor: theme.colors.card ? `${theme.colors.card}66` : 'rgba(0,0,0,0.4)', // card/40
        borderColor: theme.colors.border ? `${theme.colors.border}1A` : 'rgba(255,255,255,0.1)' // border/10
      }}
    >
      {/* Top Gradient Border */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient} opacity-80`} />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* Ambient Glow */}
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradient} rounded-full blur-[80px] opacity-20 pointer-events-none`} />
    </motion.div>
  );
};

export default FestivalCard;