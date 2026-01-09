import React from 'react';
import { motion } from 'framer-motion';

interface MusicCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MusicCard: React.FC<MusicCardProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-xl border border-white/5 bg-zinc-900/40 backdrop-blur-md shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MusicCard;