import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import FintechCard from './FintechCard';
import { useTheme } from '@/context/ThemeContext';

const MarketTicker = () => {
  const { currentPlaygroundTheme } = useTheme();

  const primaryColor = currentPlaygroundTheme.colors.primary;
  const mutedColor = currentPlaygroundTheme.colors.mutedForeground;
  const foregroundColor = currentPlaygroundTheme.colors.foreground;
  const borderColor = currentPlaygroundTheme.colors.border;

  const assets = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$34,120.00', change: '+2.4%', up: true, holdings: '0.45 BTC' },
    { symbol: 'ETH', name: 'Ethereum', price: '$1,890.50', change: '-0.8%', up: false, holdings: '12.5 ETH' },
    { symbol: 'AAPL', name: 'Apple Inc.', price: '$173.25', change: '+0.5%', up: true, holdings: '50 Shares' },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: '$215.00', change: '-1.2%', up: false, holdings: '20 Shares' },
  ];

  return (
    <FintechCard className="p-0">
      <div className="p-4 border-b flex justify-between items-center" style={{ borderColor }}>
        <h3 className="font-medium" style={{ color: foregroundColor }}>Watchlist</h3>
        <button className="text-xs transition-colors hover:opacity-80" style={{ color: mutedColor }}>View All</button>
      </div>
      <div style={{ borderColor }}>
        {assets.map((asset, i) => (
          <AssetRow
            key={i}
            asset={asset}
            borderColor={borderColor}
            mutedColor={mutedColor}
            foregroundColor={foregroundColor}
            primaryColor={primaryColor}
            currentPlaygroundTheme={currentPlaygroundTheme}
          />
        ))}
      </div>
    </FintechCard>
  );
};

const AssetRow = ({ asset, borderColor, mutedColor, foregroundColor, primaryColor, currentPlaygroundTheme }: { asset: any, borderColor: string, mutedColor: string, foregroundColor: string, primaryColor: string, currentPlaygroundTheme: any }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      className="group flex items-center justify-between p-4 transition-colors border-b last:border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderColor: `${borderColor}33`, backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent' }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold"
          style={{
            backgroundColor: currentPlaygroundTheme.colors.muted,
            borderColor: borderColor,
            color: mutedColor
          }}>
          {asset.symbol[0]}
        </div>
        <div>
          <div className="font-bold" style={{ color: foregroundColor }}>{asset.symbol}</div>
          <div className="text-xs" style={{ color: mutedColor }}>{asset.name}</div>
        </div>
      </div>

      <div className="w-24 h-8 opacity-50">
        {/* Tiny Sparkline */}
        <svg className="w-full h-full" viewBox="0 0 50 20" preserveAspectRatio="none">
          <path
            d={asset.up ? "M0 20 L10 15 L20 18 L30 10 L40 12 L50 2" : "M0 5 L10 8 L20 2 L30 12 L40 10 L50 18"}
            fill="none"
            stroke={asset.up ? primaryColor : '#f43f5e'} // Keep red for down, use primary for up
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="text-right">
        <div className="font-mono text-sm font-medium" style={{ color: foregroundColor }}>{asset.price}</div>
        <div className={`flex items-center justify-end gap-1 text-xs font-medium`}
          style={{ color: asset.up ? primaryColor : '#f43f5e' }}>
          {asset.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {asset.change}
        </div>
      </div>
    </div>
  );
};

export default MarketTicker;