import React from 'react';
import { GitBranch, Box, CheckCircle2, Globe } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const DeploymentPipeline = () => {
  const steps = [
    { icon: GitBranch, label: 'Source', status: 'completed' },
    { icon: Box, label: 'Build', status: 'completed' },
    { icon: CheckCircle2, label: 'Test', status: 'active' },
    { icon: Globe, label: 'Deploy', status: 'pending' },
  ];

  return (
    <SpotlightCard className="p-6">
       <div className="mb-6 flex items-center justify-between">
          <h3 className="text-sm font-medium text-zinc-100">Pipeline Status</h3>
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
          <div className="absolute left-0 top-4 h-0.5 w-full bg-zinc-800 -z-10" />
          
          {/* Active Progress Line (Simulated 60%) */}
          <div className="absolute left-0 top-4 h-0.5 w-[66%] bg-emerald-500/50 -z-10" />

          {steps.map((step, i) => {
            const isCompleted = step.status === 'completed';
            const isActive = step.status === 'active';
            
            return (
              <div key={i} className="flex flex-col items-center gap-2">
                <div 
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 z-10 bg-zinc-950 ${
                    isCompleted 
                      ? 'border-emerald-500 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' 
                      : isActive 
                        ? 'border-blue-500 text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                        : 'border-zinc-800 text-zinc-600'
                  }`}
                >
                  <step.icon className="h-3.5 w-3.5" />
                </div>
                <span className={`text-[10px] font-medium ${
                  isActive ? 'text-blue-400' : isCompleted ? 'text-emerald-400' : 'text-zinc-600'
                }`}>
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