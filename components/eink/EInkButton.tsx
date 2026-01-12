import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EInkButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'ghost' | 'icon';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const EInkButton: React.FC<EInkButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
}) => {
    const [flashing, setFlashing] = useState(false);

    const handleClick = () => {
        if (disabled) return;

        // Simulate e-ink screen refresh flash
        setFlashing(true);
        setTimeout(() => setFlashing(false), 150);

        onClick?.();
    };

    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-serif font-bold uppercase tracking-[0.2em] transition-all duration-75 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#f4f4f3] disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-[10px]',
        md: 'px-5 py-2.5 text-xs',
        lg: 'px-8 py-3.5 text-sm',
    };

    const variantBaseStyles = {
        primary: 'border-2',
        ghost: 'bg-transparent border-2',
        icon: 'bg-transparent border-2 p-3',
    };

    const variantInlineStyles: Record<string, React.CSSProperties> = {
        primary: { backgroundColor: '#000000', color: '#f4f4f3', borderColor: '#000000' },
        ghost: { backgroundColor: 'transparent', color: '#000000', borderColor: '#000000' },
        icon: { backgroundColor: 'transparent', color: '#000000', borderColor: '#000000' },
    };

    const disabledStyles = disabled ? 'border-dashed' : '';

    return (
        <motion.button
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantBaseStyles[variant]} ${disabledStyles} ${className}`}
            style={disabled ? { borderColor: '#a8a29e', color: '#a8a29e', backgroundColor: 'transparent' } : variantInlineStyles[variant]}
            disabled={disabled}
            onClick={handleClick}
        >
            {/* E-Ink Flash Overlay */}
            <AnimatePresence>
                {flashing && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.05 }}
                            className="absolute inset-0 z-20"
                            style={{ backgroundColor: '#000000' }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.05, delay: 0.05 }}
                            className="absolute inset-0 z-20"
                            style={{ backgroundColor: '#ffffff' }}
                        />
                    </>
                )}
            </AnimatePresence>

            {icon && <span className="shrink-0 relative z-10">{icon}</span>}
            {children && <span className="relative z-10">{children}</span>}
        </motion.button>
    );
};

export default EInkButton;
