import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  DollarSign, 
  CreditCard, 
  Activity, 
  Plus, 
  CalendarRange,
  Download
} from 'lucide-react';
import MetricCard from '../components/saas/MetricCard';
import RevenueChart from '../components/saas/RevenueChart';
import CustomerTable from '../components/saas/CustomerTable';
import SaasCard from '../components/saas/SaasCard';

const SaasDashboard = () => {
  return (
    <div className="container mx-auto max-w-[1600px] p-6 lg:p-10 font-sans text-slate-200">
      
      {/* Header */}
      <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
        >
            <h1 className="text-2xl font-bold tracking-tight text-white">Dashboard</h1>
            <p className="text-sm text-slate-500">Overview of your SaaS performance.</p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
        >
             <div className="flex items-center rounded-md border border-slate-800 bg-slate-900 p-1">
                <button className="rounded px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">Overview</button>
                <button className="rounded bg-slate-800 px-3 py-1.5 text-xs font-medium text-white shadow-sm">Analytics</button>
                <button className="rounded px-3 py-1.5 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">Reports</button>
             </div>
             
             <div className="h-8 w-px bg-slate-800 mx-1" />

             <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
                <Plus className="h-4 w-4" />
                New Campaign
             </button>
        </motion.div>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        
        {/* KPI Row */}
        <MetricCard 
            label="Total Revenue" 
            value="$45,231.89" 
            trend="+20.1%" 
            trendUp={true} 
            icon={DollarSign}
            delay={0.1}
        />
        <MetricCard 
            label="Subscriptions" 
            value="+2350" 
            trend="+180.1%" 
            trendUp={true} 
            icon={Users}
            delay={0.2}
        />
        <MetricCard 
            label="Sales" 
            value="+12,234" 
            trend="+19%" 
            trendUp={true} 
            icon={CreditCard}
            delay={0.3}
        />
        <MetricCard 
            label="Active Now" 
            value="+573" 
            trend="-201 since last hour" 
            trendUp={false} 
            icon={Activity}
            delay={0.4}
        />

        {/* Main Content Area */}
        <div className="lg:col-span-3 min-h-[400px]">
            <RevenueChart />
        </div>

        {/* Sidebar / Recent Sales or Activity */}
        <div className="lg:col-span-1">
            <SaasCard className="h-full">
                <div className="mb-4">
                    <h3 className="font-medium text-slate-100">Recent Sales</h3>
                    <p className="text-xs text-slate-500">You made 265 sales this month.</p>
                </div>
                <div className="space-y-6">
                    {[
                        { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
                        { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
                        { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
                        { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
                        { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
                    ].map((sale, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700" />
                                <div>
                                    <div className="text-sm font-medium text-slate-200">{sale.name}</div>
                                    <div className="text-xs text-slate-500">{sale.email}</div>
                                </div>
                            </div>
                            <div className="text-sm font-medium text-slate-100">{sale.amount}</div>
                        </div>
                    ))}
                </div>
            </SaasCard>
        </div>

        {/* Bottom Full Width Table */}
        <div className="lg:col-span-4">
            <CustomerTable />
        </div>

      </div>
    </div>
  );
};

export default SaasDashboard;