import React from 'react';
import { Trophy, Clock, Target, BookOpen } from 'lucide-react';
import EducationCard from './EducationCard';

const colorMap = {
  violet: { text: '#7c3aed', bg: '#f5f3ff' },
  emerald: { text: '#059669', bg: '#ecfdf5' },
  amber: { text: '#d97706', bg: '#fffbeb' },
  blue: { text: '#2563eb', bg: '#eff6ff' },
};

const StudyStats = () => {
  const stats = [
    { label: 'Hours Studied', value: '32.5', unit: 'h', icon: Clock, colorKey: 'violet' },
    { label: 'Assignments', value: '12', unit: 'done', icon: Target, colorKey: 'emerald' },
    { label: 'Current Grade', value: '94', unit: '%', icon: Trophy, colorKey: 'amber' },
    { label: 'Courses Active', value: '4', unit: '', icon: BookOpen, colorKey: 'blue' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, i) => {
        const colors = colorMap[stat.colorKey as keyof typeof colorMap];
        return (
          <EducationCard key={i} delay={0.1 * i} className="p-5 flex flex-col justify-between items-start">
            <div className="mb-4 rounded-lg p-2" style={{ backgroundColor: colors.bg, color: colors.text }}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-2xl font-bold" style={{ color: '#0f172a' }}>{stat.value}</span>
                <span className="text-sm font-medium" style={{ color: '#64748b' }}>{stat.unit}</span>
              </div>
              <div className="text-xs font-medium" style={{ color: '#94a3b8' }}>{stat.label}</div>
            </div>
          </EducationCard>
        );
      })}
    </div>
  );
};

export default StudyStats;