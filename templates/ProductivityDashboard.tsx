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

const ProductivityDashboard = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#09090b] text-zinc-200 font-sans">
      
      {/* Inner Sidebar (Navigation) */}
      <div className="hidden w-64 flex-col border-r border-zinc-800 bg-zinc-950/50 p-4 lg:flex">
          <div className="mb-6 flex items-center gap-2 px-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-amber-500 text-zinc-950">
                  <Zap className="h-4 w-4 fill-current" />
              </div>
              <span className="font-bold text-white tracking-tight">Flow</span>
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
                    className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors ${
                        item.active 
                        ? 'bg-zinc-800 text-white' 
                        : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                    }`}
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
          <header className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-800 px-6">
              <div className="flex items-center gap-4">
                  <h2 className="text-sm font-bold text-white">Today</h2>
                  <span className="text-xs text-zinc-500">Thu, Oct 24</span>
              </div>
              <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                          <div key={i} className="h-6 w-6 rounded-full border border-zinc-900 bg-zinc-800" />
                      ))}
                  </div>
                  <div className="h-4 w-px bg-zinc-800" />
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

                      <ProductivityCard className="p-4">
                          <h3 className="text-sm font-medium text-zinc-200 mb-4">Daily Progress</h3>
                          <div className="space-y-4">
                              <div>
                                  <div className="flex justify-between text-xs mb-1">
                                      <span className="text-zinc-400">Tasks Completed</span>
                                      <span className="text-white">8/12</span>
                                  </div>
                                  <div className="h-1.5 w-full rounded-full bg-zinc-800">
                                      <div className="h-full w-2/3 rounded-full bg-amber-500" />
                                  </div>
                              </div>
                              <div>
                                  <div className="flex justify-between text-xs mb-1">
                                      <span className="text-zinc-400">Focus Time</span>
                                      <span className="text-white">3h 24m</span>
                                  </div>
                                  <div className="h-1.5 w-full rounded-full bg-zinc-800">
                                      <div className="h-full w-1/2 rounded-full bg-zinc-600" />
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