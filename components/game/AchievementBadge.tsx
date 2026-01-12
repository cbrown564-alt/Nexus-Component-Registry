import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Zap, Crown, Medal, Award, Gem } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

type BadgeIcon = 'trophy' | 'star' | 'target' | 'zap' | 'crown' | 'medal' | 'award' | 'gem';
type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary';

interface AchievementBadgeProps {
  title: string;
  description?: string;
  icon?: BadgeIcon;
  rarity?: BadgeRarity;
  unlocked?: boolean;
  progress?: number; // 0-100, only shown if not unlocked
  unlockedAt?: string;
  compact?: boolean;
}

const iconMap: Record<BadgeIcon, LucideIcon> = {
  trophy: Trophy,
  star: Star,
  target: Target,
  zap: Zap,
  crown: Crown,
  medal: Medal,
  award: Award,
  gem: Gem,
};

const rarityStyles: Record<BadgeRarity, { gradient: string; border: string; glow: string; text: string }> = {
  common: {
    gradient: 'from-zinc-600 to-zinc-700',
    border: 'border-zinc-500/50',
    glow: 'shadow-zinc-500/20',
    text: 'text-zinc-400',
  },
  rare: {
    gradient: 'from-cyan-500 to-blue-600',
    border: 'border-cyan-400/50',
    glow: 'shadow-cyan-500/30',
    text: 'text-cyan-400',
  },
  epic: {
    gradient: 'from-fuchsia-500 to-purple-600',
    border: 'border-fuchsia-400/50',
    glow: 'shadow-fuchsia-500/30',
    text: 'text-fuchsia-400',
  },
  legendary: {
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    border: 'border-amber-400/50',
    glow: 'shadow-amber-500/40',
    text: 'text-amber-400',
  },
};

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  icon = 'trophy',
  rarity = 'common',
  unlocked = true,
  progress,
  unlockedAt,
  compact = false,
}) => {
  const { theme } = useTheme();
  const IconComponent = iconMap[icon];
  const styles = rarityStyles[rarity];

  if (compact) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, y: -2 }}
        className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl border ${unlocked ? styles.border : ''
          } ${unlocked ? `bg-gradient-to-br ${styles.gradient}` : ''} ${unlocked ? `shadow-lg ${styles.glow}` : ''
          }`}
        style={{
          borderColor: !unlocked ? theme.colors.border : undefined,
          backgroundColor: !unlocked ? theme.colors.muted : undefined
        }}
        title={title}
      >
        <IconComponent
          className="h-5 w-5"
          style={{ color: unlocked ? theme.colors.foreground : theme.colors.mutedForeground }}
        />
        {!unlocked && progress !== undefined && (
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke={rarityStyles[rarity].text.replace('text-', '#').replace('-400', '')}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 20}
              strokeDashoffset={2 * Math.PI * 20 * (1 - progress / 100)}
              className="transition-all duration-500"
            />
          </svg>
        )}
        {rarity === 'legendary' && unlocked && (
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-xl bg-gradient-to-t from-amber-400/20 to-transparent"
          />
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative flex items-center gap-4 p-4 rounded-2xl border ${unlocked ? styles.border : ''
        } backdrop-blur-sm`}
      style={{
        borderColor: !unlocked ? `${theme.colors.border}80` : undefined,
        backgroundColor: unlocked ? 'rgba(0,0,0,0.4)' : theme.colors.muted
      }}
    >
      {/* Badge Icon */}
      <div
        className={`relative flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl border ${unlocked ? styles.border : ''
          } ${unlocked ? `bg-gradient-to-br ${styles.gradient}` : ''} ${unlocked ? `shadow-lg ${styles.glow}` : ''
          }`}
        style={{
          borderColor: !unlocked ? theme.colors.border : undefined,
          backgroundColor: !unlocked ? theme.colors.muted : undefined
        }}
      >
        <IconComponent
          className="h-6 w-6"
          style={{ color: unlocked ? theme.colors.foreground : theme.colors.mutedForeground }}
        />
        {rarity === 'legendary' && unlocked && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4
            className="font-display font-bold"
            style={{ color: unlocked ? theme.colors.foreground : theme.colors.mutedForeground }}
          >
            {title}
          </h4>
          <span className={`text-[10px] font-bold uppercase tracking-wider ${styles.text}`}>
            {rarity}
          </span>
        </div>
        {description && (
          <p
            className="text-xs mt-0.5"
            style={{ color: unlocked ? theme.colors.mutedForeground : theme.colors.border }}
          >
            {description}
          </p>
        )}
        {!unlocked && progress !== undefined && (
          <div className="mt-2">
            <div
              className="h-1.5 w-full rounded-full"
              style={{ backgroundColor: theme.colors.secondary }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`h-full rounded-full bg-gradient-to-r ${styles.gradient}`}
              />
            </div>
            <span
              className="text-[10px] mt-1"
              style={{ color: theme.colors.mutedForeground }}
            >
              {progress}% complete
            </span>
          </div>
        )}
        {unlocked && unlockedAt && (
          <span
            className="text-[10px] mt-1"
            style={{ color: theme.colors.border }}
          >
            Unlocked {unlockedAt}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default AchievementBadge;
