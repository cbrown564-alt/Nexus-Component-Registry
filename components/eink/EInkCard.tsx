import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface EInkCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
  onClick?: () => void;
}

const EInkCard: React.FC<EInkCardProps> = ({
  children,
  className = "",
  noBorder = false,
  onClick,
  ...props
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={`relative bg-white overflow-hidden ${noBorder ? '' : 'border-2 border-black'} ${className}`}
      {...props}
    >
      {/* Paper Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          filter: 'contrast(120%) brightness(120%)'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default EInkCard;