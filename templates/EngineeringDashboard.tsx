import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  GitBranch,
  Server,
  Activity,
  Clock,
  CheckCircle2,
  AlertCircle,
  Users,
  Settings,
  Bell,
  Search,
  ChevronRight,
  ExternalLink,
  Box
} from 'lucide-react';

import EngineeringCard from '../components/engineering/EngineeringCard';
import EngineeringButton from '../components/engineering/EngineeringButton';
import PipelineSteps from '../components/engineering/PipelineSteps';
import CodeBlock from '../components/engineering/CodeBlock';

const EngineeringDashboard = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#09090b] text-zinc-200 font-sans">

      {/* Sidebar Navigation */}
      <nav className="hidden w-64 flex-col border-r border-zinc-800 bg-zinc-950/50 lg:flex">
        {/* Logo */}
        <div className="flex h-14 items-center gap-2 border-b border-zinc-800 px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-white tracking-tight">Deploy.io</span>
          <span className="ml-auto text-[10px] font-medium text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">PRO</span>
        </div>

        {/* Nav Items */}
        <div className="flex-1 p-4 space-y-1">
          {[
            { icon: Activity, label: 'Overview', active: true },
            { icon: GitBranch, label: 'Deployments', count: 3 },
            { icon: Server, label: 'Infrastructure' },
            { icon: Box, label: 'Projects' },
            { icon: Users, label: 'Team' },
            { icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${item.active
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'
                }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
              {item.count && (
                <span className="text-xs bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">{item.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* Environment Switcher */}
        <div className="border-t border-zinc-800 p-4">
          <div className="rounded-lg bg-zinc-900 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-zinc-500">Environment</span>
              <span className="flex items-center gap-1 text-xs text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Production
              </span>
            </div>
            <select className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>main-production</option>
              <option>staging-preview</option>
              <option>development</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">

        {/* Header */}
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-800 px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-white">Dashboard</h1>
            <span className="text-xs text-zinc-500">Last synced 2 min ago</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search deployments..."
                className="h-9 w-64 rounded-lg bg-zinc-900 border border-zinc-800 pl-9 pr-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">

          {/* Metrics Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6"
          >
            {[
              { label: 'Total Deployments', value: '1,284', change: '+12%', icon: Rocket, color: 'blue' },
              { label: 'Success Rate', value: '99.7%', change: '+0.2%', icon: CheckCircle2, color: 'emerald' },
              { label: 'Avg Build Time', value: '2m 34s', change: '-18s', icon: Clock, color: 'violet' },
              { label: 'Active Alerts', value: '2', change: '', icon: AlertCircle, color: 'amber' },
            ].map((metric, i) => (
              <EngineeringCard key={i} variant="default" className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-zinc-500 mb-1">{metric.label}</div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    {metric.change && (
                      <div className={`text-xs mt-1 ${metric.change.startsWith('+') ? 'text-emerald-500' : 'text-blue-400'}`}>
                        {metric.change} from last week
                      </div>
                    )}
                  </div>
                  <div className={`p-2 rounded-lg bg-${metric.color}-500/10`}>
                    <metric.icon className={`h-5 w-5 text-${metric.color}-500`} />
                  </div>
                </div>
              </EngineeringCard>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* Pipeline Status - Main Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <EngineeringCard variant="highlight" className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Active Deployment</h2>
                    <p className="text-sm text-zinc-500">main → production</p>
                  </div>
                  <EngineeringButton variant="primary" size="sm">
                    View Logs
                    <ExternalLink className="h-3.5 w-3.5" />
                  </EngineeringButton>
                </div>

                <PipelineSteps />

                <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <GitBranch className="h-4 w-4" />
                      feat/user-auth
                    </span>
                    <span>commit a3f8d2c</span>
                  </div>
                  <span className="text-zinc-500">Started 3 min ago</span>
                </div>
              </EngineeringCard>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <EngineeringCard className="p-6 h-full">
                <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    { action: 'Deployment succeeded', project: 'api-gateway', time: '2m ago', status: 'success' },
                    { action: 'Build started', project: 'web-client', time: '5m ago', status: 'pending' },
                    { action: 'Config updated', project: 'auth-service', time: '12m ago', status: 'info' },
                    { action: 'Rollback completed', project: 'api-gateway', time: '1h ago', status: 'warning' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 pb-4 border-b border-zinc-800 last:border-0 last:pb-0">
                      <div className={`mt-1 h-2 w-2 rounded-full ${item.status === 'success' ? 'bg-emerald-500' :
                          item.status === 'pending' ? 'bg-amber-500 animate-pulse' :
                            item.status === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                        }`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-white">{item.action}</div>
                        <div className="text-xs text-zinc-500 truncate">{item.project}</div>
                      </div>
                      <span className="text-xs text-zinc-500 shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full text-sm text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-1">
                  View all activity
                  <ChevronRight className="h-4 w-4" />
                </button>
              </EngineeringCard>
            </motion.div>

            {/* Quick Deploy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <EngineeringCard className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Quick Deploy</h2>
                <CodeBlock
                  filename="deploy.sh"
                  language="bash"
                  code={`npx deploy-io push \\
  --env production \\
  --branch main`}
                />
                <div className="mt-4 flex gap-2">
                  <EngineeringButton variant="primary" className="flex-1">
                    <Rocket className="h-4 w-4" />
                    Deploy Now
                  </EngineeringButton>
                  <EngineeringButton variant="ghost">
                    Schedule
                  </EngineeringButton>
                </div>
              </EngineeringCard>
            </motion.div>

            {/* Infrastructure Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <EngineeringCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white">Infrastructure Health</h2>
                  <span className="text-xs text-emerald-500 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    All systems operational
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { region: 'US West', status: 'healthy', latency: '23ms' },
                    { region: 'US East', status: 'healthy', latency: '31ms' },
                    { region: 'EU West', status: 'healthy', latency: '48ms' },
                    { region: 'APAC', status: 'degraded', latency: '89ms' },
                  ].map((region, i) => (
                    <div key={i} className="rounded-lg bg-zinc-900/50 p-4 border border-zinc-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">{region.region}</span>
                        <span className={`h-2 w-2 rounded-full ${region.status === 'healthy' ? 'bg-emerald-500' : 'bg-amber-500'
                          }`} />
                      </div>
                      <div className="text-xs text-zinc-500">Latency: {region.latency}</div>
                    </div>
                  ))}
                </div>
              </EngineeringCard>
            </motion.div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default EngineeringDashboard;