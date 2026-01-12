import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Flame, Droplets, Moon, Sun, Heart, Dumbbell, BookOpen, Salad } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

type HabitIcon = 'flame' | 'droplets' | 'moon' | 'sun' | 'heart' | 'dumbbell' | 'book' | 'salad';

interface HabitCheckboxProps {
  label: string;
  description?: string;
  icon?: HabitIcon;
  streak?: number;
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
  color?: 'sage' | 'amber' | 'rose' | 'sky' | 'violet';
}

const iconMap: Record<HabitIcon, LucideIcon> = {
  flame: Flame,
  droplets: Droplets,
  moon: Moon,
  sun: Sun,
  heart: Heart,
  dumbbell: Dumbbell,
  book: BookOpen,
  salad: Salad,
};

const colorMap = {
  sage: {
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    checked: 'bg-sage-500',
    icon: 'text-sage-500',
    streak: 'text-sage-600',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    checked: 'bg-amber-500',
    icon: 'text-amber-500',
    streak: 'text-amber-600',
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    checked: 'bg-rose-500',
    icon: 'text-rose-400',
    streak: 'text-rose-600',
  },
  sky: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    checked: 'bg-sky-500',
    icon: 'text-sky-500',
    streak: 'text-sky-600',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    checked: 'bg-violet-500',
    icon: 'text-violet-500',
    streak: 'text-violet-600',
  },
};

const HabitCheckbox: React.FC<HabitCheckboxProps> = ({
  label,
  description,
  icon = 'flame',
  streak = 0,
  checked: controlledChecked,
  onToggle,
  color = 'sage',
}) => {
  const { theme } = useTheme();
  const [internalChecked, setInternalChecked] = useState(false);
  const isChecked = controlledChecked ?? internalChecked;
  const IconComponent = iconMap[icon];
  const colors = colorMap[color];

  const handleToggle = () => {
    const newValue = !isChecked;
    setInternalChecked(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${isChecked
        ? `${colors.bg} ${colors.border}`
        : 'hover:border-opacity-100' // Base styles handled via inline
        }`}
      style={!isChecked ? {
        backgroundColor: theme.colors.card, // or card/secondary
        borderColor: theme.colors.border
      } : undefined}
      onClick={handleToggle}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      {/* Icon */}
      <div
        className={`flex-shrink-0 p-2 rounded-xl ${isChecked ? colors.bg : ''}`}
        style={!isChecked ? { backgroundColor: theme.colors.muted } : undefined}
      >
        <IconComponent
          className={`h-5 w-5 ${isChecked ? colors.icon : ''}`}
          style={!isChecked ? { color: theme.colors.mutedForeground } : undefined}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="font-medium"
            style={{ color: isChecked ? undefined : theme.colors.foreground }}
          >
            {label}
          </span>
          {streak > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`flex items-center gap-0.5 text-xs font-medium ${colors.streak}`}
            >
              <Flame className="h-3 w-3" />
              {streak}
            </motion.span>
          )}
        </div>
        {description && (
          <p
            className="text-sm truncate"
            style={{ color: theme.colors.mutedForeground }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Checkbox */}
      <div className="flex-shrink-0">
        <motion.div
          className={`relative w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${isChecked
            ? `${colors.checked} border-transparent`
            : ''
            }`}
          style={!isChecked ? {
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.background
          } : undefined}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence>
            {isChecked && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <Check className="h-4 w-4" style={{ color: '#ffffff' }} strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Celebration particles */}
      <AnimatePresence>
        {isChecked && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 1
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(i * 60 * Math.PI / 180) * 30,
                  y: Math.sin(i * 60 * Math.PI / 180) * 30,
                  opacity: [1, 1, 0]
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`absolute right-4 w-1.5 h-1.5 rounded-full ${colors.checked}`}
                style={{ pointerEvents: 'none' }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HabitCheckbox;
