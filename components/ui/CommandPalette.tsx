import { Command } from 'cmdk'
import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search as SearchIcon, Box, Layout, ArrowRight } from 'lucide-react'
import { components } from '@/data/components'
import { legacyThemes as themes } from '@/lib/registry'
import TemplatePreview from './TemplatePreview'

export default function CommandPalette() {
    const [open, setOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<string>('')
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const handleSelect = (value: string) => {
        setOpen(false)
        if (value.startsWith('theme-')) {
            navigate(`/templates/${value.replace('theme-', '')}`)
        } else if (value.startsWith('component-')) {
            const compId = value.replace('component-', '')
            const comp = components.find(c => c.id === compId)
            if (comp) {
                navigate(`/components/${comp.theme}/${comp.id}`)
            }
        }
    }

    // Custom filtering logic
    const filteredItems = useMemo(() => {
        if (!search) return { themes, components: components.slice(0, 20) }

        const lowerSearch = search.toLowerCase()

        const scoreItem = (text: string) => {
            if (!text) return 0
            if (text.toLowerCase() === lowerSearch) return 100
            if (text.toLowerCase().startsWith(lowerSearch)) return 80
            if (text.toLowerCase().includes(lowerSearch)) return 50
            return 0
        }

        const scoredThemes = themes.map(theme => {
            let score = 0
            let reason = ''

            const nameScore = scoreItem(theme.name)
            if (nameScore > score) { score = nameScore }

            const descScore = scoreItem(theme.description) * 0.5
            if (descScore > score) { score = descScore; reason = 'Matches description' }

            return { item: theme, score, reason }
        }).filter(r => r.score > 0).sort((a, b) => b.score - a.score).map(r => r.item)

        const scoredComponents = components.map(comp => {
            let score = 0
            let reason = ''

            const nameScore = scoreItem(comp.name) * 2
            if (nameScore > score) { score = nameScore }

            comp.tags.forEach(tag => {
                const tagScore = scoreItem(tag)
                if (tagScore > score) {
                    score = tagScore
                    reason = `Matches tag #${tag}`
                }
            })

            const descScore = scoreItem(comp.description) * 0.5
            if (descScore > score) {
                score = descScore;
                reason = 'Matches description'
            }

            const catScore = scoreItem(comp.category) * 0.8
            if (catScore > score) {
                score = catScore
                reason = `in ${comp.category}`
            }

            return { item: comp, score, reason }
        }).filter(r => r.score > 0).sort((a, b) => b.score - a.score)

        return {
            themes: scoredThemes,
            components: scoredComponents
        }
    }, [search])

    const selectedItem = useMemo(() => {
        if (selectedId.startsWith('theme-')) {
            return { type: 'theme', data: themes.find(t => `theme-${t.id}` === selectedId) }
        }
        if (selectedId.startsWith('component-')) {
            return { type: 'component', data: components.find(c => `component-${c.id}` === selectedId) }
        }
        return null
    }, [selectedId])

    const getThemeColor = (theme: string) => {
        const colors: Record<string, string> = {
            shared: 'bg-zinc-600',
            fintech: 'bg-emerald-500',
            cockpit: 'bg-blue-600',
            game: 'bg-fuchsia-500',
            legacy: 'bg-teal-600',
        }
        return colors[theme] || 'bg-zinc-600'
    }

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Search"
            className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4 pointer-events-none"
            onValueChange={setSelectedId}
            shouldFilter={false}
        >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" aria-hidden="true" />

            <div className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex h-[600px] pointer-events-auto ring-1 ring-white/10">

                {/* Search & List */}
                <div className="w-1/2 flex flex-col border-r border-zinc-800">
                    <div className="flex items-center border-b border-zinc-800 px-4">
                        <SearchIcon className="w-5 h-5 text-zinc-500 mr-3" />
                        <Command.Input
                            placeholder="Type to find components or templates..."
                            className="flex-1 h-14 bg-transparent outline-none text-white placeholder-zinc-500 text-sm"
                            value={search}
                            onValueChange={setSearch}
                        />
                    </div>

                    <Command.List className="flex-1 overflow-y-auto p-2 scroll-py-2">
                        {filteredItems.themes.length === 0 && filteredItems.components.length === 0 && (
                            <Command.Empty className="py-6 text-center text-sm text-zinc-500">
                                No results found.
                            </Command.Empty>
                        )}

                        {filteredItems.themes.length > 0 && (
                            <Command.Group heading="Templates" className="text-xs font-medium text-zinc-500 px-2 py-1.5 mb-2">
                                {filteredItems.themes.map(theme => (
                                    <Command.Item
                                        key={theme.id}
                                        value={`theme-${theme.id}`}
                                        onSelect={handleSelect}
                                        onMouseEnter={() => setSelectedId(`theme-${theme.id}`)}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 aria-selected:bg-zinc-800 aria-selected:text-white cursor-pointer transition-colors"
                                    >
                                        <Layout className="w-4 h-4 text-zinc-500" />
                                        <span>{theme.name}</span>
                                        <span className="ml-auto text-xs text-zinc-600 capitalize">{theme.category}</span>
                                    </Command.Item>
                                ))}
                            </Command.Group>
                        )}

                        {filteredItems.components.length > 0 && (
                            <Command.Group heading="Components" className="text-xs font-medium text-zinc-500 px-2 py-1.5">
                                {filteredItems.components.map((result) => {
                                    // Handle both "All items" array (direct objects) and search results (objects with item property)
                                    // When searching, we have: { item: ComponentMeta, score: number, reason: string }
                                    // When empty search (initial slice), we have: ComponentMeta (direct object) is handled by fallback check
                                    const isResultObject = 'item' in result && 'score' in result
                                    const comp = isResultObject ? (result as any).item : result
                                    const reason = isResultObject ? (result as any).reason : ''

                                    return (
                                        <Command.Item
                                            key={comp.id}
                                            value={`component-${comp.id}`}
                                            onSelect={handleSelect}
                                            onMouseEnter={() => setSelectedId(`component-${comp.id}`)}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 aria-selected:bg-zinc-800 aria-selected:text-white cursor-pointer transition-colors"
                                        >
                                            <div className={`w-2 h-2 rounded-full ${getThemeColor(comp.theme)}`} />
                                            <span>{comp.name}</span>

                                            <div className="ml-auto flex items-center gap-2">
                                                {reason && (
                                                    <span className="text-[10px] text-zinc-500 italic mr-2 hidden sm:inline">
                                                        {reason}
                                                    </span>
                                                )}
                                                <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500">{comp.category}</span>
                                            </div>
                                        </Command.Item>
                                    )
                                })}
                            </Command.Group>
                        )}
                    </Command.List>

                    <div className="p-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 bg-zinc-900/50">
                        <div className="flex gap-2">
                            <span className="bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">↑↓</span> to navigate
                            <span className="bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">↵</span> to select
                        </div>
                        <span>ESC to close</span>
                    </div>
                </div>

                {/* Live Preview Panel */}
                <div className="w-1/2 bg-zinc-950 flex flex-col relative overflow-hidden">
                    {selectedItem ? (
                        <>
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                {selectedItem.type === 'theme' && selectedItem.data && (
                                    // @ts-ignore
                                    <TemplatePreview theme={selectedItem.data} className="w-full h-full object-contain shadow-2xl rounded-lg border border-zinc-800" />
                                )}
                                {selectedItem.type === 'component' && selectedItem.data && (
                                    <div className="relative w-full h-full flex items-center justify-center">

                                        {/* Component renders here */}
                                        <div className="relative transform scale-75 origin-center pointer-events-none select-none">
                                            {/* @ts-ignore */}
                                            {(selectedItem.data as any).previewProps ? (
                                                // @ts-ignore
                                                <selectedItem.data.component {...(selectedItem.data as any).previewProps} />
                                            ) : (
                                                // @ts-ignore
                                                <selectedItem.data.component />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Info Overlay */}
                            <div className="mt-auto p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent relative z-10">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {selectedItem.data?.name}
                                </h2>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    {selectedItem.data?.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {/* @ts-ignore */}
                                    {(selectedItem.data as any)?.tags?.map((tag: string) => (
                                        <span key={tag} className="px-2 py-1 text-xs bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-zinc-600">
                            <Box className="w-12 h-12 mb-4 opacity-20" />
                            <p>Select an item to preview</p>
                        </div>
                    )}
                </div>
            </div>
        </Command.Dialog>
    )
}
