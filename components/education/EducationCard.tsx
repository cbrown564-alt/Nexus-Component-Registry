import React from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  featured?: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({ 
  children, 
  className = "",
  delay = 0,
  featured = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        featured 
          ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/20' 
          : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:shadow-md hover:border-violet-200'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default EducationCard;