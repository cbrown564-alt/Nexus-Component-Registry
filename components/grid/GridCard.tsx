import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface GridCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  title?: string;
  noPadding?: boolean;
  headerClassName?: string;
  style?: React.CSSProperties;
}

const GridCard: React.FC<GridCardProps> = ({
  children,
  className = "",
  delay = 0,
  title,
  noPadding = false,
  headerClassName = "",
  style
}) => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative overflow-hidden backdrop-blur-sm flex flex-col ${className}`}
      style={{
        backgroundColor: theme.colors.card, // Fallback if needed, usually transparent-ish
        borderColor: theme.colors.border,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: theme.radius === 'none' ? '0' : '0.25rem',
        ...style
      }}
    >
      {/* Blueprint Grid Background - Optional, might clash with non-grid themes, consider making subtle or removal */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.colors.border} 1px, transparent 1px), linear-gradient(to bottom, ${theme.colors.border} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Corner Markers - Keeping them but theming them */}
      <div className="absolute top-0 left-0 h-2 w-2 border-t border-l" style={{ borderColor: theme.colors.ring }} />
      <div className="absolute top-0 right-0 h-2 w-2 border-t border-r" style={{ borderColor: theme.colors.ring }} />
      <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l" style={{ borderColor: theme.colors.ring }} />
      <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r" style={{ borderColor: theme.colors.ring }} />

      {title && (
        <div className={`relative z-10 border-b px-4 py-2 shrink-0 ${headerClassName}`} style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.muted }}>
          <h3 className="text-xs font-bold uppercase tracking-widest font-mono" style={{ color: theme.colors.primary }}>{title}</h3>
        </div>
      )}

      <div className={`relative z-10 ${noPadding ? 'flex-1 min-h-0' : 'flex-1 p-4'}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default GridCard;