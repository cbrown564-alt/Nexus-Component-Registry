import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
    className?: string;       // For inner container (legacy)
    wrapperClassName?: string; // For outer container (new)
    showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language = 'typescript',
    filename,
    className = "",
    wrapperClassName = "",
    showLineNumbers = false
}) => {
    const { theme } = useTheme();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split('\n');

    return (
        <div
            className={`relative rounded-xl overflow-hidden flex flex-col ${wrapperClassName || className}`}
            style={{
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.border,
                borderWidth: '1px',
                borderStyle: 'solid'
            }}
        >
            {/* Header - Only show if filename provided or NOT showing line numbers (simple view) */}
            {(filename || !showLineNumbers) && (
                <div
                    className="flex items-center justify-between px-4 py-2 border-b shrink-0"
                    style={{
                        backgroundColor: theme.colors.muted,
                        borderColor: theme.colors.border
                    }}
                >
                    <div className="flex items-center gap-2">
                        {/* Traffic lights */}
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>

                        {filename && (
                            <span
                                className="ml-3 text-xs font-mono"
                                style={{ color: theme.colors.mutedForeground }}
                            >
                                {filename}
                            </span>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors"
                        style={{
                            color: theme.colors.mutedForeground,
                        }}
                    >
                        {copied ? (
                            <>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                <span className="text-emerald-500">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                            </>
                        )}
                    </motion.button>
                </div>
            )}

            {/* Code content */}
            <div
                className="flex-1 overflow-auto p-4 font-mono text-sm leading-6"
                style={{ backgroundColor: theme.colors.background }} // Ensure deep dark background
            >
                <div className="flex gap-4 min-w-max">
                    {/* Line Numbers */}
                    {showLineNumbers && (
                        <div
                            className="flex flex-col text-right select-none w-8 shrink-0"
                            style={{ color: theme.colors.mutedForeground }}
                        >
                            {lines.map((_, i) => (
                                <span key={i} className="leading-6">{i + 1}</span>
                            ))}
                        </div>
                    )}

                    {/* Code Lines */}
                    <div
                        className="flex flex-col"
                        style={{ color: theme.colors.foreground }}
                    >
                        {lines.map((line, i) => (
                            <div key={i} className="leading-6 whitespace-pre">{line || ' '}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Language badge */}
            <div className="absolute bottom-3 right-3">
                <span
                    className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded"
                    style={{
                        backgroundColor: theme.colors.muted,
                        color: theme.colors.mutedForeground
                    }}
                >
                    {language}
                </span>
            </div>
        </div>
    );
};

export default CodeBlock;
