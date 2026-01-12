import React, { useState, useEffect } from 'react';
import { Plus, Bell, Calendar, Search, Menu, CheckCircle2 } from 'lucide-react';
import ClayCard from '../components/clay/ClayCard';
import ClayButton from '../components/clay/ClayButton';
import ClayToggle from '../components/clay/ClayToggle';
import { useTheme } from '@/context/ThemeContext';

const ClaymorphismDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    useEffect(() => {
        setPlaygroundTheme('clay');
    }, []);

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Walk the dog', time: '08:00 AM', color: 'bg-rose-200', shadow: '#fecdd3', checked: true },
        { id: 2, title: 'Design Team Meeting', time: '10:30 AM', color: 'bg-violet-200', shadow: '#ddd6fe', checked: false },
        { id: 3, title: 'Buy Groceries', time: '05:00 PM', color: 'bg-emerald-200', shadow: '#a7f3d0', checked: false },
        { id: 4, title: 'Read Book', time: '09:00 PM', color: 'bg-amber-200', shadow: '#fde68a', checked: false },
    ]);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
    };

    return (
        <div
            className="min-h-screen font-display p-6 md:p-10 relative overflow-hidden selection:bg-sky-200 selection:text-sky-900"
            style={{ backgroundColor: theme.colors.background, color: theme.colors.foreground }}
        >

            {/* Decorative Blobs */}
            <div className="fixed -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none" style={{ backgroundColor: `${theme.colors.secondary}80` }} />
            <div className="fixed top-1/2 -right-20 w-80 h-80 rounded-full blur-3xl opacity-50 pointer-events-none" style={{ backgroundColor: `${theme.colors.primary}80` }} />
            <div className="fixed -bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none" style={{ backgroundColor: `${theme.colors.accent}80` }} />

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* Header */}
                <header className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-[1.5rem] flex items-center justify-center shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]" style={{ backgroundColor: theme.colors.card }}>
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Clay" alt="Avatar" className="h-10 w-10" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black tracking-tight" style={{ color: theme.colors.foreground }}>Hi, Alex! 👋</h1>
                            <p className="font-medium" style={{ color: theme.colors.mutedForeground }}>You have 3 tasks pending</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="h-12 w-12 rounded-2xl flex items-center justify-center hover:text-sky-500 transition-colors shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]" style={{ backgroundColor: theme.colors.card, color: theme.colors.mutedForeground }}>
                            <Search className="h-6 w-6" />
                        </button>
                        <button className="h-12 w-12 rounded-2xl flex items-center justify-center hover:text-rose-500 transition-colors shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]" style={{ backgroundColor: theme.colors.card, color: theme.colors.mutedForeground }}>
                            <Bell className="h-6 w-6" />
                        </button>
                    </div>
                </header>

                {/* Horizontal Calendar Strip */}
                <div className="mb-10 overflow-x-auto pb-8 pt-4 px-2 scrollbar-hide flex gap-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                        <div
                            key={day}
                            className={`flex flex-col items-center justify-center min-w-[70px] h-24 rounded-[1.5rem] cursor-pointer transition-transform hover:-translate-y-2`}
                            style={{
                                backgroundColor: i === 2 ? theme.colors.secondary : theme.colors.card,
                                color: i === 2 ? theme.colors.secondaryForeground : theme.colors.mutedForeground,
                                boxShadow: i === 2 ? `8px 8px 16px ${theme.colors.secondary}80, -8px -8px 16px #ffffff` : '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff'
                            }}
                        >
                            <span className="text-xs font-bold uppercase tracking-wider mb-1">{day}</span>
                            <span className="text-2xl font-black">{22 + i}</span>
                            {i === 2 && <div className="mt-1 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#ffffff' }} />}
                        </div>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Task List */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-between items-center mb-2 px-2">
                            <h2 className="text-xl font-bold" style={{ color: theme.colors.foreground }}>Today's Tasks</h2>
                            <span className="text-sm font-bold px-3 py-1 rounded-full shadow-sm" style={{ backgroundColor: theme.colors.card, color: theme.colors.mutedForeground }}>4 Total</span>
                        </div>

                        {tasks.map((task) => (
                            <ClayCard
                                key={task.id}
                                color={task.checked ? '#f1f5f9' : '#ffffff'}
                                shadowColor={task.checked ? '#e2e8f0' : '#d1d9e6'}
                                className={`flex items-center justify-between transition-all ${task.checked ? 'opacity-60' : ''}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${task.color}`} style={{
                                        boxShadow: `inset 2px 2px 4px rgba(255,255,255,0.6), inset -2px -2px 4px rgba(0,0,0,0.05)`
                                    }}>
                                        <span className="font-bold text-lg" style={{ color: '#334155' }}>{task.title.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${task.checked ? 'line-through' : ''}`} style={{ color: task.checked ? '#94a3b8' : theme.colors.foreground }}>
                                            {task.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: theme.colors.mutedForeground }}>
                                            <Calendar className="h-3.5 w-3.5" />
                                            {task.time}
                                        </div>
                                    </div>
                                </div>
                                <ClayToggle
                                    checked={task.checked}
                                    onChange={() => toggleTask(task.id)}
                                    color={theme.colors.secondary}
                                />
                            </ClayCard>
                        ))}
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="flex flex-col gap-8">
                        <ClayCard color={theme.colors.card} className="flex flex-col items-center text-center">
                            <div className="relative h-40 w-40 mb-6">
                                <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" stroke={theme.colors.background} strokeWidth="12" fill="none" />
                                    <circle
                                        cx="50" cy="50" r="40"
                                        stroke={theme.colors.secondary} strokeWidth="12" fill="none"
                                        strokeDasharray="251" strokeDashoffset="60"
                                        strokeLinecap="round"
                                        className="drop-shadow-md"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black" style={{ color: theme.colors.foreground }}>75%</span>
                                    <span className="text-xs font-bold uppercase" style={{ color: theme.colors.mutedForeground }}>Done</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.foreground }}>Great job!</h3>
                            <p className="mb-6" style={{ color: theme.colors.mutedForeground }}>You're almost done with your daily goals.</p>
                            <ClayButton variant="primary" className="w-full">View Report</ClayButton>
                        </ClayCard>

                        {/* Categories */}
                        <div className="grid grid-cols-2 gap-4">
                            <ClayCard color="bg-violet-100" shadowColor="#ede9fe" className="p-4 flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer hover:scale-105 transition-transform">
                                <div className="h-10 w-10 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: '#ffffff', color: '#8b5cf6' }}>
                                    <span className="font-black text-lg">W</span>
                                </div>
                                <span className="font-bold text-violet-800">Work</span>
                            </ClayCard>
                            <ClayCard color="bg-rose-100" shadowColor="#ffe4e6" className="p-4 flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer hover:scale-105 transition-transform">
                                <div className="h-10 w-10 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: '#ffffff', color: '#f43f5e' }}>
                                    <span className="font-black text-lg">P</span>
                                </div>
                                <span className="font-bold text-rose-800">Personal</span>
                            </ClayCard>
                        </div>
                    </div>

                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-8 right-8 z-50">
                    <ClayButton className="h-16 w-16 !rounded-full flex items-center justify-center !p-0">
                        <Plus className="h-8 w-8" />
                    </ClayButton>
                </div>

            </div>
        </div>
    );
};

export default ClaymorphismDashboard;