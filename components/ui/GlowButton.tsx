import React from 'react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950 ${className}`}
      {...props}
    >
      {/* Rotating Gradient Background */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#09090b_50%,#E2E8F0_100%)]" />
      
      {/* Button Content */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-zinc-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-200 group-hover:bg-zinc-900">
        {children}
      </span>
    </button>
  );
};

export default GlowButton;