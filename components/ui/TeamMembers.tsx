import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const TeamMembers = () => (
    <SpotlightCard className="p-6">
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium text-zinc-100">Team Access</h3>
            <button className="text-zinc-500 hover:text-zinc-300">
                <MoreHorizontal className="h-4 w-4" />
            </button>
        </div>
        <div className="space-y-4">
            {[
                { name: 'Sofia Davis', role: 'Engineering Lead', color: 'bg-orange-500', initials: 'SD' },
                { name: 'Alex Morgan', role: 'DevOps Engineer', color: 'bg-blue-500', initials: 'AM' },
                { name: 'Chris Chen', role: 'Product Designer', color: 'bg-pink-500', initials: 'CC' },
            ].map((member, i) => (
                <div key={i} className="group flex items-center justify-between rounded-lg p-2 -mx-2 hover:bg-zinc-900/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${member.color} text-[10px] font-bold text-white shadow-lg`}>
                            {member.initials}
                        </div>
                        <div>
                            <div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">{member.name}</div>
                            <div className="text-xs text-zinc-500">{member.role}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
                </div>
            ))}
        </div>
        <button className="mt-4 w-full rounded-md border border-zinc-800 py-2 text-xs font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            Manage Permissions
        </button>
    </SpotlightCard>
);
export default TeamMembers;