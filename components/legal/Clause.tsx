import React, { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ClauseProps {
  number: string;
  title?: string;
  children: React.ReactNode;
  isActive?: boolean;
  hasComment?: boolean;
  onClick?: () => void;
}

const Clause: React.FC<ClauseProps> = ({
  number,
  title,
  children,
  isActive = false,
  hasComment = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative mb-6 transition-colors duration-200 rounded-md p-2 -ml-2 cursor-text"
      style={{
        backgroundColor: isActive ? `${theme.colors.primary}0d` : isHovered ? theme.colors.muted : 'transparent'
      }}
    >
      {/* Paragraph Number */}
      <div
        className="absolute -left-12 top-2.5 font-mono text-xs w-8 text-right transition-colors"
        style={{ color: isHovered ? theme.colors.secondaryForeground : theme.colors.mutedForeground }}
      >
        {number}
      </div>

      {/* Hover Action */}
      <button
        className="absolute -right-8 top-2 opacity-0 group-hover:opacity-100 transition-all"
        style={{ color: isHovered ? theme.colors.primary : theme.colors.mutedForeground }}
      >
        <MessageSquarePlus className="h-4 w-4" />
      </button>

      {/* Comment Indicator */}
      {hasComment && (
        <div className="absolute -right-3 top-3 h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.primary, boxShadow: `0 0 0 2px ${theme.colors.card}` }} />
      )}

      {title && (
        <h3 className="mb-2 font-bold text-sm uppercase tracking-wide" style={{ color: theme.colors.foreground }}>
          {title}
        </h3>
      )}

      <div className="text-sm leading-relaxed font-serif text-justify" style={{ color: theme.colors.cardForeground }}>
        {children}
      </div>
    </div>
  );
};

export default Clause;