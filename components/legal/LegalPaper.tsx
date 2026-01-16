import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';

interface LegalPaperProps {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
}

const LegalPaper: React.FC<LegalPaperProps> = ({ children, title, style }) => {
  const { currentPlaygroundTheme: theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-[850px] shadow-sm min-h-[1000px] p-12 relative"
      style={{
        backgroundColor: theme.colors.card,
        color: theme.colors.cardForeground,
        boxShadow: `0 20px 25px -5px ${theme.colors.border}`,
        border: `1px solid ${theme.colors.border}`,
        ...style
      }}
    >
      {/* Dynamic Watermark/Background Pattern - using simple CSS for now could be SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `repeating-linear-gradient(45deg, ${theme.colors.foreground} 0, ${theme.colors.foreground} 1px, transparent 0, transparent 50%)`, backgroundSize: '10px 10px' }}
      >
      </div>

      {title && (
        <div className="mb-12 text-center border-b-2 pb-6" style={{ borderColor: theme.colors.foreground }}>
          <h2 className="text-3xl font-bold uppercase tracking-widest font-serif" style={{ color: theme.colors.foreground }}>{title}</h2>
        </div>
      )}

      {/* Red margin line simulation */}
      <div className="absolute left-16 top-0 bottom-0 w-px opacity-30" style={{ backgroundColor: 'red' }} />

      <div className="relative pl-8">
        {children}
      </div>
    </motion.div>
  );
};

export default LegalPaper;