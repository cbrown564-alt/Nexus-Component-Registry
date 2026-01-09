import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  speed?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  direction = 'left', 
  className = "", 
  speed = "10s" 
}) => {
  const isVertical = direction === 'up' || direction === 'down';
  
  return (
    <div className={`overflow-hidden flex ${isVertical ? 'flex-col h-full' : 'w-full'} ${className}`}>
      <div 
        className={`flex ${isVertical ? 'flex-col' : ''} gap-4 whitespace-nowrap animate-marquee`}
        style={{ 
            animationName: isVertical ? 'marquee-vertical' : 'marquee-horizontal',
            animationDuration: speed,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDirection: direction === 'right' || direction === 'down' ? 'reverse' : 'normal'
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-mono font-bold uppercase tracking-tighter">
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;