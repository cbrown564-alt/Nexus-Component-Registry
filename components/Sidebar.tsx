import React from 'react';
import { Box, LayoutTemplate, Zap, Settings, Command } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Box, label: 'Components', active: true },
    { icon: LayoutTemplate, label: 'Templates' },
    { icon: Zap, label: 'Hooks' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="group fixed left-0 top-0 z-50 h-full w-16 flex-col border-r border-zinc-800 bg-zinc-950 transition-[width] duration-300 hover:w-60">
      <div className="flex h-16 items-center justify-center border-b border-zinc-800 group-hover:justify-start group-hover:px-6">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-950">
          <Command className="h-5 w-5" />
        </div>
        <span className="ml-3 overflow-hidden whitespace-nowrap text-sm font-bold tracking-tight text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          NEXUS
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-3">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex h-10 items-center rounded-md px-2.5 transition-all duration-200 ${
              item.active 
                ? 'bg-zinc-900 text-white' 
                : 'text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200'
            }`}
          >
            <item.icon className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <span className="ml-3 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {item.label}
            </span>
            {item.active && (
              <div className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100" />
            )}
          </a>
        ))}
      </nav>

      <div className="border-t border-zinc-800 p-3">
        <div className="flex items-center gap-3 overflow-hidden rounded-md p-2 transition-colors hover:bg-zinc-900">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600" />
          <div className="flex flex-col opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="whitespace-nowrap text-xs font-medium text-white">Engineer One</span>
            <span className="whitespace-nowrap text-[10px] text-zinc-500">Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;