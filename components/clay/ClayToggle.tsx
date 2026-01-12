import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ClayToggleProps {
  checked: boolean;
  onChange: () => void;
  color?: string; // e.g. bg-green-400
  'aria-label'?: string;
}

const ClayToggle: React.FC<ClayToggleProps> = ({ checked, onChange, color = "bg-emerald-400", 'aria-label': ariaLabel = "Toggle" }) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={`relative h-8 w-8 cursor-pointer rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${checked ? color : ''}`}
      style={{
        backgroundColor: !checked ? theme.colors.muted : undefined,
        boxShadow: checked
          ? `inset 2px 2px 5px rgba(0,0,0,0.1), inset -2px -2px 5px rgba(255,255,255,0.3)`
          : `5px 5px 10px ${theme.colors.border || '#d1d5db'}, -5px -5px 10px ${theme.colors.background === '#000000' ? '#333333' : '#ffffff'}`
      }}
    >
      <motion.div
        initial={false}
        animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
        className="flex h-full w-full items-center justify-center"
        style={{ color: theme.colors.primaryForeground || '#ffffff' }}
      >
        <Check className="h-5 w-5 stroke-[4px]" />
      </motion.div>
    </button>
  );
};

export default ClayToggle;