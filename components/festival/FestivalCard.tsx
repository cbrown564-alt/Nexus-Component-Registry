import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden ${className}`}
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