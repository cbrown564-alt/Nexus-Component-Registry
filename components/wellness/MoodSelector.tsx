import React, { useState } from 'react';
import WellnessCard from './WellnessCard';
import { Sun, Cloud, CloudRain, CloudLightning } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const MoodSelector = () => {
  const { theme } = useTheme();
  const [selected, setSelected] = useState<string | null>(null);

  const moods = [
    { icon: Sun, label: 'Radiant', color: 'text-orange-400', bg: 'bg-orange-50' },
    { icon: Cloud, label: 'Calm', color: 'text-blue-400', bg: 'bg-blue-50' },
    { icon: CloudRain, label: 'Melancholy', color: 'text-indigo-400', bg: 'bg-indigo-50' },
    { icon: CloudLightning, label: 'Anxious', color: 'text-[#78716c]', bg: 'bg-[#f5f5f4]' },
  ];

  return (
    <WellnessCard>
      <h3
        className="mb-1 font-serif text-xl"
        style={{ color: theme.colors.foreground }}
      >
        How do you feel?
      </h3>
      <p
        className="mb-6 text-sm"
        style={{ color: theme.colors.mutedForeground }}
      >
        Check in with yourself today.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelected(mood.label)}
            className="group flex flex-col items-center justify-center rounded-2xl p-4 transition-all duration-300"
            style={{
              backgroundColor: selected === mood.label ? theme.colors.secondary : theme.colors.card,
              // For unselected hover, we rely on CSS, but if we need strict tokens...
              // Using inline style for bg overrides tailwind hover unless we use CSS variables or careful classes.
              // Let's use class for structure and style for colors.
            }}
          >
            <div
              className={`mb-2 p-2 rounded-xl transition-transform group-hover:scale-110`}
              style={{ backgroundColor: selected === mood.label ? 'rgba(255,255,255,0.1)' : 'transparent' }}
            >
              <mood.icon className={`h-6 w-6 ${mood.color}`} />
            </div>

            <span
              className="text-xs font-medium"
              style={{
                color: selected === mood.label ? theme.colors.foreground : theme.colors.mutedForeground
              }}
            >
              {mood.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <div
          className="h-1 w-full overflow-hidden rounded-full"
          style={{ backgroundColor: theme.colors.muted }}
        >
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-orange-200 to-sage-300" />
        </div>
        <div
          className="mt-2 flex justify-between text-[10px]"
          style={{ color: theme.colors.mutedForeground }}
        >
          <span>Weekly Balance</span>
          <span>68% Positive</span>
        </div>
      </div>
    </WellnessCard>
  );
};

export default MoodSelector;