import React, { useState, useEffect, useRef } from 'react';

export interface LogEntry {
    time: string;
    type: 'INFO' | 'WARN' | 'DEBUG' | 'ERROR';
    message: string;
}

export interface LogStreamProps {
    /** Initial log entries to display */
    initialLogs?: LogEntry[];
    /** Interval in ms between new log entries (0 to disable auto-generation) */
    refreshInterval?: number;
    /** Maximum number of logs to keep in view */
    maxLogs?: number;
    /** Title shown in the header */
    title?: string;
    /** Whether to start paused */
    startPaused?: boolean;
}

const defaultMessages = [
    'Packet received from 192.168.1.4',
    'Compiling modules...',
    'Garbage collection started',
    'Connection timed out (retrying)',
    'Heap usage at 64%',
    'User session auth_token refreshed'
];

const generateLog = (): LogEntry => {
    const types: LogEntry['type'][] = ['INFO', 'WARN', 'DEBUG', 'ERROR'];
    const type = types[Math.floor(Math.random() * types.length)];
    const message = defaultMessages[Math.floor(Math.random() * defaultMessages.length)];
    const time = new Date().toISOString().split('T')[1].slice(0, 8);
    return { time, type, message };
};

const formatLog = (log: LogEntry): string => {
    return `[${log.time}] ${log.type.padEnd(5)} ${log.message}`;
};

const LogStream: React.FC<LogStreamProps> = ({
    initialLogs,
    refreshInterval = 1500,
    maxLogs = 50,
    title = '/var/log/syslog',
    startPaused = false,
}) => {
    const [logs, setLogs] = useState<string[]>([]);
    const [isPaused, setIsPaused] = useState(startPaused);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initialize logs
    useEffect(() => {
        if (initialLogs) {
            setLogs(initialLogs.map(formatLog));
        } else {
            setLogs(Array(10).fill(0).map(() => formatLog(generateLog())));
        }
    }, [initialLogs]);

    // Auto-generate new logs
    useEffect(() => {
        if (isPaused || refreshInterval === 0) return;

        const interval = setInterval(() => {
            const text = formatLog(generateLog());
            setLogs(prev => [...prev.slice(-(maxLogs - 1)), text]);
        }, refreshInterval);
        return () => clearInterval(interval);
    }, [isPaused, refreshInterval, maxLogs]);

    // Auto-scroll to bottom
    useEffect(() => {
        if (!isPaused && containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [logs, isPaused]);

    const getColor = (line: string) => {
        if (line.includes('ERROR')) return 'text-[#e06c75]';
        if (line.includes('WARN')) return 'text-[#e5c07b]';
        if (line.includes('DEBUG')) return 'text-[#56b6c2]';
        return 'text-[#98c379]'; // INFO / Default
    };

    return (
        <div className="font-mono text-xs w-full h-full flex flex-col bg-[#0c0c0c] text-[#abb2bf] overflow-hidden">
            {/* Header */}
            <div className="bg-[#282c34] text-[#7f848e] px-2 py-1 text-[10px] uppercase tracking-wider border-b border-[#3e4451] flex justify-between items-center select-none shrink-0">
                <span>{title}</span>
                <button
                    onClick={() => setIsPaused(!isPaused)}
                    className={`px-2 py-0.5 rounded cursor-pointer ${isPaused ? 'bg-[#e06c75] text-[#282c34]' : 'bg-[#98c379] text-[#282c34]'} hover:opacity-80 transition-colors`}
                >
                    {isPaused ? 'PAUSED' : 'LIVE'}
                </button>
            </div>

            {/* Scrollable Area */}
            <div ref={containerRef} className="flex-1 overflow-y-auto p-2 font-mono scrollbar-hide">
                {logs.map((log, i) => (
                    <div key={i} className={`whitespace-pre-wrap ${getColor(log)}`}>
                        {log}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogStream;
