import React, { useEffect } from 'react';
import { ArrowUpRight, Grid3X3, Circle, Square, Triangle } from 'lucide-react';
import SwissCard from '../components/swiss/SwissCard';
import SwissMetric from '../components/swiss/SwissMetric';
import SwissButton from '../components/swiss/SwissButton';
import SwissTypography from '../components/swiss/SwissTypography';
import SwissDivider from '../components/swiss/SwissDivider';
import { useTheme } from '@/context/ThemeContext';

const SwissDashboard = () => {
   const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

   useEffect(() => {
      setPlaygroundTheme('swiss');
   }, []);

   return (
      <div
         className="min-h-screen font-sans p-4 md:p-12 overflow-hidden selection:text-[#ffffff]"
         style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.foreground,
            '--tw-selection-bg': theme.colors.primary,
         } as React.CSSProperties}
      >
         <style>{`::selection { background-color: ${theme.colors.primary}; color: ${theme.colors.primaryForeground}; }`}</style>

         {/* The Grid Container */}
         <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">

            {/* Header / Title Block */}
            <div className="md:col-span-12 lg:col-span-8 mb-12">
               <SwissTypography variant="display" className="mb-6">
                  DESIGN<br />
                  SYSTEM<br />
                  <span style={{ color: theme.colors.primary }}>2024</span>
               </SwissTypography>
               <SwissDivider weight="thick" className="mb-4 w-24" />
               <SwissTypography variant="body" className="max-w-md font-bold leading-tight">
                  OBJECTIVE CLARITY. MATHEMATICAL GRIDS. ASYMMETRICAL BALANCE.
               </SwissTypography>
            </div>

            <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-end items-end mb-12">
               <div className="w-64 border-t-4 pt-1" style={{ borderColor: theme.colors.border }}>
                  <div className="flex justify-between items-center text-xl font-bold">
                     <span>ZÜRICH</span>
                     <span>10:42</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold" style={{ color: theme.colors.primary }}>
                     <span>LATENCY</span>
                     <span>12ms</span>
                  </div>
               </div>
            </div>

            {/* Row 1 */}
            <div className="md:col-span-6 lg:col-span-4" style={{ backgroundColor: theme.colors.card }}>
               <SwissCard className="h-full">
                  <SwissMetric
                     label="Active Users"
                     value="84k"
                     description="Total active users across all regions in the last 24 hours."
                     size="large"
                  />
               </SwissCard>
            </div>

            <div className="md:col-span-6 lg:col-span-4" style={{ backgroundColor: theme.colors.primary, color: theme.colors.primaryForeground }}>
               <SwissCard inverted className="h-full flex flex-col justify-between">
                  <div className="text-9xl font-black opacity-20 absolute top-[-20px] right-[-20px] rotate-12">
                     %
                  </div>
                  <SwissMetric
                     label="Conversion"
                     value="4.2"
                     size="large"
                  />
                  <div className="mt-8 pt-8 flex justify-between items-center" style={{ borderTopWidth: '1px', borderTopColor: 'rgba(255, 255, 255, 0.3)' }}>
                     <span className="text-sm font-bold uppercase tracking-widest">Growth Rate</span>
                     <ArrowUpRight className="h-8 w-8" />
                  </div>
               </SwissCard>
            </div>

            <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-4">
               <SwissCard bordered className="flex-1" style={{ backgroundColor: theme.colors.card }}>
                  <div className="flex items-center gap-4 mb-4">
                     <Circle className="h-4 w-4" style={{ fill: theme.colors.foreground }} />
                     <span className="font-bold text-sm uppercase tracking-widest">System Status</span>
                  </div>
                  <div className="text-4xl font-black">OPERATIONAL</div>
               </SwissCard>

               <SwissCard black className="flex-1">
                  <div className="flex items-center justify-between">
                     <div>
                        <h3 className="font-bold text-lg" style={{ color: '#ffffff' }}>Server Load</h3>
                        <p className="text-xs uppercase tracking-widest mt-1" style={{ color: '#9ca3af' }}>Cluster A-12</p>
                     </div>
                     <div className="text-5xl font-black" style={{ color: '#ffffff' }}>24%</div>
                  </div>
               </SwissCard>
            </div>

            {/* Row 2: List / Typography */}
            <div className="md:col-span-12 lg:col-span-8 p-8 md:p-12 relative overflow-hidden group" style={{ backgroundColor: theme.colors.card }}>
               {/* Hover Effect Background */}
               <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" style={{ backgroundColor: theme.colors.primary }} />

               <div className="relative z-10 group-hover:text-[#ffffff] transition-colors duration-300">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-12 border-b-2 group-hover:border-white pb-4 inline-block" style={{ borderColor: theme.colors.border }}>Recent Activity</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {[
                        { id: '01', title: 'DEPLOYMENT', time: '09:00', status: 'SUCCESS' },
                        { id: '02', title: 'BACKUP', time: '10:15', status: 'PENDING' },
                        { id: '03', title: 'AUDIT', time: '11:30', status: 'SCHEDULED' },
                     ].map((item) => (
                        <div key={item.id} className="flex flex-col gap-2">
                           <span className="text-4xl font-black opacity-20">{item.id}</span>
                           <h4 className="text-xl font-bold">{item.title}</h4>
                           <div className="flex justify-between text-sm font-mono border-t border-current pt-2 mt-auto">
                              <span>{item.time}</span>
                              <span>{item.status}</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Row 2: Graphic Element */}
            <div className="md:col-span-12 lg:col-span-4 p-8 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: theme.colors.card }}>
               <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px" style={{ backgroundColor: theme.colors.secondary }}>
                  {[...Array(36)].map((_, i) => (
                     <div key={i} style={{ backgroundColor: theme.colors.card }} />
                  ))}
               </div>

               <div className="relative z-10 grid grid-cols-2 gap-4">
                  <Square className="h-16 w-16 mix-blend-multiply" style={{ fill: theme.colors.primary, color: theme.colors.primary }} />
                  <Circle className="h-16 w-16 mix-blend-multiply" style={{ fill: theme.colors.foreground, color: theme.colors.foreground }} />
                  <Triangle className="h-16 w-16 mix-blend-multiply" style={{ fill: theme.colors.foreground, color: theme.colors.foreground }} />
                  <Square className="h-16 w-16 mix-blend-multiply rounded-full" style={{ fill: theme.colors.primary, color: theme.colors.primary }} />
               </div>
            </div>

            {/* Footer Info */}
            <div className="md:col-span-12 mt-8 border-t-2 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ borderColor: theme.colors.border }}>
               <div className="text-xs font-bold uppercase tracking-widest max-w-sm">
                  Form follows function. Less is more. The grid is the master.
               </div>
               <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
                  <SwissButton variant="ghost" size="sm">Index</SwissButton>
                  <SwissButton variant="ghost" size="sm">Archive</SwissButton>
                  <SwissButton variant="primary" size="sm">Contact</SwissButton>
               </div>
            </div>

         </div>
      </div>
   );
};

export default SwissDashboard;