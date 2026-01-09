import React from 'react';

interface EngineeringCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'highlight' | 'dark';
}

const EngineeringCard: React.FC<EngineeringCardProps> = ({
    children,
    className = "",
    variant = 'default'
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'highlight':
                return 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border-zinc-700';
            case 'dark':
                return 'bg-zinc-950 border-zinc-800';
            default:
                return 'bg-zinc-900/50 border-zinc-800';
        }
    };

    return (
        <div
            className={`relative overflow-hidden rounded-xl border p-6 transition-all duration-200 hover:border-zinc-700 ${getVariantStyles()} ${className}`}
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default EngineeringCard;
