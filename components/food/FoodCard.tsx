import React from 'react';
import { motion } from 'framer-motion';

interface FoodCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-3xl bg-[#1c1917] border border-stone-800 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FoodCard;