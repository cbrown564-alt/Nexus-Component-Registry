import React, { useState } from 'react';
import { Power, Activity, Lock, RefreshCw } from 'lucide-react';
import GridCard from './GridCard';

const Toggle = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <div className="flex items-center justify-between p-3 rounded gap-3" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)', borderColor: 'rgba(30, 58, 138, 0.3)', borderWidth: '1px' }}>
        <span className="text-xs font-mono whitespace-nowrap" style={{ color: '#bfdbfe' }}>{label}</span>
        <button
            onClick={onClick}
            className="w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0"
            style={{ backgroundColor: active ? '#2563eb' : '#334155' }}
        >
            <div className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${active ? 'left-7' : 'left-1'}`} style={{ backgroundColor: '#ffffff' }} />
        </button>
    </div>
);

const SystemControls = () => {
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
                    <Toggle label="Grid Sync" active={controls.gridSync} onClick={() => toggle('gridSync')} />
                    <Toggle label="Auto Failover" active={controls.autoFailover} onClick={() => toggle('autoFailover')} />
                    <Toggle label="Maint. Mode" active={controls.maintenanceMode} onClick={() => toggle('maintenanceMode')} />
                    <Toggle label="Load Balance" active={controls.loadBalancing} onClick={() => toggle('loadBalancing')} />
                </div>

                <div className="mt-4 border-t pt-4 space-y-2" style={{ borderColor: 'rgba(30, 58, 138, 0.5)' }}>
                    <div className="flex items-center justify-between text-xs" style={{ color: '#94a3b8' }}>
                        <span className="flex items-center gap-2">
                            <Activity className="h-3 w-3" /> Uptime
                        </span>
                        <span className="font-mono" style={{ color: '#34d399' }}>99.998%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ color: '#94a3b8' }}>
                        <span className="flex items-center gap-2">
                            <Lock className="h-3 w-3" /> Security
                        </span>
                        <span className="font-mono" style={{ color: '#34d399' }}>Encrypted (AES-256)</span>
                    </div>
                    <button
                        className="w-full mt-2 flex items-center justify-center gap-2 border py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)', borderColor: '#1e3a8a', color: '#60a5fa' }}
                    >
                        <RefreshCw className="h-3 w-3" /> System Diagnostics
                    </button>
                </div>
            </div>
        </GridCard>
    );
};

export default SystemControls;