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
          <Scroll className="h-5 w-5 text-amber-400" />
          <h3
            className="font-display font-bold"
            style={{ color: theme.colors.foreground }}
          >
            Active Quests
          </h3>
        </div>
        <div className="flex gap-2">
          <button className="text-[10px] font-bold bg-amber-500 text-amber-950 px-3 py-1 rounded-full">Daily</button>
          <button className="text-[10px] font-bold text-amber-500 hover:bg-amber-950 px-3 py-1 rounded-full transition-colors">Weekly</button>
        </div>
      </div>

      <div className="space-y-4">
        {quests.map((quest, i) => (
          <div
            key={i}
            className="rounded-xl border border-amber-500/10 p-3"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4
                className={`font-bold text-sm ${quest.completed ? 'line-through' : ''}`}
                style={{ color: quest.completed ? theme.colors.mutedForeground : '#fef3c7' }}
              >
                {quest.title}
              </h4>
              {quest.completed ? (
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Check className="h-3 w-3" /> Done
                </div>
              ) : (
                <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400/70">
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
                  className={`h-full rounded-full ${quest.completed ? 'bg-emerald-500' : 'bg-amber-500'}`}
                  style={{ width: `${(quest.progress / quest.total) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-amber-200/50">{quest.progress}/{quest.total}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Gift className="h-3 w-3 text-fuchsia-400" />
                <span className="text-xs text-fuchsia-200">{quest.reward}</span>
              </div>
              {quest.completed && (
                <button
                  className="text-[10px] font-bold bg-emerald-500 hover:bg-emerald-400 px-3 py-1 rounded shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                  style={{ color: theme.colors.foreground }}
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