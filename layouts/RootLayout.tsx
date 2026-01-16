import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    Box,
    LayoutTemplate,
    Zap,
    Settings,
    Command,
    Github,
    Bell,
    Home,
    Menu,
    X,
    Palette,
    BookOpen,
    Coins,
} from 'lucide-react'
import { ThemeProvider, useTheme } from '@/context/ThemeContext'
import CommandPalette from '@/components/ui/CommandPalette'
import SkipLink from '@/components/a11y/SkipLink'
import { Search } from 'lucide-react'
import GlobalStyles from '@/components/ui/GlobalStyles'

/**
 * Hook to reset theme to registry default when navigating away from template pages.
 * Template pages are: /templates/:id and /templates/:id/components
 * Registry pages are: /, /templates, /components, /hooks, /tokens, /themes, etc.
 */
function useTemplateModeReset() {
    const location = useLocation()
    const { clearTemplateTheme, isTemplateMode } = useTheme()

    useEffect(() => {
        const pathname = location.pathname

        // Check if we're on a template-specific page
        // /templates/:id or /templates/:id/components
        const templateMatch = pathname.match(/^\/templates\/([^/]+)/)
        const isTemplatePage = templateMatch !== null && templateMatch[1] !== undefined

        // If we're not on a template page and we're in template mode, reset
        if (!isTemplatePage && isTemplateMode) {
            clearTemplateTheme()
        }
    }, [location.pathname, isTemplateMode, clearTemplateTheme])
}

function Background() {
    const { currentTheme, isTemplateMode } = useTheme()
    const location = useLocation()

    // Determine if we're on a registry page (not a template-specific page)
    const isRegistryPage = !location.pathname.match(/^\/templates\/[^/]+/)

    const getBackgroundImage = () => {
        const id = currentTheme.id

        // Registry pages always use the dark dot pattern
        if (isRegistryPage || !isTemplateMode || id === 'registry') {
            return `radial-gradient(#3f3f46 1px, transparent 1px)`
        }

        if (id === 'education') {
            return `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`
        }
        if (id === 'saas' || id === 'fintech' || id === 'productivity') {
            return `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`
        }
        if (id === 'grid') {
            return `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`
        }
        if (id === 'game') {
            return `radial-gradient(circle at 50% 50%, #4c1d95 0%, transparent 50%), radial-gradient(circle at 100% 0%, #db2777 0%, transparent 20%)`
        }
        if (id === 'music') {
            return `radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 40%), radial-gradient(circle at 100% 100%, #e11d48 0%, transparent 40%)`
        }
        if (id === 'food') {
            return `radial-gradient(circle at 100% 0%, #ea580c 0%, transparent 30%), radial-gradient(circle at 0% 100%, #1c1917 0%, transparent 50%)`
        }
        if (['brutalist', 'kitchen', 'kids', 'scifi', 'eink', 'solarpunk', 'legal', 'softplastic', 'festival', 'acid', 'legacy', 'cockpit', 'clay', 'blueprint', 'swiss', 'magazine', 'ecommerce', 'social'].includes(id)) {
            return 'none'
        }
        if (id === 'engineering') {
            return `radial-gradient(#3f3f46 1px, transparent 1px)`
        }
        return `radial-gradient(#d6d3d1 1px, transparent 1px)`
    }

    // Registry pages always use dark background, regardless of any lingering theme state
    const backgroundColor = isRegistryPage ? 'bg-zinc-950' : currentTheme.backgroundColor

    return (
        <div className={`fixed inset-0 z-0 h-full w-full transition-colors duration-700 ${backgroundColor}`}>
            <div
                className="absolute h-full w-full opacity-30"
                style={{
                    backgroundImage: getBackgroundImage(),
                    backgroundSize: '24px 24px',
                }}
            />
        </div>
    )
}

