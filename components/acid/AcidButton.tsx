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
  const getColors = (): React.CSSProperties => {
    switch (variant) {
      case 'primary': return { backgroundColor: '#ccff00', color: '#000000' };
      case 'secondary': return { backgroundColor: '#ff00ff', color: '#ffffff' };
      case 'black': return { backgroundColor: '#000000', color: '#ffffff' };
      default: return { backgroundColor: '#ffffff', color: '#000000' };
    }
  }

  return (
    <button
      className={`border-4 px-6 py-3 font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] transition-all ${className}`}
      style={{ ...getColors(), borderColor: '#000000' }}
      {...props}
    >
      {children}
    </button>
  );
};

export default AcidButton;