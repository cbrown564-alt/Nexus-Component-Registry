import { useMemo } from 'react'
import { Search } from 'lucide-react'
import { legacyThemes as themes, visualLanguages, getTemplatesByLanguage } from '@/lib/registry'
import HeroTemplate from '@/components/ui/HeroTemplate'
import TemplateSwimlane from '@/components/ui/TemplateSwimlane'
import useMediaQuery from '@/hooks/useMediaQuery'
import MobileHomePage from '@/pages/mobile/MobileHomePage'

// Get featured theme and organize by visual language
export default function TemplatesPage() {
    const isMobile = useMediaQuery('(max-width: 768px)')

    if (isMobile) {
        return <MobileHomePage />
    }

    const { featured, trending, languageGroups } = useMemo(() => {
        // Pick a specific featured theme - 'scifi' as requested
        const featured = themes.find(t => t.id === 'scifi') || themes[0]

        // Mock trending logic (just first 10 for now)
        const trending = themes.slice(0, 10)

        // Group templates by visual language
        const languageGroups = visualLanguages.map(lang => ({
            ...lang,
            templates: getTemplatesByLanguage(lang.id).map(t => ({
                ...t,
                collection: t.visualLanguageId
            }))
        })).filter(group => group.templates.length > 0)

        return { featured, trending, languageGroups }
    }, [])

    return (
        <div className="relative z-10 min-h-screen bg-zinc-950 pb-20 w-full overflow-x-hidden">

            {/* Hero Section */}
            <HeroTemplate theme={featured} />

            {/* Content Stacks */}
            <div className="-mt-20 relative z-20 space-y-8">
                <TemplateSwimlane
                    title="Trending Now"
                    themes={trending}
                />

                {languageGroups.map((group) => (
                    <TemplateSwimlane
                        key={group.id}
                        title={group.name}
                        themes={group.templates}
                    />
                ))}

                <div className="px-8 mt-12 pb-20 border-t border-zinc-900 pt-16 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Looking for something specific?</h2>
                    <p className="text-zinc-400 mb-8 max-w-xl">
                        Explore our complete library of components, hooks, and templates using the command palette.
                    </p>
                    <button
                        onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
                    >
                        <Search className="w-5 h-5" />
                        Search Registry
                        <span className="ml-2 px-2 py-0.5 bg-black/10 rounded text-xs font-medium">⌘K</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
