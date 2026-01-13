import React, { useState } from 'react';
import { Check } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { useTheme } from '@/context/ThemeContext';

export interface Plan {
    id: string;
    name: string;
    price: string;
    isCurrent?: boolean;
}

export interface PlanPickerProps {
    /** Available plans */
    plans?: Plan[];
    /** Initially selected plan ID */
    defaultSelected?: string;
    /** Callback when a plan is selected */
    onSelect?: (planId: string) => void;
    /** Billing date notice */
    billingDate?: string;
}

const defaultPlans: Plan[] = [
    { id: 'starter', name: 'Starter', price: '$0/mo' },
    { id: 'pro', name: 'Professional', price: '$29/mo', isCurrent: true },
];

const PlanPicker: React.FC<PlanPickerProps> = ({
    plans = defaultPlans,
    defaultSelected = 'pro',
    onSelect,
    billingDate = 'November 1st',
}) => {
    const { theme } = useTheme();
    const [selected, setSelected] = useState(defaultSelected);

    const handleSelect = (planId: string) => {
        setSelected(planId);
        onSelect?.(planId);
    };

    return (
        <SpotlightCard className="p-6">
            <h3
                className="mb-4 text-sm font-medium"
                style={{ color: theme.colors.foreground }}
            >
                Subscription Plan
            </h3>
            <div className="space-y-3" role="radiogroup" aria-label="Subscription plans">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        onClick={() => handleSelect(plan.id)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleSelect(plan.id);
                            }
                        }}
                        role="radio"
                        aria-checked={selected === plan.id}
                        tabIndex={0}
                        className="relative flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{
                            borderColor: selected === plan.id ? '#3b82f6' : theme.colors.border,
                            backgroundColor: selected === plan.id ? 'rgba(59,130,246,0.1)' : `${theme.colors.muted}33`,
                            boxShadow: selected === plan.id ? '0 0 20px rgba(59,130,246,0.1)' : 'none'
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="flex h-4 w-4 items-center justify-center rounded-full border"
                                style={{
                                    borderColor: selected === plan.id ? '#3b82f6' : theme.colors.mutedForeground,
                                    backgroundColor: selected === plan.id ? '#3b82f6' : 'transparent'
                                }}
                            >
                                {selected === plan.id && <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#ffffff' }} />}
                            </div>
                            <div>
                                <div
                                    className="text-sm font-medium"
                                    style={{
                                        color: selected === plan.id ? '#dbeafe' : theme.colors.mutedForeground
                                    }}
                                >
                                    {plan.name}
                                </div>
                                <div
                                    className="text-xs"
                                    style={{ color: theme.colors.mutedForeground }}
                                >
                                    {plan.price}
                                </div>
                            </div>
                        </div>
                        {plan.isCurrent && selected === plan.id && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-medium text-blue-300">
                                Current
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div
                className="mt-4 flex items-center gap-2 text-[10px]"
                style={{ color: theme.colors.mutedForeground }}
            >
                <Check className="h-3 w-3 text-emerald-500" />
                <span>Next billing date: {billingDate}</span>
            </div>
        </SpotlightCard>
    );
};

export default PlanPicker;