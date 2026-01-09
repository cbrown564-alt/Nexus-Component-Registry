import React from 'react';
import { motion } from 'framer-motion';

interface CommerceCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const CommerceCard: React.FC<CommerceCardProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative bg-white border border-neutral-100 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default CommerceCard;