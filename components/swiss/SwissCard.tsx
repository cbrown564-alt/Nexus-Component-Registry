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
  // Calculate styles based on variant
  const getStyles = (): React.CSSProperties => {
    if (inverted) {
      return { backgroundColor: '#DC2626', color: '#ffffff' };
    } else if (black) {
      return { backgroundColor: '#000000', color: '#ffffff' };
    } else {
      return { backgroundColor: '#ffffff', color: '#000000', borderColor: bordered ? '#000000' : 'transparent' };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative p-6 md:p-8 ${bordered ? 'border-2' : ''} border-solid rounded-none ${className}`}
      style={getStyles()}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SwissCard;