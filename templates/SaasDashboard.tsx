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
import SaasButton from '../components/saas/SaasButton';

import { useTheme } from '@/context/ThemeContext';

const SaasDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    React.useEffect(() => {
        setPlaygroundTheme('saas');
    }, []);

    return (
        <div
            className="container mx-auto max-w-[1600px] p-6 lg:p-10 font-sans"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >

            {/* Header */}
            <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-2xl font-bold tracking-tight" style={{ color: theme.colors.foreground }}>Dashboard</h1>
                    <p className="text-sm" style={{ color: theme.colors.mutedForeground }}>Overview of your SaaS performance.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                >
                    <div className="flex items-center rounded-md p-1" style={{ borderWidth: '1px', borderColor: '#1e293b', backgroundColor: '#0f172a' }}>
                        <SaasButton variant="control" size="sm" className="rounded">Overview</SaasButton>
                        <SaasButton variant="control" size="sm" active className="rounded">Analytics</SaasButton>
                        <SaasButton variant="control" size="sm" className="rounded">Reports</SaasButton>
                    </div>

                    <div className="h-8 w-px mx-1" style={{ backgroundColor: '#1e293b' }} />

                    <SaasButton variant="primary" size="md" icon={<Plus className="h-4 w-4" />}>
                        New Campaign
                    </SaasButton>
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
                            <h3 className="font-medium" style={{ color: theme.colors.cardForeground }}>Recent Sales</h3>
                            <p className="text-xs" style={{ color: theme.colors.mutedForeground }}>You made 265 sales this month.</p>
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
                                        <div className="h-9 w-9 rounded-full border" style={{ backgroundColor: theme.colors.muted, borderColor: theme.colors.border }} />
                                        <div>
                                            <div className="text-sm font-medium" style={{ color: theme.colors.foreground }}>{sale.name}</div>
                                            <div className="text-xs" style={{ color: theme.colors.mutedForeground }}>{sale.email}</div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium" style={{ color: theme.colors.foreground }}>{sale.amount}</div>
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