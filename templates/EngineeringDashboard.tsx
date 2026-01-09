import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Terminal as TerminalIcon,
  Globe,
  ArrowRight
} from 'lucide-react';

import SpotlightCard from '../components/ui/SpotlightCard';
import GlowButton from '../components/ui/GlowButton';
import Terminal from '../components/ui/Terminal';
import StatsCard from '../components/ui/StatsCard';
import ActivityFeed from '../components/ui/ActivityFeed';
import FileTree from '../components/ui/FileTree';
import PlanPicker from '../components/ui/PlanPicker';
import TeamMembers from '../components/ui/TeamMembers';
import ShortcutGuide from '../components/ui/ShortcutGuide';
import DeploymentPipeline from '../components/ui/DeploymentPipeline';
import IntegrationToggle from '../components/ui/IntegrationToggle';

// New dedicated Engineering components
import EngineeringButton from '../components/engineering/EngineeringButton';
import EngineeringCard from '../components/engineering/EngineeringCard';
import PipelineSteps from '../components/engineering/PipelineSteps';
import CodeBlock from '../components/engineering/CodeBlock';

const EngineeringDashboard = () => {
  return (
    <div className="container mx-auto max-w-7xl p-8">
      {/* Hero Section */}
      <section className="mb-16 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-2xl"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Interface Components <span className="text-zinc-500">v2.0</span>
          </h1>
          <p className="text-lg text-zinc-400">
            A collection of high-performance React components designed for engineering-led teams.
            Built with precision, accessibility, and smooth motion.
          </p>
        </motion.div>

        <div className="flex gap-4">
          <GlowButton onClick={() => console.log('Deploy')}>
            <span className="flex items-center gap-2">
              <TerminalIcon className="h-4 w-4" />
              Initialize Project
            </span>
          </GlowButton>
          <EngineeringButton variant="ghost">
            Read Documentation
            <ArrowRight className="h-4 w-4" />
          </EngineeringButton>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* 1. The Spotlight Card Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <SpotlightCard className="flex flex-col items-center justify-center p-12 text-center" spotlightColor="rgba(59, 130, 246, 0.15)">
            <div className="mb-6 rounded-full bg-blue-500/10 p-4 ring-1 ring-blue-500/50">
              <Globe className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">Global Edge Network</h2>
            <p className="mb-8 max-w-md text-zinc-400">
              Deploy your functions to 35+ regions automatically.
              Experience zero-config scalability with sub-50ms latency worldwide.
            </p>
            <div className="grid w-full max-w-lg grid-cols-3 gap-4">
              <div className="rounded-lg bg-zinc-950/50 p-4 text-center ring-1 ring-zinc-800">
                <div className="text-xl font-bold text-white">99.99%</div>
                <div className="text-xs text-zinc-500">Uptime</div>
              </div>
              <div className="rounded-lg bg-zinc-950/50 p-4 text-center ring-1 ring-zinc-800">
                <div className="text-xl font-bold text-white">35ms</div>
                <div className="text-xs text-zinc-500">Latency</div>
              </div>
              <div className="rounded-lg bg-zinc-950/50 p-4 text-center ring-1 ring-zinc-800">
                <div className="text-xl font-bold text-white">128TB</div>
                <div className="text-xs text-zinc-500">Bandwidth</div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* 2. Interactive Button Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6">
            <h3 className="text-lg font-semibold tracking-tight text-white">Interactive Elements</h3>
            <div className="space-y-4">
              <GlowButton>
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Generate API Key
                </span>
              </GlowButton>
              <div className="flex justify-center">
                <button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">View Source</button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Components Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <FileTree />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Terminal />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <StatsCard />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <ActivityFeed />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <TeamMembers />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <PlanPicker />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="lg:col-span-2">
          <DeploymentPipeline />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
          <ShortcutGuide />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <IntegrationToggle />
        </motion.div>

        {/* New Engineering Components Showcase */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="lg:col-span-2">
          <EngineeringCard variant="highlight">
            <h3 className="text-lg font-semibold text-white mb-4">CI/CD Pipeline Status</h3>
            <PipelineSteps />
          </EngineeringCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>
          <CodeBlock
            filename="app.config.ts"
            language="typescript"
            code={`export default {
  name: 'my-app',
  version: '2.0.0',
  deploy: {
    edge: true,
    regions: ['us-west-2', 'eu-west-1']
  }
}`}
          />
        </motion.div>

      </section>
    </div>
  );
};

export default EngineeringDashboard;