import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface MagazineCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hoverEffect?: boolean;
  noPadding?: boolean;
}

const MagazineCard: React.FC<MagazineCardProps> = ({
  children,
  className = "",
  style,
  hoverEffect = true,
  noPadding = false
}) => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  return (
    <div
      className={`border ${noPadding ? '' : 'p-6'} ${hoverEffect ? 'hover:shadow-lg transition-shadow duration-300' : ''} ${className}`}
      style={{
        backgroundColor: theme.colors.card,
        color: theme.colors.cardForeground,
        borderColor: theme.colors.border,
        borderRadius: theme.radius === 'lg' ? '0.5rem' : theme.radius === 'md' ? '0.25rem' : '0',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default MagazineCard;