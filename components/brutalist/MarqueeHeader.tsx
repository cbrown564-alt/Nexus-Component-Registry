import React from 'react';

const MarqueeHeader = ({ text = "BRUTALISM // ARCHIVE // RAW // UNPOLISHED // " }) => {
  return (
    <div className="w-full border-y-[3px] border-black bg-yellow-400 py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-[marquee_20s_linear_infinite]">
        <span className="font-mono text-4xl font-bold tracking-tighter text-black uppercase">
          {text.repeat(10)}
        </span>
      </div>
    </div>
  );
};

export default MarqueeHeader;