import React from 'react';
import { motion } from 'framer-motion';

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // e.g., 'bg-white', 'bg-yellow-400'
}

const BrutalistCard: React.FC<BrutalistCardProps> = ({ 
  children, 
  className = "",
  color = "bg-white"
}) => {
  return (
    <motion.div
      whileHover={{ x: 2, y: 2, boxShadow: '0px 0px 0px 0px #000' }}
      className={`relative border-[3px] border-black ${color} p-4 shadow-[4px_4px_0px_0px_#000] transition-all duration-100 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BrutalistCard;