import React from 'react';
import { motion } from 'framer-motion';

interface BlueprintCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  code?: string;
}

const BlueprintCard: React.FC<BlueprintCardProps> = ({ 
  children, 
  className = "",
  title,
  code
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`relative bg-blue-900/20 border-2 border-white/80 p-6 ${className}`}
    >
      {/* Corner Marks */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-[2px] -translate-y-[2px]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white -translate-x-[-2px] -translate-y-[2px]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-[2px] -translate-y-[-2px]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white -translate-x-[-2px] -translate-y-[-2px]" />

      {/* Title Block */}
      {(title || code) && (
        <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#1e3a8a] px-2 flex items-center gap-2 border border-white/50 text-[10px] font-code uppercase tracking-widest text-white shadow-sm">
          {code && <span className="text-cyan-400 font-bold">[{code}]</span>}
          {title && <span>{title}</span>}
        </div>
      )}

      {children}
    </motion.div>
  );
};

export default BlueprintCard;