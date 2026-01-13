import React from 'react';

interface BracketConnectorProps {
    height: number; // The vertical distance adjacent matches span
    width?: number;
    color?: string;
    glow?: boolean;
}

const BracketConnector: React.FC<BracketConnectorProps> = ({
    height,
    width = 40,
    color = '#3b82f6',
    glow = true
}) => {
    // We are drawing a "Fork" that connects two inputs on the left to one output on the right.
    // Actually, typically bracket logic flows: Round 1 (Left) -> Connector -> Round 2 (Right).
    // So two matches on LEFT connect to one match on RIGHT.
    //
    //      Match A (Top Left)      ----+
    //                                  |
    //                                  +-----> Match Winner
    //                                  |
    //      Match B (Bottom Left)   ----+

    const halfHeight = height / 2;
    const strokeWidth = 2;

    // Path definition:
    // M 0,0 (Top Left start) 
    // H {width/2} (Horizontal to mid)
    // V {height} (Vertical down to bottom match level)
    // ... wait, we need distinct paths for top and bottom.

    return (
        <div style={{ width, height }} className="relative flex items-center justify-center pointer-events-none">
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={glow ? "drop-shadow-[0_0_3px_rgba(59,130,246,0.8)]" : ""}
            >
                {/* Top Path: From Top-Left (0, 0) to Middle-Right (w, h/2) */}
                <path
                    d={`M 0 ${strokeWidth / 2} H ${width / 2} V ${height / 2} H ${width}`}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Bottom Path: From Bottom-Left (0, h) to Middle-Right (w, h/2) */}
                <path
                    d={`M 0 ${height - strokeWidth / 2} H ${width / 2} V ${height / 2}`}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Decor: Connection Dots */}
                <circle cx="0" cy={strokeWidth / 2} r="2" fill={color} />
                <circle cx="0" cy={height - strokeWidth / 2} r="2" fill={color} />
                <circle cx={width} cy={height / 2} r="3" fill={color} className="animate-pulse" />
            </svg>
        </div>
    );
};

export default BracketConnector;
