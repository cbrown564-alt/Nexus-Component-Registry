import React from 'react';
import { GitBranch, Box, CheckCircle2, Globe } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

const DeploymentPipeline = () => {
  const { theme } = useTheme();
  const steps = [
    { icon: GitBranch, label: 'Source', status: 'completed' },
    { icon: Box, label: 'Build', status: 'completed' },
    { icon: CheckCircle2, label: 'Test', status: 'active' },
    { icon: Globe, label: 'Deploy', status: 'pending' },
  ];

  return (
    <SpotlightCard className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3
          className="text-sm font-medium"
          style={{ color: theme.colors.foreground }}
        >
          Pipeline Status
        </h3>
        <span className="flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-400 border border-blue-500/20">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
          </span>
          Running
        </span>
      </div>

      <div className="relative flex items-center justify-between">
        {/* Connecting Line Background */}
        <div
          className="absolute left-0 top-4 h-0.5 w-full -z-10"
          style={{ backgroundColor: theme.colors.border }}
        />

        {/* Active Progress Line (Simulated 60%) */}
        <div className="absolute left-0 top-4 h-0.5 w-[66%] bg-emerald-500/50 -z-10" />

        {steps.map((step, i) => {
          const isCompleted = step.status === 'completed';
          const isActive = step.status === 'active';

          // Dynamic styling based on status
          const getStatusStyles = () => {
            if (isCompleted) return {
              borderColor: '#10b981', // emerald-500
              color: '#10b981',
              boxShadow: '0 0 10px rgba(16,185,129,0.3)'
            }
            if (isActive) return {
              borderColor: '#3b82f6', // blue-500
              color: '#3b82f6',
              boxShadow: '0 0 10px rgba(59,130,246,0.3)'
            }
            return {
              borderColor: theme.colors.border,
              color: theme.colors.mutedForeground
            }
          }

          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 z-10`}
                style={{
                  backgroundColor: theme.colors.background || theme.colors.card,
                  ...getStatusStyles()
                }}
              >
                <step.icon className="h-3.5 w-3.5" />
              </div>
              <span
                className={`text-[10px] font-medium ${isActive ? 'text-blue-400' : isCompleted ? 'text-emerald-400' : ''}`}
                style={(!isActive && !isCompleted) ? { color: theme.colors.mutedForeground } : {}}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </SpotlightCard>
  );
};
export default DeploymentPipeline;