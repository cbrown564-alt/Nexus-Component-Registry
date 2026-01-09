import React from 'react';
import { motion } from 'framer-motion';

interface FintechCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FintechCard: React.FC<FintechCardProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FintechCard;