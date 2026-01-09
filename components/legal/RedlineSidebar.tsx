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
    <div className="h-full border-l border-stone-200 bg-stone-50 p-4 overflow-y-auto">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">Redlines & Comments</h3>
        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">3 Open</span>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div 
            key={comment.id}
            className={`rounded-lg border p-4 shadow-sm transition-all ${
              comment.active 
                ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20' 
                : 'bg-white border-stone-200 hover:border-stone-300'
            }`}
          >
            <div className="flex items-start gap-3 mb-2">
              <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                comment.type === 'change' ? 'bg-red-500' : 'bg-blue-600'
              }`}>
                {comment.initials}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-stone-900">{comment.user}</span>
                  <span className="text-[10px] text-stone-400">{comment.timestamp}</span>
                </div>
                {comment.type === 'change' && (
                  <span className={`text-[10px] font-mono uppercase ${
                    comment.changeType === 'addition' ? 'text-blue-600' : 'text-red-600'
                  }`}>
                    {comment.changeType}
                  </span>
                )}
              </div>
            </div>

            {comment.originalText && (
              <div className="mb-2 rounded bg-stone-100 p-1.5 text-xs text-stone-500 line-through decoration-red-400 decoration-2">
                {comment.originalText}
              </div>
            )}

            <p className="text-sm text-stone-700 mb-3 leading-relaxed">
              {comment.text}
            </p>

            <div className="flex items-center gap-2 border-t border-stone-100 pt-2">
              <button className="flex-1 flex items-center justify-center gap-1 py-1 text-[10px] font-bold text-stone-500 hover:bg-stone-50 rounded">
                <Reply className="h-3 w-3" /> Reply
              </button>
              {comment.type === 'change' && (
                <>
                  <button className="flex-1 flex items-center justify-center gap-1 py-1 text-[10px] font-bold text-green-600 hover:bg-green-50 rounded">
                    <Check className="h-3 w-3" /> Accept
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-1 text-[10px] font-bold text-red-600 hover:bg-red-50 rounded">
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