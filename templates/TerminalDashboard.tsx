import React from 'react';
import StatusLine from '../components/terminal/StatusLine';
import ASCIIChart from '../components/terminal/ASCIIChart';
import ProcessTable from '../components/terminal/ProcessTable';
import LogStream from '../components/terminal/LogStream';

const TerminalDashboard: React.FC = () => {
    return (
        <div className="h-screen bg-[#0c0c0c] flex flex-col text-[#abb2bf] font-mono overflow-hidden selection:bg-[#61afef] selection:text-black">

            {/* Top Area: Grid of Panes 
                min-h-0 is crucial for nested scrollbars to work in grid items
            */}
            <div className="flex-1 grid grid-cols-12 grid-rows-2 gap-[1px] bg-[#3e4451] p-[1px] min-h-0">

                {/* Pane 1: Process Table (Top Left, Large) */}
                <div className="col-span-8 row-span-1 bg-[#0c0c0c] overflow-hidden flex flex-col relative min-h-0">
                    <ProcessTable />
                </div>

                {/* Pane 2: System Resources (Top Right) - Split into two stacked panes via nested grid */}
                <div className="col-span-4 row-span-1 grid grid-rows-2 gap-[1px] bg-[#3e4451] min-h-0">
                    <div className="bg-[#0c0c0c] p-4 relative min-h-0 flex flex-col justify-end">
                        <div className="absolute top-0 right-0 p-1 text-[10px] text-[#5c6370] border-l border-b border-[#3e4451]">CPU_0</div>
                        <div className="text-[#5c6370] text-[10px] uppercase mb-1">CPU_History</div>
                        <ASCIIChart
                            data={[10, 25, 40, 30, 20, 45, 60, 50, 40, 30, 20, 10, 15, 20, 25, 30]}
                            color="#e06c75"
                            height={5}
                        />
                    </div>
                    <div className="bg-[#0c0c0c] p-4 relative min-h-0 flex flex-col justify-end">
                        <div className="absolute top-0 right-0 p-1 text-[10px] text-[#5c6370] border-l border-b border-[#3e4451]">NET_ETH0</div>
                        <div className="text-[#5c6370] text-[10px] uppercase mb-1">Net_Traffic_In</div>
                        <ASCIIChart
                            data={[2, 4, 8, 16, 12, 8, 4, 30, 25, 10, 5, 2, 4, 6, 8, 12]}
                            color="#61afef"
                            height={5}
                        />
                    </div>
                </div>

                {/* Pane 3: Logs (Bottom Full Width) */}
                <div className="col-span-12 row-span-1 bg-[#0c0c0c] overflow-hidden relative min-h-0 flex flex-col">
                    <LogStream />
                </div>

            </div>

            {/* Status Bar */}
            <StatusLine />
        </div>
    );
};

export default TerminalDashboard;
