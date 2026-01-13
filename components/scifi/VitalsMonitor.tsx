import React from 'react';
import { Activity, Heart, Wind } from 'lucide-react';
import SciFiCard from './SciFiCard';
import { useTheme } from '@/context/ThemeContext';

const VitalsMonitor = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <SciFiCard className="flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs font-mono uppercase" style={{ color: theme.colors.primary }}>Heart Rate</div>
          <Heart className="h-4 w-4 animate-pulse" style={{ color: theme.colors.accent }} />
        </div>
        <div className="flex items-end gap-2">
          <span
            className="text-4xl font-mono font-bold"
            style={{ color: theme.colors.foreground }}
          >
            72
          </span>
          <span className="text-xs font-mono mb-1" style={{ color: theme.colors.muted }}>BPM</span>
        </div>
        <div className="mt-2 h-12 border-t relative overflow-hidden" style={{ borderColor: `${theme.colors.border}4d` }}>
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path
              d="M0 20 L10 20 L15 5 L20 35 L25 20 L35 20 L40 5 L45 35 L50 20 L100 20"
              fill="none"
              stroke={theme.colors.primary}
              strokeWidth="2"
              className="animate-[dash_2s_linear_infinite]"
              strokeDasharray="100"
            />
          </svg>
        </div>
      </SciFiCard>

      <SciFiCard className="flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs font-mono uppercase" style={{ color: theme.colors.secondary }}>Oxygen (SpO2)</div>
          <Activity className="h-4 w-4" style={{ color: theme.colors.accent }} />
        </div>
        <div className="flex items-end gap-2">
          <span
            className="text-4xl font-mono font-bold"
            style={{ color: theme.colors.foreground }}
          >
            98
          </span>
          <span className="text-xs font-mono mb-1" style={{ color: theme.colors.muted }}>%</span>
        </div>
        <div className="mt-2 h-12 border-t pt-2" style={{ borderColor: `${theme.colors.border}4d` }}>
          <div className="flex gap-1 h-full items-end">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="flex-1"
                style={{
                  height: `${80 + Math.random() * 20}%`,
                  backgroundColor: `${theme.colors.accent}66`,
                }}
              />
            ))}
          </div>
        </div>
      </SciFiCard>

      <SciFiCard className="flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs font-mono uppercase" style={{ color: theme.colors.mutedForeground }}>Respiration</div>
          <Wind className="h-4 w-4" style={{ color: theme.colors.mutedForeground }} />
        </div>
        <div className="flex items-end gap-2">
          <span
            className="text-4xl font-mono font-bold"
            style={{ color: theme.colors.foreground }}
          >
            16
          </span>
          <span className="text-xs font-mono mb-1" style={{ color: theme.colors.muted }}>RPM</span>
        </div>
        <div className="mt-2 h-12 border-t relative" style={{ borderColor: `${theme.colors.border}4d` }}>
          <svg className="absolute bottom-0 w-full h-full">
            <path d="M0 25 Q 25 5, 50 25 T 100 25" fill="none" stroke={theme.colors.mutedForeground} strokeWidth="2" />
          </svg>
        </div>
      </SciFiCard>
    </div>
  );
};

export default VitalsMonitor;