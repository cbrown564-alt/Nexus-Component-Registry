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
        <h3 className="font-serif text-xl font-semibold text-stone-800">{recipeName}</h3>
        <span className="text-sm text-stone-500">{completedCount}/{steps.length} steps</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-stone-200 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-orange-400 rounded-full"
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
            className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
              step.current ? 'bg-orange-50 border border-orange-200' : ''
            }`}
          >
            {step.completed ? (
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
            ) : step.current ? (
              <Timer className="h-5 w-5 text-orange-500 flex-shrink-0 animate-pulse" />
            ) : (
              <Circle className="h-5 w-5 text-stone-300 flex-shrink-0" />
            )}
            <span className={`text-sm ${step.completed ? 'text-stone-400 line-through' : 'text-stone-700'}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </KitchenCard>
  );
};

export default RecipeProgress;
