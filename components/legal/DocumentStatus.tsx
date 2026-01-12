import React from 'react';
import { FileCheck, FileClock, FileWarning, FileX } from 'lucide-react';
import { motion } from 'framer-motion';

interface DocumentStatusProps {
  status?: 'draft' | 'pending' | 'approved' | 'rejected';
  documentName?: string;
  lastUpdated?: string;
  className?: string;
}

const DocumentStatus: React.FC<DocumentStatusProps> = ({
  status = 'pending',
  documentName = "Service Agreement v2.4",
  lastUpdated = "2 hours ago",
  className = "",
}) => {
  const statusConfig = {
    draft: {
      icon: FileClock,
      label: 'Draft',
      bg: '#f1f5f9', // slate-100
      text: '#475569', // slate-600
      border: '#cbd5e1', // slate-300
    },
    pending: {
      icon: FileClock,
      label: 'Pending Review',
      bg: '#fffbeb', // amber-50
      text: '#b45309', // amber-700
      border: '#fcd34d', // amber-300
    },
    approved: {
      icon: FileCheck,
      label: 'Approved',
      bg: '#ecfdf5', // emerald-50
      text: '#047857', // emerald-700
      border: '#6ee7b7', // emerald-300
    },
    rejected: {
      icon: FileX,
      label: 'Rejected',
      bg: '#fef2f2', // red-50
      text: '#b91c1c', // red-700
      border: '#fca5a5', // red-300
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-4 p-4 border rounded-lg bg-white ${className}`}
    >
      <div
        className="p-2 rounded-lg border"
        style={{ backgroundColor: config.bg, borderColor: config.border }}
      >
        <Icon className="h-5 w-5" style={{ color: config.text }} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium truncate" style={{ color: '#0f172a' }}>{documentName}</h4>
        <p className="text-sm" style={{ color: '#64748b' }}>Last updated {lastUpdated}</p>
      </div>
      <span
        className="px-3 py-1 rounded-full text-xs font-semibold"
        style={{ backgroundColor: config.bg, color: config.text }}
      >
        {config.label}
      </span>
    </motion.div>
  );
};

export default DocumentStatus;
