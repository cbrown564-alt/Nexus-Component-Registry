import React from 'react';
import { motion } from 'framer-motion';

interface OrganicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: React.ReactNode;
}

const OrganicButton: React.FC<OrganicButtonProps> = ({ children, className = '', variant = 'primary', icon, ...props }) => {
    
    const baseStyles = "px-6 py-3 font-bold transition-all duration-300 flex items-center gap-2 text-sm uppercase tracking-wider shadow-sm hover:shadow-md active:scale-95";
    
    // Organic shapes using border-radius
    const shapeStyles = {
        primary: { borderRadius: '18px 24px 18px 24px / 24px 18px 24px 18px' },
        secondary: { borderRadius: '24px 18px 24px 18px / 18px 24px 18px 24px' },
        outline: { borderRadius: '20px 20px 20px 20px' }
    };

    const variantStyles = {
        primary: "bg-[#3d3a3a] text-white hover:bg-[#5d5a5a]",
        secondary: "bg-[#78866b] text-white hover:bg-[#6a765e]",
        outline: "bg-white border text-[#3d3a3a] hover:bg-[#faf9f6] border-[#d6cfc2]"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            style={shapeStyles[variant]}
            {...props}
        >
            {icon}
            {children}
        </motion.button>
    );
};

export default OrganicButton;
