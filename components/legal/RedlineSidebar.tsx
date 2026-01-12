import React from 'react';
import { User, X, Check, Reply } from 'lucide-react';

interface Comment {
  id: number;
  user: string;
  initials: string;
  text: string;
  timestamp: string;
  type: 'comment' | 'change';
  changeType?: 'deletion' | 'addition';
  originalText?: string;
  active?: boolean;
}

const RedlineSidebar = () => {
  const comments: Comment[] = [
    {
      id: 1,
      user: "Sarah Jenkins",
      initials: "SJ",
      text: "We should clarify the indemnification cap here. Standard implies 2x, not unlimited.",
      timestamp: "10:42 AM",
      type: "comment",
      active: true,
    },
    {
      id: 2,
      user: "Michael Ross",
      initials: "MR",
      text: "Proposed Change: 90 days notice instead of 30.",
      timestamp: "11:20 AM",
      type: "change",
      changeType: "addition",
      originalText: "thirty (30) days",
    },
    {
      id: 3,
      user: "System",
      initials: "SYS",
      text: "Formatting inconsistency detected in Clause 4.2.",
      timestamp: "11:25 AM",
      type: "comment",
    }
  ];

  return (
    <div className="h-full border-l p-4 overflow-y-auto" style={{ borderColor: '#e7e5e4', backgroundColor: '#fafaf9' }}>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#78716c' }}>Redlines & Comments</h3>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#dbeafe', color: '#1d4ed8' }}>3 Open</span>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`rounded-lg border p-4 shadow-sm transition-all ${comment.active
                ? 'shadow-md ring-1'
                : 'hover:border-stone-300'
              }`}
            style={{
              backgroundColor: '#ffffff',
              borderColor: comment.active ? '#3b82f6' : '#e7e5e4',
              '--tw-ring-color': comment.active ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
              '--tw-ring-opacity': 1,
            } as React.CSSProperties}
          >
            <div className="flex items-start gap-3 mb-2">
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold`}
                style={{
                  color: '#ffffff',
                  backgroundColor: comment.type === 'change' ? '#ef4444' : '#2563eb'
                }}
              >
                {comment.initials}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold" style={{ color: '#1c1917' }}>{comment.user}</span>
                  <span className="text-[10px]" style={{ color: '#a8a29e' }}>{comment.timestamp}</span>
                </div>
                {comment.type === 'change' && (
                  <span
                    className="text-[10px] font-mono uppercase"
                    style={{ color: comment.changeType === 'addition' ? '#2563eb' : '#dc2626' }}
                  >
                    {comment.changeType}
                  </span>
                )}
              </div>
            </div>

            {comment.originalText && (
              <div
                className="mb-2 rounded p-1.5 text-xs line-through decoration-2"
                style={{
                  backgroundColor: '#f5f5f4',
                  color: '#44403c',
                  textDecorationColor: '#f87171'
                }}
              >
                {comment.originalText}
              </div>
            )}

            <p className="text-sm mb-3 leading-relaxed" style={{ color: '#44403c' }}>
              {comment.text}
            </p>

            <div className="flex items-center gap-2 border-t pt-2" style={{ borderColor: '#f5f5f4' }}>
              <button
                className="flex-1 flex items-center justify-center gap-1 py-1 text-[10px] font-bold hover:bg-stone-50 rounded"
                style={{ color: '#78716c' }}
              >
                <Reply className="h-3 w-3" /> Reply
              </button>
              {comment.type === 'change' && (
                <>
                  <button
                    className="flex-1 flex items-center justify-center gap-1 py-1 text-[10px] font-bold hover:bg-green-50 rounded"
                    style={{ color: '#16a34a' }}
                  >
                    <Check className="h-3 w-3" /> Accept
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-1 py-1 text-[10px] font-bold hover:bg-red-50 rounded"
                    style={{ color: '#dc2626' }}
                  >
                    <X className="h-3 w-3" /> Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedlineSidebar;