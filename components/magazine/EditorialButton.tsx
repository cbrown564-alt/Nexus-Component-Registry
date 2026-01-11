import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface EditorialButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'link';
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const EditorialButton: React.FC<EditorialButtonProps> = ({
    children,
    variant = 'primary',
    className = "",
    onClick,
    style
}) => {
    const { currentPlaygroundTheme } = useTheme()
    const theme = currentPlaygroundTheme

    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-colors";

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    padding: '0.75rem 2rem',
                    fontSize: '0.75rem',
                }
            case 'secondary':
                return {
                    backgroundColor: 'transparent',
                    border: `1px solid ${theme.colors.border}`,
                    color: theme.colors.foreground,
                    padding: '0.75rem 2rem',
                    fontSize: '0.75rem',
                }
            case 'link':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.primary,
                    padding: 0,
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    fontSize: '0.875rem',
                }
            default: return {}
        }
    }

    return (
        <button
            className={`${baseStyles} ${className} hover:opacity-80`}
            onClick={onClick}
            style={{
                fontFamily: theme.typography.fontFamily,
                borderRadius: theme.radius === 'lg' ? '4px' : '0',
                ...getVariantStyles(),
                ...style
            }}
        >
            {children}
        </button>
    );
};

export default EditorialButton;
