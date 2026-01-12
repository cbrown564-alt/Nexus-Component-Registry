import React from 'react';
import { QrCode, Sparkles } from 'lucide-react';
import FestivalCard from './FestivalCard';
import { useTheme } from '@/context/ThemeContext';

const TicketWallet = () => {
  const { theme } = useTheme();

  return (
    <FestivalCard className="p-0 overflow-hidden group cursor-pointer" gradient="from-pink-500 via-rose-500 to-yellow-500">
      <div
        className="relative p-6 flex flex-col items-center text-center"
        style={{
          background: `linear-gradient(to bottom, ${theme.colors.card}, ${theme.colors.background})`
        }}
      >

        {/* Holographic Sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="w-full flex justify-between items-start mb-6">
          <div className="text-left">
            <div
              className="text-xs font-mono mb-1"
              style={{ color: theme.colors.mutedForeground }}
            >
              EVENT PASS
            </div>
            <div
              className="text-xl font-black italic tracking-tighter"
              style={{ color: theme.colors.foreground }}
            >
              NEON DREAMS
            </div>
          </div>
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>

        <div
          className="p-4 rounded-xl mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          style={{ backgroundColor: theme.colors.foreground }}
        >
          <QrCode
            className="w-32 h-32"
            style={{ color: theme.colors.background }}
          />
        </div>

        <div
          className="w-full border-t border-dashed pt-4 flex justify-between text-xs font-mono"
          style={{ borderColor: theme.colors.border }}
        >
          <div className="text-left">
            <div style={{ color: theme.colors.mutedForeground }}>ENTRY</div>
            <div style={{ color: theme.colors.foreground, fontWeight: 'bold' }}>GATE A</div>
          </div>
          <div className="text-right">
            <div style={{ color: theme.colors.mutedForeground }}>ID</div>
            <div style={{ color: theme.colors.foreground, fontWeight: 'bold' }}>#88291X</div>
          </div>
        </div>

        {/* Scan Line Animation */}
        <div className="absolute top-[120px] left-0 right-0 h-1 bg-red-500/50 blur-sm animate-[scan_2s_linear_infinite_reverse] pointer-events-none opacity-50" />
      </div>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-50px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(150px); opacity: 0; }
        }
      `}</style>
    </FestivalCard>
  );
};

export default TicketWallet;