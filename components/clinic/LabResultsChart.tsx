import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import ClinicCard from './ClinicCard';

interface LabResult {
    name: string;
    value: number;
    unit: string;
    normalRange: { min: number; max: number };
    previousValue?: number;
    date: string;
}

interface LabResultsChartProps {
    results: LabResult[];
    delay?: number;
}

const LabResultsChart: React.FC<LabResultsChartProps> = ({ results, delay = 0 }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    const getStatus = (result: LabResult) => {
        if (result.value < result.normalRange.min) return 'low';
        if (result.value > result.normalRange.max) return 'high';
        return 'normal';
    };

    const getTrend = (result: LabResult) => {
        if (!result.previousValue) return 'stable';
        if (result.value > result.previousValue) return 'up';
        if (result.value < result.previousValue) return 'down';
        return 'stable';
    };

    const statusColors = {
        normal: { bg: '#d1fae5', text: '#065f46', bar: '#10b981' },
        low: { bg: '#fef3c7', text: '#92400e', bar: '#f59e0b' },
        high: { bg: '#fee2e2', text: '#991b1b', bar: '#ef4444' },
    };

    return (
        <ClinicCard delay={delay}>
            <div className="mb-6 flex items-center justify-between">
                <h3 className="font-semibold text-lg" style={{ color: theme.colors.foreground }}>
                    Lab Results
                </h3>
                <span className="text-sm" style={{ color: theme.colors.mutedForeground }}>
                    Last updated: {results[0]?.date}
                </span>
            </div>

            <div className="space-y-4">
                {results.map((result, index) => {
                    const status = getStatus(result);
                    const trend = getTrend(result);
                    const colors = statusColors[status];
                    const percentage = Math.min(
                        100,
                        ((result.value - result.normalRange.min) /
                            (result.normalRange.max - result.normalRange.min)) *
                        100
                    );

                    return (
                        <motion.div
                            key={result.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: delay + index * 0.1 }}
                            className="p-4 rounded-lg"
                            style={{ backgroundColor: theme.colors.muted }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium" style={{ color: theme.colors.foreground }}>
                                        {result.name}
                                    </span>
                                    <span
                                        className="rounded-full px-2 py-0.5 text-xs font-medium capitalize"
                                        style={{ backgroundColor: colors.bg, color: colors.text }}
                                    >
                                        {status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-lg font-semibold" style={{ color: theme.colors.foreground }}>
                                        {result.value}
                                    </span>
                                    <span className="text-sm" style={{ color: theme.colors.mutedForeground }}>
                                        {result.unit}
                                    </span>
                                    {trend === 'up' && <TrendingUp className="h-4 w-4 text-red-500" />}
                                    {trend === 'down' && <TrendingDown className="h-4 w-4 text-green-500" />}
                                    {trend === 'stable' && <Minus className="h-4 w-4" style={{ color: theme.colors.mutedForeground }} />}
                                </div>
                            </div>

                            <div className="relative h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.border }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.max(5, Math.min(95, percentage))}%` }}
                                    transition={{
                                        duration: motionTokens.duration.glacial,
                                        delay: delay + index * 0.1
                                    }}
                                    className="absolute h-full rounded-full"
                                    style={{ backgroundColor: colors.bar }}
                                />
                                {/* Normal range indicator */}
                                <div
                                    className="absolute top-0 h-full border-l-2 border-r-2 border-dashed opacity-50"
                                    style={{
                                        left: '10%',
                                        right: '10%',
                                        borderColor: theme.colors.mutedForeground,
                                    }}
                                />
                            </div>

                            <div className="flex justify-between mt-1 text-xs" style={{ color: theme.colors.mutedForeground }}>
                                <span>{result.normalRange.min} {result.unit}</span>
                                <span>Normal range</span>
                                <span>{result.normalRange.max} {result.unit}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </ClinicCard>
    );
};

export default LabResultsChart;
