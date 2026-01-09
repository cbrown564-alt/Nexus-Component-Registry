import React from 'react';
import { motion } from 'framer-motion';

interface AcidCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  color?: string;
  hoverRotate?: boolean;
}

const AcidCard: React.FC<AcidCardProps> = ({ 
  children, 
  className = "",
  rotate = 0,
  color = "bg-white",
  hoverRotate = true
}) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={hoverRotate ? { scale: 1.02, rotate: rotate * -1 } : {}}
      className={`relative border-4 border-black ${color} shadow-[8px_8px_0px_#000] transition-all duration-200 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </motion.div>
  );
};

export default AcidCard;