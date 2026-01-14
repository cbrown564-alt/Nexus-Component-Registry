import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  style?: React.CSSProperties; // Add style prop
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor,
  style = {} // Default to empty object
}) => {
  const { theme } = useTheme();
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const effectiveSpotlightColor = spotlightColor || (theme.colors.foreground ? `${theme.colors.foreground}1A` : "rgba(255, 255, 255, 0.1)");

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full w-full overflow-hidden border shadow-sm transition-all duration-200 ${className}`}
      style={{
        borderRadius: 'var(--radius)',
        borderColor: 'var(--border)',
        backgroundColor: `${theme.colors.card}80` || 'rgba(24, 24, 27, 0.5)', // card/50 fallback
        ...style // Merge passed style
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${effectiveSpotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;