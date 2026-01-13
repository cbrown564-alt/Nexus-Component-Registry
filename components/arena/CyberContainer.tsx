import React from 'react';

interface CyberContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
}

const CyberContainer: React.FC<CyberContainerProps> = ({ children, className = '', variant = 'primary', ...props }) => {

    // Define border/glow colors based on variant
    const getColors = () => {
        switch (variant) {
            case 'secondary': return 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.2)]';
            case 'danger': return 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]';
            default: return 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.2)]';
        }
    };

    const getCornerColor = () => {
        switch (variant) {
            case 'secondary': return 'border-purple-400';
            case 'danger': return 'border-red-400';
            default: return 'border-cyan-400';
        }
    };

    return (
        <div className={`relative bg-slate-900/80 backdrop-blur-sm border ${getColors()} ${className}`}
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'
            }}
            {...props}
        >
            {/* Top-Left Accent */}
            <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${getCornerColor()}`} />

            {/* Cut-Corner Decorative Line */}
            <div className={`absolute bottom-0 right-0 w-[28px] h-[1px] ${getCornerColor()} origin-bottom-right -rotate-45 translate-y-[-10px] translate-x-[-10px]`} />

            {children}
        </div>
    );
};

export default CyberContainer;
