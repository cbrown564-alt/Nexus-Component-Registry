import React from 'react';
import SpotlightCard from './SpotlightCard';

const Terminal = () => {
  return (
    <SpotlightCard className="flex flex-col overflow-hidden bg-zinc-950 p-0">
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
        <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50" />
        <div className="ml-2 text-xs font-medium text-zinc-500 font-mono">deploy-worker-01</div>
      </div>
      <div className="flex-1 p-4 font-mono text-xs sm:text-sm text-zinc-400 leading-relaxed">
        <div className="flex gap-2">
          <span className="text-pink-500">❯</span>
          <span className="text-zinc-100">nexus deploy --prod</span>
        </div>
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-zinc-600">ℹ</span>
            <span>Verifying configuration...</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✔</span>
            <span>Core modules compiled</span>
            <span className="text-zinc-600 ml-auto">120ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✔</span>
            <span>Assets optimized</span>
            <span className="text-zinc-600 ml-auto">85ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✔</span>
            <span>Routes generated</span>
            <span className="text-zinc-600 ml-auto">42ms</span>
          </div>
          <br/>
          <div className="border-l-2 border-zinc-800 pl-3 text-zinc-500">
            Deploying to region <span className="text-zinc-300">us-east-1</span>...
          </div>
          <div className="mt-2 text-zinc-300">
            Success! Deployed v2.4.0 in <span className="text-emerald-400">0.8s</span>
          </div>
          <div className="animate-pulse mt-2 h-4 w-2 bg-zinc-500" />
        </div>
      </div>
    </SpotlightCard>
  )
}
export default Terminal;