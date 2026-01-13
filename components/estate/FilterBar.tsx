import React, { useState } from 'react';
import { Search, ChevronDown, SlidersHorizontal, Map } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const FilterBar = () => {
    const { currentPlaygroundTheme: theme } = useTheme();
    const [activeTab, setActiveTab] = useState('buy');

    return (
        <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 border-b pb-6" style={{ borderColor: theme.colors.border }}>
            {/* Type Toggle */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-full">
                {['Buy', 'Rent', 'Sell'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.toLowerCase()
                                ? 'bg-white shadow-sm text-black'
                                : 'text-stone-500 hover:text-stone-900'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Minimal Search */}
            <div className="flex-1 w-full relative group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors" />
                <input
                    type="text"
                    placeholder="City, Neighborhood, ZIP, Address..."
                    className="w-full bg-transparent border-none outline-none pl-8 py-2 text-lg font-serif placeholder:font-serif placeholder:italic placeholder:opacity-40"
                    style={{ color: theme.colors.foreground }}
                />
            </div>

            {/* Quick Filters */}
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm font-medium hover:opacity-70">
                    Price Range <ChevronDown size={14} />
                </button>
                <div className="h-4 w-[1px] bg-stone-200" />
                <button className="flex items-center gap-2 text-sm font-medium hover:opacity-70">
                    Bed / Bath <ChevronDown size={14} />
                </button>
                <div className="h-4 w-[1px] bg-stone-200" />
                <button className="p-2 border rounded-full hover:bg-stone-50 transition-colors" style={{ borderColor: theme.colors.border }}>
                    <SlidersHorizontal size={18} />
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
