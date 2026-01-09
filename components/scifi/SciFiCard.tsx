import React from 'react';
import { motion } from 'framer-motion';

interface SciFiCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  delay?: number;
}

const SciFiCard: React.FC<SciFiCardProps> = ({ 
  children, 
  className = "",
  title,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-[#050b14]/80 backdrop-blur-md border border-cyan-900/50 ${className}`}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_4px,3px_100%]" />

      {title && (
        <div className="relative z-10 flex items-center gap-2 px-4 py-2 border-b border-cyan-900/50 bg-cyan-950/20">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">{title}</h3>
        </div>
      )}

      <div className="relative z-10 p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default SciFiCard;