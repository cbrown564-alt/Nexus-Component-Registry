import React from 'react';
import { motion } from 'framer-motion';

interface WellnessCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const WellnessCard: React.FC<WellnessCardProps> = ({ 
  children, 
  className = "",
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white/60 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default WellnessCard;