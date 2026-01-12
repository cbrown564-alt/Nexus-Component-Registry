import React from 'react';
import { CheckCircle2, Circle, Timer } from 'lucide-react';
import KitchenCard from './KitchenCard';
import { motion } from 'framer-motion';

interface Step {
  title: string;
  completed: boolean;
  current?: boolean;
}

interface RecipeProgressProps {
  recipeName?: string;
  steps?: Step[];
  className?: string;
}

const RecipeProgress: React.FC<RecipeProgressProps> = ({
  recipeName = "Pasta Carbonara",
  steps = [
    { title: "Boil water & cook pasta", completed: true },
    { title: "Fry pancetta until crispy", completed: true },
    { title: "Mix eggs with parmesan", completed: false, current: true },
    { title: "Combine and serve", completed: false },
  ],
  className = "",
}) => {
  const completedCount = steps.filter(s => s.completed).length;
  const progress = (completedCount / steps.length) * 100;

  return (
    <KitchenCard className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-xl font-semibold" style={{ color: '#292524' }}>{recipeName}</h3>
        <span className="text-sm" style={{ color: '#78716c' }}>{completedCount}/{steps.length} steps</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full mb-6 overflow-hidden" style={{ backgroundColor: '#e7e5e4' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: '#fb923c' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl transition-colors"
            style={step.current ? { backgroundColor: '#fff7ed', border: '1px solid #fed7aa' } : {}}
          >
            {step.completed ? (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: '#22c55e' }} />
            ) : step.current ? (
              <Timer className="h-5 w-5 flex-shrink-0 animate-pulse" style={{ color: '#f97316' }} />
            ) : (
              <Circle className="h-5 w-5 flex-shrink-0" style={{ color: '#d6d3d1' }} />
            )}
            <span
              className={`text-sm ${step.completed ? 'line-through' : ''}`}
              style={{ color: step.completed ? '#a8a29e' : '#44403c' }}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </KitchenCard>
  );
};

export default RecipeProgress;
