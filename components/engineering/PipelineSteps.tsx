import React from 'react';
import { motion } from 'framer-motion';
import { Circle, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface Step {
    name: string;
    status: 'pending' | 'running' | 'success' | 'failed';
}

interface PipelineStepsProps {
    steps?: Step[];
    className?: string;
}

const defaultSteps: Step[] = [
    { name: 'Build', status: 'success' },
    { name: 'Test', status: 'success' },
    { name: 'Deploy', status: 'running' },
    { name: 'Monitor', status: 'pending' },
];

const PipelineSteps: React.FC<PipelineStepsProps> = ({
    steps = defaultSteps,
    className = ""
}) => {
    const { theme } = useTheme();

    const getStatusIcon = (status: Step['status']) => {
        switch (status) {
            case 'success':
                return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
            case 'running':
                return (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        <Clock className="w-5 h-5 text-amber-500" />
                    </motion.div>
                );
            case 'failed':
                return <XCircle className="w-5 h-5 text-red-500" />;
            default:
                return (
                    <Circle
                        className="w-5 h-5"
                        style={{ color: theme.colors.mutedForeground }}
                    />
                );
        }
    };

    const getStatusColor = (status: Step['status']) => {
        switch (status) {
            case 'success':
                return 'border-emerald-500/50 bg-emerald-500/10';
            case 'running':
                return 'border-amber-500/50 bg-amber-500/10';
            case 'failed':
                return 'border-red-500/50 bg-red-500/10';
            default:
                return ''; // handled by style
        }
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {steps.map((step, index) => (
                <React.Fragment key={step.name}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${getStatusColor(step.status)}`}
                        style={step.status === 'pending' ? {
                            borderColor: theme.colors.border,
                            backgroundColor: theme.colors.muted
                        } : undefined}
                    >
                        {getStatusIcon(step.status)}
                        <span
                            className="text-sm font-medium"
                            style={{ color: theme.colors.foreground }}
                        >
                            {step.name}
                        </span>
                    </motion.div>

                    {index < steps.length - 1 && (
                        <div
                            className={`w-8 h-0.5 ${step.status === 'success' ? 'bg-emerald-500/50' : ''}`}
                            style={step.status !== 'success' ? { backgroundColor: theme.colors.border } : undefined}
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default PipelineSteps;
