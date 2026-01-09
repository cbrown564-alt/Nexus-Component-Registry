import React from 'react';
import SciFiCard from './SciFiCard';

const DNAList = () => {
  const sequence = [
    { id: 'SEQ-001', type: 'ADENINE', match: '99.9%', status: 'STABLE' },
    { id: 'SEQ-002', type: 'THYMINE', match: '98.2%', status: 'STABLE' },
    { id: 'SEQ-003', type: 'GUANINE', match: 'ERROR', status: 'MUTATION' },
    { id: 'SEQ-004', type: 'CYTOSINE', match: '99.1%', status: 'STABLE' },
    { id: 'SEQ-005', type: 'ADENINE', match: '99.8%', status: 'STABLE' },
  ];

  return (
    <SciFiCard title="Genomic Sequence" className="h-full">
      <div className="flex flex-col gap-2 font-mono text-xs">
        <div className="flex justify-between text-cyan-600 mb-2 px-2">
          <span>ID</span>
          <span>BASE</span>
          <span>INTEGRITY</span>
        </div>

        {sequence.map((item, i) => (
          <div
            key={i}
            className={`group flex items-center justify-between p-2 border border-dashed border-cyan-900/30 hover:bg-cyan-900/20 transition-colors cursor-pointer ${item.status === 'MUTATION' ? 'border-red-900/50 bg-red-950/10' : ''}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-cyan-500 opacity-60">{item.id}</span>
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className={`w-1 h-3 ${item.status === 'MUTATION' ? 'bg-red-500' : 'bg-cyan-400'}`} style={{ opacity: 0.2 + (j * 0.2) }} />
                ))}
              </div>
            </div>

            <span className={item.status === 'MUTATION' ? 'text-red-400 font-bold' : 'text-cyan-200'}>
              {item.type}
            </span>

            <span className={item.match === 'ERROR' ? 'text-red-500 blinking' : 'text-teal-400'}>
              [{item.match}]
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 p-2 bg-black/40 border border-cyan-900/50 text-[10px] font-mono text-cyan-600">
        {'>'} ANALYZING NEXT STRAND...<br />
        {'>'} ESTIMATED TIME: 00:04:22
      </div>
    </SciFiCard>
  );
};

export default DNAList;