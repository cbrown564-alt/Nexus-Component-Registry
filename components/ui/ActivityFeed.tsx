import React from 'react';
import { GitCommit, AlertCircle, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const ActivityFeed = () => (
  <SpotlightCard className="p-6">
    <div className="mb-4 flex items-center justify-between">
       <h3 className="text-sm font-medium text-zinc-100">Live Activity</h3>
       <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
    </div>
    <div className="space-y-6 relative">
      {/* Vertical Line */}
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-zinc-800" />

      {[
        { 
            icon: GitCommit, 
            color: 'text-blue-400', 
            bg: 'bg-zinc-950', 
            border: 'border-blue-500/30', 
            text: 'Commit 8f3d2a pushed to main', 
            time: 'Just now' 
        },
        { 
            icon: CheckCircle2, 
            color: 'text-emerald-400', 
            bg: 'bg-zinc-950', 
            border: 'border-emerald-500/30', 
            text: 'Deploy #4221 successful', 
            time: '2m ago' 
        },
        { 
            icon: AlertCircle, 
            color: 'text-amber-400', 
            bg: 'bg-zinc-950', 
            border: 'border-amber-500/30', 
            text: 'High latency detected in eu-west', 
            time: '12m ago' 
        },
      ].map((item, i) => (
        <div key={i} className="flex gap-4 relative z-10 items-start">
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${item.border} ${item.bg} shadow-sm`}>
            <item.icon className={`h-4 w-4 ${item.color}`} />
          </div>
          <div className="flex flex-col pt-1">
            <span className="text-sm font-medium text-zinc-200">{item.text}</span>
            <span className="text-xs text-zinc-500">{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  </SpotlightCard>
);
export default ActivityFeed;