import React, { useState, useEffect } from 'react';
import { Play, Pause, X, Plus, Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SmartTimer = () => {
  const [timers, setTimers] = useState([
      { id: 1, label: "Pasta", seconds: 485, active: true },
      { id: 2, label: "Sauce Simmer", seconds: 900, active: false },
  ]);

  const [isExpanded, setIsExpanded] = useState(true);

  // Simplified countdown logic for visual demo
  useEffect(() => {
      const interval = setInterval(() => {
          setTimers(current => current.map(t => 
              t.active && t.seconds > 0 ? { ...t, seconds: t.seconds - 1 } : t
          ));
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const toggleTimer = (id: number) => {
      setTimers(current => current.map(t => 
          t.id === id ? { ...t, active: !t.active } : t
      ));
  };

  if (!isExpanded) {
      return (
          <motion.button
            layoutId="timer-widget"
            onClick={() => setIsExpanded(true)}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-stone-800 text-white p-4 rounded-full shadow-xl shadow-stone-900/20"
          >
              <Timer className="h-6 w-6" />
              <span className="font-bold font-mono">{timers.filter(t => t.active).length} Active</span>
          </motion.button>
      );
  }

  return (
    <motion.div
        layoutId="timer-widget"
        className="fixed bottom-24 right-8 z-50 w-80 bg-stone-900 rounded-3xl p-6 shadow-2xl shadow-stone-900/40 text-stone-100"
    >
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
                <Timer className="h-5 w-5 text-orange-400" />
                Timers
            </h3>
            <div className="flex gap-2">
                <button className="p-1 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors">
                    <Plus className="h-4 w-4" />
                </button>
                <button 
                    onClick={() => setIsExpanded(false)}
                    className="p-1 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>

        <div className="space-y-4">
            <AnimatePresence>
                {timers.map((timer) => (
                    <motion.div 
                        key={timer.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-stone-800 rounded-2xl p-4"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-medium text-stone-400">{timer.label}</span>
                            <button 
                                onClick={() => toggleTimer(timer.id)}
                                className={`rounded-full p-2 ${timer.active ? 'bg-orange-500/20 text-orange-400' : 'bg-stone-700 text-stone-400'}`}
                            >
                                {timer.active ? <Pause className="h-3 w-3 fill-current" /> : <Play className="h-3 w-3 fill-current" />}
                            </button>
                        </div>
                        <div className="text-3xl font-mono font-bold tracking-tight text-white">
                            {formatTime(timer.seconds)}
                        </div>
                        {/* Progress Bar */}
                        <div className="mt-3 h-1.5 w-full bg-stone-900 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-orange-500 rounded-full"
                                initial={{ width: "100%" }}
                                animate={{ width: `${(timer.seconds / 900) * 100}%` }}
                            />
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    </motion.div>
  );
};

export default SmartTimer;