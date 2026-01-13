import React from 'react';
import OrganicContainer from './OrganicContainer';
import { Bug, Bird, Rat, LucideIcon } from 'lucide-react';

export interface Species {
    name: string;
    count: number;
    status: string;
    icon: LucideIcon;
}

export interface SpeciesListProps {
    /** Title displayed at the top */
    title?: string;
    /** Array of species data */
    species?: Species[];
    /** Total species count for footer */
    totalCount?: number;
    /** Callback when "View All" is clicked */
    onViewAll?: () => void;
}

const defaultSpecies: Species[] = [
    { name: 'Monarch Butterfly', count: 1240, status: 'Recovering', icon: Bug },
    { name: 'Song Thrush', count: 85, status: 'Stable', icon: Bird },
    { name: 'Field Vole', count: 4200, status: 'Thriving', icon: Rat },
];

const SpeciesList: React.FC<SpeciesListProps> = ({
    title = 'Biodiversity Index',
    species = defaultSpecies,
    totalCount = 42,
    onViewAll,
}) => {
    return (
        <OrganicContainer variant="glass" className="h-full flex flex-col">
            <h3 className="text-xl font-serif text-[#3d3a3a] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#78866b]" />
                {title}
            </h3>

            <div className="flex-1 space-y-3">
                {species.map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/40 rounded-xl hover:bg-white/60 transition-colors cursor-default">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#e0d0b8]/30 rounded-lg text-[#78866b]">
                                <s.icon size={18} />
                            </div>
                            <div>
                                <div className="font-bold text-sm text-[#3d3a3a]">{s.name}</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest">{s.status}</div>
                            </div>
                        </div>
                        <div className="text-lg font-serif font-bold text-[#78866b] opacity-80">
                            {s.count.toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#78866b]/10 text-center">
                <span
                    onClick={onViewAll}
                    className="text-xs text-[#78866b] font-bold uppercase tracking-widest cursor-pointer hover:underline"
                >
                    View All {totalCount} Species
                </span>
            </div>
        </OrganicContainer>
    );
};

export default SpeciesList;
