import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface BrutalistButtonProps extends HTMLMotionProps<"button"> {
    children?: React.ReactNode;
    variant?: 'neo' | 'reverse' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    color?: string; // Allow custom background colors for brutalist style
}

const BrutalistButton: React.FC<BrutalistButtonProps> = ({
    children,
    variant = 'neo',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    color,
    ...props
}) => {
    const { theme } = useTheme();
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wide border-2 transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-8 py-4 text-base',
        icon: 'p-3',
    };

    // Replace defaultColors classes with style objects
    const getDefaultStyle = () => {
        switch (variant) {
            case 'neo':
                return {
                    backgroundColor: theme.colors.background,
                    color: theme.colors.foreground,
                    borderColor: theme.colors.foreground
                };
            case 'reverse':
                return {
                    backgroundColor: theme.colors.foreground,
                    color: theme.colors.background,
                    borderColor: theme.colors.background
                };
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.foreground,
                    borderColor: theme.colors.foreground
                };
        }
    };

    // Shadow needs to match border/foreground
    const shadowColor = theme.colors.foreground;
    // We can't inject var easily into tailwind arbitrary value without CSS var.
    // So we use style for box-shadow.

    const shadowStyle = variant !== 'outline' ? {
        boxShadow: `4px 4px 0px 0px ${shadowColor}`
    } : {};

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${sizeStyles[size]} ${className}`}
            style={{
                ...getDefaultStyle(),
                ...shadowStyle,
                ...(color ? { backgroundColor: color } : {})
            }}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default BrutalistButton;
