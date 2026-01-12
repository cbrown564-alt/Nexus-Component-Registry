import React from 'react';
import { PlayCircle, MoreHorizontal } from 'lucide-react';
import EducationCard from './EducationCard';

interface CourseCardProps {
  title: string;
  category: string;
  progress: number;
  totalModules: number;
  completedModules: number;
  image: string;
  color: string;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  category,
  progress,
  totalModules,
  completedModules,
  image,
  color,
  delay
}) => {
  return (
    <EducationCard delay={delay} className="group p-0 flex flex-col h-full">
      <div className={`h-32 w-full ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span
            className="inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#1e293b' }}
          >
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <h3 className="font-display text-lg font-bold leading-tight group-hover:text-violet-600 transition-colors" style={{ color: '#0f172a' }}>
            {title}
          </h3>
          <button style={{ color: '#94a3b8' }}>
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-auto pt-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-medium" style={{ color: '#64748b' }}>
            <span>{completedModules}/{totalModules} Modules</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full" style={{ backgroundColor: '#f1f5f9' }}>
            <div
              className={`h-full rounded-full ${color.replace('bg-', 'bg-')}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-lg border py-2 text-sm font-semibold transition-colors group-hover:border-violet-200"
            style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff', color: '#334155' }}
          >
            <PlayCircle className="h-4 w-4" />
            Continue
          </button>
        </div>
      </div>
    </EducationCard>
  );
};

export default CourseCard;