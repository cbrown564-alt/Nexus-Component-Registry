import React from 'react';
import BrutalistCard from './BrutalistCard';
import { useTheme } from '@/context/ThemeContext';

const Manifesto = () => {
  const { theme } = useTheme();

  return (
    <div className="relative p-8 mt-12 mb-24">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-10 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply opacity-50 z-0 animate-pulse" />
      <div className="absolute bottom-0 left-10 w-48 h-12 bg-red-500 -rotate-3 z-0" />

      {/* Removed direct prop passed to color, let default handle it */}
      <BrutalistCard className="relative z-10 max-w-2xl mx-auto">
        <div
          className="border-b-2 pb-4 mb-4 flex justify-between items-end"
          style={{ borderColor: theme.colors.foreground }}
        >
          <h2 className="font-sans text-5xl font-black tracking-tighter uppercase leading-[0.8]">
            Manifesto<br />V.1.0
          </h2>
          <span className="font-mono text-xs rotate-90 origin-bottom-right translate-x-4">EST. 2024</span>
        </div>

        <div className="space-y-4 font-serif text-lg leading-tight">
          <p>
            WE REJECT THE POLISHED. WE EMBRACE THE <span className="px-1" style={{ backgroundColor: theme.colors.foreground, color: theme.colors.background }}>RAW</span>.
          </p>
          <p>
            Standardization is the enemy of creativity. In a world of rounded corners and soft shadows, we choose hard edges and high contrast.
          </p>
          <p
            className="text-sm font-mono mt-6 border-l-4 pl-4 py-2"
            style={{
              borderColor: '#facc15', // yellow-400
              backgroundColor: theme.colors.muted
            }}
          >
            System.Status: <span className="text-green-600 font-bold">REBELLIOUS</span>
          </p>
        </div>

        {/* Sticker */}
        <div
          className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full flex items-center justify-center border-2 rotate-12"
          style={{
            backgroundColor: '#facc15', // yellow-400
            borderColor: theme.colors.foreground, // border-black
            boxShadow: `4px 4px 0px 0px ${theme.colors.foreground}`, // shadow-[#000]
            color: '#000000' // Using hex to avoid class violation
          }}
        >
          <span className="font-bold text-xs text-center font-mono transform -rotate-12">NEW<br />WAVE</span>
        </div>
      </BrutalistCard>
    </div>
  );
};

export default Manifesto;