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
            <div className="border-b p-4" style={{ borderColor: '#27272a' }}>
                <h3 className="font-medium" style={{ color: '#e4e4e7' }}>Inbox</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-2">
                {tasks.map((task, i) => (
                    <div key={i} className="group flex items-center gap-3 rounded-md p-2 hover:bg-zinc-800/50 transition-colors cursor-pointer">
                        <button className="transition-colors hover:text-amber-500" style={{ color: '#52525b' }}>
                            <Circle className="h-4 w-4" />
                        </button>
                        <span className="flex-1 text-sm group-hover:text-zinc-100" style={{ color: '#d4d4d8' }}>{task.text}</span>
                        <div className="flex items-center gap-2 text-[10px]">
                            <span className="hidden rounded px-1.5 py-0.5 group-hover:inline-block" style={{ backgroundColor: '#27272a', color: '#71717a' }}>
                                {task.project}
                            </span>
                            <span className="flex items-center gap-1" style={{ color: task.due === 'Today' ? '#f59e0b' : '#52525b' }}>
                                <Calendar className="h-3 w-3" />
                                {task.due}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Input Area */}
                <div className="mt-2 flex items-center gap-3 rounded-md p-2">
                    <Plus className="h-4 w-4" style={{ color: '#52525b' }} />
                    <input
                        type="text"
                        placeholder="Add a task..."
                        className="flex-1 bg-transparent text-sm outline-none"
                        style={{ color: '#ffffff', '--tw-placeholder-color': '#52525b' } as React.CSSProperties}
                    />
                    <div className="hidden text-[10px] md:block" style={{ color: '#52525b' }}>
                        Press <kbd className="rounded border px-1 font-sans" style={{ borderColor: '#3f3f46', backgroundColor: '#27272a' }}>Enter</kbd>
                    </div>
                </div>
            </div>
        </ProductivityCard>
    );
};

import { Plus } from 'lucide-react';

export default TaskInbox;