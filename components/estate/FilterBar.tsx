import React, { useState } from 'react';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export interface FilterBarProps {
    /** Tab options to display */
    tabs?: string[];
    /** Initially active tab */
    defaultTab?: string;
    /** Placeholder text for search */
    searchPlaceholder?: string;
    /** Filter options to display */
    filters?: string[];
    /** Callback when a tab is selected */
    onTabChange?: (tab: string) => void;
    /** Callback when search changes */
    onSearchChange?: (query: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
    tabs = ['Buy', 'Rent', 'Sell'],
    defaultTab = 'buy',
    searchPlaceholder = 'City, Neighborhood, ZIP, Address...',
    filters = ['Price Range', 'Bed / Bath'],
    onTabChange,
    onSearchChange,
}) => {
    const { currentPlaygroundTheme: theme } = useTheme();
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabClick = (tab: string) => {
        const normalizedTab = tab.toLowerCase();
        setActiveTab(normalizedTab);
        onTabChange?.(normalizedTab);
    };

    return (
        <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 border-b pb-6" style={{ borderColor: theme.colors.border }}>
            {/* Type Toggle */}
            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-full">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
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
                    placeholder={searchPlaceholder}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    className="w-full bg-transparent border-none outline-none pl-8 py-2 text-lg font-serif placeholder:font-serif placeholder:italic placeholder:opacity-40"
                    style={{ color: theme.colors.foreground }}
                />
            </div>

            {/* Quick Filters */}
            <div className="flex items-center gap-4">
                {filters.map((filter, i) => (
                    <React.Fragment key={filter}>
                        <button className="flex items-center gap-2 text-sm font-medium hover:opacity-70">
                            {filter} <ChevronDown size={14} />
                        </button>
                        {i < filters.length - 1 && <div className="h-4 w-[1px] bg-stone-200" />}
                    </React.Fragment>
                ))}
                <div className="h-4 w-[1px] bg-stone-200" />
                <button className="p-2 border rounded-full hover:bg-stone-50 transition-colors" style={{ borderColor: theme.colors.border }}>
                    <SlidersHorizontal size={18} />
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
