import React from 'react';
import GridCard from './GridCard';

interface ResourceGaugeProps {
  label: string;
  value: number;
  max: number;
  unit: string;
  color?: string;
}

const Gauge: React.FC<ResourceGaugeProps> = ({ label, value, max, unit, color = "text-blue-500" }) => {
  const percentage = (value / max) * 100;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24">
        {/* Background Circle */}
        <svg className="h-full w-full -rotate-90 transform">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-800"
          />
          {/* Progress Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`${color} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold font-mono text-white">{value}</span>
            <span className="text-[10px] text-slate-400">{unit}</span>
        </div>
      </div>
      <span className="mt-2 text-xs font-medium text-slate-300 uppercase tracking-wide">{label}</span>
    </div>
  );
};

const ResourceGauge = () => {
  return (
    <GridCard title="Resource Consumption" className="flex items-center justify-around py-6">
        <Gauge label="Power" value={842} max={1000} unit="MW" color="text-amber-500" />
        <Gauge label="Water" value={450} max={1000} unit="kL" color="text-cyan-500" />
        <Gauge label="Bandwidth" value={92} max={100} unit="TB" color="text-emerald-500" />
    </GridCard>
  );
};

export default ResourceGauge;