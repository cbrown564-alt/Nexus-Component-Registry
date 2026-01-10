import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

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
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split('\n');

    return (
        <div className={`relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 flex flex-col ${wrapperClassName || className}`}>
            {/* Header - Only show if filename provided or NOT showing line numbers (simple view) */}
            {(filename || !showLineNumbers) && (
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800 shrink-0">
                    <div className="flex items-center gap-2">
                        {/* Traffic lights */}
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>

                        {filename && (
                            <span className="ml-3 text-xs font-mono text-zinc-500">{filename}</span>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
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
            <div className="flex-1 overflow-auto bg-[#09090b] p-4 font-mono text-sm leading-6">
                <div className="flex gap-4 min-w-max">
                    {/* Line Numbers */}
                    {showLineNumbers && (
                        <div className="flex flex-col text-right select-none text-zinc-700 w-8 shrink-0">
                            {lines.map((_, i) => (
                                <span key={i} className="leading-6">{i + 1}</span>
                            ))}
                        </div>
                    )}

                    {/* Code Lines */}
                    <div className="flex flex-col text-zinc-300">
                        {lines.map((line, i) => (
                            <div key={i} className="leading-6 whitespace-pre">{line || ' '}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Language badge */}
            <div className="absolute bottom-3 right-3">
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-800 rounded">
                    {language}
                </span>
            </div>
        </div>
    );
};

export default CodeBlock;
