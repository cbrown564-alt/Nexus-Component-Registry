import React from 'react';
import FestivalCard from './FestivalCard';
import { MapPin, Users } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const CrowdHeatmap = () => {
  const { theme } = useTheme();
  const zones = [
    { name: "Main Stage", density: "High", color: "bg-red-500", top: "30%", left: "50%" },
    { name: "Techno Tent", density: "Med", color: "bg-yellow-500", top: "60%", left: "20%" },
    { name: "Food Court", density: "Low", color: "bg-green-500", top: "70%", left: "80%" },
  ];

  return (
    <FestivalCard className="h-full min-h-[300px] p-0 overflow-hidden" gradient="from-cyan-500 via-blue-500 to-indigo-500">
      <div className="absolute top-4 left-4 z-10">
        <div
          className="flex items-center gap-2 backdrop-blur-md px-3 py-1.5 rounded-full border"
          style={{
            backgroundColor: theme.colors.background ? `${theme.colors.background}99` : 'rgba(0,0,0,0.6)',
            borderColor: theme.colors.border
          }}
        >
          <Users className="w-4 h-4" style={{ color: theme.colors.foreground }} />
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: theme.colors.foreground }}
          >
            Crowd Density
          </span>
        </div>
      </div>

      {/* Map Background */}
      <div
        className="relative w-full h-full"
        style={{ backgroundColor: theme.colors.background }}
      >
        {/* Abstract Map Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          stroke={theme.colors.mutedForeground}
          strokeWidth="0.5"
          fill="none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 50 Q 50 20 100 50" vectorEffect="non-scaling-stroke" />
          <path d="M20 100 Q 50 50 80 100" vectorEffect="non-scaling-stroke" />
          <circle cx="50" cy="30" r="15" vectorEffect="non-scaling-stroke" />
          <circle cx="20" cy="60" r="10" vectorEffect="non-scaling-stroke" />
          <circle cx="80" cy="70" r="12" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* Heat Zones */}
        {zones.map((zone, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center group cursor-pointer"
            style={{ top: zone.top, left: zone.left, transform: 'translate(-50%, -50%)' }}
          >
            {/* Pulse Effect */}
            <div className={`relative w-24 h-24 rounded-full ${zone.color} opacity-40 blur-2xl animate-pulse`} />

            {/* Center Dot */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${zone.color} border-2 z-10 shadow-[0_0_15px_currentColor]`}
              style={{ borderColor: theme.colors.foreground }}
            />

            {/* Tooltip */}
            <div
              className="absolute top-full mt-2 backdrop-blur border px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none"
              style={{
                backgroundColor: theme.colors.popover ? theme.colors.popover : theme.colors.background,
                borderColor: theme.colors.border
              }}
            >
              <div
                className="text-xs font-bold"
                style={{ color: theme.colors.popoverForeground || theme.colors.foreground }}
              >
                {zone.name}
              </div>
              <div
                className="text-[10px]"
                style={{ color: theme.colors.mutedForeground }}
              >
                {zone.density} Density
              </div>
            </div>
          </div>
        ))}

        {/* User Location */}
        <div className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <MapPin className="w-6 h-6 text-cyan-400 fill-cyan-400/20 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-bounce" />
          <div className="w-8 h-2 bg-cyan-400/50 rounded-full blur-sm" />
        </div>
      </div>
    </FestivalCard>
  );
};

export default CrowdHeatmap;