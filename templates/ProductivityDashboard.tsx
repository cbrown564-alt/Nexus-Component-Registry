import React from 'react';
import { motion } from 'framer-motion';
import {
    Inbox,
    CalendarDays,
    Layout,
    Settings2,
    Target,
    Zap
} from 'lucide-react';
import KanbanBoard from '../components/productivity/KanbanBoard';
import FocusTimer from '../components/productivity/FocusTimer';
import TaskInbox from '../components/productivity/TaskInbox';
import ProductivityCard from '../components/productivity/ProductivityCard';

import { useTheme } from '@/context/ThemeContext';

const ProductivityDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    React.useEffect(() => {
        setScopedTheme('professional', 'productivity');
    }, []);

    return (
        <div
            className="flex h-screen w-full overflow-hidden font-sans"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >

            {/* Inner Sidebar (Navigation) */}
            <div className="hidden w-64 flex-col border-r p-4 lg:flex" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.muted }}>
                <div className="mb-6 flex items-center gap-2 px-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded" style={{ backgroundColor: theme.colors.primary, color: theme.colors.primaryForeground }}>
                        <Zap className="h-4 w-4 fill-current" />
                    </div>
                    <span className="font-bold tracking-tight" style={{ color: theme.colors.foreground }}>Flow</span>
                </div>

                <div className="space-y-1">
                    {[
                        { icon: Inbox, label: 'Inbox', count: 4, active: false },
                        { icon: Target, label: 'Today', count: 2, active: true },
                        { icon: CalendarDays, label: 'Upcoming', active: false },
                        { icon: Layout, label: 'Board View', active: false },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors`}
                            style={{
                                backgroundColor: item.active ? theme.colors.secondary : 'transparent',
                                color: item.active ? theme.colors.foreground : theme.colors.mutedForeground,
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <item.icon className="h-4 w-4" />
                                <span>{item.label}</span>
                            </div>
                            {item.count && (
                                <span className="text-xs text-zinc-500">{item.count}</span>
                            )}
                        </button>
                    ))}
                </div>

                <div className="mt-8">
                    <div className="px-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Projects</div>
                    <div className="space-y-1">
                        {['Marketing Q4', 'Mobile App', 'Website Redesign'].map((p) => (
                            <button key={p} className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200">
                                <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">

                {/* Toolbar */}
                <header className="flex h-14 shrink-0 items-center justify-between border-b px-6" style={{ borderColor: theme.colors.border }}>
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-bold" style={{ color: theme.colors.foreground }}>Today</h2>
                        <span className="text-xs" style={{ color: theme.colors.mutedForeground }}>Thu, Oct 24</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-6 w-6 rounded-full border" style={{ borderColor: theme.colors.background, backgroundColor: theme.colors.secondary }} />
                            ))}
                        </div>
                        <div className="h-4 w-px" style={{ backgroundColor: theme.colors.border }} />
                        <button className="text-zinc-500 hover:text-zinc-300">
                            <Settings2 className="h-4 w-4" />
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-hidden p-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 h-full">

                        {/* Left Column: Focus & Inbox */}
                        <div className="flex flex-col gap-6 lg:col-span-1 h-full overflow-y-auto pb-6">
                            <FocusTimer />

                            <div className="flex-1 min-h-[300px]">
                                <TaskInbox />
                            </div>

                            <ProductivityCard className="p-4" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
                                <h3 className="text-sm font-medium mb-4" style={{ color: theme.colors.foreground }}>Daily Progress</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span style={{ color: theme.colors.mutedForeground }}>Tasks Completed</span>
                                            <span style={{ color: theme.colors.foreground }}>8/12</span>
                                        </div>
                                        <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: theme.colors.secondary }}>
                                            <div className="h-full w-2/3 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span style={{ color: theme.colors.mutedForeground }}>Focus Time</span>
                                            <span style={{ color: theme.colors.foreground }}>3h 24m</span>
                                        </div>
                                        <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: theme.colors.secondary }}>
                                            <div className="h-full w-1/2 rounded-full" style={{ backgroundColor: theme.colors.mutedForeground }} />
                                        </div>
                                    </div>
                                </div>
                            </ProductivityCard>
                        </div>

                        {/* Right Column: Board */}
                        <div className="lg:col-span-2 h-full overflow-hidden">
                            <KanbanBoard />
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductivityDashboard;