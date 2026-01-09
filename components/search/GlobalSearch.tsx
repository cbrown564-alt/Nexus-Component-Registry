import { useState, useEffect, useRef, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Command, LayoutTemplate, Box, Zap, ArrowRight } from 'lucide-react'
import { themes } from '@/data/themes'

interface SearchResult {
    id: string
    title: string
    description: string
    type: 'template' | 'component' | 'hook'
    path: string
    icon: typeof LayoutTemplate
}

// Generate search index from themes
const searchIndex: SearchResult[] = themes.map((theme) => ({
    id: theme.id,
    title: theme.name,
    description: theme.description,
    type: 'template',
    path: `/templates/${theme.id}`,
    icon: LayoutTemplate,
}))

// Add placeholder component/hook results for future
const additionalResults: SearchResult[] = [
    { id: 'spotlight', title: 'SpotlightCard', description: 'Mouse-tracking spotlight effect', type: 'component', path: '/components', icon: Box },
    { id: 'glow-button', title: 'GlowButton', description: 'Gradient border button', type: 'component', path: '/components', icon: Box },
    { id: 'terminal', title: 'Terminal', description: 'Fake terminal display', type: 'component', path: '/components', icon: Box },
    { id: 'useSpotlight', title: 'useSpotlight', description: 'Mouse tracking for spotlight effects', type: 'hook', path: '/hooks', icon: Zap },
    { id: 'useTheme', title: 'useTheme', description: 'Current theme context and switching', type: 'hook', path: '/hooks', icon: Zap },
]

const allResults = [...searchIndex, ...additionalResults]

export default function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    // Filter results based on query
    const filteredResults = query.trim()
        ? allResults.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
        )
        : allResults.slice(0, 8) // Show first 8 when no query

    // Keyboard shortcut to open
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsOpen(true)
            }
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus()
            setQuery('')
            setSelectedIndex(0)
        }
    }, [isOpen])

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex((prev) => Math.min(prev + 1, filteredResults.length - 1))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex((prev) => Math.max(prev - 1, 0))
        } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
            navigate(filteredResults[selectedIndex].path)
            setIsOpen(false)
        }
    }

    const handleSelect = (result: SearchResult) => {
        navigate(result.path)
        setIsOpen(false)
    }

    const getTypeColor = (type: SearchResult['type']) => {
        switch (type) {
            case 'template':
                return 'bg-blue-500/20 text-blue-400'
            case 'component':
                return 'bg-emerald-500/20 text-emerald-400'
            case 'hook':
                return 'bg-amber-500/20 text-amber-400'
        }
    }

    return (
        <>
            {/* Search Trigger Button (for header) */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-500 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 hover:text-zinc-400 transition-colors"
            >
                <Search className="h-4 w-4" />
                <span>Search...</span>
                <kbd className="ml-2 flex items-center gap-0.5 px-1.5 py-0.5 text-xs bg-zinc-800 rounded">
                    <Command className="h-3 w-3" />
                    <span>K</span>
                </kbd>
            </button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                        />

                        {/* Search Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.15 }}
                            className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-xl"
                        >
                            <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden">
                                {/* Search Input */}
                                <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800">
                                    <Search className="h-5 w-5 text-zinc-500" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={query}
                                        onChange={(e) => {
                                            setQuery(e.target.value)
                                            setSelectedIndex(0)
                                        }}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Search templates, components, hooks..."
                                        className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none"
                                    />
                                    <kbd className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800 rounded">esc</kbd>
                                </div>

                                {/* Results */}
                                <div className="max-h-80 overflow-y-auto py-2">
                                    {filteredResults.length === 0 ? (
                                        <div className="px-4 py-8 text-center text-zinc-500">
                                            No results found for "{query}"
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            {filteredResults.map((result, index) => (
                                                <button
                                                    key={result.id}
                                                    onClick={() => handleSelect(result)}
                                                    onMouseEnter={() => setSelectedIndex(index)}
                                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${index === selectedIndex ? 'bg-zinc-800' : 'hover:bg-zinc-800/50'
                                                        }`}
                                                >
                                                    <div
                                                        className={`flex items-center justify-center h-8 w-8 rounded-lg ${getTypeColor(
                                                            result.type
                                                        )}`}
                                                    >
                                                        <result.icon className="h-4 w-4" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-medium text-white">{result.title}</span>
                                                            <span
                                                                className={`px-1.5 py-0.5 text-[10px] rounded ${getTypeColor(
                                                                    result.type
                                                                )}`}
                                                            >
                                                                {result.type}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-zinc-500 truncate">{result.description}</p>
                                                    </div>
                                                    {index === selectedIndex && (
                                                        <ArrowRight className="h-4 w-4 text-zinc-500" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-800 text-xs text-zinc-500">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">↑</kbd>
                                            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">↓</kbd>
                                            <span className="ml-1">navigate</span>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">↵</kbd>
                                            <span className="ml-1">select</span>
                                        </span>
                                    </div>
                                    <span>{filteredResults.length} results</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
