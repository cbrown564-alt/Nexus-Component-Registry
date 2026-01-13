import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface SystemModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type?: 'downtime' | 'gas' | 'security';
}

const SystemModal: React.FC<SystemModalProps> = ({ isOpen, onClose, title, message, type = 'security' }) => {
    if (!isOpen) return null;

    const getColor = () => {
        switch (type) {
            case 'downtime': return 'bg-yellow-500 text-black';
            case 'gas': return 'bg-pink-500 text-white';
            default: return 'bg-red-600 text-white';
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

            <div className={`relative w-full max-w-md border-4 border-black box-border shadow-[8px_8px_0px_#333] ${getColor()}`}>
                {/* Header */}
                <div className="flex justify-between items-center p-2 border-b-4 border-black bg-white/10 uppercase font-black tracking-tighter">
                    <span className="flex items-center gap-2">
                        <AlertTriangle size={20} strokeWidth={3} />
                        SYSTEM_MSG_001
                    </span>
                    <button onClick={onClose} className="hover:bg-black/20 p-1">
                        <X size={20} strokeWidth={4} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8 text-center space-y-4">
                    <h2 className="text-4xl font-black uppercase leading-none tracking-tighter">{title}</h2>
                    <p className="font-mono text-sm font-bold uppercase tracking-widest opacity-80 border-t-2 border-dashed border-current pt-4">
                        {message}
                    </p>
                </div>

                {/* Footer */}
                <div className="p-2 border-t-4 border-black bg-black text-white font-mono text-[10px] uppercase text-center">
                    Click anywhere to dismiss
                </div>
            </div>
        </div>
    );
};

export default SystemModal;
