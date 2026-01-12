import React from 'react';
import { Search, Github, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header
      className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b px-8 backdrop-blur-md"
      style={{ borderColor: '#27272a', backgroundColor: 'rgba(9,9,11,0.8)' }}
    >
      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors" style={{ color: '#71717a' }} />
          <input
            type="text"
            placeholder="Search components..."
            className="h-10 w-64 rounded-full border pl-10 pr-12 text-sm outline-none transition-all duration-200 focus:w-80"
            style={{ borderColor: '#27272a', backgroundColor: 'rgba(24,24,27,0.5)', color: '#e4e4e7' }}
          />
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded border px-1.5 py-0.5 text-[10px] font-medium"
            style={{ borderColor: '#3f3f46', backgroundColor: '#27272a', color: '#a1a1aa' }}
          >
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 transition-colors" style={{ color: '#a1a1aa' }}>
          <Github className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 transition-colors relative" style={{ color: '#a1a1aa' }}>
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full" style={{ backgroundColor: '#ef4444', boxShadow: '0 0 0 2px #09090b' }} />
        </button>
        <div className="h-6 w-px" style={{ backgroundColor: '#27272a' }} />
        <button className="text-xs font-medium transition-colors" style={{ color: '#a1a1aa' }}>
          Documentation
        </button>
      </div>
    </header>
  );
};

export default Header;