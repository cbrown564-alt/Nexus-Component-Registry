import React from 'react';
import { motion } from 'framer-motion';

interface ChromaShiftProps {
  text?: string;
  className?: string;
}

const ChromaShift: React.FC<ChromaShiftProps> = ({
  text = "CHROMATIC",
  className = "",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Red channel */}
      <motion.span
        className="absolute text-red-500 mix-blend-multiply"
        animate={{
          x: [-2, 2, -1, 1, -2],
          y: [1, -1, 2, -2, 1],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        {text}
      </motion.span>
      
      {/* Blue channel */}
      <motion.span
        className="absolute text-blue-500 mix-blend-multiply"
        animate={{
          x: [2, -2, 1, -1, 2],
          y: [-1, 1, -2, 2, -1],
        }}
        transition={{
          duration: 0.25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        {text}
      </motion.span>
      
      {/* Green channel */}
      <motion.span
        className="absolute text-green-500 mix-blend-multiply"
        animate={{
          x: [1, -1, 2, -2, 1],
          y: [2, -2, 1, -1, 2],
        }}
        transition={{
          duration: 0.35,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        {text}
      </motion.span>
      
      {/* Base text (invisible, for sizing) */}
      <span className="opacity-0">{text}</span>
    </div>
  );
};

export default ChromaShift;
