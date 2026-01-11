import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface MagazineCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const MagazineCard: React.FC<MagazineCardProps> = ({
  children,
  className = "",
  style
}) => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  return (
    <div
      className={`border p-6 ${className}`}
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