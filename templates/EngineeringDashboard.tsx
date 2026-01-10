import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  GitBranch,
  Play,
  Cpu,
  Zap,
  Terminal,
  Search,
  Settings,
  MoreVertical,
  Files,
  Command,
  Sparkles,
  Bug,
  Layout,
  Share2
} from 'lucide-react';

import EngineeringCard from '../components/engineering/EngineeringCard';
import EngineeringButton from '../components/engineering/EngineeringButton';
import PipelineSteps from '../components/engineering/PipelineSteps';
import CodeBlock from '../components/engineering/CodeBlock';

const EngineeringDashboard = () => {
  const [activeTab, setActiveTab] = useState('App.tsx');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  interface ExplorerItem {
    name: string;
    type: 'folder' | 'file';
    active?: boolean;
    open?: boolean;
    children?: (string | ExplorerItem)[];
  }

  const explorerItems: ExplorerItem[] = [
    {
      name: 'src', type: 'folder', open: true, children: [
        { name: 'components', type: 'folder', children: ['Button.tsx', 'Card.tsx'] },
        { name: 'hooks', type: 'folder', children: ['useAuth.ts'] },
        { name: 'App.tsx', type: 'file', active: true },
        { name: 'main.tsx', type: 'file' },
        { name: 'vite-env.d.ts', type: 'file' },
      ]
    },
    { name: 'public', type: 'folder' },
    { name: 'package.json', type: 'file' },
    { name: 'tsconfig.json', type: 'file' },
  ];

  return (
    <div className="flex h-[calc(100vh-56px)] w-full overflow-hidden bg-[#09090b] text-zinc-300 font-mono selection:bg-blue-500/30">

      {/* Activity Bar (Left) */}
      <nav className="flex w-14 flex-col items-center border-r border-zinc-800 bg-zinc-950 py-4 z-20">
        <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
          <Code2 className="h-6 w-6" />
        </div>
        <div className="flex flex-1 flex-col gap-4 w-full px-2">
          {[Files, Search, GitBranch, Bug, Layout].map((Icon, i) => (
            <button key={i} className={`p-2 rounded-lg transition-all ${i === 0 ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'}`}>
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full px-2 pb-2">
          <button className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2 ring-zinc-800" />
        </div>
      </nav>

      {/* Sidebar (Explorer) */}
      <div className="hidden w-64 flex-col border-r border-zinc-800 bg-[#0c0c0e] lg:flex">
        <div className="flex h-12 items-center justify-between border-b border-zinc-800 px-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
          <span>Explorer</span>
          <MoreVertical className="h-4 w-4" />
        </div>
        <div className="flex-1 overflow-y-auto p-2 text-sm">
          <div className="mb-2 px-2 py-1 font-bold text-zinc-400 flex items-center gap-1">
            <Command className="h-3 w-3" /> NEBULA-CORE
          </div>
          {explorerItems.map((item, i) => (
            <div key={i} className="pl-2">
              <div className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer ${item.active ? 'bg-blue-500/10 text-blue-400' : 'text-zinc-500 hover:text-zinc-300'}`}>
                {item.type === 'folder' ? (
                  <span className="text-xs">▼</span>
                ) : (
                  <div className={`h-2 w-2 rounded-full ${item.name.endsWith('tsx') ? 'bg-blue-400' : 'bg-yellow-400'}`} />
                )}
                {item.name}
              </div>
              {item.children && (
                <div className="pl-4 border-l border-zinc-800/50 mt-1 ml-2">
                  {item.children.map((child, j) => (
                    <div key={j} className="flex items-center gap-1.5 px-2 py-1 text-zinc-500 hover:text-zinc-300 cursor-pointer">
                      <span className="h-px w-2 bg-zinc-700" />
                      {typeof child === 'string' ? child : (child as ExplorerItem).name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Tab Bar */}
        <div className="flex h-10 items-center bg-[#0c0c0e] border-b border-zinc-800 overflow-x-auto">
          {['App.tsx', 'useAuth.ts', 'Button.tsx', 'global.css'].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 h-full text-xs border-r border-zinc-800 cursor-pointer min-w-[120px] ${activeTab === tab ? 'bg-[#09090b] text-blue-400 border-t-2 border-t-blue-500' : 'text-zinc-500 hover:bg-zinc-900'
                }`}
            >
              <span className={`h-2 w-2 rounded-full ${tab.endsWith('tsx') || tab.endsWith('ts') ? 'bg-blue-500' : 'bg-pink-500'}`} />
              {tab}
            </div>
          ))}
        </div>

        {/* Editor Area */}
        <div className="flex-1 relative overflow-hidden bg-[#09090b] flex flex-col min-h-0">
          {/* Breadcrumbs / Actions */}
          <div className="h-10 border-b border-zinc-800 flex items-center justify-between px-4 text-xs">
            <div className="flex items-center gap-2 text-zinc-500">
              <span>src</span>
              <span>/</span>
              <span className="text-zinc-300">{activeTab}</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={runAnalysis} className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                <Sparkles className="h-3 w-3" />
                AI Analyze
              </button>
              <div className="h-4 w-px bg-zinc-800" />
              <div className="flex items-center gap-1 text-zinc-500">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Ln 42, Col 12</span>
              </div>
            </div>
          </div>

          {/* Code Content */}
          <div className="flex-1 relative p-4 overflow-y-auto min-h-0">
            <CodeBlock
              language="tsx"
              filename={activeTab}
              showLineNumbers
              wrapperClassName="h-full border-none bg-transparent"
              code={`import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from './hooks/useAuth';

// NEBULA AI: Optimization suggestion available
export const Dashboard = () => {
  const { user, login } = useAuth();
  const [data, setData] = useState<Metric[]>([]);

  useEffect(() => {
    // Fetching high-frequency telemetry
    const socket = new WebSocket('wss://api.nebula.io/stream');
    
    socket.onmessage = (event) => {
      const metric = JSON.parse(event.data);
      // TODO: Batch updates to separate frame render
      setData(prev => [...prev.slice(-99), metric]);
    };

    return () => socket.close();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      <Header user={user} />
      {data.map((metric, i) => (
        <motion.div
           key={metric.id}
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-zinc-900 rounded-xl p-4"
        >
           <h3 className="text-zinc-400">{metric.label}</h3>
           <div className="text-2xl font-mono">{metric.value}</div>
        </motion.div>
      ))}
    </div>
  );
};`}
            />

            {/* AI Overlay Animation */}
            <AnimatePresence>
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-blue-500/5 pointer-events-none z-10"
                >
                  <motion.div
                    className="h-0.5 w-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    initial={{ top: 0 }}
                    animate={{ top: '100%' }}
                    transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Terminal / Bottom Panel */}
          <div className="h-64 border-t border-zinc-800 bg-[#0c0c0e] flex flex-col shrink-0">
            <div className="flex items-center gap-4 px-4 h-9 border-b border-zinc-800 text-xs shrink-0">
              <button className="h-full border-b-2 border-blue-500 text-white px-2">Terminal</button>
              <button className="h-full border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 px-2">Output</button>
              <button className="h-full border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 px-2">Problems</button>
              <div className="ml-auto flex items-center gap-2">
                <button className="p-1 hover:bg-zinc-800 rounded"><Terminal className="h-3 w-3" /></button>
              </div>
            </div>
            <div className="flex-1 p-2 font-mono text-xs text-zinc-400 overflow-y-auto">
              <div className="flex gap-2">
                <span className="text-emerald-500">➜</span>
                <span className="text-blue-400">~/nebula-core</span>
                <span className="text-zinc-500">git checkout -b feat/ai-optimization</span>
              </div>
              <div className="flex gap-2 mt-1">
                <span className="text-zinc-500">Switched to a new branch 'feat/ai-optimization'</span>
              </div>
              <div className="flex gap-2 mt-1">
                <span className="text-emerald-500">➜</span>
                <span className="text-blue-400">~/nebula-core</span>
                <span className="text-zinc-500">npm run dev</span>
              </div>
              <div className="mt-2 text-zinc-300">
                VITE v4.3.9  ready in 420 ms
                <br />
                <span className="text-green-500">➜</span>  Local:   <span className="text-blue-400 underline">http://localhost:5173/</span>
                <br />
                <span className="text-green-500">➜</span>  Network: use --host to expose
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar (AI Copilot) */}
      <div className="hidden w-72 flex-col border-l border-zinc-800 bg-[#0c0c0e] xl:flex overflow-hidden">
        <div className="flex h-12 items-center justify-between border-b border-zinc-800 px-4">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            Nebula AI
          </div>
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <div className="flex-1 p-3 overflow-y-auto space-y-5">

          {/* Analysis Status */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Analysis Stream</div>
            <div className="flex flex-col gap-1.5">
              {[{ name: 'Build', status: 'success' }, { name: 'Test', status: 'success' }, { name: 'Deploy', status: 'running' }].map((step) => (
                <div key={step.name} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs border ${step.status === 'success' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' :
                  step.status === 'running' ? 'border-amber-500/30 bg-amber-500/10 text-amber-400' :
                    'border-zinc-700 bg-zinc-800/50 text-zinc-400'
                  }`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${step.status === 'success' ? 'bg-emerald-500' :
                    step.status === 'running' ? 'bg-amber-500 animate-pulse' :
                      'bg-zinc-600'
                    }`} />
                  {step.name}
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions Card */}
          <EngineeringCard variant="highlight" className="p-4 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
              <Zap className="h-4 w-4" />
              Performance Opportunity
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Line 24: Array dependency in `useEffect` may cause unnecessary re-renders. Consider wrapping in `useMemo`.
            </p>
            <div className="flex gap-2 pt-3 mt-1">
              <EngineeringButton variant="primary" size="sm" className="w-full text-xs py-1.5 h-8">
                Apply Fix
              </EngineeringButton>
              <EngineeringButton variant="ghost" size="sm" className="w-full text-xs py-1.5 h-8">
                Ignore
              </EngineeringButton>
            </div>
          </EngineeringCard>

          {/* Metrics */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Project Health</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                <div className="text-[10px] text-zinc-500">Complexity</div>
                <div className="text-lg font-bold text-white">4.2</div>
              </div>
              <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                <div className="text-[10px] text-zinc-500">Coverage</div>
                <div className="text-lg font-bold text-emerald-400">92%</div>
              </div>
              <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                <div className="text-[10px] text-zinc-500">Dependencies</div>
                <div className="text-lg font-bold text-blue-400">12</div>
              </div>
              <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                <div className="text-[10px] text-zinc-500">Vulns</div>
                <div className="text-lg font-bold text-zinc-600">0</div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="mt-auto">
            <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-700/50">
              <input
                type="text"
                placeholder="Ask Nebula about this code..."
                className="w-full bg-transparent text-xs text-white placeholder-zinc-600 outline-none px-2"
              />
              <div className="flex justify-end mt-2">
                <button className="bg-blue-600/20 text-blue-400 p-1 rounded hover:bg-blue-600/30 transition-colors">
                  <Share2 className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default EngineeringDashboard;