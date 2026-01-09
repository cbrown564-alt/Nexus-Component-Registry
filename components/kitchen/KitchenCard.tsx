import React from 'react';
import { motion } from 'framer-motion';

interface KitchenCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

const KitchenCard: React.FC<KitchenCardProps> = ({ 
  children, 
  className = "",
  delay = 0,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl border border-stone-200 bg-[#FFFBF7] shadow-[4px_4px_0px_rgba(231,229,228,1)] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default KitchenCard;