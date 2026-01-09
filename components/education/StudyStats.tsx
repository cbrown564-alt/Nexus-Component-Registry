import React from 'react';
import { Trophy, Clock, Target, BookOpen } from 'lucide-react';
import EducationCard from './EducationCard';

const StudyStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {[
        { label: 'Hours Studied', value: '32.5', unit: 'h', icon: Clock, color: 'text-violet-600', bg: 'bg-violet-50' },
        { label: 'Assignments', value: '12', unit: 'done', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: 'Current Grade', value: '94', unit: '%', icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50' },
        { label: 'Courses Active', value: '4', unit: '', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
      ].map((stat, i) => (
        <EducationCard key={i} delay={0.1 * i} className="p-5 flex flex-col justify-between items-start">
            <div className={`mb-4 rounded-lg p-2 ${stat.bg} ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
            </div>
            <div>
                <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl font-bold text-slate-900">{stat.value}</span>
                    <span className="text-sm font-medium text-slate-500">{stat.unit}</span>
                </div>
                <div className="text-xs font-medium text-slate-400">{stat.label}</div>
            </div>
        </EducationCard>
      ))}
    </div>
  );
};

export default StudyStats;