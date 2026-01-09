import React from 'react';
import { motion } from 'framer-motion';

interface ProductivityCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ProductivityCard: React.FC<ProductivityCardProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative rounded-lg border border-zinc-800 bg-zinc-900/50 shadow-sm backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ProductivityCard;