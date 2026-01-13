import React from 'react';
import { LucideIcon, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import SaasCard from './SaasCard';

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: LucideIcon;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  trend,
  trendUp,
  icon: Icon,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <SaasCard
      delay={delay}
      className="transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={isHovered ? { borderColor: '#334155' } : undefined}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
          style={{
            backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.1)' : '#1e293b',
            color: isHovered ? '#818cf8' : '#94a3b8'
          }}
        >
          <Icon className="h-4 w-4" />
        </div>
        <button
          className="transition-colors"
          style={{ color: isHovered ? '#cbd5e1' : '#475569' }}
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div>
        <div className="text-sm font-medium" style={{ color: '#64748b' }}>{label}</div>
        <div className="mt-1 flex items-baseline gap-3">
          <h3 className="text-2xl font-semibold" style={{ color: '#f1f5f9' }}>{value}</h3>
          <div
            className="flex items-center text-xs font-medium"
            style={{ color: trendUp ? '#10b981' : '#f43f5e' }}
          >
            {trendUp ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
            {trend}
          </div>
        </div>
      </div>
    </SaasCard>
  );
};

export default MetricCard;