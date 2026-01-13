import React, { useState } from 'react';
import { Slack, ExternalLink, LucideIcon } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

export interface IntegrationToggleProps {
  /** Name of the integration */
  name?: string;
  /** Description of the integration */
  description?: string;
  /** Whether the toggle is on or off */
  enabled?: boolean;
  /** Callback when toggle state changes */
  onToggle?: (enabled: boolean) => void;
  /** Icon to display */
  icon?: LucideIcon;
  /** Background color for the icon */
  iconBgColor?: string;
}

const IntegrationToggle: React.FC<IntegrationToggleProps> = ({
  name = "Slack Notifications",
  description = "Receive alerts in #deployments",
  enabled: controlledEnabled,
  onToggle,
  icon: Icon = Slack,
  iconBgColor = '#4A154B',
}) => {
  const { theme } = useTheme();
  const [internalEnabled, setInternalEnabled] = useState(false);

  // Support both controlled and uncontrolled modes
  const isControlled = controlledEnabled !== undefined;
  const enabled = isControlled ? controlledEnabled : internalEnabled;

  const handleToggle = () => {
    const newValue = !enabled;
    if (!isControlled) {
      setInternalEnabled(newValue);
    }
    onToggle?.(newValue);
  };

  return (
    <SpotlightCard className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg shadow-inner"
            style={{ backgroundColor: iconBgColor, color: '#ffffff' }}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3
              className="text-sm font-medium"
              style={{ color: theme.colors.foreground }}
            >
              {name}
            </h3>
            <p
              className="text-xs"
              style={{ color: theme.colors.mutedForeground }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Custom Toggle Switch */}
        <button
          onClick={handleToggle}
          role="switch"
          aria-checked={enabled}
          aria-label={`Toggle ${name}`}
          className="relative h-6 w-11 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: enabled ? '#10b981' : (theme.colors.muted || '#3f3f46'),
            boxShadow: `0 0 0 2px ${theme.colors.background}`,
            outlineColor: theme.colors.ring
          }}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`}
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
            className="h-1.5 w-1.5 rounded-full"
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