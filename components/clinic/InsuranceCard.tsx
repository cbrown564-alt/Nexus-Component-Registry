import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Phone, FileText } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import ClinicCard from './ClinicCard';

interface InsuranceInfo {
    provider: string;
    planName: string;
    memberId: string;
    groupNumber: string;
    copay: { primary: number; specialist: number; emergency: number };
    deductible: { used: number; total: number };
    customerService: string;
}

interface InsuranceCardProps {
    insurance: InsuranceInfo;
    delay?: number;
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({ insurance, delay = 0 }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    const deductiblePercent = (insurance.deductible.used / insurance.deductible.total) * 100;

    return (
        <ClinicCard delay={delay}>
            <div className="mb-4 flex items-center gap-3">
                <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}
                >
                    <Shield className="h-5 w-5" />
                </div>
                <div>
                    <h3 className="font-semibold" style={{ color: theme.colors.foreground }}>
                        {insurance.provider}
                    </h3>
                    <p className="text-sm" style={{ color: theme.colors.mutedForeground }}>
                        {insurance.planName}
                    </p>
                </div>
            </div>

            {/* Digital Card Preview */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.2 }}
                className="mb-4 rounded-xl p-4 relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primary}cc 100%)`,
                    color: theme.colors.primaryForeground,
                }}
            >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-10 -mt-10"
                    style={{ backgroundColor: 'white' }}
                />
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs opacity-80">Member ID</span>
                    <CreditCard className="h-5 w-5 opacity-60" />
                </div>
                <p className="font-mono text-lg tracking-wider mb-1">{insurance.memberId}</p>
                <p className="text-xs opacity-80">Group: {insurance.groupNumber}</p>
            </motion.div>

            {/* Copays */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                    { label: 'Primary', value: insurance.copay.primary },
                    { label: 'Specialist', value: insurance.copay.specialist },
                    { label: 'Emergency', value: insurance.copay.emergency },
                ].map((copay) => (
                    <div
                        key={copay.label}
                        className="text-center p-2 rounded-lg"
                        style={{ backgroundColor: theme.colors.muted }}
                    >
                        <p className="text-xs mb-1" style={{ color: theme.colors.mutedForeground }}>
                            {copay.label}
                        </p>
                        <p className="font-semibold" style={{ color: theme.colors.foreground }}>
                            ${copay.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Deductible Progress */}
            <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                    <span style={{ color: theme.colors.mutedForeground }}>Deductible</span>
                    <span style={{ color: theme.colors.foreground }}>
                        ${insurance.deductible.used.toLocaleString()} / ${insurance.deductible.total.toLocaleString()}
                    </span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.border }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${deductiblePercent}%` }}
                        transition={{ duration: 0.8, delay: delay + 0.3 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: theme.colors.primary }}
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-sm"
                    style={{ backgroundColor: theme.colors.muted, color: theme.colors.foreground }}
                >
                    <FileText className="h-4 w-4" />
                    View Card
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-sm"
                    style={{ backgroundColor: theme.colors.muted, color: theme.colors.foreground }}
                >
                    <Phone className="h-4 w-4" />
                    {insurance.customerService}
                </motion.button>
            </div>
        </ClinicCard>
    );
};

export default InsuranceCard;
