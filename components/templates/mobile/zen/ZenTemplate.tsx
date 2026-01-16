import { zenItems, zenContent } from '@/data/templates/zen';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Settings, List, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ZenTemplate() {
    const [activeBook, setActiveBook] = useState<string | null>(null);
    const [fontSize, setFontSize] = useState(18);
    const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('sepia');

    const themes = {
        light: 'bg-white text-zinc-900',
        sepia: 'bg-[#f4ebd0] text-[#5b4636]',
        dark: 'bg-zinc-900 text-zinc-300'
    };

    return (
        <div className={`fixed inset-0 overflow-hidden font-serif transition-colors duration-500 ${themes[theme]}`}>
            <AnimatePresence mode="wait">
                {!activeBook ? (
                    <LibraryView key="library" onSelect={setActiveBook} />
                ) : (
                    <ReaderView
                        key="reader"
                        onBack={() => setActiveBook(null)}
                        theme={theme}
                        setTheme={setTheme}
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

function LibraryView({ onSelect }: { onSelect: (id: string) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            className="h-full flex flex-col p-6"
        >
            <div className="flex items-center justify-between mb-8">
                <Link to="/mobile/templates" className="p-2 -ml-2 rounded-full hover:bg-black/5 transition-colors">
                    <ArrowLeft className="w-6 h-6 opacity-50" />
                </Link>
                <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase opacity-40">Library</span>
                <div className="w-10" />
            </div>

            <h1 className="text-4xl font-light mb-8">Continue<br />Reading</h1>

            <div className="flex-1 overflow-y-auto no-scrollbar space-y-6 pb-20">
                {zenItems.map((book, i) => (
                    <motion.div
                        key={book.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => onSelect(book.id)}
                        className="group relative cursor-pointer active:scale-[0.98] transition-transform"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${book.cover} rounded opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <div className="relative p-6 border border-current border-opacity-10 rounded">
                            <h3 className="text-xl font-medium mb-1">{book.title}</h3>
                            <p className="text-sm italic opacity-60 mb-4">{book.author}</p>
                            <p className="text-sm opacity-80 line-clamp-2 leading-relaxed mb-4">{book.preview}</p>

                            <div className="flex items-center gap-3 text-xs font-sans opacity-50">
                                <BookOpen className="w-3 h-3" />
                                <span>{book.readTime} left</span>
                                <div className="flex-1 h-px bg-current opacity-20" />
                                <span>{book.progress}%</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

function ReaderView({ onBack, theme, setTheme, fontSize, setFontSize }: any) {
    const [showControls, setShowControls] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="h-full relative"
        >
            {/* Click zones */}
            <div className="absolute inset-0 z-10 flex">
                <div className="w-1/3 h-full" onClick={() => setShowControls(!showControls)} />
                <div className="w-1/3 h-full" onClick={() => setShowControls(!showControls)} />
                <div className="w-1/3 h-full" onClick={() => setShowControls(!showControls)} />
            </div>

            {/* Controls */}
            <motion.div
                className="absolute top-0 left-0 right-0 p-4 z-50 flex items-center justify-between pointer-events-none"
                animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : -20 }}
            >
                <button onClick={onBack} className="max-w-fit p-2 rounded-full hover:bg-black/5 pointer-events-auto transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-4 pointer-events-auto">
                    <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="w-8 h-8 flex items-center justify-center font-serif text-sm">A</button>
                    <button onClick={() => setFontSize(Math.min(24, fontSize + 2))} className="w-8 h-8 flex items-center justify-center font-serif text-xl border-b border-current">A</button>
                </div>
            </motion.div>

            {/* Content */}
            <div
                className="h-full overflow-y-auto px-8 py-24 leading-loose transition-all duration-300 no-scrollbar"
                style={{ fontSize: `${fontSize}px` }}
            >
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <h1 className="text-3xl font-light mb-8 mt-4" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-xl font-medium mb-4 mt-8 opacity-80" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-6 opacity-90 text-justify" {...props} />,
                        hr: ({ node, ...props }) => <div className="flex justify-center my-12 opacity-30 text-xl">***</div>
                    }}
                >
                    {zenContent}
                </ReactMarkdown>

                <div className="mt-12 text-center opacity-40 text-sm font-sans">End of Chapter</div>
            </div>

            {/* Bottom Controls */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 z-50 flex justify-center gap-6 pointer-events-none"
                animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
            >
                <div className="flex gap-2 p-2 bg-black/10 backdrop-blur-md rounded-full pointer-events-auto shadow-lg">
                    <button onClick={() => setTheme('light')} className={`w-8 h-8 rounded-full bg-white border border-zinc-200 ${theme === 'light' ? 'ring-2 ring-blue-500' : ''}`} />
                    <button onClick={() => setTheme('sepia')} className={`w-8 h-8 rounded-full bg-[#f4ebd0] border border-[#d4cbb0] ${theme === 'sepia' ? 'ring-2 ring-blue-500' : ''}`} />
                    <button onClick={() => setTheme('dark')} className={`w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 ${theme === 'dark' ? 'ring-2 ring-blue-500' : ''}`} />
                </div>
            </motion.div>
        </motion.div>
    );
}
