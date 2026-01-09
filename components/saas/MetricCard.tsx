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
  return (
    <SaasCard delay={delay} className="group hover:border-slate-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
          <Icon className="h-4 w-4" />
        </div>
        <button className="text-slate-600 hover:text-slate-300">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      
      <div>
        <div className="text-sm font-medium text-slate-500">{label}</div>
        <div className="mt-1 flex items-baseline gap-3">
          <h3 className="text-2xl font-semibold text-slate-100">{value}</h3>
          <div className={`flex items-center text-xs font-medium ${
            trendUp ? 'text-emerald-500' : 'text-rose-500'
          }`}>
            {trendUp ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
            {trend}
          </div>
        </div>
      </div>
    </SaasCard>
  );
};

export default MetricCard;