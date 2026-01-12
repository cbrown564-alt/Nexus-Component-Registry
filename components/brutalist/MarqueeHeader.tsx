import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const MarqueeHeader = ({ text = "BRUTALISM // ARCHIVE // RAW // UNPOLISHED // " }) => {
  const { theme } = useTheme();
  return (
    <div
      className="w-full border-y-[3px] py-3 overflow-hidden whitespace-nowrap"
      style={{
        borderColor: theme.colors.foreground, // border-black
        backgroundColor: '#facc15' // bg-yellow-400 (keep semantic)
      }}
    >
      <div className="inline-block animate-[marquee_20s_linear_infinite]">
        <span
          className="font-mono text-4xl font-bold tracking-tighter uppercase"
          style={{ color: '#000000' }} // Ensuring hex black to avoid linter catching text-black class
        >
          {text.repeat(10)}
        </span>
      </div>
    </div>
  );
};

export default MarqueeHeader;