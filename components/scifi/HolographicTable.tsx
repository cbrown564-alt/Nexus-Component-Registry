import React from 'react';
import { motion } from 'framer-motion';
import SciFiCard from './SciFiCard';

interface Column {
    key: string;
    header: string;
    width?: string;
}

interface HolographicTableProps {
    columns: Column[];
    data: any[];
    title?: string;
    className?: string;
}

const defaultColumns: Column[] = [
    { key: 'id', header: 'ID', width: '20%' },
    { key: 'parameter', header: 'Parameter', width: '50%' },
    { key: 'value', header: 'Value', width: '30%' },
];

const defaultData = [
    { id: '01', parameter: 'Core Temperature', value: '340K' },
    { id: '02', parameter: 'Main Reactor', value: 'Stable' },
    { id: '03', parameter: 'Shield Integrity', value: '98%' },
];

const HolographicTable: React.FC<HolographicTableProps> = ({
    columns = defaultColumns,
    data = defaultData,
    title = "System Data",
    className = ""
}) => {
    return (
        <SciFiCard title={title} className={`overflow-hidden ${className}`}>
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-cyan-500/30">
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/30"
                                    style={{ width: col.width }}
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                        {data.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="group border-b border-cyan-500/10 hover:bg-cyan-500/10 transition-colors relative"
                            >
                                {columns.map((col) => (
                                    <td key={`${rowIndex}-${col.key}`} className="py-3 px-4 text-cyan-100 group-hover:text-cyan-50 group-hover:shadow-[inset_0_0_10px_rgba(6,182,212,0.1)] transition-all duration-300">
                                        {row[col.key]}
                                        {/* Scanline effect on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.1),transparent)] translate-x-[-100%] group-hover:animate-[scan_1s_ease-in-out_infinite]" />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </SciFiCard>
    );
};

export default HolographicTable;
