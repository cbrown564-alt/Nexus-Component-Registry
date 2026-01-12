import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Crown, Gift, Trophy, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type RewardType = 'star' | 'crown' | 'trophy' | 'gift' | 'heart' | 'sparkle';

interface RewardStarProps {
  type?: RewardType;
  count?: number;
  label?: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  earned?: boolean;
}

const iconMap: Record<RewardType, LucideIcon> = {
  star: Star,
  crown: Crown,
  trophy: Trophy,
  gift: Gift,
  heart: Heart,
  sparkle: Sparkles,
};

const colorMap = {
  yellow: {
    bg: '#facc15',      // yellow-400
    shadow: 'rgba(250,204,21,0.5)',
    text: '#ca8a04',    // yellow-600
    glow: '#facc15',
  },
  pink: {
    bg: '#f472b6',      // pink-400
    shadow: 'rgba(244,114,182,0.5)',
    text: '#db2777',    // pink-600
    glow: '#f472b6',
  },
  blue: {
    bg: '#38bdf8',      // sky-400
    shadow: 'rgba(56,189,248,0.5)',
    text: '#0284c7',    // sky-600
    glow: '#38bdf8',
  },
  green: {
    bg: '#34d399',      // emerald-400
    shadow: 'rgba(52,211,153,0.5)',
    text: '#059669',    // emerald-600
    glow: '#34d399',
  },
  purple: {
    bg: '#a78bfa',      // violet-400
    shadow: 'rgba(167,139,250,0.5)',
    text: '#7c3aed',    // violet-600
    glow: '#a78bfa',
  },
};

const sizeMap = {
  sm: { icon: 'h-8 w-8', container: 'h-14 w-14', text: 'text-xs' },
  md: { icon: 'h-10 w-10', container: 'h-20 w-20', text: 'text-sm' },
  lg: { icon: 'h-14 w-14', container: 'h-28 w-28', text: 'text-base' },
};

const RewardStar: React.FC<RewardStarProps> = ({
  type = 'star',
  count,
  label,
  color = 'yellow',
  size = 'md',
  animated = true,
  earned = true,
}) => {
  const Icon = iconMap[type];
  const colors = colorMap[color];
  const sizes = sizeMap[size];

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        initial={animated ? { scale: 0, rotate: -180 } : false}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative"
      >
        {/* Glow effect */}
        {earned && animated && (
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-full blur-xl`}
            style={{ backgroundColor: colors.bg }}
          />
        )}

        {/* Main badge */}
        <motion.div
          whileHover={earned ? { scale: 1.1, rotate: 10 } : undefined}
          className={`relative flex items-center justify-center ${sizes.container} rounded-full border-4`}
          style={{
            backgroundColor: earned ? colors.bg : '#e5e7eb',
            boxShadow: earned ? `0 10px 15px -3px ${colors.shadow}` : 'none',
            borderColor: earned ? '#ffffff' : '#d1d5db'
          }}
        >
          <Icon
            className={`${sizes.icon} drop-shadow`}
            style={{ color: earned ? '#ffffff' : '#9ca3af' }}
            fill={earned ? 'currentColor' : 'none'}
          />

          {/* Count badge */}
          {count !== undefined && count > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-black shadow-md"
              style={{ backgroundColor: '#ffffff', color: colors.glow }}
            >
              {count}
            </motion.div>
          )}

          {/* Sparkles */}
          {earned && animated && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.cos((i * 120 * Math.PI) / 180) * 30,
                    y: Math.sin((i * 120 * Math.PI) / 180) * 30,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute"
                >
                  <Sparkles className="h-3 w-3" style={{ color: '#ffffff' }} />
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </motion.div>

      {label && (
        <span
          className={`font-black ${sizes.text}`}
          style={{ color: earned ? colors.text : '#9ca3af' }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default RewardStar;
