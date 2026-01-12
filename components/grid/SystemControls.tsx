import React, { useState } from 'react';
import { Power, Activity, Lock, RefreshCw } from 'lucide-react';
import GridCard from './GridCard';
import GridButton from './GridButton';
import { useTheme } from '@/context/ThemeContext';

const Toggle = ({ label, active, onClick, theme }: { label: string; active: boolean; onClick: () => void; theme: any }) => (
    <div
        className="flex items-center justify-between p-3 rounded gap-3 border transition-colors hover:border-blue-500/50 cursor-pointer h-full"
        onClick={onClick}
        style={{
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.border
        }}
    >
        <span className="text-xs font-mono flex-1 leading-tight" style={{ color: theme.colors.secondaryForeground }}>{label}</span>
        <div
            className="w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0"
            style={{ backgroundColor: active ? theme.colors.primary : theme.colors.muted }}
        >
            <div
                className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${active ? 'left-7' : 'left-1'}`}
                style={{ backgroundColor: theme.colors.primaryForeground }}
            />
        </div>
    </div>
);

const SystemControls = () => {
    const { currentPlaygroundTheme: theme } = useTheme();
    const [controls, setControls] = useState({
        gridSync: true,
        autoFailover: true,
        maintenanceMode: false,
        loadBalancing: true
    });

    const toggle = (key: keyof typeof controls) => {
        setControls(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <GridCard title="System Controls">
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                    <Toggle label="Grid Sync" active={controls.gridSync} onClick={() => toggle('gridSync')} theme={theme} />
                    <Toggle label="Auto Failover" active={controls.autoFailover} onClick={() => toggle('autoFailover')} theme={theme} />
                    <Toggle label="Maint. Mode" active={controls.maintenanceMode} onClick={() => toggle('maintenanceMode')} theme={theme} />
                    <Toggle label="Load Balance" active={controls.loadBalancing} onClick={() => toggle('loadBalancing')} theme={theme} />
                </div>

                <div className="mt-4 border-t pt-4 space-y-2" style={{ borderColor: theme.colors.border }}>
                    <div className="flex items-center justify-between text-xs" style={{ color: theme.colors.mutedForeground }}>
                        <span className="flex items-center gap-2">
                            <Activity className="h-3 w-3" /> Uptime
                        </span>
                        <span className="font-mono" style={{ color: theme.colors.ring }}>99.998%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ color: theme.colors.mutedForeground }}>
                        <span className="flex items-center gap-2">
                            <Lock className="h-3 w-3" /> Security
                        </span>
                        <span className="font-mono" style={{ color: theme.colors.ring }}>Encrypted (AES-256)</span>
                    </div>

                    <div className="pt-2">
                        <GridButton className="w-full" icon={<RefreshCw className="h-3 w-3" />} variant="primary">
                            System Diagnostics
                        </GridButton>
                    </div>
                </div>
            </div>
        </GridCard>
    );
};

export default SystemControls;