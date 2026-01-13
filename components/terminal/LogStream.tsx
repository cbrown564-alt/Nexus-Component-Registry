import React, { useState, useEffect, useRef } from 'react';

const LogStream: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const [isPaused, setIsPaused] = useState(false);
    const endRef = useRef<HTMLDivElement>(null);

    const generateLog = () => {
        const types = ['INFO', 'WARN', 'DEBUG', 'ERROR'];
        const type = types[Math.floor(Math.random() * types.length)] as 'INFO' | 'WARN' | 'DEBUG' | 'ERROR';
        const msgs = [
            'Packet received from 192.168.1.4',
            'Compiling modules...',
            'Garbage collection started',
            'Connection timed out (retrying)',
            'Heap usage at 64%',
            'User session auth_token refreshed'
        ];
        const msg = msgs[Math.floor(Math.random() * msgs.length)];
        const time = new Date().toISOString().split('T')[1].slice(0, 8);
        return { time, type, msg };
    };

    useEffect(() => {
        // Initial population
        setLogs(Array(10).fill(0).map(() => {
            const l = generateLog();
            return `[${l.time}] ${l.type.padEnd(5)} ${l.msg}`;
        }));
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            const l = generateLog();
            const text = `[${l.time}] ${l.type.padEnd(5)} ${l.msg}`;
            setLogs(prev => [...prev.slice(-49), text]); // Keep last 50
        }, 1500); // Slowed down
        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {
        if (!isPaused) {
            endRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                <span>/var/log/syslog</span>
                <button
                    onClick={() => setIsPaused(!isPaused)}
                    className={`px-2 py-0.5 rounded cursor-pointer ${isPaused ? 'bg-[#e06c75] text-[#282c34]' : 'bg-[#98c379] text-[#282c34]'} hover:opacity-80 transition-colors`}
                >
                    {isPaused ? 'PAUSED' : 'LIVE'}
                </button>
            </div>

            {/* Scrollable Area */}
            <div className="flex-1 overflow-y-auto p-2 font-mono scrollbar-hide">
                {logs.map((log, i) => (
                    <div key={i} className={`whitespace-pre-wrap ${getColor(log)}`}>
                        {log}
                    </div>
                ))}
                <div ref={endRef} />
            </div>
        </div>
    );
};

export default LogStream;
