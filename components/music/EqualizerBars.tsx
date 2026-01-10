import React from 'react';
import { motion } from 'framer-motion';

interface EqualizerBarsProps {
  isPlaying?: boolean;
  barCount?: number;
  className?: string;
}

const EqualizerBars: React.FC<EqualizerBarsProps> = ({
  isPlaying = true,
  barCount = 5,
  className = "",
}) => {
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div className={`flex items-end gap-0.5 h-4 ${className}`}>
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-fuchsia-500 to-purple-400 rounded-full"
          initial={{ height: 4 }}
          animate={
            isPlaying
              ? {
                  height: [4, 16, 8, 14, 6, 12, 4],
                }
              : { height: 4 }
          }
          transition={{
            duration: 0.8 + i * 0.1,
            repeat: isPlaying ? Infinity : 0,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default EqualizerBars;
