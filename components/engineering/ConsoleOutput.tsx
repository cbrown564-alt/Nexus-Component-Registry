import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronDown, Trash2 } from 'lucide-react';

export interface LogEntry {
    id: string;
    type: 'info' | 'warn' | 'error' | 'success' | 'debug';
    message: string;
    timestamp?: string;
}

interface ConsoleOutputProps {
    logs?: LogEntry[];
    title?: string;
    maxHeight?: string;
    showTimestamps?: boolean;
    className?: string;
    autoScroll?: boolean;
}

const defaultLogs: LogEntry[] = [
    { id: '1', type: 'info', message: 'Server starting on port 3000...', timestamp: '10:42:01' },
    { id: '2', type: 'success', message: 'Database connection established', timestamp: '10:42:02' },
    { id: '3', type: 'debug', message: 'Loading configuration from env', timestamp: '10:42:02' },
    { id: '4', type: 'warn', message: 'Deprecated API endpoint detected', timestamp: '10:42:03' },
    { id: '5', type: 'info', message: 'Worker threads: 4 active', timestamp: '10:42:04' },
    { id: '6', type: 'error', message: 'Failed to connect to cache server', timestamp: '10:42:05' },
    { id: '7', type: 'success', message: 'All services initialized', timestamp: '10:42:06' },
];

const ConsoleOutput: React.FC<ConsoleOutputProps> = ({
    logs = defaultLogs,
    title = 'Console',
    maxHeight = '300px',
    showTimestamps = true,
    className = '',
    autoScroll = true
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isAtBottom, setIsAtBottom] = useState(true);

    const getTypeStyles = (type: LogEntry['type']) => {
        switch (type) {
            case 'error':
                return 'text-red-400 before:content-["✕"] before:mr-2';
            case 'warn':
                return 'text-amber-400 before:content-["⚠"] before:mr-2';
            case 'success':
                return 'text-emerald-400 before:content-["✓"] before:mr-2';
            case 'debug':
                return 'text-zinc-500 before:content-["●"] before:mr-2';
            default:
                return 'text-blue-400 before:content-["›"] before:mr-2';
        }
    };

    useEffect(() => {
        if (autoScroll && isAtBottom && scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs, autoScroll, isAtBottom]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        setIsAtBottom(scrollHeight - scrollTop - clientHeight < 20);
    };

    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };

    return (
        <div className={`rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/70 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-zinc-300">{title}</span>
                    <span className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-500 rounded">
                        {logs.length} lines
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 rounded transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            {/* Log Output */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="overflow-auto font-mono text-xs leading-relaxed"
                style={{ maxHeight }}
            >
                <div className="p-4 space-y-0.5">
                    <AnimatePresence initial={false}>
                        {logs.map((log, index) => (
                            <motion.div
                                key={log.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15, delay: index * 0.02 }}
                                className={`flex items-start gap-3 py-1 ${getTypeStyles(log.type)}`}
                            >
                                {showTimestamps && log.timestamp && (
                                    <span className="text-zinc-600 shrink-0 tabular-nums">
                                        {log.timestamp}
                                    </span>
                                )}
                                <span className="flex-1">{log.message}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Scroll to bottom indicator */}
            {!isAtBottom && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={scrollToBottom}
                    className="absolute bottom-14 right-4 flex items-center gap-1 px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded-full hover:bg-zinc-700 transition-colors"
                >
                    <ChevronDown className="w-3 h-3" />
                    New logs
                </motion.button>
            )}

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-zinc-900/50 border-t border-zinc-800 text-[10px] text-zinc-600">
                <span>stdout</span>
                <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                </span>
            </div>
        </div>
    );
};

export default ConsoleOutput;
