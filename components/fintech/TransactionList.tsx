import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Search } from 'lucide-react';
import FintechCard from './FintechCard';

const TransactionList = () => {
  const transactions = [
    { id: '#TRX-9821', type: 'incoming', entity: 'Stripe Earnings', date: 'Oct 24, 10:42 AM', amount: '+$2,400.00', status: 'Completed' },
    { id: '#TRX-9820', type: 'outgoing', entity: 'AWS Web Services', date: 'Oct 23, 04:00 PM', amount: '-$142.50', status: 'Completed' },
    { id: '#TRX-9819', type: 'outgoing', entity: 'Github Pro', date: 'Oct 23, 09:30 AM', amount: '-$20.00', status: 'Completed' },
    { id: '#TRX-9818', type: 'incoming', entity: 'Client Invoice #004', date: 'Oct 22, 02:15 PM', amount: '+$850.00', status: 'Pending' },
    { id: '#TRX-9817', type: 'outgoing', entity: 'WeWork Rent', date: 'Oct 21, 09:00 AM', amount: '-$1,200.00', status: 'Completed' },
  ];

  return (
    <FintechCard className="flex flex-col h-full p-0">
       <div className="p-6 border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
               <h3 className="text-lg font-medium text-zinc-100">Recent Transactions</h3>
               <p className="text-sm text-zinc-500">Your latest financial activity.</p>
           </div>
           <div className="relative">
               <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
               <input 
                 type="text" 
                 placeholder="Search transactions..." 
                 className="h-10 w-full md:w-64 rounded-lg border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
               />
           </div>
       </div>

       <div className="overflow-x-auto">
           <table className="w-full text-left text-sm">
               <thead className="bg-zinc-900/50 text-xs font-medium uppercase tracking-wider text-zinc-500">
                   <tr>
                       <th className="px-6 py-4">Transaction ID</th>
                       <th className="px-6 py-4">Entity</th>
                       <th className="px-6 py-4">Date</th>
                       <th className="px-6 py-4">Status</th>
                       <th className="px-6 py-4 text-right">Amount</th>
                   </tr>
               </thead>
               <tbody className="divide-y divide-zinc-800">
                   {transactions.map((trx, i) => (
                       <tr key={i} className="group hover:bg-zinc-900/50 transition-colors">
                           <td className="px-6 py-4 font-mono text-zinc-400 group-hover:text-emerald-500 transition-colors">{trx.id}</td>
                           <td className="px-6 py-4">
                               <div className="flex items-center gap-3">
                                   <div className={`rounded-full p-1.5 ${trx.type === 'incoming' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                                       {trx.type === 'incoming' ? <ArrowDownLeft className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                                   </div>
                                   <span className="font-medium text-zinc-200">{trx.entity}</span>
                               </div>
                           </td>
                           <td className="px-6 py-4 text-zinc-500">{trx.date}</td>
                           <td className="px-6 py-4">
                               <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                                   trx.status === 'Completed' 
                                   ? 'bg-emerald-400/10 text-emerald-400 ring-emerald-400/20' 
                                   : 'bg-amber-400/10 text-amber-400 ring-amber-400/20'
                               }`}>
                                   {trx.status}
                               </span>
                           </td>
                           <td className={`px-6 py-4 text-right font-mono font-medium ${trx.type === 'incoming' ? 'text-emerald-400' : 'text-zinc-200'}`}>
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