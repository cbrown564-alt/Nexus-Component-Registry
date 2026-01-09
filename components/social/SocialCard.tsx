import React from 'react';
import { motion } from 'framer-motion';

interface SocialCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SocialCard: React.FC<SocialCardProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SocialCard;