import React, { useState, useEffect } from 'react';

const ProcessTable: React.FC = () => {
    const [selectedRow, setSelectedRow] = useState(0);

    // Fake process data
    const processes = [
        { pid: 1192, user: 'root', cpu: 12.4, mem: 4.2, command: 'nexus-core' },
        { pid: 1204, user: 'user', cpu: 8.1, mem: 14.5, command: 'node server.js' },
        { pid: 1492, user: 'root', cpu: 2.1, mem: 1.1, command: 'docker-daemon' },
        { pid: 2201, user: 'user', cpu: 0.8, mem: 2.3, command: 'zsh' },
        { pid: 3391, user: 'user', cpu: 0.1, mem: 0.4, command: 'vim config.ts' },
        { pid: 88, user: 'root', cpu: 0.0, mem: 0.1, command: 'init' },
        { pid: 442, user: 'root', cpu: 0.0, mem: 0.2, command: 'kworker/u16' },
    ];

    useEffect(() => {
        // Auto-move selection occasionally to feel alive
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                setSelectedRow(prev => (prev + 1) % processes.length);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [processes.length]);

    return (
        <div className="font-mono text-xs w-full h-full flex flex-col">
            <div className="bg-[#282c34] text-[#abb2bf] font-bold px-2 py-1 flex justify-between border-b border-[#3e4451]">
                <span className="w-16">PID</span>
                <span className="w-16">USER</span>
                <span className="w-12 text-right">CPU%</span>
                <span className="w-12 text-right">MEM%</span>
                <span className="flex-1 pl-4">COMMAND</span>
            </div>
            <div className="flex-1 overflow-auto bg-[#0c0c0c]">
                {processes.map((proc, i) => (
                    <div
                        key={proc.pid}
                        className={`px-2 py-[2px] flex justify-between cursor-pointer ${i === selectedRow ? 'bg-[#61afef] text-[#0c0c0c]' : 'text-[#abb2bf] hover:bg-[#282c34]'
                            }`}
                        onClick={() => setSelectedRow(i)}
                    >
                        <span className="w-16">{proc.pid}</span>
                        <span className="w-16">{proc.user}</span>
                        <span className="w-12 text-right">{proc.cpu.toFixed(1)}</span>
                        <span className="w-12 text-right">{proc.mem.toFixed(1)}</span>
                        <span className="flex-1 pl-4 font-bold">{proc.command}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessTable;
