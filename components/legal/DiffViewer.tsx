import React from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const DiffViewer = () => {
  const { theme } = useTheme();

  return (
    <div className="rounded-xl border overflow-hidden shadow-sm" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.card }}>
      <div className="flex items-center justify-between border-b px-4 py-2" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.muted }}>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase" style={{ color: theme.colors.mutedForeground }}>Version History</span>
          <div className="flex items-center gap-2">
            <span className="rounded px-2 py-0.5 text-xs font-mono font-medium" style={{ backgroundColor: `${theme.colors.primary}1a`, color: theme.colors.primary }}>v2.1 (Current)</span>
            <ArrowRightLeft className="h-3 w-3" style={{ color: theme.colors.mutedForeground }} />
            <span className="rounded px-2 py-0.5 text-xs font-mono font-medium" style={{ backgroundColor: theme.colors.secondary, color: theme.colors.secondaryForeground }}>v2.0 (Original)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x min-h-[150px]" style={{ borderColor: theme.colors.border }}>
        {/* Left Side (Old) */}
        <div className="p-4 text-xs font-mono leading-relaxed" style={{ backgroundColor: `${theme.colors.muted}80`, color: theme.colors.mutedForeground }}>
          <p>
            12.1 The Service Provider shall ensure 99.0% uptime availability during business hours.
          </p>
          <p className="mt-2 -mx-1 px-1 line-through decoration-2" style={{ backgroundColor: '#fee2e280', color: '#991b1b', textDecorationColor: '#f87171' }}>
            Penalties for downtime shall not exceed 5% of monthly fees.
          </p>
        </div>

        {/* Right Side (New) */}
        <div className="p-4 text-xs font-mono leading-relaxed" style={{ color: theme.colors.foreground, backgroundColor: theme.colors.card }}>
          <p>
            12.1 The Service Provider shall ensure <span className="font-bold px-1" style={{ backgroundColor: `${theme.colors.primary}1a`, color: theme.colors.primary }}>99.9%</span> uptime availability <span className="font-bold px-1" style={{ backgroundColor: `${theme.colors.primary}1a`, color: theme.colors.primary }}>24/7</span>.
          </p>
          <p className="mt-2 -mx-1 px-1" style={{ backgroundColor: '#dcfce780', color: '#166534' }}>
            Penalties for downtime shall follow the SLA Credit Schedule attached in Exhibit B.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiffViewer;