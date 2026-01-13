import React from 'react';
import SciFiCard from './SciFiCard';
import { useTheme } from '@/context/ThemeContext';

const DNAList = () => {
  const { theme } = useTheme();

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
        <div className="flex justify-between mb-2 px-2" style={{ color: theme.colors.muted }}>
          <span>ID</span>
          <span>BASE</span>
          <span>INTEGRITY</span>
        </div>

        {sequence.map((item, i) => (
          <div
            key={i}
            className="group flex items-center justify-between p-2 border border-dashed transition-colors cursor-pointer"
            style={{
              borderColor: item.status === 'MUTATION' ? '#7f1d1d80' : `${theme.colors.border}4d`,
              backgroundColor: item.status === 'MUTATION' ? '#450a0a1a' : 'transparent',
            }}
          >
            <div className="flex items-center gap-3">
              <span style={{ color: `${theme.colors.primary}99` }}>{item.id}</span>
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, j) => (
                  <div
                    key={j}
                    className="w-1 h-3"
                    style={{
                      backgroundColor: item.status === 'MUTATION' ? '#ef4444' : theme.colors.accent,
                      opacity: 0.2 + (j * 0.2),
                    }}
                  />
                ))}
              </div>
            </div>

            <span style={{ color: item.status === 'MUTATION' ? '#f87171' : theme.colors.foreground, fontWeight: item.status === 'MUTATION' ? 'bold' : 'normal' }}>
              {item.type}
            </span>

            <span style={{ color: item.match === 'ERROR' ? '#ef4444' : theme.colors.accent }}>
              [{item.match}]
            </span>
          </div>
        ))}
      </div>

      <div
        className="mt-4 p-2 border text-[10px] font-mono"
        style={{
          borderColor: `${theme.colors.border}80`,
          backgroundColor: 'rgba(0,0,0,0.4)',
          color: theme.colors.muted,
        }}
      >
        {'>'} ANALYZING NEXT STRAND...<br />
        {'>'} ESTIMATED TIME: 00:04:22
      </div>
    </SciFiCard>
  );
};

export default DNAList;