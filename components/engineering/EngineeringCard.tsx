import React from 'react';
import { useTheme } from '@/context/ThemeContext';

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
    const { theme } = useTheme();

    const getVariantStyles = () => {
        // We handle base structure in className, colors in style
        return '';
    };

    const getStyle = () => {
        const baseStyle = {
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.card,
        };

        switch (variant) {
            case 'highlight':
                return {
                    ...baseStyle,
                    backgroundImage: `linear-gradient(to bottom right, ${theme.colors.card}, ${theme.colors.secondary})`,
                    borderColor: theme.colors.primary // highlight border
                };
            case 'dark':
                return {
                    ...baseStyle,
                    backgroundColor: theme.colors.background, // darker than card
                    borderColor: theme.colors.border
                };
            default:
                return {
                    ...baseStyle,
                    // default card style
                };
        }
    };

    return (
        <div
            className={`relative overflow-hidden rounded-xl border p-6 transition-all duration-200 hover:border-opacity-100 ${className}`}
            style={{
                ...getStyle(),
                // Use CSS variable for hover if possible, or just rely on simple border hover
            }}
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
