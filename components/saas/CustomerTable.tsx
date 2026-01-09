import React from 'react';
import { MoreHorizontal, Download, Filter, Search } from 'lucide-react';
import SaasCard from './SaasCard';

const CustomerTable = () => {
  const users = [
    { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00', status: 'Paid', date: 'Oct 24, 2024' },
    { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00', status: 'Pending', date: 'Oct 23, 2024' },
    { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00', status: 'Paid', date: 'Oct 23, 2024' },
    { name: 'William Kim', email: 'will@email.com', amount: '+$99.00', status: 'Failed', date: 'Oct 22, 2024' },
    { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00', status: 'Paid', date: 'Oct 21, 2024' },
  ];

  return (
    <SaasCard noPadding className="flex flex-col">
      <div className="flex items-center justify-between border-b border-slate-800 p-4">
         <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-slate-100">Recent Transactions</h3>
            <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-400">24</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="relative">
                <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="h-8 w-40 rounded-md border border-slate-800 bg-slate-900 pl-8 pr-3 text-xs text-slate-300 placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
                />
            </div>
            <button className="flex h-8 items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-3 text-xs font-medium text-slate-400 hover:text-slate-200">
                <Filter className="h-3.5 w-3.5" />
                Filter
            </button>
            <button className="flex h-8 items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-3 text-xs font-medium text-slate-400 hover:text-slate-200">
                <Download className="h-3.5 w-3.5" />
                Export
            </button>
         </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900/50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-6 py-3 font-medium">Customer</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium text-right">Amount</th>
              <th className="px-6 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {users.map((user, i) => (
              <tr key={i} className="group transition-colors hover:bg-slate-800/20">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-slate-200">{user.name}</div>
                    <div className="text-xs text-slate-500">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium border ${
                    user.status === 'Paid' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : user.status === 'Pending'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500 text-xs">
                  {user.date}
                </td>
                <td className="px-6 py-4 text-right font-medium text-slate-300">
                  {user.amount}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-slate-300 transition-all">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SaasCard>
  );
};

export default CustomerTable;