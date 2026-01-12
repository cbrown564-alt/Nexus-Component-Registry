import React from 'react';
import { motion } from 'framer-motion';
import { Server, Activity, HardDrive, Cpu, MemoryStick, Wifi, WifiOff, AlertCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export type ServerStatus = 'healthy' | 'warning' | 'critical' | 'offline';
export type MetricType = 'cpu' | 'memory' | 'disk' | 'network' | 'custom';

interface ServerStatBadgeProps {
    label?: string;
    value?: string | number;
    status?: ServerStatus;
    metric?: MetricType;
    icon?: LucideIcon;
    trend?: 'up' | 'down' | 'stable';
    trendValue?: string;
    showPulse?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const ServerStatBadge: React.FC<ServerStatBadgeProps> = ({
    label = 'Server Status',
    value = '99.9%',
    status = 'healthy',
    metric = 'custom',
    icon,
    trend,
    trendValue,
    showPulse = true,
    size = 'md',
    className = ''
}) => {
    const { theme } = useTheme();

    const getStatusColor = (s: ServerStatus) => {
        switch (s) {
            case 'healthy': return 'bg-emerald-500';
            case 'warning': return 'bg-amber-500';
            case 'critical': return 'bg-red-500';
            case 'offline': return ''; // handled in style
        }
    };

    const getStatusBorder = (s: ServerStatus) => {
        switch (s) {
            case 'healthy': return 'border-emerald-500/30';
            case 'warning': return 'border-amber-500/30';
            case 'critical': return 'border-red-500/30';
            case 'offline': return ''; // handled in style
        }
    };

    const getStatusGlow = (s: ServerStatus) => {
        switch (s) {
            case 'healthy': return 'shadow-emerald-500/20';
            case 'warning': return 'shadow-amber-500/20';
            case 'critical': return 'shadow-red-500/20';
            case 'offline': return '';
        }
    };

    const getMetricIcon = (m: MetricType): LucideIcon => {
        switch (m) {
            case 'cpu': return Cpu;
            case 'memory': return MemoryStick;
            case 'disk': return HardDrive;
            case 'network': return status === 'offline' ? WifiOff : Wifi;
            default: return Server;
        }
    };

    const getSizeClasses = (s: typeof size) => {
        switch (s) {
            case 'sm': return 'px-2.5 py-1.5 text-xs gap-2';
            case 'lg': return 'px-5 py-3 text-base gap-4';
            default: return 'px-4 py-2 text-sm gap-3';
        }
    };

    const getIconSize = (s: typeof size) => {
        switch (s) {
            case 'sm': return 'w-3.5 h-3.5';
            case 'lg': return 'w-5 h-5';
            default: return 'w-4 h-4';
        }
    };

    const Icon = icon || getMetricIcon(metric);

    const getTrendColor = (t: typeof trend) => {
        if (!t) return '';
        switch (t) {
            case 'up': return status === 'healthy' ? 'text-emerald-400' : 'text-red-400';
            case 'down': return status === 'healthy' ? 'text-emerald-400' : 'text-amber-400';
            default: return ''; // handled with theme
        }
    };

    const getTrendArrow = (t: typeof trend) => {
        if (!t) return '';
        switch (t) {
            case 'up': return '↑';
            case 'down': return '↓';
            default: return '→';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className={`
                inline-flex items-center rounded-lg border 
                ${getStatusBorder(status)} ${getSizeClasses(size)}
                shadow-lg ${getStatusGlow(status)}
                ${className}
            `}
            style={status === 'offline' ? {
                backgroundColor: theme.colors.muted,
                borderColor: theme.colors.border
            } : {
                backgroundColor: theme.colors.card
            }}
        >
            {/* Status Indicator */}
            <div className="relative flex items-center justify-center">
                <span
                    className={`w-2 h-2 rounded-full ${getStatusColor(status)}`}
                    style={status === 'offline' ? { backgroundColor: theme.colors.mutedForeground } : undefined}
                />
                {showPulse && status !== 'offline' && (
                    <motion.span
                        className={`absolute w-2 h-2 rounded-full ${getStatusColor(status)}`}
                        animate={{ scale: [1, 2], opacity: [0.7, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                )}
            </div>

            {/* Icon */}
            <Icon
                className={getIconSize(size)}
                style={{ color: theme.colors.mutedForeground }}
            />

            {/* Label & Value */}
            <div className="flex flex-col leading-tight">
                <span
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: theme.colors.mutedForeground }}
                >
                    {label}
                </span>
                <div className="flex items-center gap-1.5">
                    <span
                        className="font-mono font-semibold"
                        style={{ color: theme.colors.foreground }}
                    >
                        {value}
                    </span>
                    {trend && trendValue && (
                        <span
                            className={`text-[10px] ${getTrendColor(trend)}`}
                            style={getTrendColor(trend) === '' ? { color: theme.colors.mutedForeground } : undefined}
                        >
                            {getTrendArrow(trend)} {trendValue}
                        </span>
                    )}
                </div>
            </div>

            {/* Warning icon for critical/warning states */}
            {(status === 'critical' || status === 'warning') && (
                <AlertCircle className={`${getIconSize(size)} ${status === 'critical' ? 'text-red-400' : 'text-amber-400'} animate-pulse`} />
            )}
        </motion.div>
    );
};

export default ServerStatBadge;
