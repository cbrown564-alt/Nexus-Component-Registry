import React from 'react';
import { Folder, FileCode, FileJson, ChevronRight, ChevronDown } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const FileTree = () => {
  return (
    <SpotlightCard className="p-6">
      <h3 className="mb-4 text-sm font-medium text-zinc-100">Project Structure</h3>
      <div className="space-y-1 font-mono text-xs text-zinc-400">
        <div className="flex items-center gap-1.5 text-zinc-200">
           <ChevronDown className="h-3 w-3" />
           <Folder className="h-3.5 w-3.5 text-blue-400" />
           <span>nexus-core</span>
        </div>
        
        <div className="pl-4 space-y-1">
             <div className="flex items-center gap-1.5 hover:bg-zinc-900/50 hover:text-zinc-200 rounded px-1 py-0.5 cursor-pointer transition-colors group">
               <ChevronRight className="h-3 w-3 text-zinc-600 group-hover:text-zinc-400" />
               <Folder className="h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-400" />
               <span>.github</span>
             </div>
             
             <div className="flex items-center gap-1.5 text-zinc-200 hover:bg-zinc-900/50 rounded px-1 py-0.5 cursor-pointer transition-colors">
               <ChevronDown className="h-3 w-3" />
               <Folder className="h-3.5 w-3.5 text-amber-400" />
               <span>src</span>
             </div>
             
             <div className="pl-4 space-y-1 border-l border-zinc-800 ml-2.5 pl-2">
                 <div className="flex items-center gap-1.5 hover:bg-zinc-900/50 hover:text-zinc-200 rounded px-1 py-0.5 cursor-pointer transition-colors">
                   <FileCode className="h-3.5 w-3.5 text-blue-400" />
                   <span>client.ts</span>
                 </div>
                 <div className="flex items-center gap-1.5 hover:bg-zinc-900/50 hover:text-zinc-200 rounded px-1 py-0.5 cursor-pointer transition-colors">
                   <FileCode className="h-3.5 w-3.5 text-blue-400" />
                   <span>server.ts</span>
                 </div>
                 <div className="flex items-center gap-1.5 hover:bg-zinc-900/50 hover:text-zinc-200 rounded px-1 py-0.5 cursor-pointer transition-colors">
                   <FileCode className="h-3.5 w-3.5 text-pink-400" />
                   <span>types.d.ts</span>
                 </div>
             </div>

             <div className="flex items-center gap-1.5 hover:bg-zinc-900/50 hover:text-zinc-200 rounded px-1 py-0.5 cursor-pointer transition-colors">
               <FileJson className="h-3.5 w-3.5 text-yellow-400" />
               <span>package.json</span>
             </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
export default FileTree;