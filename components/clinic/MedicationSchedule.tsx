import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Clock, Check, AlertCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import ClinicCard from './ClinicCard';

interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: string;
    times: string[];
    takenToday: string[];
    refillDate?: string;
    instructions?: string;
}

interface MedicationScheduleProps {
    medications: Medication[];
    delay?: number;
}

const MedicationSchedule: React.FC<MedicationScheduleProps> = ({ medications, delay = 0 }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    const getCurrentTimeSlot = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Morning';
        if (hour < 17) return 'Afternoon';
        return 'Evening';
    };

    const currentSlot = getCurrentTimeSlot();

    return (
        <ClinicCard delay={delay}>
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="flex h-10 w-10 items-center justify-center rounded-full"
                        style={{ backgroundColor: theme.colors.primary + '15', color: theme.colors.primary }}
                    >
                        <Pill className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold" style={{ color: theme.colors.foreground }}>
                            Medication Schedule
                        </h3>
                        <p className="text-sm" style={{ color: theme.colors.mutedForeground }}>
                            {currentSlot} doses
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                {medications.map((med, index) => {
                    const allTaken = med.times.every(t => med.takenToday.includes(t));
                    const needsRefill = med.refillDate && new Date(med.refillDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

                    return (
                        <motion.div
                            key={med.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: delay + index * 0.1 }}
                            className="p-4 rounded-lg"
                            style={{
                                backgroundColor: allTaken ? '#d1fae5' : theme.colors.muted,
                                border: needsRefill ? '1px solid #f59e0b' : 'none',
                            }}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h4 className="font-medium flex items-center gap-2" style={{ color: theme.colors.foreground }}>
                                        {med.name}
                                        {allTaken && <Check className="h-4 w-4 text-green-600" />}
                                    </h4>
                                    <p className="text-sm" style={{ color: theme.colors.mutedForeground }}>
                                        {med.dosage} • {med.frequency}
                                    </p>
                                </div>
                                {needsRefill && (
                                    <div className="flex items-center gap-1 text-amber-600 text-xs">
                                        <AlertCircle className="h-3 w-3" />
                                        <span>Refill soon</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-2">
                                {med.times.map((time) => {
                                    const taken = med.takenToday.includes(time);
                                    return (
                                        <motion.button
                                            key={time}
                                            whileHover={{ scale: taken ? 1 : 1.05 }}
                                            whileTap={{ scale: taken ? 1 : 0.95 }}
                                            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                                            style={{
                                                backgroundColor: taken ? '#065f46' : theme.colors.card,
                                                color: taken ? 'white' : theme.colors.foreground,
                                                border: taken ? 'none' : `1px solid ${theme.colors.border}`,
                                                cursor: taken ? 'default' : 'pointer',
                                            }}
                                        >
                                            <Clock className="h-3 w-3" />
                                            {time}
                                            {taken && <Check className="h-3 w-3" />}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {med.instructions && (
                                <p className="mt-3 text-xs italic" style={{ color: theme.colors.mutedForeground }}>
                                    {med.instructions}
                                </p>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </ClinicCard>
    );
};

export default MedicationSchedule;
