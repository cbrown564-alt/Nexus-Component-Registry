import React from 'react';
import { Command, Search, Plus, PanelLeft } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

const ShortcutGuide = () => {
  const { theme } = useTheme();

  const Kbd: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <kbd
      className="inline-flex h-5 items-center justify-center rounded border px-1.5 font-sans text-[10px] font-medium shadow-[0_2px_0_0_rgba(255,255,255,0.1)]"
      style={{
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.muted || theme.colors.secondary,
        color: theme.colors.mutedForeground
      }}
    >
      {children}
    </kbd>
  );

  const shortcuts = [
    { icon: Search, label: 'Search components', keys: ['⌘', 'K'] },
    { icon: Plus, label: 'New project', keys: ['⌘', 'N'] },
    { icon: PanelLeft, label: 'Toggle sidebar', keys: ['⌘', 'B'] },
    { icon: Command, label: 'Show commands', keys: ['⌘', '⇧', 'P'] },
  ];

  return (
    <SpotlightCard className="p-6">
      <h3
        className="mb-4 text-sm font-medium"
        style={{ color: theme.colors.foreground }}
      >
        Keyboard Shortcuts
      </h3>
      <div className="space-y-3">
        {shortcuts.map((item, i) => (
          <div key={i} className="flex items-center justify-between group">
            <div
              className="flex items-center gap-2 transition-colors group-hover:opacity-100 opacity-70"
              style={{ color: theme.colors.mutedForeground }}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-xs">{item.label}</span>
            </div>
            <div className="flex items-center gap-1">
              {item.keys.map((keyVal, k) => (
                <Kbd key={k}>{keyVal}</Kbd>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
};
export default ShortcutGuide;