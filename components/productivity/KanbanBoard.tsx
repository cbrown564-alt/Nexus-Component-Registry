import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';
import ProductivityCard from './ProductivityCard';
import { useTheme } from '@/context/ThemeContext';
import type { PlaygroundTheme } from '@/data/playgroundThemes';

interface KanbanBoardProps {
  theme?: PlaygroundTheme;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ theme: themeProp }) => {
  const { currentPlaygroundTheme } = useTheme();
  const theme = themeProp || currentPlaygroundTheme;

  // Derive tag styles from theme
  const getTagStyle = (tag: string) => {
    const accent = theme.colors.accent;
    const primary = theme.colors.primary;
    switch (tag) {
      case 'High':
        return { color: accent, backgroundColor: `${accent}1A`, borderColor: `${accent}33` };
      case 'Critical':
        return { color: '#f87171', backgroundColor: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.2)' };
      case 'Medium':
        return { color: theme.colors.mutedForeground, backgroundColor: theme.colors.muted, borderColor: theme.colors.border };
      case 'Low':
      default:
        return { color: theme.colors.mutedForeground, backgroundColor: `${theme.colors.muted}80`, borderColor: theme.colors.border };
    }
  };

  const columns = [
    {
      title: 'To Do',
      items: [
        { id: 'TSK-129', title: 'Q3 Roadmap Planning', tag: 'High' },
        { id: 'TSK-130', title: 'Update documentation', tag: 'Medium' },
      ]
    },
    {
      title: 'In Progress',
      items: [
        { id: 'TSK-124', title: 'Authentication Flow', tag: 'High' },
        { id: 'TSK-128', title: 'Fix navigation bug', tag: 'Low' },
      ]
    },
    {
      title: 'Review',
      items: [
        { id: 'TSK-119', title: 'Homepage Redesign', tag: 'Critical' },
      ]
    }
  ];

  return (
    <div className="flex h-full gap-6 overflow-x-auto pb-4">
      {columns.map((col, i) => (
        <div key={i} className="flex min-w-[280px] flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.foreground }}>{col.title}</span>
              <span className="rounded px-1.5 py-0.5 text-[10px]" style={{ backgroundColor: theme.colors.muted, color: theme.colors.mutedForeground }}>{col.items.length}</span>
            </div>
            <div className="flex gap-1">
              <button style={{ color: theme.colors.mutedForeground }}><Plus className="h-4 w-4" /></button>
              <button style={{ color: theme.colors.mutedForeground }}><MoreHorizontal className="h-4 w-4" /></button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {col.items.map((item, j) => (
              <ProductivityCard key={j} className="cursor-pointer p-4 transition-colors group" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
                <div className="mb-3 flex items-start justify-between">
                  <span className="font-mono text-[10px]" style={{ color: theme.colors.mutedForeground }}>{item.id}</span>
                  <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.tag === 'High' || item.tag === 'Critical' ? theme.colors.accent : theme.colors.border }} />
                </div>
                <h4 className="mb-3 text-sm font-medium" style={{ color: theme.colors.foreground }}>{item.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="rounded px-1.5 py-0.5 text-[10px] font-medium border" style={getTagStyle(item.tag)}>
                    {item.tag}
                  </span>
                  <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: theme.colors.muted, borderColor: theme.colors.border }} />
                </div>
              </ProductivityCard>
            ))}
            <button className="flex w-full items-center gap-2 rounded-lg border border-dashed py-2.5 px-3 text-xs transition-all" style={{ borderColor: theme.colors.border, color: theme.colors.mutedForeground }}>
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