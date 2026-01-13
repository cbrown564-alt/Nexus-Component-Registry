import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';

interface DraggableWindowProps {
    title: string;
    children: React.ReactNode;
    initialX?: number;
    initialY?: number;
    width?: string;
    className?: string;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({ title, children, initialX = 0, initialY = 0, width = "400px", className = "" }) => {
    const [isClosed, setIsClosed] = useState(false);

    if (isClosed) return null;

    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ x: initialX, y: initialY }}
            className={`absolute bg-[#e5e5e5] border-[4px] border-black shadow-[8px_8px_0px_#000000] overflow-hidden flex flex-col ${className}`}
            style={{ width }}
        >
            {/* Title Bar */}
            <div className="h-10 bg-[#000080] text-white flex items-center justify-between px-2 cursor-move border-b-[4px] border-black select-none">
                <span className="font-mono font-bold uppercase truncate mr-4">System32//{title}</span>
                <div className="flex gap-2">
                    <button className="w-6 h-6 bg-[#e5e5e5] border-2 border-r-black border-b-black border-t-white border-l-white flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white text-black">
                        <Minus size={12} strokeWidth={4} />
                    </button>
                    <button className="w-6 h-6 bg-[#e5e5e5] border-2 border-r-black border-b-black border-t-white border-l-white flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white text-black">
                        <Square size={10} strokeWidth={4} />
                    </button>
                    <button
                        onClick={() => setIsClosed(true)}
                        className="w-6 h-6 bg-[#ff0000] border-2 border-r-black border-b-black border-t-[#ffcccc] border-l-[#ffcccc] flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white text-white"
                    >
                        <X size={14} strokeWidth={4} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 font-mono text-sm overflow-auto max-h-[400px]">
                {children}
            </div>
        </motion.div>
    );
};

export default DraggableWindow;
