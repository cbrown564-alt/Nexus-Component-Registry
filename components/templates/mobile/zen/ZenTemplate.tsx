import { zenItems, zenContent } from '@/data/templates/zen';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, BookOpen, Settings, List, ChevronLeft, Bookmark, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ZenTemplate() {
    const [activeBook, setActiveBook] = useState<string | null>(null);
    const [fontSize, setFontSize] = useState(20);
    const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('sepia');

    const themes = {
        light: {
            bg: 'bg-[#fdfbf7]',  // Warm white paper
            text: 'text-zinc-800',
            texture: 'opacity-40 mix-blend-multiply'
        },
        sepia: {
            bg: 'bg-[#e8dec0]', // Classic parchment
            text: 'text-[#46392c]',
            texture: 'opacity-60 mix-blend-overlay'
        },
        dark: {
            bg: 'bg-[#18181b]', // Charcoal
            text: 'text-[#a1a1aa]',
            texture: 'opacity-10 mix-blend-overlay'
        }
    };

    const currentTheme = themes[theme];

    return (
        <div className={`fixed inset-0 overflow-hidden font-serif transition-colors duration-700 ${currentTheme.bg} ${currentTheme.text}`}>
            {/* Paper Texture Overlay */}
            <div className={`absolute inset-0 pointer-events-none z-0 ${currentTheme.texture}`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

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
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            className="h-full flex flex-col pt-12 relative z-10"
        >
            <div className="px-6 flex items-center justify-between mb-2">
                <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-black/5 transition-colors">
                    <ArrowLeft className="w-6 h-6 opacity-60" />
                </Link>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase opacity-40">My Collection</span>
                <div className="w-10" />
            </div>

            <div className="px-6 mb-8">
                <h1 className="text-4xl font-light tracking-tight leading-[0.9]">
                    <span className="opacity-40 block text-lg font-sans tracking-normal mb-1">Good Evening</span>
                    Continue<br />Reading
                </h1>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar pb-20 px-6">
                <div className="grid grid-cols-1 gap-12">
                    {zenItems.map((book, i) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            onClick={() => onSelect(book.id)}
                            className="group relative cursor-pointer"
                        >
                            {/* Book Spine/3D Effect */}
                            <div className="flex gap-6 items-start">
                                <div className={`
                                w-24 aspect-[2/3] rounded-sm shadow-[5px_5px_15px_rgba(0,0,0,0.2)] 
                                bg-gradient-to-br ${book.cover} relative transform transition-transform group-hover:-translate-y-2 group-hover:shadow-[10px_20px_25px_rgba(0,0,0,0.15)]
                            `}>
                                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/10 mix-blend-multiply" /> {/* Spine shadow */}
                                </div>

                                <div className="flex-1 pt-1">
                                    <h3 className="text-xl font-medium leading-tight mb-2 group-hover:text-amber-800 dark:group-hover:text-amber-200 transition-colors">{book.title}</h3>
                                    <p className="text-sm italic opacity-60 mb-4 font-sans">{book.author}</p>

                                    <div className="flex items-center gap-4 text-xs font-sans font-medium opacity-50">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{book.readTime} left</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bookmark className="w-3 h-3" />
                                            <span>{book.progress}% complete</span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-4 h-1 w-full bg-black/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-current opacity-30 w-1/3" style={{ width: `${book.progress}%` }} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function ReaderView({ onBack, theme, setTheme, fontSize, setFontSize }: any) {
    const [showControls, setShowControls] = useState(true);
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: scrollRef });
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full relative z-10 flex flex-col"
        >
            {/* Click zones for easy interaction */}
            <div className="absolute inset-0 z-10 flex">
                <div className="w-1/4 h-full cursor-w-resize" onClick={() => setShowControls(!showControls)} />
                <div className="w-2/4 h-full cursor-default" onClick={() => setShowControls(!showControls)} />
                <div className="w-1/4 h-full cursor-e-resize" onClick={() => setShowControls(!showControls)} />
            </div>

            {/* Top Controls */}
            <motion.div
                className="absolute top-0 left-0 right-0 p-4 pt-10 z-50 flex items-center justify-between pointer-events-none bg-gradient-to-b from-inherit to-transparent"
                initial={false}
                animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : -20 }}
            >
                <button onClick={onBack} className="max-w-fit p-3 -ml-2 rounded-full hover:bg-black/5 pointer-events-auto transition-colors">
                    <ChevronLeft className="w-6 h-6 opacity-70" />
                </button>
                <div className="flex bg-black/5 backdrop-blur-xl rounded-full p-1 pointer-events-auto shadow-sm border border-white/10">
                    <button onClick={() => setFontSize(Math.max(16, fontSize - 2))} className="w-10 h-10 flex items-center justify-center font-serif text-sm opacity-60 hover:opacity-100 transition-opacity">A</button>
                    <div className="w-px my-2 bg-black/10" />
                    <button onClick={() => setFontSize(Math.min(28, fontSize + 2))} className="w-10 h-10 flex items-center justify-center font-serif text-xl opacity-80 hover:opacity-100 transition-opacity">A</button>
                </div>
            </motion.div>

            {/* Reading Content */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-8 no-scrollbar scroll-smooth"
                style={{
                    fontSize: `${fontSize}px`,
                    lineHeight: '1.8'
                }}
            >
                <div className="py-32 max-w-lg mx-auto">
                    {/* Chapter Header */}
                    <div className="text-center mb-16 opacity-80">
                        <span className="text-xs font-sans tracking-[0.3em] uppercase block mb-4">Chapter One</span>
                        <h2 className="text-3xl italic font-medium">The Beginning of Infinity</h2>
                    </div>

                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-light mb-8 mt-12 leading-tight" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-xl font-medium mb-6 mt-10 opacity-80" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-6 opacity-90 text-justify hyphens-auto" {...props} />,
                            hr: ({ node, ...props }) => <div className="flex justify-center my-16 opacity-30 text-xl tracking-[1em] font-light">* * *</div>,
                            blockquote: ({ node, ...props }) => <blockquote className="pl-6 border-l-2 border-current opacity-70 italic my-8" {...props} />
                        }}
                    >
                        {zenContent}
                    </ReactMarkdown>

                    <div className="mt-20 flex justify-center">
                        <span className="text-xs font-sans opacity-30 tracking-widest uppercase">End of Preview</span>
                    </div>
                </div>
            </div>

            {/* Reading Progress Bar (Fixed at bottom) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5 z-50">
                <motion.div
                    className="h-full bg-current opacity-40 origin-left"
                    style={{ width: progressWidth }}
                />
            </div>

            {/* Bottom Controls */}
            <motion.div
                className="absolute bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
                animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
            >
                <div className="flex gap-4 p-2 pl-3 bg-black/5 backdrop-blur-xl rounded-full pointer-events-auto shadow-lg border border-white/10 items-center">
                    <span className="text-[10px] font-sans font-bold uppercase opacity-40 mr-2 tracking-wider">Theme</span>
                    <ThemeButton active={theme === 'light'} color="bg-[#f0ece2]" onClick={() => setTheme('light')} />
                    <ThemeButton active={theme === 'sepia'} color="bg-[#e8dec0]" onClick={() => setTheme('sepia')} />
                    <ThemeButton active={theme === 'dark'} color="bg-[#27272a]" onClick={() => setTheme('dark')} />
                </div>
            </motion.div>
        </motion.div>
    );
}

function ThemeButton({ active, color, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-6 h-6 rounded-full ${color} border border-black/10 shadow-sm transition-transform ${active ? 'scale-110 ring-2 ring-blue-500/50' : 'hover:scale-110'}`}
        />
    )
}
