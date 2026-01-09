import React from 'react';
import { MoreHorizontal, Plus, AlertCircle } from 'lucide-react';
import ProductivityCard from './ProductivityCard';

const KanbanBoard = () => {
  const columns = [
    {
      title: 'To Do',
      count: 3,
      items: [
        { id: 'TSK-129', title: 'Q3 Roadmap Planning', tag: 'High', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
        { id: 'TSK-130', title: 'Update documentation', tag: 'Medium', color: 'text-zinc-400 bg-zinc-800 border-zinc-700' },
      ]
    },
    {
      title: 'In Progress',
      count: 2,
      items: [
        { id: 'TSK-124', title: 'Authentication Flow', tag: 'High', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
        { id: 'TSK-128', title: 'Fix navigation bug', tag: 'Low', color: 'text-zinc-500 bg-zinc-800/50 border-zinc-800' },
      ]
    },
    {
      title: 'Review',
      count: 1,
      items: [
        { id: 'TSK-119', title: 'Homepage Redesign', tag: 'Critical', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
      ]
    }
  ];

  return (
    <div className="flex h-full gap-6 overflow-x-auto pb-4">
      {columns.map((col, i) => (
        <div key={i} className="flex min-w-[300px] flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">{col.title}</span>
              <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-500">{col.items.length}</span>
            </div>
            <div className="flex gap-1">
                <button className="text-zinc-600 hover:text-zinc-400"><Plus className="h-4 w-4" /></button>
                <button className="text-zinc-600 hover:text-zinc-400"><MoreHorizontal className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {col.items.map((item, j) => (
              <ProductivityCard key={j} className="cursor-pointer p-4 hover:border-zinc-600 transition-colors group">
                <div className="mb-3 flex items-start justify-between">
                   <span className="font-mono text-[10px] text-zinc-500">{item.id}</span>
                   <div className={`h-1.5 w-1.5 rounded-full ${item.tag === 'High' || item.tag === 'Critical' ? 'bg-amber-500' : 'bg-zinc-700'}`} />
                </div>
                <h4 className="mb-3 text-sm font-medium text-zinc-200 group-hover:text-white">{item.title}</h4>
                <div className="flex items-center justify-between">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium border ${item.color}`}>
                        {item.tag}
                    </span>
                    <div className="h-6 w-6 rounded-full bg-zinc-800 border border-zinc-700" />
                </div>
              </ProductivityCard>
            ))}
            <button className="flex w-full items-center gap-2 rounded-lg border border-dashed border-zinc-800 py-2.5 px-3 text-xs text-zinc-500 hover:border-zinc-700 hover:bg-zinc-900/50 hover:text-zinc-300 transition-all">
                <Plus className="h-3.5 w-3.5" />
                Create Issue
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;