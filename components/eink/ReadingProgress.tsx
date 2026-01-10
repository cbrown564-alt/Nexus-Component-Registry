import React from 'react';
import { BookOpen } from 'lucide-react';
import EInkCard from './EInkCard';

interface ReadingProgressProps {
  bookTitle?: string;
  currentPage?: number;
  totalPages?: number;
  className?: string;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({
  bookTitle = "The Great Gatsby",
  currentPage = 127,
  totalPages = 218,
  className = "",
}) => {
  const progress = Math.round((currentPage / totalPages) * 100);
  const pagesRemaining = totalPages - currentPage;
  const estimatedMinutes = Math.round(pagesRemaining * 1.5); // ~1.5 min per page

  return (
    <EInkCard className={`p-5 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-2 border border-neutral-300 rounded">
          <BookOpen className="h-6 w-6 text-neutral-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-serif text-lg text-neutral-900 truncate">{bookTitle}</h4>
          <p className="text-sm text-neutral-500 mt-0.5">
            Page {currentPage} of {totalPages}
          </p>
        </div>
        <span className="text-2xl font-bold text-neutral-900">{progress}%</span>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-neutral-800 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-xs text-neutral-500">
        {pagesRemaining} pages remaining · ~{estimatedMinutes} min
      </p>
    </EInkCard>
  );
};

export default ReadingProgress;
