import React from 'react';
import { ArrowUpRight, Grid3X3, Circle, Square, Triangle } from 'lucide-react';
import SwissCard from '../components/swiss/SwissCard';
import SwissMetric from '../components/swiss/SwissMetric';

const SwissDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-black p-4 md:p-12 overflow-hidden selection:bg-[#DC2626] selection:text-white">
      
      {/* The Grid Container */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        
        {/* Header / Title Block */}
        <div className="md:col-span-12 lg:col-span-8 mb-12">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-6">
            DESIGN<br />
            SYSTEM<br />
            <span className="text-[#DC2626]">2024</span>
          </h1>
          <div className="max-w-md text-lg font-bold leading-tight">
            OBJECTIVE CLARITY. MATHEMATICAL GRIDS. ASYMMETRICAL BALANCE.
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-end items-start mb-12">
           <div className="w-full border-t-4 border-black pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                 <span>ZÜRICH</span>
                 <span>10:42</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-[#DC2626]">
                 <span>LATENCY</span>
                 <span>12ms</span>
              </div>
           </div>
        </div>

        {/* Row 1 */}
        <div className="md:col-span-6 lg:col-span-4 bg-white">
           <SwissCard className="h-full">
              <SwissMetric 
                label="Active Users" 
                value="84k" 
                description="Total active users across all regions in the last 24 hours."
                size="large"
              />
           </SwissCard>
        </div>

        <div className="md:col-span-6 lg:col-span-4 bg-[#DC2626] text-white">
           <SwissCard inverted className="h-full flex flex-col justify-between">
              <div className="text-9xl font-black opacity-20 absolute top-[-20px] right-[-20px] rotate-12">
                 %
              </div>
              <SwissMetric 
                label="Conversion" 
                value="4.2" 
                size="large"
              />
              <div className="mt-8 pt-8 border-t border-white/30 flex justify-between items-center">
                 <span className="text-sm font-bold uppercase tracking-widest">Growth Rate</span>
                 <ArrowUpRight className="h-8 w-8" />
              </div>
           </SwissCard>
        </div>

        <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-4">
           <SwissCard bordered className="bg-white flex-1">
              <div className="flex items-center gap-4 mb-4">
                 <Circle className="h-4 w-4 fill-black" />
                 <span className="font-bold text-sm uppercase tracking-widest">System Status</span>
              </div>
              <div className="text-4xl font-black">OPERATIONAL</div>
           </SwissCard>
           
           <SwissCard black className="flex-1">
              <div className="flex items-center justify-between">
                 <div>
                    <h3 className="text-white font-bold text-lg">Server Load</h3>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Cluster A-12</p>
                 </div>
                 <div className="text-5xl font-black text-white">24%</div>
              </div>
           </SwissCard>
        </div>

        {/* Row 2: List / Typography */}
        <div className="md:col-span-12 lg:col-span-8 bg-white p-8 md:p-12 relative overflow-hidden group">
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-[#DC2626] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            
            <div className="relative z-10 group-hover:text-white transition-colors duration-300">
               <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-12 border-b-2 border-black group-hover:border-white pb-4 inline-block">Recent Activity</h3>
               
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
        <div className="md:col-span-12 lg:col-span-4 bg-white p-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px bg-[#f0f0f0]">
               {[...Array(36)].map((_,i) => (
                  <div key={i} className="bg-white" />
               ))}
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <Square className="h-16 w-16 fill-[#DC2626] text-[#DC2626] mix-blend-multiply" />
               <Circle className="h-16 w-16 fill-black text-black mix-blend-multiply" />
               <Triangle className="h-16 w-16 fill-black text-black mix-blend-multiply" />
               <Square className="h-16 w-16 fill-[#DC2626] text-[#DC2626] mix-blend-multiply rounded-full" />
            </div>
        </div>

        {/* Footer Info */}
        <div className="md:col-span-12 mt-8 border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
           <div className="text-xs font-bold uppercase tracking-widest max-w-sm">
              Form follows function. Less is more. The grid is the master.
           </div>
           <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <span className="hover:text-[#DC2626] cursor-pointer">Index</span>
              <span className="hover:text-[#DC2626] cursor-pointer">Archive</span>
              <span className="hover:text-[#DC2626] cursor-pointer">Contact</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default SwissDashboard;