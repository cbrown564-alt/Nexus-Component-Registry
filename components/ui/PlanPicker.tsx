import React, { useState } from 'react';
import { Check } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

const PlanPicker = () => {
    const { theme } = useTheme();
    const [selected, setSelected] = useState('pro');

    return (
        <SpotlightCard className="p-6">
            <h3
                className="mb-4 text-sm font-medium"
                style={{ color: theme.colors.foreground }}
            >
                Subscription Plan
            </h3>
            <div className="space-y-3">
                <div
                    onClick={() => setSelected('starter')}
                    className={`relative flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200`}
                    style={{
                        borderColor: selected === 'starter' ? '#3b82f6' : theme.colors.border,
                        backgroundColor: selected === 'starter' ? 'rgba(59,130,246,0.1)' : `${theme.colors.muted}33`
                    }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-4 w-4 items-center justify-center rounded-full border`}
                            style={{
                                borderColor: selected === 'starter' ? '#3b82f6' : theme.colors.mutedForeground,
                                backgroundColor: selected === 'starter' ? '#3b82f6' : 'transparent'
                            }}
                        >
                            {selected === 'starter' && <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#ffffff' }} />}
                        </div>
                        <div>
                            <div
                                className={`text-sm font-medium`}
                                style={{
                                    color: selected === 'starter' ? '#dbeafe' : theme.colors.mutedForeground
                                }}
                            >
                                Starter
                            </div>
                            <div
                                className="text-xs"
                                style={{ color: theme.colors.mutedForeground }}
                            >
                                $0/mo
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => setSelected('pro')}
                    className={`relative flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200`}
                    style={{
                        borderColor: selected === 'pro' ? '#3b82f6' : theme.colors.border,
                        backgroundColor: selected === 'pro' ? 'rgba(59,130,246,0.1)' : `${theme.colors.muted}33`,
                        boxShadow: selected === 'pro' ? '0 0 20px rgba(59,130,246,0.1)' : 'none'
                    }}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-4 w-4 items-center justify-center rounded-full border`}
                            style={{
                                borderColor: selected === 'pro' ? '#3b82f6' : theme.colors.mutedForeground,
                                backgroundColor: selected === 'pro' ? '#3b82f6' : 'transparent'
                            }}
                        >
                            {selected === 'pro' && <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#ffffff' }} />}
                        </div>
                        <div>
                            <div
                                className={`text-sm font-medium`}
                                style={{
                                    color: selected === 'pro' ? '#dbeafe' : theme.colors.mutedForeground
                                }}
                            >
                                Professional
                            </div>
                            <div
                                className="text-xs"
                                style={{ color: theme.colors.mutedForeground }}
                            >
                                $29/mo
                            </div>
                        </div>
                    </div>
                    {selected === 'pro' && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-medium text-blue-300">
                            Current
                        </div>
                    )}
                </div>
            </div>
            <div
                className="mt-4 flex items-center gap-2 text-[10px]"
                style={{ color: theme.colors.mutedForeground }}
            >
                <Check className="h-3 w-3 text-emerald-500" />
                <span>Next billing date: November 1st</span>
            </div>
        </SpotlightCard>
    );
};
export default PlanPicker;