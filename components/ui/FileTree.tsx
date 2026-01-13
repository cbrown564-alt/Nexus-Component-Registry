import React from 'react';
import { Folder, FileCode, FileJson, ChevronRight, ChevronDown, LucideIcon } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

export interface FileTreeItem {
  name: string;
  type: 'file' | 'folder';
  icon?: LucideIcon;
  iconColor?: string;
  expanded?: boolean;
  children?: FileTreeItem[];
}

export interface FileTreeProps {
  /** Title for the file tree */
  title?: string;
  /** Array of file/folder items */
  items?: FileTreeItem[];
}

const defaultItems: FileTreeItem[] = [
  {
    name: 'nexus-core',
    type: 'folder',
    iconColor: 'text-blue-400',
    expanded: true,
    children: [
      { name: '.github', type: 'folder', expanded: false },
      {
        name: 'src',
        type: 'folder',
        iconColor: 'text-amber-400',
        expanded: true,
        children: [
          { name: 'client.ts', type: 'file', iconColor: 'text-blue-400' },
          { name: 'server.ts', type: 'file', iconColor: 'text-blue-400' },
          { name: 'types.d.ts', type: 'file', iconColor: 'text-pink-400' },
        ]
      },
      { name: 'package.json', type: 'file', icon: FileJson, iconColor: 'text-yellow-400' },
    ]
  }
];

const FileTreeNode: React.FC<{ item: FileTreeItem; depth: number; theme: any }> = ({ item, depth, theme }) => {
  const isExpanded = item.expanded ?? false;
  const Icon = item.icon || (item.type === 'folder' ? Folder : FileCode);
  const iconColor = item.iconColor || (item.type === 'folder' ? 'text-blue-400' : 'text-blue-400');

  return (
    <div className={depth > 0 ? 'pl-4' : ''}>
      <div
        className="flex items-center gap-1.5 rounded px-1 py-0.5 cursor-pointer transition-colors hover:opacity-80"
        style={{ color: theme.colors.foreground }}
      >
        {item.type === 'folder' && (
          isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />
        )}
        <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
        <span>{item.name}</span>
      </div>
      {item.type === 'folder' && isExpanded && item.children && (
        <div
          className={depth > 0 ? 'ml-2.5 pl-2' : 'pl-4'}
          style={depth > 0 ? { borderLeft: `1px solid ${theme.colors.border}` } : undefined}
        >
          {item.children.map((child, i) => (
            <FileTreeNode key={i} item={child} depth={depth + 1} theme={theme} />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree: React.FC<FileTreeProps> = ({
  title = "Project Structure",
  items = defaultItems,
}) => {
  const { theme } = useTheme();

  return (
    <SpotlightCard className="p-6">
      <h3
        className="mb-4 text-sm font-medium"
        style={{ color: theme.colors.foreground }}
      >
        {title}
      </h3>
      <div
        className="space-y-1 font-mono text-xs"
        style={{ color: theme.colors.mutedForeground }}
      >
        {items.map((item, i) => (
          <FileTreeNode key={i} item={item} depth={0} theme={theme} />
        ))}
      </div>
    </SpotlightCard>
  );
};

export default FileTree;