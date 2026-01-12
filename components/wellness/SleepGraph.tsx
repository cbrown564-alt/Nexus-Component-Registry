import React from 'react';
import WellnessCard from './WellnessCard';
import { Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const SleepGraph = () => {
  const { theme } = useTheme();
  const data = [6.5, 7.2, 6.8, 8.1, 7.5, 8.4, 7.9];
  const max = Math.max(...data);

  return (
    <WellnessCard
      className=""
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        color: '#e7e5e4'
      }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3
            className="font-serif text-xl"
            style={{ color: theme.colors.foreground }}
          >
            Sleep Quality
          </h3>
          <p
            className="text-sm"
            style={{ color: theme.colors.mutedForeground }}
          >
            Last 7 Days
          </p>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-purple-300"
          style={{ backgroundColor: theme.colors.secondary }}
        >
          <Moon className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-end justify-between gap-2 h-32">
        {data.map((value, i) => (
          <div key={i} className="group relative flex w-full flex-col items-center gap-2">
            <div
              className={`w-full rounded-t-lg transition-all duration-500`}
              style={{
                height: `${(value / max) * 100}%`,
                backgroundColor: theme.colors.muted,
                // Hover effect handled via Framer Motion or JS would be better, but for now removing the class
              }}
            >
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                <span
                  className="text-xs font-medium"
                  style={{ color: theme.colors.foreground }}
                >
                  {value}h
                </span>
              </div>
            </div>
            <span
              className="text-[10px]"
              style={{ color: theme.colors.mutedForeground }}
            >
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </span>
          </div>
        ))}
      </div>

      <div
        className="mt-6 flex items-center justify-between border-t pt-4"
        style={{ borderColor: theme.colors.border }}
      >
        <span
          className="text-sm"
          style={{ color: theme.colors.mutedForeground }}
        >
          Average
        </span>
        <span
          className="font-serif text-2xl"
          style={{ color: theme.colors.foreground }}
        >
          7.8
          <span
            className="text-sm font-sans ml-1"
            style={{ color: theme.colors.mutedForeground }}
          >
            hrs
          </span>
        </span>
      </div>
    </WellnessCard>
  );
};

export default SleepGraph;