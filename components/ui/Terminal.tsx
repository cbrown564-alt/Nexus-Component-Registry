import React from 'react';
import SpotlightCard from './SpotlightCard';

const Terminal = () => {
  return (
    <SpotlightCard className="flex flex-col overflow-hidden p-0" style={{ backgroundColor: '#09090b' }}>
      <div className="flex items-center gap-2 border-b px-4 py-3" style={{ backgroundColor: 'rgba(24,24,27,0.5)', borderColor: '#27272a' }}>
        <div className="h-3 w-3 rounded-full border" style={{ backgroundColor: 'rgba(239,68,68,0.2)', borderColor: 'rgba(239,68,68,0.5)' }} />
        <div className="h-3 w-3 rounded-full border" style={{ backgroundColor: 'rgba(234,179,8,0.2)', borderColor: 'rgba(234,179,8,0.5)' }} />
        <div className="h-3 w-3 rounded-full border" style={{ backgroundColor: 'rgba(34,197,94,0.2)', borderColor: 'rgba(34,197,94,0.5)' }} />
        <div className="ml-2 text-xs font-medium font-mono" style={{ color: '#71717a' }}>deploy-worker-01</div>
      </div>
      <div className="flex-1 p-4 font-mono text-xs sm:text-sm leading-relaxed" style={{ color: '#a1a1aa' }}>
        <div className="flex gap-2">
          <span style={{ color: '#ec4899' }}>❯</span>
          <span style={{ color: '#f4f4f5' }}>nexus deploy --prod</span>
        </div>
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2">
            <span style={{ color: '#52525b' }}>ℹ</span>
            <span>Verifying configuration...</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: '#10b981' }}>✔</span>
            <span>Core modules compiled</span>
            <span className="ml-auto" style={{ color: '#52525b' }}>120ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: '#10b981' }}>✔</span>
            <span>Assets optimized</span>
            <span className="ml-auto" style={{ color: '#52525b' }}>85ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: '#10b981' }}>✔</span>
            <span>Routes generated</span>
            <span className="ml-auto" style={{ color: '#52525b' }}>42ms</span>
          </div>
          <br />
          <div className="border-l-2 pl-3" style={{ borderColor: '#27272a', color: '#71717a' }}>
            Deploying to region <span style={{ color: '#d4d4d8' }}>us-east-1</span>...
          </div>
          <div className="mt-2" style={{ color: '#d4d4d8' }}>
            Success! Deployed v2.4.0 in <span style={{ color: '#34d399' }}>0.8s</span>
          </div>
          <div className="animate-pulse mt-2 h-4 w-2" style={{ backgroundColor: '#71717a' }} />
        </div>
      </div>
    </SpotlightCard>
  )
}
export default Terminal;