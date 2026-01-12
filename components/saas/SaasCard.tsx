import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface SaasCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  noPadding?: boolean;
  style?: React.CSSProperties;
}

const SaasCard: React.FC<SaasCardProps> = ({
  children,
  className = "",
  delay = 0,
  noPadding = false,
  style,
  ...props
}) => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative overflow-hidden shadow-sm backdrop-blur-sm ${noPadding ? '' : 'p-5'
        } ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
        color: theme.colors.cardForeground,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: theme.radius === 'none' ? '0' :
          theme.radius === 'sm' ? '0.125rem' :
            theme.radius === 'md' ? '0.375rem' :
              theme.radius === 'lg' ? '0.5rem' :
                theme.radius === 'xl' ? '0.75rem' : '1rem',
        ...style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SaasCard;