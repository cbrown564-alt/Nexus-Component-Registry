import React from 'react';
import { BookOpen, Library, Settings, Clock, Cloud } from 'lucide-react';

interface EInkSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const EInkSidebar: React.FC<EInkSidebarProps> = ({ activeTab, setActiveTab }) => {
  const menu = [
    { id: 'reading', label: 'Reading', icon: BookOpen },
    { id: 'library', label: 'Library', icon: Library },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'store', label: 'Cloud', icon: Cloud },
    { id: 'settings', label: 'System', icon: Settings },
  ];

  return (
    <div className="w-full md:w-64 flex-col border-r-2 border-black bg-[#f4f4f3] p-6 hidden md:flex">
      <div className="mb-12">
          <h1 className="font-serif text-3xl font-black tracking-tight">CANVAS</h1>
          <p className="text-xs font-mono mt-1 text-stone-500">E-INK OS v2.0</p>
      </div>

      <nav className="flex-1 space-y-6">
          {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-4 w-full text-left group ${activeTab === item.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                  <item.icon className={`h-5 w-5 ${activeTab === item.id ? 'fill-black' : ''}`} />
                  <span className={`font-sans text-sm font-bold uppercase tracking-widest ${activeTab === item.id ? 'underline decoration-2 underline-offset-4' : ''}`}>
                      {item.label}
                  </span>
              </button>
          ))}
      </nav>

      <div className="border-t-2 border-black pt-6">
          <div className="flex justify-between items-end">
              <div className="text-xs font-mono">
                  <div>BATTERY</div>
                  <div className="flex gap-0.5 mt-1">
                      <div className="w-1.5 h-3 bg-black" />
                      <div className="w-1.5 h-3 bg-black" />
                      <div className="w-1.5 h-3 bg-black" />
                      <div className="w-1.5 h-3 bg-stone-300" />
                  </div>
              </div>
              <div className="text-right text-xs font-mono">
                  <div>WI-FI</div>
                  <div className="font-bold">CONNECTED</div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default EInkSidebar;