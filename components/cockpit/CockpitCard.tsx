import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <div className={`relative bg-[#1a1a1a] border-2 ${alert ? 'border-red-500' : 'border-zinc-800'} rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      {/* Matte Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMWExYTFhIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMjIyMjIyIiAvPgo8L3N2Zz4=')] opacity-20 pointer-events-none" />

      {label && (
        <div className="absolute top-3 left-5 z-10">
          <span className={`text-xs font-bold uppercase tracking-[0.2em] ${alert ? 'text-red-500' : 'text-zinc-500'}`}>
            {label}
          </span>
        </div>
      )}

      <div className={`relative z-10 h-full w-full ${noPadding ? 'p-0' : 'p-5'}`}>
        {children}
      </div>
    </div>
  );
};

export default CockpitCard;