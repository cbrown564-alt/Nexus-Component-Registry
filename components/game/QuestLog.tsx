import React from 'react';
import { Scroll, Gift, Check, Clock } from 'lucide-react';
import GameCard from './GameCard';
import { useTheme } from '@/context/ThemeContext';

const QuestLog = () => {
  const { theme } = useTheme();

  const quests = [
    { title: "Defeat the Shadow King", progress: 100, total: 100, reward: "500 Gold", completed: true },
    { title: "Collect Ancient Runes", progress: 3, total: 5, reward: "Rare Chest", completed: false },
    { title: "Reach Level 45", progress: 42, total: 45, reward: "Skill Point", completed: false },
  ];

  return (
    <GameCard variant="accent" className="p-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Scroll className="h-5 w-5" style={{ color: theme.colors.accent }} />
          <h3
            className="font-display font-bold"
            style={{ color: theme.colors.foreground }}
          >
            Active Quests
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            className="text-[10px] font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: theme.colors.accent, color: theme.colors.background }}
          >
            Daily
          </button>
          <button
            className="text-[10px] font-bold px-3 py-1 rounded-full transition-colors"
            style={{ color: theme.colors.accent, backgroundColor: 'transparent' }}
          >
            Weekly
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {quests.map((quest, i) => (
          <div
            key={i}
            className="rounded-xl border p-3"
            style={{
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderColor: `${theme.colors.accent}1a`,
            }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4
                className={`font-bold text-sm ${quest.completed ? 'line-through' : ''}`}
                style={{ color: quest.completed ? theme.colors.mutedForeground : theme.colors.foreground }}
              >
                {quest.title}
              </h4>
              {quest.completed ? (
                <div
                  className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded border"
                  style={{
                    color: '#10b981',
                    backgroundColor: '#10b98110',
                    borderColor: '#10b98133',
                  }}
                >
                  <Check className="h-3 w-3" /> Done
                </div>
              ) : (
                <div
                  className="flex items-center gap-1 text-[10px] font-bold"
                  style={{ color: `${theme.colors.accent}b3` }}
                >
                  <Clock className="h-3 w-3" /> Active
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div
                className="flex-1 h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(quest.progress / quest.total) * 100}%`,
                    backgroundColor: quest.completed ? '#10b981' : theme.colors.accent,
                  }}
                />
              </div>
              <span className="text-[10px] font-mono" style={{ color: `${theme.colors.foreground}80` }}>
                {quest.progress}/{quest.total}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Gift className="h-3 w-3" style={{ color: theme.colors.primary }} />
                <span className="text-xs" style={{ color: `${theme.colors.primary}e6` }}>{quest.reward}</span>
              </div>
              {quest.completed && (
                <button
                  className="text-[10px] font-bold px-3 py-1 rounded shadow-lg transition-all active:scale-95"
                  style={{
                    backgroundColor: '#10b981',
                    color: theme.colors.foreground,
                    boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)',
                  }}
                >
                  Claim
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </GameCard>
  );
};

export default QuestLog;