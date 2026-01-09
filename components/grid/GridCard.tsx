import React from 'react';
import { motion } from 'framer-motion';

interface GridCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  noPadding?: boolean;
}

const GridCard: React.FC<GridCardProps> = ({
  children,
  className = "",
  delay = 0,
  title,
  noPadding = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative overflow-hidden border border-blue-900/50 bg-[#0f172a]/90 backdrop-blur-sm ${noPadding ? '' : 'p-4'} ${className}`}
    >
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Corner Markers */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-blue-500" />
      <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-blue-500" />
      <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-blue-500" />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-blue-500" />

      {title && (
        <div className="relative z-10 border-b border-blue-900/50 bg-blue-950/30 px-4 py-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">{title}</h3>
        </div>
      )}

      <div className={`relative z-10 ${noPadding ? 'h-full' : ''}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default GridCard;