// function Sidebar imports
function Sidebar() {
    const { currentTheme, isTemplateMode } = useTheme()
    // const [isGalleriesOpen, setIsGalleriesOpen] = useState(true) // Removed state
    const location = useLocation()

    // Use route-based detection for reliable styling (avoids timing issues with state)
    const isTemplatePage = location.pathname.match(/^\/templates\/[^/]+/) !== null

    // Registry pages always use dark styling, template pages check theme category
    const isDark = isTemplatePage && isTemplateMode
        ? ['engineering', 'saas', 'social', 'fintech', 'productivity', 'game', 'music', 'food', 'grid', 'scifi', 'festival', 'cockpit', 'blueprint'].includes(currentTheme.id)
        : true

    const navItems = [
        { to: '/', icon: Home, label: 'Home' },
        { to: '/themes', icon: Palette, label: 'Themes' },
        { to: '/templates', icon: LayoutTemplate, label: 'Templates' },
        { to: '/components', icon: Box, label: 'Components' },
        { to: '/stories', icon: BookOpen, label: 'Stories' },
        { to: '/hooks', icon: Zap, label: 'Hooks' },
        { to: '/tokens', icon: Coins, label: 'Tokens' },
        // { to: '/settings', icon: Settings, label: 'Settings' },
    ]

    // Registry pages use dark sidebar, template pages use their theme's sidebar
    const sidebarStyles = isTemplatePage && isTemplateMode
        ? currentTheme.sidebarStyles
        : 'border-zinc-800 bg-zinc-950'

    return (
        <aside
            className={`group fixed left-0 top-0 z-50 h-full w-16 flex-col border-r transition-all duration-300 hover:w-64 ${sidebarStyles} overflow-y-auto no-scrollbar`}
            aria-label="Main navigation"
        >
            {/* Logo */}
            <div className="flex h-16 items-center justify-center border-b border-inherit px-4 shrink-0 sticky top-0 z-10 backdrop-blur-sm group-hover:justify-start">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${isDark ? 'bg-zinc-100 text-zinc-950' : 'bg-stone-900 text-stone-50'
                    }`}>
                    <Command className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className={`ml-3 overflow-hidden whitespace-nowrap text-sm font-bold tracking-tight opacity-0 transition-all duration-300 group-hover:opacity-100 ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                    NEXUS
                </span>
            </div>

            <nav className="flex flex-1 flex-col gap-2 p-3" role="navigation">
                {/* Navigation Links */}
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex h-10 items-center rounded-md px-2.5 transition-all duration-200 ${isActive
                                ? isDark
                                    ? 'bg-zinc-800 text-white'
                                    : 'bg-slate-200 text-slate-900'
                                : isDark
                                    ? 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                            }`
                        }
                        aria-current={location.pathname === item.to ? 'page' : undefined}
                    >
                        <item.icon className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                        <span className="ml-3 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            {item.label}
                        </span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}

function Header() {
    const { currentTheme, isTemplateMode } = useTheme()
    const location = useLocation()

    // Use route-based detection for reliable styling
    const isTemplatePage = location.pathname.match(/^\/templates\/[^/]+/) !== null

    // Registry pages always use dark styling
    const isDark = isTemplatePage && isTemplateMode
        ? ['engineering', 'saas', 'social', 'fintech', 'productivity', 'game', 'music', 'food', 'grid', 'scifi', 'festival', 'cockpit', 'blueprint'].includes(currentTheme.id)
        : true

    // Hide header on immersive template themes (only when actually on a template page)
    const hideHeader = isTemplatePage && isTemplateMode && (
        ['brutalist', 'kitchen', 'kids', 'scifi', 'eink', 'solarpunk', 'legal', 'softplastic', 'festival', 'acid', 'legacy', 'cockpit', 'clay', 'blueprint', 'swiss'].includes(currentTheme.id) ||
        currentTheme.mobileTier === 'first'
    )

    if (hideHeader) return null

    return (
        <header className={`sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b px-8 backdrop-blur-md transition-colors ${isDark ? 'border-zinc-800 bg-zinc-950/80' : 'border-slate-200 bg-white/80'
            }`}>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                    className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm transition-colors text-zinc-500 hover:text-zinc-300 ${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'}`}
                >
                    <Search className="w-4 h-4" />
                    <span className="hidden sm:inline">Search...</span>
                    <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-medium opacity-60">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </button>
            </div>

            <div className="flex items-center gap-4">
                <button
                    className={`rounded-full p-2 transition-colors ${isDark ? 'text-zinc-400 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                    aria-label="View source on GitHub"
                >
                    <Github className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                    className={`relative rounded-full p-2 transition-colors ${isDark ? 'text-zinc-400 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                    aria-label="Notifications (1 unread)"
                >
                    <Bell className="h-5 w-5" aria-hidden="true" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" aria-hidden="true" />
                </button>
            </div>
        </header>
    )
}

function LayoutContent() {
    const { currentTheme, isTemplateMode } = useTheme()
    const location = useLocation()

    // Reset to registry theme when navigating away from template pages
    useTemplateModeReset()

    // Use route-based detection for reliable styling
    const isTemplatePage = location.pathname.match(/^\/templates\/[^/]+/) !== null

    // Registry pages always use dark theme, template pages use their theme
    const isDark = isTemplatePage && isTemplateMode
        ? ['engineering', 'saas', 'social', 'fintech', 'productivity', 'game', 'music', 'food', 'grid', 'scifi', 'festival', 'cockpit', 'blueprint'].includes(currentTheme.id)
        : true // Registry always dark

    // Text color: registry pages use light text, template pages use their theme's text
    const textColorClass = isTemplatePage && isTemplateMode
        ? currentTheme.textColorClass
        : 'text-zinc-100'

    return (
        <div className={`flex min-h-screen w-full font-sans transition-colors duration-500 ${textColorClass}`}>
            <SkipLink />
            <Background />
            <GlobalStyles />

            {/* Sidebar - hidden on mobile, visible on desktop */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            <main
                id="main-content"
                className="relative flex flex-1 flex-col pl-0 lg:pl-16 transition-[padding] duration-300"
            >
                <Header />
                <CommandPalette />
                <Outlet />
            </main>
        </div >
    )
}

export default function RootLayout() {
    return (
        <ThemeProvider>
            <LayoutContent />
        </ThemeProvider>
    )
}
