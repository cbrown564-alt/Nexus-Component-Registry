import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchHeadingProps {
    text: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    color?: string;
}

const GlitchHeading: React.FC<GlitchHeadingProps> = ({
    text = "GLITCH",
    size = 'lg',
    className = "",
    color = "text-cyan-400"
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [glitching, setGlitching] = useState(false);

    // Random glitch effect on interval
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                triggerGlitch();
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const triggerGlitch = () => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 300);
    };

    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-4xl',
        xl: 'text-6xl',
    };
    return (
        <div
            className={`relative inline-block font-mono font-bold uppercase tracking-widest ${sizeClasses[size]} ${color} ${className}`}
            onMouseEnter={() => {
                setIsHovered(true);
                triggerGlitch();
            }}
            onMouseLeave={() => setIsHovered(false)}
        >

            <span className={`relative z-20 inline-block ${color}`}>{text}</span>

            {(isHovered || glitching) && (
                <>
                    <span
                        className={`absolute top-0 left-0 -ml-[2px] opacity-70 animate-[glitch-1_0.4s_infinite_linear_alternate-reverse] text-red-500 z-10 pointer-events-none`}
                        aria-hidden="true"
                    >
                        {text}
                    </span>
                    <span
                        className={`absolute top-0 left-0 ml-[2px] opacity-70 animate-[glitch-2_0.4s_infinite_linear_alternate-reverse] text-blue-500 z-10 pointer-events-none`}
                        aria-hidden="true"
                    >
                        {text}
                    </span>
                </>
            )}

            <style>{`
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 80% 0); }
          20% { clip-path: inset(60% 0 10% 0); }
          40% { clip-path: inset(40% 0 50% 0); }
          60% { clip-path: inset(80% 0 5% 0); }
          80% { clip-path: inset(10% 0 60% 0); }
          100% { clip-path: inset(30% 0 30% 0); }
        }
        @keyframes glitch-2 {
          0% { clip-path: inset(10% 0 60% 0); }
          20% { clip-path: inset(30% 0 30% 0); }
          40% { clip-path: inset(80% 0 5% 0); }
          60% { clip-path: inset(40% 0 50% 0); }
          80% { clip-path: inset(60% 0 10% 0); }
          100% { clip-path: inset(20% 0 80% 0); }
        }
      `}</style>
        </div>
    );
};

export default GlitchHeading;
