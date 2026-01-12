import React from 'react';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface AlertBannerProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  message?: string;
  onDismiss?: () => void;
  className?: string;
}

const AlertBanner: React.FC<AlertBannerProps> = ({
  type = 'warning',
  title = "Grid Overload Warning",
  message = "Sector 7 experiencing 95% capacity. Consider load balancing.",
  onDismiss,
  className = "",
}) => {
  const { currentPlaygroundTheme: theme } = useTheme();

  const typeConfig = {
    info: {
      icon: Info,
      bg: theme.colors.muted, // Fallback, implies lighter/dimmer
      border: theme.colors.border,
      iconColor: theme.colors.primary,
      titleColor: theme.colors.foreground,
    },
    warning: {
      icon: AlertTriangle,
      bg: 'rgba(245, 158, 11, 0.1)',
      border: 'rgba(245, 158, 11, 0.3)',
      iconColor: '#fbbf24',
      titleColor: '#fcd34d',
    },
    success: {
      icon: CheckCircle,
      bg: 'rgba(16, 185, 129, 0.1)',
      border: 'rgba(16, 185, 129, 0.3)',
      iconColor: theme.colors.ring,
      titleColor: '#6ee7b7',
    },
    error: {
      icon: XCircle,
      bg: 'rgba(239, 68, 68, 0.1)',
      border: 'rgba(239, 68, 68, 0.3)',
      iconColor: '#f87171',
      titleColor: '#fca5a5',
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-start gap-3 p-4 rounded-lg border ${className}`}
      style={{ backgroundColor: config.bg, borderColor: config.border }}
    >
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: config.iconColor }} />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold" style={{ color: config.titleColor }}>{title}</h4>
        <p className="text-sm mt-0.5" style={{ color: theme.colors.mutedForeground }}>{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="transition-opacity hover:opacity-80"
          style={{ color: theme.colors.mutedForeground }}
        >
          <XCircle className="h-4 w-4" />
        </button>
      )}
    </motion.div>
  );
};

export default AlertBanner;

