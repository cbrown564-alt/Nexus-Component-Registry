import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, Zap, Flame, Droplets } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type BarType = 'health' | 'shield' | 'energy' | 'mana' | 'rage';

interface HealthBarProps {
  type?: BarType;
  current: number;
  max: number;
  label?: string;
  showNumbers?: boolean;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  compact?: boolean;
}

const typeConfig: Record<BarType, { icon: LucideIcon; gradient: string; glow: string; bgColor: string }> = {
  health: {
    icon: Heart,
    gradient: 'from-rose-500 to-red-600',
    glow: 'shadow-rose-500/50',
    bgColor: 'bg-rose-950/50',
  },
  shield: {
    icon: Shield,
    gradient: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/50',
    bgColor: 'bg-cyan-950/50',
  },
  energy: {
    icon: Zap,
    gradient: 'from-amber-400 to-yellow-500',
    glow: 'shadow-amber-500/50',
    bgColor: 'bg-amber-950/50',
  },
  mana: {
    icon: Droplets,
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/50',
    bgColor: 'bg-violet-950/50',
  },
  rage: {
    icon: Flame,
    gradient: 'from-orange-500 to-red-600',
    glow: 'shadow-orange-500/50',
    bgColor: 'bg-orange-950/50',
  },
};

const HealthBar: React.FC<HealthBarProps> = ({
  type = 'health',
  current,
  max,
  label,
  showNumbers = true,
  animated = true,
  size = 'md',
  compact = false,
}) => {
  const percentage = Math.min(100, Math.max(0, (current / max) * 100));
  const config = typeConfig[type];
  const Icon = config.icon;
  const isLow = percentage <= 25;
  const isCritical = percentage <= 10;

  const sizeStyles = {
    sm: { bar: 'h-2', icon: 'h-3 w-3', text: 'text-[10px]', container: 'gap-1.5' },
    md: { bar: 'h-3', icon: 'h-4 w-4', text: 'text-xs', container: 'gap-2' },
    lg: { bar: 'h-4', icon: 'h-5 w-5', text: 'text-sm', container: 'gap-3' },
  };

  const styles = sizeStyles[size];

  if (compact) {
    return (
      <div className={`flex items-center ${styles.container}`}>
        <Icon className={`${styles.icon} ${config.gradient.includes('rose') ? 'text-rose-400' : config.gradient.includes('cyan') ? 'text-cyan-400' : config.gradient.includes('amber') ? 'text-amber-400' : config.gradient.includes('violet') ? 'text-violet-400' : 'text-orange-400'}`} />
        <div className="flex-1">
          <div className={`${styles.bar} w-full rounded-full ${config.bgColor} border border-white/5 overflow-hidden`}>
            <motion.div
              initial={animated ? { width: 0 } : false}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`h-full rounded-full bg-gradient-to-r ${config.gradient} ${
                isCritical && animated ? 'animate-pulse' : ''
              }`}
            />
          </div>
        </div>
        {showNumbers && (
          <span className={`${styles.text} font-bold text-white tabular-nums min-w-[4ch]`}>
            {Math.round(current)}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col ${styles.container}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Icon className={`${styles.icon} ${isLow ? 'text-rose-400' : 'text-zinc-400'}`} />
          {label && <span className={`${styles.text} font-medium text-zinc-400 uppercase tracking-wider`}>{label}</span>}
        </div>
        {showNumbers && (
          <span className={`${styles.text} font-bold text-white tabular-nums`}>
            {Math.round(current)} / {max}
          </span>
        )}
      </div>

      {/* Bar */}
      <div className={`relative ${styles.bar} w-full rounded-full ${config.bgColor} border border-white/10 overflow-hidden`}>
        {/* Background segments for style */}
        <div className="absolute inset-0 flex">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-white/5 last:border-r-0" />
          ))}
        </div>

        {/* Fill */}
        <motion.div
          initial={animated ? { width: 0 } : false}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`relative h-full rounded-full bg-gradient-to-r ${config.gradient} shadow-lg ${config.glow}`}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
          
          {/* Pulse when low */}
          <AnimatePresence>
            {isLow && animated && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="absolute inset-0 bg-white rounded-full"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Critical damage flash */}
        <AnimatePresence>
          {isCritical && animated && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 bg-red-500 rounded-full"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HealthBar;
