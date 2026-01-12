import React from 'react';
import { motion } from 'framer-motion';

interface SpeechBubbleProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'bottom';
  color?: 'white' | 'blue' | 'pink' | 'yellow' | 'green';
  animated?: boolean;
  character?: string;
}

const colorStyles = {
  white: { bg: '#ffffff', border: '#e5e7eb' },
  blue: { bg: '#e0f2fe', border: '#bae6fd' },
  pink: { bg: '#fce7f3', border: '#fbcfe8' },
  yellow: { bg: '#fef9c3', border: '#fef08a' },
  green: { bg: '#d1fae5', border: '#a7f3d0' },
};

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  direction = 'left',
  color = 'white',
  animated = true,
  character,
}) => {
  const tailPositionClasses = {
    left: 'left-4 -bottom-3',
    right: 'right-4 -bottom-3',
    bottom: 'left-1/2 -translate-x-1/2 -bottom-3',
  };

  return (
    <div className="flex items-end gap-3">
      {character && direction === 'left' && (
        <motion.div
          initial={animated ? { scale: 0 } : false}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-2xl shadow-lg"
        >
          {character}
        </motion.div>
      )}

      <motion.div
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: character ? 0.1 : 0 }}
        className={`relative rounded-2xl border-2 px-5 py-4 shadow-md max-w-xs`}
        style={{ backgroundColor: colorStyles[color].bg, borderColor: colorStyles[color].border }}
      >
        <div className="text-sm font-medium leading-relaxed" style={{ color: '#374151' }}>{children}</div>

        {/* Tail */}
        <div
          className={`absolute ${tailPositionClasses[direction]} w-0 h-0`}
          style={{
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: `12px solid ${color === 'white'
                ? '#fff'
                : color === 'blue'
                  ? '#e0f2fe'
                  : color === 'pink'
                    ? '#fce7f3'
                    : color === 'yellow'
                      ? '#fef9c3'
                      : '#d1fae5'
              }`,
          }}
        />
        {/* Tail border */}
        <div
          className={`absolute ${tailPositionClasses[direction]} w-0 h-0 -z-10`}
          style={{
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: `14px solid ${color === 'white'
                ? '#e5e7eb'
                : color === 'blue'
                  ? '#bae6fd'
                  : color === 'pink'
                    ? '#fbcfe8'
                    : color === 'yellow'
                      ? '#fef08a'
                      : '#a7f3d0'
              }`,
            marginBottom: '-2px',
          }}
        />
      </motion.div>

      {character && direction === 'right' && (
        <motion.div
          initial={animated ? { scale: 0 } : false}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-2xl shadow-lg"
        >
          {character}
        </motion.div>
      )}
    </div>
  );
};

export default SpeechBubble;
