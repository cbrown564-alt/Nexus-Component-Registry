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
    <div className="flex h-[calc(100vh-56px)] w-full overflow-hidden font-mono selection:bg-blue-500/30" style={{ backgroundColor: '#09090b', color: '#d4d4d8' }}>

      {/* Activity Bar (Left) */}
      <nav className="flex w-14 flex-col items-center py-4 z-20" style={{ borderRightWidth: '1px', borderColor: '#27272a', backgroundColor: '#09090b' }}>
        <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20" style={{ color: '#ffffff' }}>
          <Code2 className="h-6 w-6" />
        </div>
        <div className="flex flex-1 flex-col gap-4 w-full px-2">
          {[Files, Search, GitBranch, Bug, Layout].map((Icon, i) => (
            <button key={i} className={`p-2 rounded-lg transition-all`} style={i === 0 ? { backgroundColor: '#27272a', color: '#ffffff' } : { color: '#71717a' }}>
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full px-2 pb-2">
          <button className="p-2 transition-colors" style={{ color: '#71717a' }}>
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2" style={{ '--tw-ring-color': '#27272a' } as React.CSSProperties} />
        </div>
      </nav>

      {/* Sidebar (Explorer) */}
      <div className="hidden w-64 flex-col lg:flex" style={{ borderRightWidth: '1px', borderColor: '#27272a', backgroundColor: '#0c0c0e' }}>
        <div className="flex h-12 items-center justify-between px-4 text-xs font-bold uppercase tracking-wider" style={{ borderBottomWidth: '1px', borderColor: '#27272a', color: '#71717a' }}>
          <span>Explorer</span>
          <MoreVertical className="h-4 w-4" />
        </div>
        <div className="flex-1 overflow-y-auto p-2 text-sm">
          <div className="mb-2 px-2 py-1 font-bold flex items-center gap-1" style={{ color: '#a1a1aa' }}>
            <Command className="h-3 w-3" /> NEBULA-CORE
          </div>
          {explorerItems.map((item, i) => (
            <div key={i} className="pl-2">
              <div className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer`} style={item.active ? { backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa' } : { color: '#71717a' }}>
                {item.type === 'folder' ? (
                  <span className="text-xs">▼</span>
                ) : (
                  <div className={`h-2 w-2 rounded-full ${item.name.endsWith('tsx') ? 'bg-blue-400' : 'bg-yellow-400'}`} />
                )}
                {item.name}
              </div>
              {item.children && (
                <div className="pl-4 mt-1 ml-2" style={{ borderLeftWidth: '1px', borderColor: 'rgba(39, 39, 42, 0.5)' }}>
                  {item.children.map((child, j) => (
                    <div key={j} className="flex items-center gap-1.5 px-2 py-1 cursor-pointer" style={{ color: '#71717a' }}>
                      <span className="h-px w-2" style={{ backgroundColor: '#3f3f46' }} />
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
        <div className="flex h-10 items-center overflow-x-auto" style={{ backgroundColor: '#0c0c0e', borderBottomWidth: '1px', borderColor: '#27272a' }}>
          {['App.tsx', 'useAuth.ts', 'Button.tsx', 'global.css'].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 h-full text-xs cursor-pointer min-w-[120px]`}
              style={activeTab === tab
                ? { backgroundColor: '#09090b', color: '#60a5fa', borderTopWidth: '2px', borderTopColor: '#3b82f6', borderRightWidth: '1px', borderRightColor: '#27272a' }
                : { color: '#71717a', borderRightWidth: '1px', borderRightColor: '#27272a' }
              }
            >
              <span className={`h-2 w-2 rounded-full ${tab.endsWith('tsx') || tab.endsWith('ts') ? 'bg-blue-500' : 'bg-pink-500'}`} />
              {tab}
            </div>
          ))}
        </div>

        {/* Editor Area */}
        <div className="flex-1 relative overflow-hidden bg-[#09090b] flex flex-col min-h-0">
          {/* Breadcrumbs / Actions */}
          <div className="h-10 flex items-center justify-between px-4 text-xs" style={{ borderBottomWidth: '1px', borderColor: '#27272a' }}>
            <div className="flex items-center gap-2" style={{ color: '#71717a' }}>
              <span>src</span>
              <span>/</span>
              <span style={{ color: '#d4d4d8' }}>{activeTab}</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={runAnalysis} className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                <Sparkles className="h-3 w-3" />
                AI Analyze
              </button>
              <div className="h-4 w-px" style={{ backgroundColor: '#27272a' }} />
              <div className="flex items-center gap-1" style={{ color: '#71717a' }}>
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
           className="rounded-xl p-4"
           style={{ backgroundColor: '#18181b' }}
        >
           <h3 style={{ color: '#a1a1aa' }}>{metric.label}</h3>
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
          <div className="h-64 flex flex-col shrink-0" style={{ borderTopWidth: '1px', borderColor: '#27272a', backgroundColor: '#0c0c0e' }}>
            <div className="flex items-center gap-4 px-4 h-9 text-xs shrink-0" style={{ borderBottomWidth: '1px', borderColor: '#27272a' }}>
              <button className="h-full px-2" style={{ borderBottomWidth: '2px', borderColor: '#3b82f6', color: '#ffffff' }}>Terminal</button>
              <button className="h-full px-2" style={{ borderBottomWidth: '2px', borderColor: 'transparent', color: '#71717a' }}>Output</button>
              <button className="h-full px-2" style={{ borderBottomWidth: '2px', borderColor: 'transparent', color: '#71717a' }}>Problems</button>
              <div className="ml-auto flex items-center gap-2">
                <button className="p-1 rounded" style={{ backgroundColor: 'transparent' }}><Terminal className="h-3 w-3" /></button>
              </div>
            </div>
            <div className="flex-1 p-2 font-mono text-xs overflow-y-auto" style={{ color: '#a1a1aa' }}>
              <div className="flex gap-2">
                <span className="text-emerald-500">➜</span>
                <span className="text-blue-400">~/nebula-core</span>
                <span style={{ color: '#71717a' }}>git checkout -b feat/ai-optimization</span>
              </div>
              <div className="flex gap-2 mt-1">
                <span style={{ color: '#71717a' }}>Switched to a new branch 'feat/ai-optimization'</span>
              </div>
              <div className="flex gap-2 mt-1">
                <span className="text-emerald-500">➜</span>
                <span className="text-blue-400">~/nebula-core</span>
                <span style={{ color: '#71717a' }}>npm run dev</span>
              </div>
              <div className="mt-2" style={{ color: '#d4d4d8' }}>
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
      <div className="hidden w-72 flex-col xl:flex overflow-hidden" style={{ borderLeftWidth: '1px', borderColor: '#27272a', backgroundColor: '#0c0c0e' }}>
        <div className="flex h-12 items-center justify-between px-4" style={{ borderBottomWidth: '1px', borderColor: '#27272a' }}>
          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            Nebula AI
          </div>
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <div className="flex-1 p-3 overflow-y-auto space-y-5">

          {/* Analysis Status */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#71717a' }}>Analysis Stream</div>
            <div className="flex flex-col gap-1.5">
              {[{ name: 'Build', status: 'success' }, { name: 'Test', status: 'success' }, { name: 'Deploy', status: 'running' }].map((step) => (
                <div key={step.name} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs border`}
                  style={step.status === 'success'
                    ? { borderColor: 'rgba(16, 185, 129, 0.3)', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#34d399' }
                    : step.status === 'running'
                      ? { borderColor: 'rgba(245, 158, 11, 0.3)', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24' }
                      : { borderColor: '#3f3f46', backgroundColor: 'rgba(39, 39, 42, 0.5)', color: '#a1a1aa' }
                  }>
                  <span className={`h-1.5 w-1.5 rounded-full`}
                    style={step.status === 'success'
                      ? { backgroundColor: '#10b981' }
                      : step.status === 'running'
                        ? { backgroundColor: '#f59e0b' }
                        : { backgroundColor: '#52525b' }
                    } />
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
            <p className="text-xs leading-relaxed" style={{ color: '#a1a1aa' }}>
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
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#71717a' }}>Project Health</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(9, 9, 11, 0.5)', borderWidth: '1px', borderColor: '#27272a' }}>
                <div className="text-[10px]" style={{ color: '#71717a' }}>Complexity</div>
                <div className="text-lg font-bold" style={{ color: '#ffffff' }}>4.2</div>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(9, 9, 11, 0.5)', borderWidth: '1px', borderColor: '#27272a' }}>
                <div className="text-[10px]" style={{ color: '#71717a' }}>Coverage</div>
                <div className="text-lg font-bold text-emerald-400">92%</div>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(9, 9, 11, 0.5)', borderWidth: '1px', borderColor: '#27272a' }}>
                <div className="text-[10px]" style={{ color: '#71717a' }}>Dependencies</div>
                <div className="text-lg font-bold text-blue-400">12</div>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(9, 9, 11, 0.5)', borderWidth: '1px', borderColor: '#27272a' }}>
                <div className="text-[10px]" style={{ color: '#71717a' }}>Vulns</div>
                <div className="text-lg font-bold" style={{ color: '#52525b' }}>0</div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="mt-auto">
            <div className="p-2 rounded-xl" style={{ backgroundColor: '#18181b', borderWidth: '1px', borderColor: 'rgba(63, 63, 70, 0.5)' }}>
              <input
                type="text"
                placeholder="Ask Nebula about this code..."
                className="w-full bg-transparent text-xs placeholder-zinc-600 outline-none px-2"
                style={{ color: '#ffffff' }}
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