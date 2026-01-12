import React from 'react';
import GridCard from './GridCard';

interface ResourceGaugeProps {
  label: string;
  value: number;
  max: number;
  unit: string;
  color?: string;
}

const Gauge: React.FC<ResourceGaugeProps> = ({ label, value, max, unit, color = "#3b82f6" }) => {
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
            style={{ color: '#1e293b' }}
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
            className="transition-all duration-1000 ease-out"
            style={{ color }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold font-mono" style={{ color: '#ffffff' }}>{value}</span>
          <span className="text-[10px]" style={{ color: '#94a3b8' }}>{unit}</span>
        </div>
      </div>
      <span className="mt-2 text-xs font-medium uppercase tracking-wide" style={{ color: '#cbd5e1' }}>{label}</span>
    </div>
  );
};

const ResourceGauge = () => {
  return (
    <GridCard title="Resource Consumption">
      <div className="flex items-center justify-around gap-4">
        <Gauge label="Power" value={842} max={1000} unit="MW" color="#f59e0b" />
        <Gauge label="Water" value={450} max={1000} unit="kL" color="#06b6d4" />
        <Gauge label="Bandwidth" value={92} max={100} unit="TB" color="#10b981" />
      </div>
    </GridCard>
  );
};

export default ResourceGauge;