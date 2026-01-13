import React from 'react';
import { GitCommit, AlertCircle, CheckCircle2, LucideIcon } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

export interface Activity {
  icon: LucideIcon;
  color: string;
  bgClass: string;
  border: string;
  text: string;
  time: string;
}

export interface ActivityFeedProps {
  /** Title for the feed */
  title?: string;
  /** Array of activity items to display */
  activities?: Activity[];
  /** Maximum number of items to show */
  maxItems?: number;
}

const defaultActivities: Activity[] = [
  {
    icon: GitCommit,
    color: 'text-blue-400',
    bgClass: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'Commit 8f3d2a pushed to main',
    time: 'Just now'
  },
  {
    icon: CheckCircle2,
    color: 'text-emerald-400',
    bgClass: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'Deploy #4221 successful',
    time: '2m ago'
  },
  {
    icon: AlertCircle,
    color: 'text-amber-400',
    bgClass: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'High latency detected in eu-west',
    time: '12m ago'
  },
];

const ActivityFeed: React.FC<ActivityFeedProps> = ({
  title = "Live Activity",
  activities = defaultActivities,
  maxItems = 5,
}) => {
  const { theme } = useTheme();
  const displayActivities = activities.slice(0, maxItems);

  return (
    <SpotlightCard className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3
          className="text-sm font-medium"
          style={{ color: theme.colors.foreground }}
        >
          {title}
        </h3>
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
      </div>
      <div className="space-y-6 relative">
        {/* Vertical Line */}
        <div
          className="absolute left-[15px] top-2 bottom-2 w-px"
          style={{ backgroundColor: theme.colors.border }}
        />

        {displayActivities.map((item, i) => (
          <div key={i} className="flex gap-4 relative z-10 items-start">
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${item.border} shadow-sm`}
              style={{ backgroundColor: theme.colors.background || theme.colors.card }}
            >
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
            <div className="flex flex-col pt-1">
              <span
                className="text-sm font-medium"
                style={{ color: theme.colors.foreground }}
              >
                {item.text}
              </span>
              <span
                className="text-xs"
                style={{ color: theme.colors.mutedForeground }}
              >
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
};

export default ActivityFeed;