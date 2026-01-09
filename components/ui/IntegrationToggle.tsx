import React, { useState } from 'react';
import { Slack, ExternalLink } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const IntegrationToggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <SpotlightCard className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4A154B] text-white shadow-inner">
             <Slack className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-zinc-100">Slack Notifications</h3>
            <p className="text-xs text-zinc-500">Receive alerts in #deployments</p>
          </div>
        </div>
        
        {/* Custom Toggle Switch */}
        <button 
          onClick={() => setEnabled(!enabled)}
          className={`relative h-6 w-11 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
            enabled ? 'bg-emerald-500' : 'bg-zinc-700'
          }`}
        >
          <span 
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              enabled ? 'translate-x-5' : 'translate-x-0.5'
            } mt-0.5`}
          />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-4">
         <div className="flex items-center gap-2 text-[10px] text-zinc-500">
           <div className={`h-1.5 w-1.5 rounded-full ${enabled ? 'bg-emerald-500' : 'bg-zinc-600'}`} />
           {enabled ? 'Connected' : 'Disconnected'}
         </div>
         <button className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white transition-colors">
            Configure <ExternalLink className="h-3 w-3" />
         </button>
      </div>
    </SpotlightCard>
  );
};
export default IntegrationToggle;