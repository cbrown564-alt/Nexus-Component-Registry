import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SwissCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  inverted?: boolean; // Red background
  black?: boolean; // Black background
  delay?: number;
}

const SwissCard: React.FC<SwissCardProps> = ({
  children,
  className = "",
  bordered = false,
  inverted = false,
  black = false,
  delay = 0,
  ...props
}) => {
  let bgColor = 'bg-transparent';
  let textColor = 'text-black';
  let borderColor = 'border-transparent';

  if (inverted) {
    bgColor = 'bg-[#DC2626]'; // International Red
    textColor = 'text-white';
  } else if (black) {
    bgColor = 'bg-black';
    textColor = 'text-white';
  } else {
    bgColor = 'bg-white';
  }

  if (bordered && !inverted && !black) {
    borderColor = 'border-black';
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-6 md:p-8 ${bgColor} ${textColor} ${bordered ? 'border-2' : ''} border-solid rounded-none ${borderColor} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SwissCard;