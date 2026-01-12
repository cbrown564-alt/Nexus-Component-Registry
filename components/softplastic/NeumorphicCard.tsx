import React from 'react';
import { motion } from 'framer-motion';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
  delay?: number;
  onClick?: () => void;
}

const NeumorphicCard: React.FC<NeumorphicCardProps> = ({
  children,
  className = "",
  inset = false,
  delay = 0,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onClick={onClick}
      className={`relative rounded-[2rem] bg-[#EFEEEE] transition-all duration-300 ${inset
          ? 'shadow-[inset_6px_6px_12px_#D1D9E6,inset_-6px_-6px_12px_#FFFFFF]'
          : 'shadow-[12px_12px_24px_#D1D9E6,-12px_-12px_24px_#FFFFFF]'
        } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default NeumorphicCard;