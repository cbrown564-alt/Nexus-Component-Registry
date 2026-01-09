import React from 'react';
import { motion } from 'framer-motion';

interface KidsCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // e.g., 'bg-red-400', 'bg-blue-400'
  borderColor?: string;
  delay?: number;
  onClick?: () => void;
}

const KidsCard: React.FC<KidsCardProps> = ({ 
  children, 
  className = "",
  color = "bg-white",
  borderColor = "border-zinc-200",
  delay = 0,
  onClick
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", bounce: 0.6, delay }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-[2.5rem] border-b-8 border-r-4 border-t-4 border-l-4 ${borderColor} ${color} shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default KidsCard;