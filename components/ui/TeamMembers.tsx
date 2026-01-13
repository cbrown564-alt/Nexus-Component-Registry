import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

export interface TeamMember {
    name: string;
    role: string;
    color: string;
    initials: string;
    isOnline?: boolean;
}

export interface TeamMembersProps {
    /** Title for the section */
    title?: string;
    /** Array of team members */
    members?: TeamMember[];
    /** Max avatars to show before +N overflow */
    max?: number;
    /** Button label for manage action */
    manageLabel?: string;
    /** Callback when manage button is clicked */
    onManage?: () => void;
}

const defaultMembers: TeamMember[] = [
    { name: 'Sofia Davis', role: 'Engineering Lead', color: 'bg-orange-500', initials: 'SD', isOnline: true },
    { name: 'Alex Morgan', role: 'DevOps Engineer', color: 'bg-blue-500', initials: 'AM', isOnline: true },
    { name: 'Chris Chen', role: 'Product Designer', color: 'bg-pink-500', initials: 'CC', isOnline: true },
];

const TeamMembers: React.FC<TeamMembersProps> = ({
    title = "Team Access",
    members = defaultMembers,
    max = 4,
    manageLabel = "Manage Permissions",
    onManage,
}) => {
    const { theme } = useTheme();
    const displayMembers = members.slice(0, max);
    const overflowCount = members.length - max;

    return (
        <SpotlightCard className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3
                    className="text-sm font-medium"
                    style={{ color: theme.colors.foreground }}
                >
                    {title}
                </h3>
                <button
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: theme.colors.mutedForeground }}
                >
                    <MoreHorizontal className="h-4 w-4" />
                </button>
            </div>
            <div className="space-y-4">
                {displayMembers.map((member, i) => (
                    <div
                        key={i}
                        className="group flex items-center justify-between rounded-lg p-2 -mx-2 transition-colors cursor-pointer hover:opacity-80"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full ${member.color} text-[10px] font-bold shadow-lg`}
                                style={{ color: '#ffffff' }}
                            >
                                {member.initials}
                            </div>
                            <div>
                                <div
                                    className="text-sm font-medium transition-colors"
                                    style={{ color: theme.colors.foreground }}
                                >
                                    {member.name}
                                </div>
                                <div
                                    className="text-xs"
                                    style={{ color: theme.colors.mutedForeground }}
                                >
                                    {member.role}
                                </div>
                            </div>
                        </div>
                        {member.isOnline && (
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            </div>
                        )}
                    </div>
                ))}
                {overflowCount > 0 && (
                    <div className="text-xs text-center" style={{ color: theme.colors.mutedForeground }}>
                        +{overflowCount} more members
                    </div>
                )}
            </div>
            <button
                onClick={onManage}
                className="mt-4 w-full rounded-md border py-2 text-xs font-medium transition-all hover:opacity-80"
                style={{
                    borderColor: theme.colors.border,
                    color: theme.colors.mutedForeground,
                    backgroundColor: 'transparent'
                }}
            >
                {manageLabel}
            </button>
        </SpotlightCard>
    );
};

export default TeamMembers;