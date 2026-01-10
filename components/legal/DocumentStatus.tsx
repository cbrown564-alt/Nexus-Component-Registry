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
      bg: 'bg-slate-100',
      text: 'text-slate-600',
      border: 'border-slate-300',
    },
    pending: {
      icon: FileClock,
      label: 'Pending Review',
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-300',
    },
    approved: {
      icon: FileCheck,
      label: 'Approved',
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-300',
    },
    rejected: {
      icon: FileX,
      label: 'Rejected',
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-300',
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
      <div className={`p-2 rounded-lg ${config.bg} ${config.border} border`}>
        <Icon className={`h-5 w-5 ${config.text}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-slate-900 truncate">{documentName}</h4>
        <p className="text-sm text-slate-500">Last updated {lastUpdated}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    </motion.div>
  );
};

export default DocumentStatus;
