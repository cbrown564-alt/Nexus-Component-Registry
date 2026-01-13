import React from 'react';
import { motion } from 'framer-motion';
import { User, Star, MapPin, Phone, Calendar } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import ClinicCard from './ClinicCard';

interface Provider {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    reviewCount: number;
    location: string;
    nextAvailable: string;
    acceptingNew: boolean;
    image?: string;
}

interface ProviderDirectoryProps {
    providers: Provider[];
    delay?: number;
}

const ProviderDirectory: React.FC<ProviderDirectoryProps> = ({ providers, delay = 0 }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    return (
        <ClinicCard delay={delay}>
            <div className="mb-6 flex items-center justify-between">
                <h3 className="font-semibold text-lg" style={{ color: theme.colors.foreground }}>
                    Your Care Team
                </h3>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="text-sm font-medium"
                    style={{ color: theme.colors.primary }}
                >
                    Find a Provider
                </motion.button>
            </div>

            <div className="space-y-4">
                {providers.map((provider, index) => (
                    <motion.div
                        key={provider.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: delay + index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg"
                        style={{ backgroundColor: theme.colors.muted }}
                    >
                        <div
                            className="flex h-14 w-14 items-center justify-center rounded-full shrink-0"
                            style={{
                                backgroundColor: theme.colors.primary + '20',
                                color: theme.colors.primary,
                            }}
                        >
                            {provider.image ? (
                                <img
                                    src={provider.image}
                                    alt={provider.name}
                                    className="h-full w-full rounded-full object-cover"
                                />
                            ) : (
                                <User className="h-7 w-7" />
                            )}
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                                <div>
                                    <h4 className="font-medium" style={{ color: theme.colors.foreground }}>
                                        Dr. {provider.name}
                                    </h4>
                                    <p className="text-sm" style={{ color: theme.colors.mutedForeground }}>
                                        {provider.specialty}
                                    </p>
                                </div>
                                {provider.acceptingNew && (
                                    <span
                                        className="rounded-full px-2 py-0.5 text-xs font-medium"
                                        style={{ backgroundColor: '#d1fae5', color: '#065f46' }}
                                    >
                                        Accepting new
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-4 mt-2 text-sm" style={{ color: theme.colors.mutedForeground }}>
                                <div className="flex items-center gap-1">
                                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                    <span>{provider.rating}</span>
                                    <span>({provider.reviewCount})</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5" />
                                    <span className="truncate">{provider.location}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-1 text-xs" style={{ color: theme.colors.primary }}>
                                    <Calendar className="h-3.5 w-3.5" />
                                    <span>Next: {provider.nextAvailable}</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="rounded-lg px-3 py-1.5 text-xs font-medium"
                                    style={{
                                        backgroundColor: theme.colors.primary,
                                        color: theme.colors.primaryForeground,
                                    }}
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </ClinicCard>
    );
};

export default ProviderDirectory;
