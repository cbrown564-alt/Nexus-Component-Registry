import React, { useState } from 'react';
import { Power, Activity, Lock, RefreshCw } from 'lucide-react';
import GridCard from './GridCard';

const Toggle = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <div className="flex items-center justify-between p-3 bg-slate-900/50 border border-blue-900/30 rounded gap-3">
        <span className="text-xs font-mono text-blue-200 whitespace-nowrap">{label}</span>
        <button
            onClick={onClick}
            className={`w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0 ${active ? 'bg-blue-600' : 'bg-slate-700'}`}
        >
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 shadow-sm ${active ? 'left-7' : 'left-1'}`} />
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

                <div className="mt-4 border-t border-blue-900/50 pt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-2">
                            <Activity className="h-3 w-3" /> Uptime
                        </span>
                        <span className="font-mono text-emerald-400">99.998%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-2">
                            <Lock className="h-3 w-3" /> Security
                        </span>
                        <span className="font-mono text-emerald-400">Encrypted (AES-256)</span>
                    </div>
                    <button className="w-full mt-2 flex items-center justify-center gap-2 bg-blue-900/20 hover:bg-blue-900/40 text-blue-400 border border-blue-900 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors">
                        <RefreshCw className="h-3 w-3" /> System Diagnostics
                    </button>
                </div>
            </div>
        </GridCard>
    );
};

export default SystemControls;