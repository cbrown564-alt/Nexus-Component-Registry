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
    <aside
      className="group fixed left-0 top-0 z-50 h-full w-16 flex-col border-r transition-[width] duration-300 hover:w-60"
      style={{ borderColor: '#27272a', backgroundColor: '#09090b' }}
    >
      <div className="flex h-16 items-center justify-center border-b group-hover:justify-start group-hover:px-6" style={{ borderColor: '#27272a' }}>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: '#f4f4f5', color: '#09090b' }}>
          <Command className="h-5 w-5" />
        </div>
        <span className="ml-3 overflow-hidden whitespace-nowrap text-sm font-bold tracking-tight opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ color: '#ffffff' }}>
          NEXUS
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-3">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex h-10 items-center rounded-md px-2.5 transition-all duration-200`}
            style={item.active
              ? { backgroundColor: '#18181b', color: '#ffffff' }
              : { color: '#a1a1aa' }
            }
          >
            <item.icon className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            <span className="ml-3 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {item.label}
            </span>
            {item.active && (
              <div className="ml-auto h-1.5 w-1.5 rounded-full opacity-0 group-hover:opacity-100" style={{ backgroundColor: '#3b82f6' }} />
            )}
          </a>
        ))}
      </nav>

      <div className="border-t p-3" style={{ borderColor: '#27272a' }}>
        <div className="flex items-center gap-3 overflow-hidden rounded-md p-2 transition-colors">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600" />
          <div className="flex flex-col opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="whitespace-nowrap text-xs font-medium" style={{ color: '#ffffff' }}>Engineer One</span>
            <span className="whitespace-nowrap text-[10px]" style={{ color: '#71717a' }}>Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;