import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Plus, Minus, FileCode2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export interface DiffLine {
    type: 'added' | 'removed' | 'context' | 'header';
    content: string;
    lineNumber?: { old?: number; new?: number };
}

export interface DiffFile {
    filename: string;
    additions: number;
    deletions: number;
    lines: DiffLine[];
}

interface GitDiffViewProps {
    files?: DiffFile[];
    compact?: boolean;
    className?: string;
}

const defaultFiles: DiffFile[] = [
    {
        filename: 'src/components/Button.tsx',
        additions: 12,
        deletions: 5,
        lines: [
            { type: 'header', content: '@@ -14,8 +14,15 @@ export const Button = () => {' },
            { type: 'context', content: '  const [loading, setLoading] = useState(false);', lineNumber: { old: 14, new: 14 } },
            { type: 'context', content: '  ', lineNumber: { old: 15, new: 15 } },
            { type: 'removed', content: '  const handleClick = () => {', lineNumber: { old: 16 } },
            { type: 'removed', content: '    console.log("clicked");', lineNumber: { old: 17 } },
            { type: 'added', content: '  const handleClick = async () => {', lineNumber: { new: 16 } },
            { type: 'added', content: '    setLoading(true);', lineNumber: { new: 17 } },
            { type: 'added', content: '    await performAction();', lineNumber: { new: 18 } },
            { type: 'added', content: '    setLoading(false);', lineNumber: { new: 19 } },
            { type: 'context', content: '  };', lineNumber: { old: 18, new: 20 } },
        ]
    }
];

const GitDiffView: React.FC<GitDiffViewProps> = ({
    files = defaultFiles,
    compact = false,
    className = ''
}) => {
    const { theme } = useTheme();

    const getLineStyles = (type: DiffLine['type']) => {
        switch (type) {
            case 'added':
                return 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-500';
            case 'removed':
                return 'bg-red-500/10 text-red-400 border-l-2 border-red-500';
            case 'header':
                return 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-500 italic';
            default:
                return 'border-l-2 border-transparent';
        }
    };

    const getLineSymbol = (type: DiffLine['type']) => {
        switch (type) {
            case 'added': return '+';
            case 'removed': return '-';
            case 'header': return '@@';
            default: return ' ';
        }
    };

    return (
        <div
            className={`rounded-xl overflow-hidden border ${className}`}
            style={{
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.border
            }}
        >
            {/* Header */}
            <div
                className="flex items-center justify-between px-4 py-2.5 border-b"
                style={{
                    backgroundColor: theme.colors.muted,
                    borderColor: theme.colors.border
                }}
            >
                <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-orange-500" />
                    <span
                        className="text-sm font-medium"
                        style={{ color: theme.colors.foreground }}
                    >
                        Changes
                    </span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-emerald-400">
                        <Plus className="w-3 h-3" />
                        {files.reduce((acc, f) => acc + f.additions, 0)}
                    </span>
                    <span className="flex items-center gap-1 text-red-400">
                        <Minus className="w-3 h-3" />
                        {files.reduce((acc, f) => acc + f.deletions, 0)}
                    </span>
                </div>
            </div>

            {/* File Diffs */}
            <div className="divide-y" style={{ borderColor: theme.colors.border }}>
                {files.map((file, fileIndex) => (
                    <motion.div
                        key={file.filename}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: fileIndex * 0.1 }}
                    >
                        {/* File Header */}
                        <div
                            className="flex items-center gap-3 px-4 py-2"
                            style={{ backgroundColor: theme.colors.background }}
                        >
                            <FileCode2
                                className="w-4 h-4"
                                style={{ color: theme.colors.mutedForeground }}
                            />
                            <span
                                className="font-mono text-xs"
                                style={{ color: theme.colors.foreground }}
                            >
                                {file.filename}
                            </span>
                            <div className="flex items-center gap-2 ml-auto text-[10px]">
                                <span className="text-emerald-400">+{file.additions}</span>
                                <span className="text-red-400">-{file.deletions}</span>
                            </div>
                        </div>

                        {/* Diff Lines */}
                        {!compact && (
                            <div className="font-mono text-xs overflow-x-auto">
                                {file.lines.map((line, lineIndex) => (
                                    <div
                                        key={lineIndex}
                                        className={`flex ${getLineStyles(line.type)}`}
                                        style={{ color: line.type === 'context' ? theme.colors.mutedForeground : undefined }}
                                    >
                                        {/* Line Numbers */}
                                        <div
                                            className="flex shrink-0 select-none"
                                            style={{
                                                backgroundColor: theme.colors.muted,
                                                color: theme.colors.mutedForeground
                                            }}
                                        >
                                            <span
                                                className="w-10 px-2 text-right border-r"
                                                style={{ borderColor: theme.colors.border }}
                                            >
                                                {line.lineNumber?.old || ''}
                                            </span>
                                            <span
                                                className="w-10 px-2 text-right border-r"
                                                style={{ borderColor: theme.colors.border }}
                                            >
                                                {line.lineNumber?.new || ''}
                                            </span>
                                        </div>

                                        {/* Symbol */}
                                        <span className="w-6 text-center shrink-0">
                                            {getLineSymbol(line.type)}
                                        </span>

                                        {/* Content */}
                                        <pre className="flex-1 px-2 py-0.5 whitespace-pre overflow-x-auto">
                                            {line.content}
                                        </pre>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Stats Footer */}
            <div
                className="flex items-center justify-between px-4 py-1.5 border-t text-[10px]"
                style={{
                    backgroundColor: theme.colors.muted,
                    borderColor: theme.colors.border,
                    color: theme.colors.mutedForeground
                }}
            >
                <span>{files.length} file{files.length !== 1 ? 's' : ''} changed</span>
                <span className="font-mono">unified diff</span>
            </div>
        </div>
    );
};

export default GitDiffView;
