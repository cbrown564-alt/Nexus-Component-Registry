import React, { useState, useEffect } from 'react';

interface SplitFlapCharProps {
    char: string;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -.:";

export const SplitFlapChar: React.FC<SplitFlapCharProps> = ({ char }) => {
    const [current, setCurrent] = useState(char);
    const [prev, setPrev] = useState(char);
    const [flipping, setFlipping] = useState(false);

    useEffect(() => {
        if (char !== current) {
            setPrev(current);
            setFlipping(true);

            const timeout = setTimeout(() => {
                setCurrent(char);
                setFlipping(false);
            }, 150); // Flip speed

            return () => clearTimeout(timeout);
        }
    }, [char, current]);

    return (
        <div className="relative w-4 h-6 bg-zinc-900 rounded-[1px] overflow-hidden text-amber-500 font-mono text-lg leading-none perspective-500">
            {/* Top Half (New Char) - Behind */}
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center clip-top">
                {char}
            </div>

            {/* Top Half (Old Char) - Calculating Flip */}
            <div
                className={`absolute inset-0 bg-zinc-800 flex items-center justify-center clip-top origin-bottom transition-transform duration-150 ${flipping ? 'rotate-x-90' : 'rotate-x-0'}`}
                style={{ backfaceVisibility: 'hidden' }}
            >
                {prev}
            </div>

            {/* Bottom Half (Old Char) - Behind */}
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center clip-bottom">
                {prev}
            </div>

            {/* Bottom Half (New Char) - Flips Down */}
            <div
                className={`absolute inset-0 bg-zinc-800 flex items-center justify-center clip-bottom origin-top transition-transform duration-150 delay-75 ${flipping ? 'rotate-x-0' : '-rotate-x-90'}`}
                style={{ backfaceVisibility: 'hidden' }}
            >
                {char}
            </div>

            {/* Glare/Split Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/50 z-20" />

            <style>{`
        .perspective-500 { perspective: 500px; }
        .clip-top { clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%); }
        .clip-bottom { clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%); }
        .rotate-x-90 { transform: rotateX(90deg); }
        .-rotate-x-90 { transform: rotateX(-90deg); }
      `}</style>
        </div>
    );
};

export const SplitFlapString: React.FC<{ text: string, length?: number }> = ({ text, length = 12 }) => {
    // Pad text to length
    const padded = text.padEnd(length, ' ').slice(0, length).toUpperCase();

    return (
        <div className="flex gap-[1px]">
            {padded.split('').map((c, i) => (
                <SplitFlapChar key={i} char={c} />
            ))}
        </div>
    );
};
