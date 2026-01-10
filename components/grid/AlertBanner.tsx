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
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      titleColor: 'text-blue-300',
    },
    warning: {
      icon: AlertTriangle,
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-400',
      titleColor: 'text-amber-300',
    },
    success: {
      icon: CheckCircle,
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      titleColor: 'text-emerald-300',
    },
    error: {
      icon: XCircle,
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      iconColor: 'text-red-400',
      titleColor: 'text-red-300',
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-start gap-3 p-4 rounded-lg border ${config.bg} ${config.border} ${className}`}
    >
      <Icon className={`h-5 w-5 ${config.iconColor} flex-shrink-0 mt-0.5`} />
      <div className="flex-1 min-w-0">
        <h4 className={`font-semibold ${config.titleColor}`}>{title}</h4>
        <p className="text-sm text-zinc-400 mt-0.5">{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <XCircle className="h-4 w-4" />
        </button>
      )}
    </motion.div>
  );
};

export default AlertBanner;
