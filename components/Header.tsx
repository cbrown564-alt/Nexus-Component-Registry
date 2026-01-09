import React from 'react';
import { Search, Github, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-8 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-zinc-300" />
          <input
            type="text"
            placeholder="Search components..."
            className="h-10 w-64 rounded-full border border-zinc-800 bg-zinc-900/50 pl-10 pr-12 text-sm text-zinc-200 placeholder-zinc-500 outline-none transition-all duration-200 focus:border-zinc-700 focus:bg-zinc-900 focus:w-80"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
          <Github className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-zinc-950" />
        </button>
        <div className="h-6 w-px bg-zinc-800" />
        <button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
          Documentation
        </button>
      </div>
    </header>
  );
};

export default Header;