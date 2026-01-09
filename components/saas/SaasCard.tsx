import React from 'react';
import { motion } from 'framer-motion';

interface SaasCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  noPadding?: boolean;
}

const SaasCard: React.FC<SaasCardProps> = ({ 
  children, 
  className = "",
  delay = 0,
  noPadding = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-sm backdrop-blur-sm ${
        noPadding ? '' : 'p-5'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SaasCard;