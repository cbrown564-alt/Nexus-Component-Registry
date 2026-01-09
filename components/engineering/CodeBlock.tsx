import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
    className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language = 'typescript',
    filename,
    className = ""
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800">
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

            {/* Code content */}
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
                    <code>{code}</code>
                </pre>
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
