import React from 'react';
import SpotlightCard from '../ui/SpotlightCard';

const TerminalSnippet = () => {
  return (
    <SpotlightCard className="flex flex-col overflow-hidden p-0" style={{ backgroundColor: '#09090b', borderColor: '#27272a' }}>
      <div className="flex items-center gap-2 border-b px-4 py-3" style={{ backgroundColor: 'rgba(24,24,27,0.5)', borderColor: '#27272a' }}>
        <div className="h-3 w-3 rounded-full border bg-red-500/20 border-red-500/50" />
        <div className="h-3 w-3 rounded-full border bg-yellow-500/20 border-yellow-500/50" />
        <div className="h-3 w-3 rounded-full border bg-emerald-500/20 border-emerald-500/50" />
        <div className="ml-2 text-xs font-medium font-mono text-zinc-500">deploy-worker-01</div>
      </div>
      <div className="flex-1 p-4 font-mono text-xs sm:text-sm leading-relaxed text-zinc-400">
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
            <span className="ml-auto text-zinc-600">120ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✔</span>
            <span>Assets optimized</span>
            <span className="ml-auto text-zinc-600">85ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">✔</span>
            <span>Routes generated</span>
            <span className="ml-auto text-zinc-600">42ms</span>
          </div>
          <br />
          <div className="border-l-2 pl-3 border-zinc-800 text-zinc-500">
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
export default TerminalSnippet;