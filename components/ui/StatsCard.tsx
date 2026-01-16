import React from 'react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

export interface StatsCardProps {
  /** Label for the statistic */
  title?: string;
  /** The main metric value to display */
  value?: string | number;
  /** Percentage change, positive or negative */
  change?: number;
  /** Icon component to display */
  icon?: LucideIcon;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title = "Global Requests",
  value = "14.2M",
  change = 12.5,
  icon: Icon,
}) => {
  const { theme } = useTheme();
  const isPositive = change >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <SpotlightCard className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <div
            className="text-sm font-medium text-muted-foreground"
          >
            {title}
          </div>
          <div
            className="mt-2 text-3xl font-bold tracking-tight text-foreground"
          >
            {value}
          </div>
        </div>
        <div className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium border ${isPositive
          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
          : 'bg-red-500/10 text-red-400 border-red-500/20'
          }`}>
          <TrendIcon className="h-3 w-3" />
          {isPositive ? '+' : ''}{change}%
        </div>
      </div>

      <div className="mt-8 h-16 w-full relative">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-10">
          <div className="h-px w-full bg-border" />
          <div className="h-px w-full bg-border" />
          <div className="h-px w-full bg-border" />
        </div>

        {/* SVG Sparkline */}
        <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
          <defs>
            <linearGradient id="sparklineGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity="0.5" />
              <stop offset="100%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 40 L10 32 L20 36 L30 20 L40 25 L50 15 L60 18 L70 5 L80 12 L90 8 L100 0 V 40 H 0 Z"
            fill="url(#sparklineGradient)"
          />
          <path
            d="M0 40 L10 32 L20 36 L30 20 L40 25 L50 15 L60 18 L70 5 L80 12 L90 8 L100 0"
            fill="none"
            stroke={isPositive ? "#10b981" : "#ef4444"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </SpotlightCard>
  );
};

export default StatsCard;