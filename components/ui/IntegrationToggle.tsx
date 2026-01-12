import React, { useState } from 'react';
import { Slack, ExternalLink } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

const IntegrationToggle = () => {
  const { theme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  return (
    <SpotlightCard className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg shadow-inner"
            style={{ backgroundColor: '#4A154B', color: '#ffffff' }}
          >
            <Slack className="h-5 w-5" />
          </div>
          <div>
            <h3
              className="text-sm font-medium"
              style={{ color: theme.colors.foreground }}
            >
              Slack Notifications
            </h3>
            <p
              className="text-xs"
              style={{ color: theme.colors.mutedForeground }}
            >
              Receive alerts in #deployments
            </p>
          </div>
        </div>

        {/* Custom Toggle Switch */}
        <button
          onClick={() => setEnabled(!enabled)}
          role="switch"
          aria-checked={enabled}
          aria-label="Toggle Slack notifications"
          className={`relative h-6 w-11 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2`}
          style={{
            backgroundColor: enabled ? '#10b981' : (theme.colors.muted || '#3f3f46'), // emerald-500 : zinc-700
            boxShadow: `0 0 0 2px ${theme.colors.background}`, // ring offset simulation
            outlineColor: theme.colors.ring
          }}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0.5'
              } mt-0.5`}
            style={{ backgroundColor: theme.colors.background || '#ffffff' }}
          />
        </button>
      </div>

      <div
        className="mt-4 flex items-center justify-between border-t pt-4"
        style={{ borderColor: theme.colors.border }}
      >
        <div
          className="flex items-center gap-2 text-[10px]"
          style={{ color: theme.colors.mutedForeground }}
        >
          <div
            className={`h-1.5 w-1.5 rounded-full`}
            style={{ backgroundColor: enabled ? '#10b981' : (theme.colors.mutedForeground || '#52525b') }}
          />
          {enabled ? 'Connected' : 'Disconnected'}
        </div>
        <button
          className="flex items-center gap-1 text-[10px] transition-colors hover:opacity-80"
          style={{ color: theme.colors.mutedForeground }}
        >
          Configure <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </SpotlightCard>
  );
};
export default IntegrationToggle;