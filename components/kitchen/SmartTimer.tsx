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
                className="fixed bottom-8 right-8 z-50 flex items-center gap-2 p-4 rounded-full shadow-xl"
                style={{ backgroundColor: '#292524', color: '#ffffff', boxShadow: '0 25px 50px -12px rgba(28,25,23,0.2)' }}
            >
                <Timer className="h-6 w-6" />
                <span className="font-bold font-mono">{timers.filter(t => t.active).length} Active</span>
            </motion.button>
        );
    }

    return (
        <motion.div
            layoutId="timer-widget"
            className="fixed bottom-24 right-8 z-50 w-80 rounded-3xl p-6 shadow-2xl"
            style={{ backgroundColor: '#1c1917', color: '#f5f5f4', boxShadow: '0 25px 50px -12px rgba(28,25,23,0.4)' }}
        >
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                    <Timer className="h-5 w-5" style={{ color: '#fb923c' }} />
                    Timers
                </h3>
                <div className="flex gap-2">
                    <button className="p-1 rounded-full transition-colors" style={{ backgroundColor: '#292524', color: '#a8a29e' }}>
                        <Plus className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="p-1 rounded-full transition-colors"
                        style={{ backgroundColor: '#292524', color: '#a8a29e' }}
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
                            className="rounded-2xl p-4"
                            style={{ backgroundColor: '#292524' }}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-medium" style={{ color: '#a8a29e' }}>{timer.label}</span>
                                <button
                                    onClick={() => toggleTimer(timer.id)}
                                    className="rounded-full p-2"
                                    style={timer.active
                                        ? { backgroundColor: 'rgba(249,115,22,0.2)', color: '#fb923c' }
                                        : { backgroundColor: '#44403c', color: '#a8a29e' }
                                    }
                                >
                                    {timer.active ? <Pause className="h-3 w-3 fill-current" /> : <Play className="h-3 w-3 fill-current" />}
                                </button>
                            </div>
                            <div className="text-3xl font-mono font-bold tracking-tight" style={{ color: '#ffffff' }}>
                                {formatTime(timer.seconds)}
                            </div>
                            {/* Progress Bar */}
                            <div className="mt-3 h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: '#1c1917' }}>
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: '#f97316' }}
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