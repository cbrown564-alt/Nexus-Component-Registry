import React from 'react';
import { motion } from 'framer-motion';

interface StickerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotation?: number;
}

const Sticker: React.FC<StickerProps> = ({ 
  children, 
  className = "",
  delay = 0,
  rotation = 12
}) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: rotation }}
      transition={{ type: "spring", bounce: 0.6, delay }}
      className={`absolute z-20 flex items-center justify-center p-2 border-2 border-black bg-yellow-300 text-black font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,0.5)] select-none ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Sticker;