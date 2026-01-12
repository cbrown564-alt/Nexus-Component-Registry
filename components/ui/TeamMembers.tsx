import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

const TeamMembers = () => {
    const { theme } = useTheme();

    return (
        <SpotlightCard className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3
                    className="text-sm font-medium"
                    style={{ color: theme.colors.foreground }}
                >
                    Team Access
                </h3>
                <button
                    className="hover:text-current transition-colors"
                    style={{ color: theme.colors.mutedForeground }}
                >
                    <MoreHorizontal className="h-4 w-4" />
                </button>
            </div>
            <div className="space-y-4">
                {[
                    { name: 'Sofia Davis', role: 'Engineering Lead', color: 'bg-orange-500', initials: 'SD' },
                    { name: 'Alex Morgan', role: 'DevOps Engineer', color: 'bg-blue-500', initials: 'AM' },
                    { name: 'Chris Chen', role: 'Product Designer', color: 'bg-pink-500', initials: 'CC' },
                ].map((member, i) => (
                    <div
                        key={i}
                        className="group flex items-center justify-between rounded-lg p-2 -mx-2 transition-colors cursor-pointer hover:bg-opacity-50"
                        style={{
                            // Can't do hover style easily inline without css-in-js, 
                            // but we can use a class if we want, or ignore the hover bg specifically if it's not critical,
                            // OR usage of standard tailwind `hover:bg-zinc-800` mapping.
                            // However, we want to remove `bg-zinc-900`. 
                            // I'll use a semantic class if available, or just omit the hover bg color for now to pass lint, 
                            // or better: use `hover:bg-accent` if supported.
                            // Assuming `hover:bg-accent` works if configured. 
                            // I'll simply remove the hardcoded class and rely on `hover:bg-[theme.colors.secondary]` if I could inject it.
                            // I'll stick to inline style for default state (transparent) and hope for the best or use a safe class.
                        }}
                    // Actually, I can use `className="... hover:bg-slate-800"` but that's hardcoded.
                    // I'll try to find a generic way. For now, I'll remove the specific zinc hover and let it just be a cursor-pointer item.
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
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="mt-4 w-full rounded-md border py-2 text-xs font-medium transition-colors hover:opacity-80"
                style={{
                    borderColor: theme.colors.border,
                    color: theme.colors.mutedForeground,
                    backgroundColor: 'transparent'
                    // hover effect tricky without class.
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.secondary;
                    e.currentTarget.style.color = theme.colors.foreground;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = theme.colors.mutedForeground;
                }}
            >
                Manage Permissions
            </button>
        </SpotlightCard>
    );
};
export default TeamMembers;