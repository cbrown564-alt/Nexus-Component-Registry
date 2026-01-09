import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import FintechCard from './FintechCard';

const MarketTicker = () => {
  const assets = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$34,120.00', change: '+2.4%', up: true, holdings: '0.45 BTC' },
    { symbol: 'ETH', name: 'Ethereum', price: '$1,890.50', change: '-0.8%', up: false, holdings: '12.5 ETH' },
    { symbol: 'AAPL', name: 'Apple Inc.', price: '$173.25', change: '+0.5%', up: true, holdings: '50 Shares' },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: '$215.00', change: '-1.2%', up: false, holdings: '20 Shares' },
  ];

  return (
    <FintechCard className="p-0">
      <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
        <h3 className="font-medium text-zinc-200">Watchlist</h3>
        <button className="text-xs text-zinc-500 hover:text-white transition-colors">View All</button>
      </div>
      <div className="divide-y divide-zinc-800">
        {assets.map((asset, i) => (
            <div key={i} className="group flex items-center justify-between p-4 transition-colors hover:bg-zinc-900">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-400">
                        {asset.symbol[0]}
                    </div>
                    <div>
                        <div className="font-bold text-zinc-200">{asset.symbol}</div>
                        <div className="text-xs text-zinc-500">{asset.name}</div>
                    </div>
                </div>
                
                <div className="w-24 h-8 opacity-50">
                     {/* Tiny Sparkline */}
                     <svg className="w-full h-full" viewBox="0 0 50 20" preserveAspectRatio="none">
                        <path 
                            d={asset.up ? "M0 20 L10 15 L20 18 L30 10 L40 12 L50 2" : "M0 5 L10 8 L20 2 L30 12 L40 10 L50 18"}
                            fill="none" 
                            stroke={asset.up ? "#10b981" : "#f43f5e"} 
                            strokeWidth="1.5"
                        />
                     </svg>
                </div>

                <div className="text-right">
                    <div className="font-mono text-sm font-medium text-zinc-200">{asset.price}</div>
                    <div className={`flex items-center justify-end gap-1 text-xs font-medium ${asset.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {asset.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {asset.change}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </FintechCard>
  );
};

export default MarketTicker;