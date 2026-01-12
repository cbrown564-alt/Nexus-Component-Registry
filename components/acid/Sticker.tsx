import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface StickerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Sticker: React.FC<StickerProps> = ({
  children,
  className = "",
  delay = 0,
  ...props
}) => {
  // Extract rotation from props.animate if it exists, otherwise use a default
  const defaultRotation = 12;
  const initialRotate = props.initial?.rotate ?? 180;
  const animateRotate = (props.animate && typeof props.animate === 'object' && 'rotate' in props.animate)
    ? (props.animate as any).rotate
    : defaultRotation;

  return (
    <motion.div
      initial={{ scale: 0, rotate: initialRotate }}
      animate={{ scale: 1, rotate: animateRotate }}
      transition={{ type: "spring", bounce: 0.6, delay }}
      className={`absolute z-20 px-4 py-2 font-black uppercase tracking-tighter shadow-[4px_4px_0px_rgba(0,0,0,1)] border-2 border-black ${className}`}
      style={{ color: '#000000' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Sticker;