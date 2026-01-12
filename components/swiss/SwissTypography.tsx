import React from 'react';

interface SwissTypographyProps {
    children: React.ReactNode;
    variant?: 'display' | 'headline' | 'title' | 'body' | 'caption';
    color?: 'black' | 'red' | 'muted';
    className?: string;
    as?: React.ElementType;
}

const SwissTypography: React.FC<SwissTypographyProps> = ({
    children,
    variant = 'body',
    color = 'black',
    className = "",
    as: Component = 'div'
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'display':
                return 'text-7xl md:text-9xl font-black tracking-tighter leading-[0.85]';
            case 'headline':
                return 'text-4xl md:text-6xl font-black tracking-tight leading-none';
            case 'title':
                return 'text-xl md:text-2xl font-bold tracking-tight';
            case 'caption':
                return 'text-xs font-bold uppercase tracking-[0.3em]';
            default:
                return 'text-base font-medium leading-relaxed';
        }
    };

    const getColorStyle = (): React.CSSProperties => {
        switch (color) {
            case 'red':
                return { color: '#DC2626' };
            case 'muted':
                return { color: '#6b7280' };
            default:
                return { color: '#000000' };
        }
    };

    return (
        <Component
            className={`${getVariantStyles()} ${className}`}
            style={getColorStyle()}
        >
            {children}
        </Component>
    );
};

export default SwissTypography;
