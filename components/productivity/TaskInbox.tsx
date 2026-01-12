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
                <TaskList tasks={tasks} />
            </div>

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
        </ProductivityCard>
    );
};

const TaskList = ({ tasks }: { tasks: any[] }) => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
        <>
            {tasks.map((task, i) => {
                const isHovered = hoveredIndex === i;
                return (
                    <div
                        key={i}
                        className="group flex items-center gap-3 rounded-md p-2 transition-colors cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{ backgroundColor: isHovered ? 'rgba(39, 39, 42, 0.5)' : 'transparent' }}
                    >
                        <button className="transition-colors" style={{ color: isHovered ? '#f59e0b' : '#52525b' }}>
                            <Circle className="h-4 w-4" />
                        </button>
                        <span className="flex-1 text-sm" style={{ color: isHovered ? '#f4f4f5' : '#d4d4d8' }}>{task.text}</span>
                        <div className="flex items-center gap-2 text-[10px]">
                            <span
                                className="rounded px-1.5 py-0.5"
                                style={{
                                    backgroundColor: '#27272a',
                                    color: '#71717a',
                                    display: isHovered ? 'inline-block' : 'none'
                                }}
                            >
                                {task.project}
                            </span>
                            <span className="flex items-center gap-1" style={{ color: task.due === 'Today' ? '#f59e0b' : '#52525b' }}>
                                <Calendar className="h-3 w-3" />
                                {task.due}
                            </span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};


import { Plus } from 'lucide-react';

export default TaskInbox;