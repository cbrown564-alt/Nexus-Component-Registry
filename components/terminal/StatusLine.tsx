import React from 'react';

export interface StatusLineProps {
    /** Current mode indicator (e.g., NORMAL, INSERT, VISUAL) */
    mode?: string;
    /** Git branch name */
    branch?: string;
    /** Whether the branch has uncommitted changes */
    branchDirty?: boolean;
    /** Center section text */
    statusText?: string;
    /** Uptime display string */
    uptime?: string;
    /** System load value */
    load?: number;
}

const StatusLine: React.FC<StatusLineProps> = ({
    mode = 'NORMAL',
    branch = 'main',
    branchDirty = true,
    statusText = 'SYSTEM MONITOR // CLUSTER-01',
    uptime = '4h 20m',
    load = 1.24,
}) => {
    return (
        <div className="w-full h-6 bg-[#282c34] flex items-stretch font-mono text-xs select-none">
            {/* Mode Indicator */}
            <div className="bg-[#98c379] text-[#282c34] px-3 font-bold flex items-center relative group">
                {mode}
                {/* Arrow */}
                <div className="absolute top-0 -right-3 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#98c379]" />
            </div>

            {/* Git Branch */}
            <div className="bg-[#3e4451] text-[#abb2bf] pl-5 pr-3 flex items-center relative ml-[0px]">
                <svg className="w-3 h-3 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3v12M18 9a9 9 0 01-9 9m9-9a9 9 0 00-9-9" /></svg>
                {branch}{branchDirty ? '*' : ''}
                <div className="absolute top-0 -right-3 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#3e4451] z-10" />
            </div>

            {/* File Path */}
            <div className="bg-[#282c34] text-[#abb2bf] pl-6 pr-3 flex items-center flex-1">
                {statusText}
            </div>

            {/* Right Side Info */}
            <div className="bg-[#3e4451] text-[#abb2bf] px-3 flex items-center relative">
                <div className="absolute top-0 -left-3 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[12px] border-t-transparent border-b-transparent border-r-[#3e4451]" />
                UPTIME: {uptime}
            </div>
            <div className="bg-[#61afef] text-[#282c34] px-3 font-bold flex items-center relative pl-5">
                <div className="absolute top-0 -left-3 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[12px] border-t-transparent border-b-transparent border-r-[#61afef]" />
                LOAD: {load.toFixed(2)}
            </div>
        </div>
    );
};

export default StatusLine;
