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
      <div className="flex items-center justify-between border-b p-4" style={{ borderColor: '#1e293b' }}>
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium" style={{ color: '#f1f5f9' }}>Recent Transactions</h3>
          <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: '#1e293b', color: '#94a3b8' }}>24</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2" style={{ color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search..."
              className="h-8 w-40 rounded-md border pl-8 pr-3 text-xs focus:outline-none"
              style={{ borderColor: '#1e293b', backgroundColor: '#0f172a', color: '#cbd5e1' }}
            />
          </div>
          <button className="flex h-8 items-center gap-1.5 rounded-md border px-3 text-xs font-medium" style={{ borderColor: '#1e293b', backgroundColor: '#0f172a', color: '#94a3b8' }}>
            <Filter className="h-3.5 w-3.5" />
            Filter
          </button>
          <button className="flex h-8 items-center gap-1.5 rounded-md border px-3 text-xs font-medium" style={{ borderColor: '#1e293b', backgroundColor: '#0f172a', color: '#94a3b8' }}>
            <Download className="h-3.5 w-3.5" />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase" style={{ backgroundColor: 'rgba(15,23,42,0.5)', color: '#64748b' }}>
            <tr>
              <th className="px-6 py-3 font-medium">Customer</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium text-right">Amount</th>
              <th className="px-6 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ '--tw-divide-color': 'rgba(30,41,59,0.5)' } as React.CSSProperties}>
            {users.map((user, i) => (
              <tr key={i} className="group transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium" style={{ color: '#e2e8f0' }}>{user.name}</div>
                    <div className="text-xs" style={{ color: '#64748b' }}>{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium border"
                    style={user.status === 'Paid'
                      ? { backgroundColor: 'rgba(16,185,129,0.1)', color: '#34d399', borderColor: 'rgba(16,185,129,0.2)' }
                      : user.status === 'Pending'
                        ? { backgroundColor: 'rgba(245,158,11,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.2)' }
                        : { backgroundColor: 'rgba(244,63,94,0.1)', color: '#fb7185', borderColor: 'rgba(244,63,94,0.2)' }
                    }
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs" style={{ color: '#64748b' }}>
                  {user.date}
                </td>
                <td className="px-6 py-4 text-right font-medium" style={{ color: '#cbd5e1' }}>
                  {user.amount}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="opacity-0 group-hover:opacity-100 transition-all" style={{ color: '#64748b' }}>
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