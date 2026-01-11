import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Search } from 'lucide-react';
import FintechCard from './FintechCard';
import { useTheme } from '@/context/ThemeContext';

const TransactionList = () => {
    const { currentPlaygroundTheme } = useTheme();

    const primaryColor = currentPlaygroundTheme.colors.primary;
    const mutedColor = currentPlaygroundTheme.colors.mutedForeground;
    const foregroundColor = currentPlaygroundTheme.colors.foreground;
    const borderColor = currentPlaygroundTheme.colors.border;
    const cardBg = currentPlaygroundTheme.colors.card;
    const mutedBg = currentPlaygroundTheme.colors.muted;

    const transactions = [
        { id: '#TRX-9821', type: 'incoming', entity: 'Stripe Earnings', date: 'Oct 24, 10:42 AM', amount: '+$2,400.00', status: 'Completed' },
        { id: '#TRX-9820', type: 'outgoing', entity: 'AWS Web Services', date: 'Oct 23, 04:00 PM', amount: '-$142.50', status: 'Completed' },
        { id: '#TRX-9819', type: 'outgoing', entity: 'Github Pro', date: 'Oct 23, 09:30 AM', amount: '-$20.00', status: 'Completed' },
        { id: '#TRX-9818', type: 'incoming', entity: 'Client Invoice #004', date: 'Oct 22, 02:15 PM', amount: '+$850.00', status: 'Pending' },
        { id: '#TRX-9817', type: 'outgoing', entity: 'WeWork Rent', date: 'Oct 21, 09:00 AM', amount: '-$1,200.00', status: 'Completed' },
    ];

    return (
        <FintechCard className="flex flex-col h-full p-0">
            <div className="p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderColor }}>
                <div>
                    <h3 className="text-lg font-medium" style={{ color: foregroundColor }}>Recent Transactions</h3>
                    <p className="text-sm" style={{ color: mutedColor }}>Your latest financial activity.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: mutedColor }} />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        className="h-10 w-full md:w-64 rounded-lg border bg-transparent pl-10 pr-4 text-sm focus:outline-none focus:ring-1"
                        style={{
                            borderColor: borderColor,
                            color: foregroundColor,
                            outlineColor: primaryColor
                        }}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="text-xs font-medium uppercase tracking-wider" style={{ backgroundColor: mutedBg + '40', color: mutedColor }}>
                        <tr>
                            <th className="px-6 py-4">Transaction ID</th>
                            <th className="px-6 py-4">Entity</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody style={{ borderColor }}>
                        {transactions.map((trx, i) => (
                            <tr key={i} className="group transition-colors hover:bg-white/5 border-b last:border-0" style={{ borderColor: `${borderColor}33` }}>
                                <td className="px-6 py-4 font-mono transition-colors" style={{ color: mutedColor }}>{trx.id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`rounded-full p-1.5`}
                                            style={{
                                                backgroundColor: trx.type === 'incoming' ? `${primaryColor}1A` : `${currentPlaygroundTheme.colors.secondary}1A`,
                                                color: trx.type === 'incoming' ? primaryColor : currentPlaygroundTheme.colors.secondary
                                            }}>
                                            {trx.type === 'incoming' ? <ArrowDownLeft className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                                        </div>
                                        <span className="font-medium" style={{ color: foregroundColor }}>{trx.entity}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4" style={{ color: mutedColor }}>{trx.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset`}
                                        style={{
                                            backgroundColor: trx.status === 'Completed' ? `${primaryColor}1A` : `${currentPlaygroundTheme.colors.accent}1A`,
                                            color: trx.status === 'Completed' ? primaryColor : currentPlaygroundTheme.colors.accent,
                                            '--tw-ring-color': trx.status === 'Completed' ? `${primaryColor}33` : `${currentPlaygroundTheme.colors.accent}33`
                                        } as React.CSSProperties}>
                                        {trx.status}
                                    </span>
                                </td>
                                <td className={`px-6 py-4 text-right font-mono font-medium`} style={{ color: trx.type === 'incoming' ? primaryColor : foregroundColor }}>
                                    {trx.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </FintechCard>
    );
};

export default TransactionList;