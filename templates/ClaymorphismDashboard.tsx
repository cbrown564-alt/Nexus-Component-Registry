import React, { useState } from 'react';
import { Plus, Bell, Calendar, Search, Menu, CheckCircle2 } from 'lucide-react';
import ClayCard from '../components/clay/ClayCard';
import ClayButton from '../components/clay/ClayButton';
import ClayToggle from '../components/clay/ClayToggle';

const ClaymorphismDashboard = () => {
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
    <div className="min-h-screen bg-[#f0f4f8] font-display text-slate-700 p-6 md:p-10 relative overflow-hidden selection:bg-sky-200 selection:text-sky-900">
      
      {/* Decorative Blobs */}
      <div className="fixed -top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="fixed top-1/2 -right-20 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="fixed -bottom-20 left-1/3 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-[1.5rem] bg-white flex items-center justify-center shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Clay" alt="Avatar" className="h-10 w-10" />
                </div>
                <div>
                    <h1 className="text-3xl font-black text-slate-700 tracking-tight">Hi, Alex! 👋</h1>
                    <p className="text-slate-500 font-medium">You have 3 tasks pending</p>
                </div>
            </div>
            
            <div className="flex gap-4">
                <button className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 hover:text-sky-500 transition-colors shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]">
                    <Search className="h-6 w-6" />
                </button>
                <button className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]">
                    <Bell className="h-6 w-6" />
                </button>
            </div>
        </header>

        {/* Horizontal Calendar Strip */}
        <div className="mb-10 overflow-x-auto pb-8 pt-4 px-2 scrollbar-hide flex gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                <div 
                    key={day} 
                    className={`flex flex-col items-center justify-center min-w-[70px] h-24 rounded-[1.5rem] cursor-pointer transition-transform hover:-translate-y-2 ${
                        i === 2 
                        ? 'bg-sky-400 text-white shadow-[8px_8px_16px_#bae6fd,-8px_-8px_16px_#ffffff]' 
                        : 'bg-white text-slate-500 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff]'
                    }`}
                >
                    <span className="text-xs font-bold uppercase tracking-wider mb-1">{day}</span>
                    <span className="text-2xl font-black">{22 + i}</span>
                    {i === 2 && <div className="mt-1 w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
            ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Task List */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center mb-2 px-2">
                    <h2 className="text-xl font-bold text-slate-700">Today's Tasks</h2>
                    <span className="text-sm font-bold text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">4 Total</span>
                </div>

                {tasks.map((task) => (
                    <ClayCard 
                        key={task.id} 
                        color={task.checked ? 'bg-slate-100' : 'bg-white'} 
                        shadowColor={task.checked ? '#e2e8f0' : '#d1d9e6'}
                        className={`flex items-center justify-between transition-all ${task.checked ? 'opacity-60' : ''}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${task.color}`} style={{
                                boxShadow: `inset 2px 2px 4px rgba(255,255,255,0.6), inset -2px -2px 4px rgba(0,0,0,0.05)`
                            }}>
                                <span className="text-slate-700 font-bold text-lg">{task.title.charAt(0)}</span>
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg ${task.checked ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                                    {task.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {task.time}
                                </div>
                            </div>
                        </div>
                        <ClayToggle 
                            checked={task.checked} 
                            onChange={() => toggleTask(task.id)} 
                            color="bg-sky-400"
                        />
                    </ClayCard>
                ))}
            </div>

            {/* Sidebar / Stats */}
            <div className="flex flex-col gap-8">
                <ClayCard color="bg-white" className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 mb-6">
                        <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                            <circle 
                                cx="50" cy="50" r="40" 
                                stroke="#bae6fd" strokeWidth="12" fill="none" 
                                strokeDasharray="251" strokeDashoffset="60" 
                                strokeLinecap="round"
                                className="drop-shadow-md"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-black text-slate-700">75%</span>
                            <span className="text-xs font-bold text-slate-400 uppercase">Done</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">Great job!</h3>
                    <p className="text-slate-500 mb-6">You're almost done with your daily goals.</p>
                    <ClayButton variant="primary" className="w-full">View Report</ClayButton>
                </ClayCard>

                {/* Categories */}
                <div className="grid grid-cols-2 gap-4">
                    <ClayCard color="bg-violet-100" shadowColor="#ede9fe" className="p-4 flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer hover:scale-105 transition-transform">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-violet-500 shadow-sm">
                            <span className="font-black text-lg">W</span>
                        </div>
                        <span className="font-bold text-violet-800">Work</span>
                    </ClayCard>
                    <ClayCard color="bg-rose-100" shadowColor="#ffe4e6" className="p-4 flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer hover:scale-105 transition-transform">
                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-sm">
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