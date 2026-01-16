import React, { useState } from 'react';
import { LucideIcon, Copy, Check } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  glowColor?: string;
  code?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  icon: Icon,
  title,
  description,
  className = "",
  glowColor = "rgba(255,255,255,0.2)",
  code
}) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <SpotlightCard className={`group flex flex-col justify-between p-6 ${className}`}>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}>
      </div>

      {code && (
        <button
          onClick={handleCopy}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground opacity-0 backdrop-blur-md transition-all group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2"
          title="Copy Code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      )}

      <div className="relative z-10">
        <div
          className="group/icon relative mb-4 inline-flex items-center justify-center rounded-lg border border-border bg-secondary p-3 shadow-inner transition-all duration-300 group-hover:scale-110"
          style={{
            boxShadow: `0 0 20px ${glowColor}`
          }}
        >
          <Icon
            className="h-6 w-6 text-foreground"
            strokeWidth={1.5}
          />

          <div
            className="pointer-events-none absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2 -translate-x-2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-card-foreground opacity-0 shadow-xl backdrop-blur-sm transition-all duration-200 group-hover/icon:translate-x-0 group-hover/icon:opacity-100"
          >
            {title}
          </div>
        </div>

        <h3
          className="mb-2 text-lg font-semibold tracking-tight text-foreground"
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed transition-colors text-muted-foreground"
        >
          {description}
        </p>
      </div>

      <div
        className="relative z-10 mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground"
      >
        <span
          className="rounded-full px-2 py-1 bg-secondary text-secondary-foreground"
        >
          TSX
        </span>
        <span
          className="rounded-full px-2 py-1 bg-secondary text-secondary-foreground"
        >
          Tailwind
        </span>
      </div>
    </SpotlightCard>
  );
};

export default BentoCard;