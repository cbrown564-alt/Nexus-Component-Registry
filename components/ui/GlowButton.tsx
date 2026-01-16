import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, className = "", ...props }) => {
  const { theme } = useTheme();

  return (
    <button
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      style={{
        boxShadow: `0 0 0 2px var(--ring)`,
      }}
      {...props}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, var(--border) 0%, var(--foreground) 50%, var(--border) 100%)`
        }}
      />

      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-6 py-2 text-sm font-medium backdrop-blur-3xl transition-all duration-200 bg-background text-foreground"
      >
        {children}
      </span>
    </button>
  );
};

export default GlowButton;