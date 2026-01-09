import React from 'react';
import { motion } from 'framer-motion';

interface MagazineCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

const MagazineCard: React.FC<MagazineCardProps> = ({ 
  children, 
  className = "",
  delay = 0,
  hoverEffect = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "editorial" feel
      className={`relative bg-white border border-neutral-200 p-6 ${
        hoverEffect ? 'transition-all duration-500 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagazineCard;