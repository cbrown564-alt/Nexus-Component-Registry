import React from 'react';
import { motion } from 'framer-motion';

interface SolarCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SolarCard: React.FC<SolarCardProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`relative overflow-hidden bg-white/60 backdrop-blur-xl border border-emerald-100 shadow-[0_8px_32px_rgba(16,185,129,0.1)] rounded-[2rem] rounded-tr-[4rem] rounded-bl-[3rem] ${className}`}
    >
      {/* Decorative organic overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100/40 to-transparent rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-2xl pointer-events-none -ml-8 -mb-8" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default SolarCard;