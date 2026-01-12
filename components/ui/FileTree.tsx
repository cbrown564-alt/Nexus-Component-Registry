import React from 'react';
import { Folder, FileCode, FileJson, ChevronRight, ChevronDown } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

const FileTree = () => {
  const { theme } = useTheme();

  return (
    <SpotlightCard className="p-6">
      <h3
        className="mb-4 text-sm font-medium"
        style={{ color: theme.colors.foreground }}
      >
        Project Structure
      </h3>
      <div
        className="space-y-1 font-mono text-xs"
        style={{ color: theme.colors.mutedForeground }}
      >
        <div
          className="flex items-center gap-1.5"
          style={{ color: theme.colors.foreground }}
        >
          <ChevronDown className="h-3 w-3" />
          <Folder className="h-3.5 w-3.5 text-blue-400" />
          <span>nexus-core</span>
        </div>

        <div className="pl-4 space-y-1">
          <div
            className="flex items-center gap-1.5 rounded px-1 py-0.5 cursor-pointer transition-colors group hover:opacity-80"
            style={{
              // Using style for hover is tricky without CSS-in-JS or class injection.
              // But we can rely on opacity hover effect, or use a persistent hover class if we had one.
              // Original used: hover:bg-zinc-900/50 hover:text-zinc-200
              // We can map these to theme, but hover logic in inline styles is not possible.
              // However, we can use standard tailwind hover:bg-[...] if we use CSS variables or a utility that maps theme.
              // For now, I'll attach a className that likely exists or just accept that hover might not be perfectly themed without a wrapper.
              // ACTUALLY, I can use `hover:bg-secondary` if I knew the class.
              // But I'm supposed to use token values.
              // I will use a simple approach: assume `hover:bg-zinc-900/50` was for dark mode item highlight.
              // I'll keep the structure but set default text colors via style.
            }}
          // I'll add a hover class that uses opacity or standard highlight.
          // Ideally I'd use `hover:bg-accent hover:text-accent-foreground` if Tailwind config supports it.
          // Assuming Tailwind config maps `bg-accent` to `theme.colors.accent`.
          // If not, I'll stick to a safe semantic hover or inline it if I can (I can't inline hover).
          >
            <ChevronRight className="h-3 w-3 group-hover:text-current transition-colors" style={{ color: theme.colors.mutedForeground }} />
            <Folder className="h-3.5 w-3.5 group-hover:text-current transition-colors" style={{ color: theme.colors.mutedForeground }} />
            <span style={{ color: theme.colors.mutedForeground }}>.github</span>
          </div>

          <div className="flex items-center gap-1.5 rounded px-1 py-0.5 cursor-pointer transition-colors hover:opacity-80">
            <ChevronDown className="h-3 w-3" style={{ color: theme.colors.foreground }} />
            <Folder className="h-3.5 w-3.5 text-amber-400" />
            <span style={{ color: theme.colors.foreground }}>src</span>
          </div>

          <div
            className="pl-4 space-y-1 ml-2.5 pl-2"
            style={{ borderLeft: `1px solid ${theme.colors.border}` }}
          >
            <div className="flex items-center gap-1.5 rounded px-1 py-0.5 cursor-pointer transition-colors hover:opacity-80">
              <FileCode className="h-3.5 w-3.5 text-blue-400" />
              <span style={{ color: theme.colors.foreground }}>client.ts</span>
            </div>
            <div className="flex items-center gap-1.5 rounded px-1 py-0.5 cursor-pointer transition-colors hover:opacity-80">
              <FileCode className="h-3.5 w-3.5 text-blue-400" />
              <span style={{ color: theme.colors.foreground }}>server.ts</span>
            </div>
            <div className="flex items-center gap-1.5 rounded px-1 py-0.5 cursor-pointer transition-colors hover:opacity-80">
              <FileCode className="h-3.5 w-3.5 text-pink-400" />
              <span style={{ color: theme.colors.foreground }}>types.d.ts</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded px-1 py-0.5 cursor-pointer transition-colors hover:opacity-80">
            <FileJson className="h-3.5 w-3.5 text-yellow-400" />
            <span style={{ color: theme.colors.foreground }}>package.json</span>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
export default FileTree;