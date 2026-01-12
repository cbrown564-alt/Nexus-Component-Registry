import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import WellnessCard from './WellnessCard';
import { useTheme } from '@/context/ThemeContext';

interface MeditationTimerProps {
  duration?: number; // in minutes
  onComplete?: () => void;
  soundEnabled?: boolean;
  presets?: number[];
}

const MeditationTimer: React.FC<MeditationTimerProps> = ({
  duration = 10,
  onComplete,
  soundEnabled = true,
  presets = [5, 10, 15, 20],
}) => {
  const { theme } = useTheme();
  const [selectedDuration, setSelectedDuration] = useState(duration);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(soundEnabled);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    setTimeLeft(selectedDuration * 60);
  }, [selectedDuration]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            if (onComplete) onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = 1 - timeLeft / (selectedDuration * 60);
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference * (1 - progress);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(selectedDuration * 60);
  };

  return (
    <WellnessCard className="flex flex-col items-center text-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-6">
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: theme.colors.mutedForeground }}
        >
          Meditation
        </span>
        <button
          onClick={() => setIsSoundOn(!isSoundOn)}
          className="p-2 rounded-full transition-colors"
          style={{ color: theme.colors.mutedForeground }}
          aria-label={isSoundOn ? 'Mute sound' : 'Enable sound'}
        >
          {isSoundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>
      </div>

      {/* Timer Circle */}
      <div className="relative flex items-center justify-center my-6">
        {/* Background glow */}
        <motion.div
          animate={isRunning ? {
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.1, 0.2]
          } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-sage-200 blur-xl"
          style={{ width: 220, height: 220, margin: 'auto' }}
        />

        {/* SVG Ring */}
        <svg width="200" height="200" className="relative z-10 -rotate-90">
          {/* Background ring */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={theme.colors.muted}
            strokeWidth="4"
          />
          {/* Progress ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            initial={false}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a3b18a" />
              <stop offset="100%" stopColor="#588157" />
            </linearGradient>
          </defs>
        </svg>

        {/* Time Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={formatTime(timeLeft)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-serif text-4xl"
              style={{ color: theme.colors.foreground }}
            >
              {formatTime(timeLeft)}
            </motion.span>
          </AnimatePresence>
          <span
            className="text-xs mt-1"
            style={{ color: theme.colors.mutedForeground }}
          >
            {isRunning ? 'remaining' : 'ready'}
          </span>
        </div>
      </div>

      {/* Duration Presets */}
      <div className="flex gap-2 my-4">
        {presets.map((mins) => (
          <button
            key={mins}
            onClick={() => {
              if (!isRunning) {
                setSelectedDuration(mins);
              }
            }}
            disabled={isRunning}
            className="px-3 py-1.5 rounded-full text-sm transition-all disabled:opacity-50"
            style={selectedDuration === mins ? {
              backgroundColor: theme.colors.primary,
              color: theme.colors.primaryForeground
            } : {
              backgroundColor: theme.colors.muted,
              color: theme.colors.mutedForeground
            }}
          >
            {mins}m
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="p-3 rounded-full transition-colors"
          style={{
            backgroundColor: theme.colors.muted,
            color: theme.colors.mutedForeground
          }}
          aria-label="Reset timer"
        >
          <RotateCcw className="h-5 w-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsRunning(!isRunning)}
          className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-colors"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.primaryForeground
          }}
          aria-label={isRunning ? 'Pause' : 'Play'}
        >
          {isRunning ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 ml-1" />
          )}
        </motion.button>

        <div className="w-11" /> {/* Spacer for symmetry */}
      </div>

      {/* Session info */}
      <p
        className="text-xs mt-6"
        style={{ color: theme.colors.mutedForeground }}
      >
        Find a comfortable position and focus on your breath
      </p>
    </WellnessCard>
  );
};

export default MeditationTimer;
