import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import FintechCard from './FintechCard';
import { useGraphData } from '@/hooks/useGraphData';
import { useTheme } from '@/context/ThemeContext';

const PortfolioChart = () => {
    const [range, setRange] = useState('1D');
    const { currentPlaygroundTheme } = useTheme();

    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const chartRef = React.useRef<HTMLDivElement>(null);
    const { getPath, getAreaPath, getPoint, data } = useGraphData({
        points: 20,
        min: 40,
        max: 100,
        smoothing: 0.3
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!chartRef.current) return;
        const rect = chartRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        // Calculate index based on x position
        // map x (0 to width) to index (0 to points-1)
        const pointsCount = 20;
        const index = Math.round((x / width) * (pointsCount - 1));

        // Clamp index
        const safeIndex = Math.max(0, Math.min(index, pointsCount - 1));
        setHoverIndex(safeIndex);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const primaryColor = currentPlaygroundTheme.colors.primary;
    const mutedColor = currentPlaygroundTheme.colors.mutedForeground;
    const foregroundColor = currentPlaygroundTheme.colors.foreground;

    return (
        <FintechCard className="p-6 h-full flex flex-col">
            <div className="flex items-start justify-between mb-8">
                <div>
                    <h2 className="text-sm font-medium" style={{ color: mutedColor }}>Total Balance</h2>
                    <div className="flex items-baseline gap-3 mt-1">
                        <span className="text-4xl font-bold tracking-tight font-mono" style={{ color: foregroundColor }}>$124,592.00</span>
                        <span className="flex items-center gap-1 text-sm font-medium px-2 py-0.5 rounded border"
                            style={{
                                color: primaryColor,
                                backgroundColor: `${primaryColor}1A`, // 10% opacity, assuming hex
                                borderColor: `${primaryColor}33` // 20% opacity
                            }}>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                            +$1,294 (1.2%)
                        </span>
                    </div>
                </div>
                <div className="flex rounded-lg border p-1" style={{ borderColor: currentPlaygroundTheme.colors.border, backgroundColor: currentPlaygroundTheme.colors.muted + '40' }}>
                    {['1H', '1D', '1W', '1M', '1Y', 'ALL'].map((r) => (
                        <button
                            key={r}
                            onClick={() => setRange(r)}
                            className={`px-3 py-1 text-xs font-medium rounded transition-all`}
                            style={{
                                backgroundColor: range === r ? currentPlaygroundTheme.colors.card : 'transparent',
                                color: range === r ? foregroundColor : mutedColor,
                                boxShadow: range === r ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                            }}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className="flex-1 relative w-full min-h-[250px] lg:min-h-0 cursor-crosshair group"
                ref={chartRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="border-t border-dashed w-full" style={{ borderColor: currentPlaygroundTheme.colors.border }} />
                    ))}
                </div>

                {/* Chart Path */}
                <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="fintechGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.2" />
                            <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d={getAreaPath(100, 100)}
                        fill="url(#fintechGradient)"
                    />
                    <path
                        d={getPath(100, 100)}
                        fill="none"
                        stroke={primaryColor}
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />

                    {/* Hover Dot (Dynamic) */}
                </svg>

                {/* Interaction Overlay (HTML) - Fixed distortions */}
                <div className="absolute inset-0 pointer-events-none">
                    {hoverIndex !== null && (() => {
                        const point = getPoint(hoverIndex, 100, 100)
                        const value = data[hoverIndex]

                        return (
                            <>
                                {/* Vertical Line */}
                                <div
                                    className="absolute top-0 bottom-0 border-r border-dashed w-px pointer-events-none"
                                    style={{
                                        left: `${point.x}%`,
                                        borderColor: currentPlaygroundTheme.colors.border
                                    }}
                                />

                                {/* Dot */}
                                <div
                                    className="absolute w-2.5 h-2.5 rounded-full border-[2px] -translate-x-1/2 -translate-y-1/2 z-10"
                                    style={{
                                        left: `${point.x}%`,
                                        top: `${point.y}%`,
                                        backgroundColor: currentPlaygroundTheme.colors.background,
                                        borderColor: primaryColor,
                                        boxShadow: `0 0 0 2px ${currentPlaygroundTheme.colors.background}`
                                    }}
                                >
                                    <div className="absolute inset-0 m-auto w-1 h-1 rounded-full" style={{ backgroundColor: primaryColor }} />
                                </div>

                                {/* Tooltip */}
                                <div
                                    className="absolute -translate-x-1/2 -translate-y-full pb-3 z-20"
                                    style={{
                                        left: `${point.x}%`,
                                        top: `${point.y}%`
                                    }}
                                >
                                    <div className="text-xs px-2 py-1 rounded border font-mono shadow-xl flex flex-col items-center gap-0.5 whitespace-nowrap"
                                        style={{
                                            backgroundColor: currentPlaygroundTheme.colors.card,
                                            color: foregroundColor,
                                            borderColor: currentPlaygroundTheme.colors.border,
                                        }}>
                                        <span className="font-bold tracking-tight">${value?.toLocaleString()}</span>
                                    </div>
                                    <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px]"
                                        style={{ borderTopColor: currentPlaygroundTheme.colors.border }} />
                                </div>
                            </>
                        )
                    })()}
                </div>
            </div>
        </FintechCard>
    );
};

export default PortfolioChart;