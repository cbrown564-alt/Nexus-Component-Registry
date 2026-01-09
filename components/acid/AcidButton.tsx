import React from 'react';

interface AcidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'black';
}

const AcidButton: React.FC<AcidButtonProps> = ({ 
  children, 
  className = "", 
  variant = 'primary',
  ...props 
}) => {
  const getColors = () => {
    switch(variant) {
      case 'primary': return 'bg-[#ccff00] text-black hover:bg-[#b3e600]';
      case 'secondary': return 'bg-[#ff00ff] text-white hover:bg-[#e600e6]';
      case 'black': return 'bg-black text-white hover:bg-zinc-800';
      default: return 'bg-white text-black';
    }
  }

  return (
    <button 
      className={`border-4 border-black px-6 py-3 font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] transition-all ${getColors()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default AcidButton;