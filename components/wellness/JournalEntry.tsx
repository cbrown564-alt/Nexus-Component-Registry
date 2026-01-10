import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Heart, Sparkles, Check } from 'lucide-react';
import WellnessCard from './WellnessCard';

interface JournalEntryProps {
  date?: string;
  prompt?: string;
  initialText?: string;
  onSave?: (text: string) => void;
  gratitudeMode?: boolean;
}

const JournalEntry: React.FC<JournalEntryProps> = ({
  date = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
  prompt = "What made you smile today?",
  initialText = "",
  onSave,
  gratitudeMode = false,
}) => {
  const [text, setText] = useState(initialText);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (onSave) {
      onSave(text);
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <WellnessCard className="flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-stone-600">
          {gratitudeMode ? (
            <Heart className="h-4 w-4 text-rose-400" />
          ) : (
            <BookOpen className="h-4 w-4" />
          )}
          <span className="text-xs font-medium uppercase tracking-widest">
            {gratitudeMode ? 'Gratitude' : 'Journal'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-stone-400">
          <Calendar className="h-3 w-3" />
          <span className="text-xs">{date}</span>
        </div>
      </div>

      {/* Prompt */}
      <div className="flex items-start gap-2 mb-4">
        <Sparkles className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
        <p className="font-serif text-lg text-stone-700 leading-relaxed">{prompt}</p>
      </div>

      {/* Text Area */}
      <div className="relative flex-1 min-h-[120px]">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start writing..."
          className="w-full h-full min-h-[120px] bg-transparent resize-none text-stone-600 placeholder:text-stone-300 focus:outline-none font-light leading-relaxed"
          style={{ 
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, rgba(120, 113, 108, 0.1) 28px)',
            lineHeight: '28px',
            paddingTop: '4px'
          }}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
        <span className="text-xs text-stone-400">
          {text.length} characters
        </span>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          disabled={!text.trim()}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            saved 
              ? 'bg-sage-100 text-sage-700' 
              : text.trim()
                ? 'bg-stone-800 text-white hover:bg-stone-700'
                : 'bg-stone-100 text-stone-400 cursor-not-allowed'
          }`}
        >
          {saved ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Saved
            </>
          ) : (
            'Save Entry'
          )}
        </motion.button>
      </div>
    </WellnessCard>
  );
};

export default JournalEntry;
