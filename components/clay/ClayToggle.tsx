import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ClayToggleProps {
  checked: boolean;
  onChange: () => void;
  color?: string; // e.g. bg-green-400
  'aria-label'?: string;
}

const ClayToggle: React.FC<ClayToggleProps> = ({ checked, onChange, color = "bg-emerald-400", 'aria-label': ariaLabel = "Toggle" }) => {
  return (
    <button 
      type="button"
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={`relative h-8 w-8 cursor-pointer rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${checked ? color : 'bg-slate-100'}`}
      style={{
        boxShadow: checked 
          ? `inset 2px 2px 5px rgba(0,0,0,0.1), inset -2px -2px 5px rgba(255,255,255,0.3)`
          : `5px 5px 10px #d1d5db, -5px -5px 10px #ffffff`
      }}
    >
      <motion.div
        initial={false}
        animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
        className="flex h-full w-full items-center justify-center text-white"
      >
        <Check className="h-5 w-5 stroke-[4px]" />
      </motion.div>
    </button>
  );
};

export default ClayToggle;