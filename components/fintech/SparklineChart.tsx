import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface SparklineChartProps {
  data: number[];
  label?: string;
  value?: string;
  change?: number; // Percentage change
  color?: 'emerald' | 'rose' | 'amber' | 'cyan' | 'auto';
  height?: number;
  showDot?: boolean;
  animated?: boolean;
}

const SparklineChart: React.FC<SparklineChartProps> = ({
  data,
  label,
  value,
  change,
  color = 'auto',
  height = 40,
  showDot = true,
  animated = true,
}) => {
  if (data.length === 0) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  // Determine color based on data trend or explicit color
  const getColor = () => {
    if (color !== 'auto') return color;
    const firstHalf = data.slice(0, Math.floor(data.length / 2));
    const secondHalf = data.slice(Math.floor(data.length / 2));
    const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
    return secondAvg >= firstAvg ? 'emerald' : 'rose';
  };

  const colorValue = getColor();

  const colorStyles = {
    emerald: { stroke: '#10b981', fill: 'rgba(16, 185, 129, 0.1)', text: 'text-emerald-400' },
    rose: { stroke: '#f43f5e', fill: 'rgba(244, 63, 94, 0.1)', text: 'text-rose-400' },
    amber: { stroke: '#f59e0b', fill: 'rgba(245, 158, 11, 0.1)', text: 'text-amber-400' },
    cyan: { stroke: '#06b6d4', fill: 'rgba(6, 182, 212, 0.1)', text: 'text-cyan-400' },
  };

  const styles = colorStyles[colorValue];

  // Create SVG path
  const width = 100;
  const padding = 2;
  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((val - min) / range) * (height - padding * 2);
    return { x, y };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L ${padding} ${height} Z`;

  const lastPoint = points[points.length - 1];

  const TrendIcon = change !== undefined ? (change > 0 ? TrendingUp : change < 0 ? TrendingDown : Minus) : null;

  return (
    <div className="flex items-center gap-4">
      {/* Chart */}
      <div className="flex-shrink-0">
        <svg width={width} height={height} className="overflow-visible">
          {/* Area fill */}
          <motion.path
            d={areaPath}
            fill={styles.fill}
            initial={animated ? { opacity: 0 } : undefined}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke={styles.stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={animated ? { pathLength: 0 } : undefined}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          {/* End dot */}
          {showDot && (
            <motion.circle
              cx={lastPoint.x}
              cy={lastPoint.y}
              r={3}
              fill={styles.stroke}
              initial={animated ? { scale: 0 } : undefined}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          )}
        </svg>
      </div>

      {/* Info */}
      {(label || value || change !== undefined) && (
        <div className="flex flex-col min-w-0">
          {label && <span className="text-xs text-zinc-500 truncate">{label}</span>}
          {value && <span className="text-sm font-semibold text-white">{value}</span>}
          {change !== undefined && (
            <div className={`flex items-center gap-1 ${styles.text}`}>
              {TrendIcon && <TrendIcon className="h-3 w-3" />}
              <span className="text-xs font-medium">
                {change > 0 ? '+' : ''}{change.toFixed(2)}%
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SparklineChart;
