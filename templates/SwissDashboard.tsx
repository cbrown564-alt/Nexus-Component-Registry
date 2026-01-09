import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Circle, Square, Triangle, TrendingUp, Clock, Users, Zap, BarChart3 } from 'lucide-react';
import SwissCard from '../components/swiss/SwissCard';
import SwissMetric from '../components/swiss/SwissMetric';
import SwissButton from '../components/swiss/SwissButton';
import SwissTypography from '../components/swiss/SwissTypography';
import SwissDivider from '../components/swiss/SwissDivider';
import SwissGrid from '../components/swiss/SwissGrid';

const SwissDashboard = () => {
   const [activeTab, setActiveTab] = useState('overview');

   return (
      <div className="min-h-screen bg-[#F5F5F5] font-sans text-black selection:bg-[#DC2626] selection:text-white">

         {/* Header Bar */}
         <header className="bg-black text-white">
            <div className="max-w-[1600px] mx-auto px-4 md:px-12">
               <div className="flex items-center justify-between h-16">
                  <div className="flex items-center gap-8">
                     <span className="text-xl font-black tracking-tight">NEXUS</span>
                     <nav className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest">
                        {['Overview', 'Analytics', 'Reports', 'Settings'].map((item) => (
                           <button
                              key={item}
                              onClick={() => setActiveTab(item.toLowerCase())}
                              className={`py-5 border-b-2 transition-colors ${activeTab === item.toLowerCase()
                                    ? 'border-[#DC2626] text-white'
                                    : 'border-transparent text-gray-400 hover:text-white'
                                 }`}
                           >
                              {item}
                           </button>
                        ))}
                     </nav>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span className="hidden sm:inline">ZÜRICH · </span>
                        <span className="text-white">10:42</span>
                     </div>
                     <div className="h-8 w-8 bg-[#DC2626] flex items-center justify-center text-xs font-black">
                        AM
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <main className="max-w-[1600px] mx-auto p-4 md:p-12">

            {/* Title Block */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
            >
               <div className="lg:col-span-8">
                  <SwissTypography variant="caption" color="muted" className="mb-2">
                     Dashboard / Overview
                  </SwissTypography>
                  <SwissTypography variant="headline">
                     SYSTEM<br />
                     <span className="text-[#DC2626]">ANALYTICS</span>
                  </SwissTypography>
                  <SwissDivider weight="thick" className="mt-6 w-24" />
               </div>
               <div className="lg:col-span-4">
                  <div className="flex gap-3">
                     <SwissButton variant="primary">Export Report</SwissButton>
                     <SwissButton variant="ghost">Configure</SwissButton>
                  </div>
               </div>
            </motion.div>

            {/* Metrics Row */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
               {[
                  { label: 'Active Users', value: '84,291', change: '+12.4%', up: true, icon: Users },
                  { label: 'Page Views', value: '2.4M', change: '+8.2%', up: true, icon: BarChart3 },
                  { label: 'Avg. Session', value: '4m 32s', change: '-2.1%', up: false, icon: Clock },
                  { label: 'Conversion', value: '4.2%', change: '+0.8%', up: true, icon: TrendingUp },
               ].map((metric, i) => (
                  <SwissCard key={i} bordered className="bg-white">
                     <div className="flex items-start justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{metric.label}</span>
                        <metric.icon className="h-4 w-4 text-gray-300" />
                     </div>
                     <div className="text-4xl font-black">{metric.value}</div>
                     <div className={`mt-2 text-sm font-bold flex items-center gap-1 ${metric.up ? 'text-emerald-600' : 'text-red-600'}`}>
                        {metric.up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                        {metric.change}
                     </div>
                  </SwissCard>
               ))}
            </motion.div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">

               {/* Left Column */}
               <div className="lg:col-span-4 space-y-4">
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2 }}
                  >
                     <SwissCard className="bg-[#DC2626] text-white" inverted>
                        <div className="text-9xl font-black opacity-10 absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
                           %
                        </div>
                        <SwissMetric
                           label="Conversion Rate"
                           value="4.2"
                           size="large"
                        />
                        <SwissDivider color="light" className="my-6" />
                        <div className="flex justify-between items-center">
                           <span className="text-sm font-bold uppercase tracking-widest opacity-80">Growth Rate</span>
                           <ArrowUpRight className="h-8 w-8" />
                        </div>
                     </SwissCard>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.25 }}
                  >
                     <SwissCard black>
                        <div className="flex items-center justify-between">
                           <div>
                              <h3 className="text-white font-bold text-lg">System Status</h3>
                              <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">All Regions</p>
                           </div>
                           <div className="flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-emerald-500 font-bold text-sm">LIVE</span>
                           </div>
                        </div>
                        <div className="mt-6 text-5xl font-black text-white">24%</div>
                        <div className="text-gray-500 text-xs mt-1">Server Load · Cluster A-12</div>
                     </SwissCard>
                  </motion.div>

                  {/* Geometric Element */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.3 }}
                  >
                     <SwissCard bordered className="bg-white p-8 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px bg-gray-100">
                           {[...Array(36)].map((_, i) => (
                              <motion.div
                                 key={i}
                                 className="bg-white"
                                 whileHover={{ backgroundColor: '#DC2626' }}
                                 transition={{ duration: 0.2 }}
                              />
                           ))}
                        </div>
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                           <Square className="h-12 w-12 fill-[#DC2626] text-[#DC2626]" />
                           <Circle className="h-12 w-12 fill-black text-black" />
                           <Triangle className="h-12 w-12 fill-black text-black" />
                           <Circle className="h-12 w-12 fill-[#DC2626] text-[#DC2626]" />
                        </div>
                     </SwissCard>
                  </motion.div>
               </div>

               {/* Right Column - Activity */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-8"
               >
                  <SwissCard bordered className="bg-white p-8 md:p-12 h-full relative overflow-hidden group">
                     {/* Hover Effect */}
                     <div className="absolute inset-0 bg-[#DC2626] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                     <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                        <div className="flex items-center justify-between mb-8">
                           <h3 className="text-xs font-bold uppercase tracking-[0.3em] border-b-2 border-current pb-2">
                              Recent Activity
                           </h3>
                           <SwissButton variant="ghost" size="sm" className="group-hover:text-white group-hover:border-white">
                              View All
                           </SwissButton>
                        </div>

                        <div className="space-y-6">
                           {[
                              { id: '01', title: 'DEPLOYMENT', time: '09:00', status: 'SUCCESS', statusColor: 'emerald' },
                              { id: '02', title: 'DATABASE BACKUP', time: '10:15', status: 'PENDING', statusColor: 'amber' },
                              { id: '03', title: 'SECURITY AUDIT', time: '11:30', status: 'SCHEDULED', statusColor: 'blue' },
                              { id: '04', title: 'CDN UPDATE', time: '12:00', status: 'SUCCESS', statusColor: 'emerald' },
                              { id: '05', title: 'API MIGRATION', time: '13:45', status: 'IN PROGRESS', statusColor: 'violet' },
                           ].map((item) => (
                              <div key={item.id} className="flex items-center gap-6 border-b border-current/20 pb-4 last:border-0">
                                 <span className="text-5xl font-black opacity-10 w-16">{item.id}</span>
                                 <div className="flex-1">
                                    <h4 className="text-lg font-bold">{item.title}</h4>
                                    <span className="text-xs opacity-60">{item.time}</span>
                                 </div>
                                 <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider bg-${item.statusColor}-500/20 text-${item.statusColor}-600 group-hover:bg-white/20 group-hover:text-white`}>
                                    {item.status}
                                 </span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </SwissCard>
               </motion.div>

            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
               <SwissTypography variant="caption" color="muted">
                  Form follows function. Less is more. The grid is the master.
               </SwissTypography>
               <div className="flex gap-3">
                  <SwissButton variant="ghost" size="sm">Index</SwissButton>
                  <SwissButton variant="ghost" size="sm">Archive</SwissButton>
                  <SwissButton variant="primary" size="sm">Contact</SwissButton>
               </div>
            </footer>
         </main>
      </div>
   );
};

export default SwissDashboard;