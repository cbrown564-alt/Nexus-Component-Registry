import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface CockpitCardProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  alert?: boolean;
  noPadding?: boolean;
}

const CockpitCard: React.FC<CockpitCardProps> = ({
  children,
  className = "",
  label,
  alert = false,
  noPadding = false
}) => {
  const { theme } = useTheme();

  return (
    <div className={`relative bg-black/40 backdrop-blur-2xl border ${alert ? 'border-red-500/50' : 'border-white/10'} rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5 ${className}`}>
      {/* Glossy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

      {/* Matte Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMWExYTFhIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIyMjIyIiAvPgo8L3N2Zz4=')] opacity-10 pointer-events-none mix-blend-overlay" />

      {label && (
        <div className="absolute top-4 left-6 z-20">
          <span
            className={`text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2`}
            style={{ color: alert ? '#f87171' : theme.colors.mutedForeground }}
          >
            {alert && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />}
            {label}
          </span>
        </div>
      )}

      <div className={`relative z-10 h-full w-full ${noPadding ? 'p-0' : 'p-6'}`}>
        {children}
      </div>
    </div>
  );
};

export default CockpitCard;