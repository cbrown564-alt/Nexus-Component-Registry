import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface SciFiCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  delay?: number;
}

const SciFiCard: React.FC<SciFiCardProps> = ({
  children,
  className = "",
  title,
  delay = 0
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`relative backdrop-blur-md border ${className}`}
      style={{
        backgroundColor: `${theme.colors.card}cc`,
        borderColor: `${theme.colors.border}80`,
      }}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: theme.colors.accent }} />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" style={{ borderColor: theme.colors.accent }} />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" style={{ borderColor: theme.colors.accent }} />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: theme.colors.accent }} />

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_4px,3px_100%]" />

      {title && (
        <div
          className="relative z-10 flex items-center gap-2 px-4 py-2 border-b"
          style={{
            borderColor: `${theme.colors.border}80`,
            backgroundColor: `${theme.colors.secondary}33`,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.accent }} />
          <h3 className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: theme.colors.accent }}>{title}</h3>
        </div>
      )}

      <div className="relative z-10 p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default SciFiCard;