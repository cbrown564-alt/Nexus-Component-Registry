import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Heart, Sparkles, Check } from 'lucide-react';
import WellnessCard from './WellnessCard';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme } = useTheme();
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
        <div
          className="flex items-center gap-2"
          style={{ color: theme.colors.mutedForeground }}
        >
          {gratitudeMode ? (
            <Heart className="h-4 w-4 text-rose-400" />
          ) : (
            <BookOpen className="h-4 w-4" />
          )}
          <span className="text-xs font-medium uppercase tracking-widest">
            {gratitudeMode ? 'Gratitude' : 'Journal'}
          </span>
        </div>
        <div
          className="flex items-center gap-1.5"
          style={{ color: theme.colors.mutedForeground }}
        >
          <Calendar className="h-3 w-3" />
          <span className="text-xs">{date}</span>
        </div>
      </div>

      {/* Prompt */}
      <div className="flex items-start gap-2 mb-4">
        <Sparkles className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
        <p
          className="font-serif text-lg leading-relaxed"
          style={{ color: theme.colors.foreground }}
        >
          {prompt}
        </p>
      </div>

      {/* Text Area */}
      <div className="relative flex-1 min-h-[120px]">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start writing..."
          className="w-full h-full min-h-[120px] bg-transparent resize-none focus:outline-none font-light leading-relaxed"
          style={{
            color: theme.colors.foreground,
            backgroundImage: `repeating-linear-gradient(transparent, transparent 27px, ${theme.colors.border} 28px)`,
            lineHeight: '28px',
            paddingTop: '4px'
          }}
        />
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between mt-4 pt-4 border-t"
        style={{ borderColor: theme.colors.border }}
      >
        <span
          className="text-xs"
          style={{ color: theme.colors.mutedForeground }}
        >
          {text.length} characters
        </span>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          disabled={!text.trim()}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={saved ? {
            backgroundColor: theme.colors.muted,
            color: theme.colors.foreground
          } : text.trim() ? {
            backgroundColor: theme.colors.primary,
            color: theme.colors.primaryForeground
          } : {
            backgroundColor: theme.colors.muted,
            color: theme.colors.mutedForeground,
            cursor: 'not-allowed'
          }}
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
