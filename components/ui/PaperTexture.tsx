import React from 'react';

interface PaperTextureProps {
    className?: string;
    opacity?: number;
}

const PaperTexture: React.FC<PaperTextureProps> = ({
    className = "",
    opacity = 0.05
}) => {
    return (
        <div className={`pointer-events-none absolute inset-0 z-0 ${className}`} aria-hidden="true">
            <svg className="h-full w-full opacity-[var(--opacity)]" style={{ '--opacity': opacity } as React.CSSProperties}>
                <filter id="paper-grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix
                        type="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 0 1"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#paper-grain)" />
            </svg>
        </div>
    );
};

export default PaperTexture;
