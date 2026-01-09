import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface EditorialButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'link' | 'outline';
}

const EditorialButton: React.FC<EditorialButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    ...props
}) => {
    if (variant === 'link') {
        return (
            <motion.button
                whileHover={{ x: 4 }}
                className={`
          group inline-flex items-center gap-2
          font-serif italic text-neutral-900 
          border-b border-neutral-900 pb-0.5
          hover:border-neutral-500 hover:text-neutral-600
          transition-colors duration-300
          ${className}
        `}
                {...props}
            >
                <span>{children}</span>
                <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="inline-block"
                >
                    →
                </motion.span>
            </motion.button>
        );
    }

    if (variant === 'outline') {
        return (
            <motion.button
                whileHover={{ backgroundColor: 'rgb(23, 23, 23)', color: 'white' }}
                whileTap={{ scale: 0.98 }}
                className={`
          px-8 py-3
          font-serif text-sm tracking-wide
          text-neutral-900
          border-2 border-neutral-900
          transition-all duration-300
          ${className}
        `}
                {...props}
            >
                {children}
            </motion.button>
        );
    }

    // Primary variant
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        relative overflow-hidden
        px-8 py-3
        bg-neutral-900 text-white
        font-serif text-sm tracking-wide
        transition-all duration-300
        ${className}
      `}
            {...props}
        >
            {/* Hover fill effect */}
            <motion.span
                className="absolute inset-0 bg-neutral-700 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
            />

            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

export default EditorialButton;
