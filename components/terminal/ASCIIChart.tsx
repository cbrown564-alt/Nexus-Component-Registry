import React from 'react';

interface ASCIIChartProps {
    data: number[];
    height?: number;
    color?: string;
    label?: string;
}

const ASCIIChart: React.FC<ASCIIChartProps> = ({ data, height = 10, color = "#98c379", label }) => {
    // Normalize data to fit height
    const max = Math.max(...data);
    const normalizedData = data.map(v => Math.floor((v / max) * height));

    // Generate rows (rendering from top down)
    const rows = [];
    for (let i = height; i > 0; i--) {
        const rowChars = normalizedData.map(val => {
            if (val >= i) return '█';
            if (val === i - 0.5) return '▄'; // Simple approximation
            return ' ';
        }).join('  '); // Double space for wider bars
        rows.push(rowChars);
    }

    return (
        <div className="font-mono text-xs leading-none select-none">
            {label && <div className="mb-2 text-[#5c6370] font-bold uppercase border-b border-[#3e4451] pb-1 inline-block">{label}</div>}
            <div className="flex">
                {/* Y-Axis Labels (Simple) */}
                <div className="flex flex-col justify-between mr-2 text-[#5c6370] py-[2px] h-full text-[10px]">
                    <span>{max}</span>
                    <span>{Math.round(max / 2)}</span>
                    <span>0</span>
                </div>

                {/* Bars */}
                <div className="flex flex-col" style={{ color }}>
                    {rows.map((row, idx) => (
                        <pre key={idx} className="whitespace-pre">{row}</pre>
                    ))}
                </div>
            </div>

            {/* X-Axis (Generic) */}
            <div className="flex ml-6 mt-1 text-[#5c6370] text-[10px] gap-[9px]">
                {data.map((_, i) => (
                    <span key={i} className="w-2 text-center">{i}</span>
                ))}
            </div>
        </div>
    );
};

export default ASCIIChart;
