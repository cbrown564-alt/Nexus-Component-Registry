import React from 'react';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const typeConfig = {
    info: {
      icon: Info,
      bg: 'rgba(59, 130, 246, 0.1)',
      border: 'rgba(59, 130, 246, 0.3)',
      iconColor: '#60a5fa',
      titleColor: '#93c5fd',
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
      iconColor: '#34d399',
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
      className="flex items-start gap-3 p-4 rounded-lg border"
      style={{ backgroundColor: config.bg, borderColor: config.border }}
    >
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: config.iconColor }} />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold" style={{ color: config.titleColor }}>{title}</h4>
        <p className="text-sm mt-0.5" style={{ color: '#a1a1aa' }}>{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="transition-opacity hover:opacity-80"
          style={{ color: '#71717a' }}
        >
          <XCircle className="h-4 w-4" />
        </button>
      )}
    </motion.div>
  );
};

export default AlertBanner;
