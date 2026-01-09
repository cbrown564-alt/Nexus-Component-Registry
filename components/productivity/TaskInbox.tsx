import React from 'react';
import { Circle, CheckCircle2, Calendar } from 'lucide-react';
import ProductivityCard from './ProductivityCard';

const TaskInbox = () => {
  const tasks = [
    { text: "Review Q4 marketing goals", due: "Today", project: "Strategy" },
    { text: "Email contract to client", due: "Tomorrow", project: "Sales" },
    { text: "Update personal portfolio", due: "Weekend", project: "Personal" },
    { text: "Book flights for conference", due: "Next Week", project: "Admin" },
  ];

  return (
    <ProductivityCard className="flex flex-col h-full p-0">
        <div className="border-b border-zinc-800 p-4">
            <h3 className="font-medium text-zinc-200">Inbox</h3>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
            {tasks.map((task, i) => (
                <div key={i} className="group flex items-center gap-3 rounded-md p-2 hover:bg-zinc-800/50 transition-colors cursor-pointer">
                    <button className="text-zinc-600 hover:text-amber-500 transition-colors">
                        <Circle className="h-4 w-4" />
                    </button>
                    <span className="flex-1 text-sm text-zinc-300 group-hover:text-zinc-100">{task.text}</span>
                    <div className="flex items-center gap-2 text-[10px]">
                        <span className="hidden rounded bg-zinc-800 px-1.5 py-0.5 text-zinc-500 group-hover:inline-block">
                            {task.project}
                        </span>
                        <span className={`flex items-center gap-1 ${task.due === 'Today' ? 'text-amber-500' : 'text-zinc-600'}`}>
                            <Calendar className="h-3 w-3" />
                            {task.due}
                        </span>
                    </div>
                </div>
            ))}
            
            {/* Input Area */}
            <div className="mt-2 flex items-center gap-3 rounded-md p-2">
                 <Plus className="h-4 w-4 text-zinc-600" />
                 <input 
                    type="text" 
                    placeholder="Add a task..." 
                    className="flex-1 bg-transparent text-sm text-white placeholder-zinc-600 outline-none"
                 />
                 <div className="hidden text-[10px] text-zinc-600 md:block">
                     Press <kbd className="rounded border border-zinc-700 bg-zinc-800 px-1 font-sans">Enter</kbd>
                 </div>
            </div>
        </div>
    </ProductivityCard>
  );
};

import { Plus } from 'lucide-react';

export default TaskInbox;