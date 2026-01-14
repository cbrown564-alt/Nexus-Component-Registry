import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { motion as tokens } from '@/data/motion';
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
      transition={{ ...tokens.transition.card, delay }}
      className={`relative overflow-hidden shadow-sm backdrop-blur-sm ${noPadding ? '' : 'p-5'
        } ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)',
        color: 'var(--card-foreground)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: 'var(--radius)',
        ...style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SaasCard;