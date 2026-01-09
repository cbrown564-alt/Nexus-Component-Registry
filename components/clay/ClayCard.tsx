import React from 'react';
import { motion } from 'framer-motion';

interface ClayCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // Tailwind bg class
  shadowColor?: string; // Hex code for shadow base
  delay?: number;
}

const ClayCard: React.FC<ClayCardProps> = ({ 
  children, 
  className = "",
  color = "bg-white",
  shadowColor = "#cad4e0",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20, 
        delay 
      }}
      className={`relative rounded-[2rem] p-6 ${color} ${className}`}
      style={{
        boxShadow: `
          12px 12px 24px ${shadowColor}, 
          -12px -12px 24px #ffffff, 
          inset 4px 4px 8px rgba(255,255,255,0.5), 
          inset -4px -4px 8px rgba(0,0,0,0.05)
        `
      }}
    >
      {children}
    </motion.div>
  );
};

export default ClayCard;