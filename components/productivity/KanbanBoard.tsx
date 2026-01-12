import React from 'react';
import { MoreHorizontal, Plus, AlertCircle } from 'lucide-react';
import ProductivityCard from './ProductivityCard';

const KanbanBoard = () => {
  const columns = [
    {
      title: 'To Do',
      count: 3,
      items: [
        { id: 'TSK-129', title: 'Q3 Roadmap Planning', tag: 'High', tagStyle: { color: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.2)' } },
        { id: 'TSK-130', title: 'Update documentation', tag: 'Medium', tagStyle: { color: '#a1a1aa', backgroundColor: '#27272a', borderColor: '#3f3f46' } },
      ]
    },
    {
      title: 'In Progress',
      count: 2,
      items: [
        { id: 'TSK-124', title: 'Authentication Flow', tag: 'High', tagStyle: { color: '#f59e0b', backgroundColor: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.2)' } },
        { id: 'TSK-128', title: 'Fix navigation bug', tag: 'Low', tagStyle: { color: '#71717a', backgroundColor: 'rgba(39,39,42,0.5)', borderColor: '#27272a' } },
      ]
    },
    {
      title: 'Review',
      count: 1,
      items: [
        { id: 'TSK-119', title: 'Homepage Redesign', tag: 'Critical', tagStyle: { color: '#f87171', backgroundColor: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.2)' } },
      ]
    }
  ];

  return (
    <div className="flex h-full gap-6 overflow-x-auto pb-4">
      {columns.map((col, i) => (
        <div key={i} className="flex min-w-[300px] flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#d4d4d8' }}>{col.title}</span>
              <span className="rounded px-1.5 py-0.5 text-[10px]" style={{ backgroundColor: '#27272a', color: '#71717a' }}>{col.items.length}</span>
            </div>
            <div className="flex gap-1">
              <button style={{ color: '#52525b' }}><Plus className="h-4 w-4" /></button>
              <button style={{ color: '#52525b' }}><MoreHorizontal className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {col.items.map((item, j) => (
              <ProductivityCard key={j} className="cursor-pointer p-4 transition-colors group">
                <div className="mb-3 flex items-start justify-between">
                  <span className="font-mono text-[10px]" style={{ color: '#71717a' }}>{item.id}</span>
                  <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.tag === 'High' || item.tag === 'Critical' ? '#f59e0b' : '#3f3f46' }} />
                </div>
                <h4 className="mb-3 text-sm font-medium" style={{ color: '#e4e4e7' }}>{item.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="rounded px-1.5 py-0.5 text-[10px] font-medium border" style={item.tagStyle}>
                    {item.tag}
                  </span>
                  <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: '#27272a', borderColor: '#3f3f46' }} />
                </div>
              </ProductivityCard>
            ))}
            <button className="flex w-full items-center gap-2 rounded-lg border border-dashed py-2.5 px-3 text-xs transition-all" style={{ borderColor: '#27272a', color: '#71717a' }}>
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