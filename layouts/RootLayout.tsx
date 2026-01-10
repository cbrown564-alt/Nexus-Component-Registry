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
    Coins,
} from 'lucide-react'
import { ThemeProvider, useTheme } from '@/context/ThemeContext'
import GlobalSearch from '@/components/search/GlobalSearch'
import SkipLink from '@/components/a11y/SkipLink'

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

    const getBackgroundImage = () => {
        const id = currentTheme.id
        
        // Registry mode uses a subtle dot pattern
        if (!isTemplateMode || id === 'registry') {
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

    return (
        <div className={`fixed inset-0 z-0 h-full w-full transition-colors duration-700 ${currentTheme.backgroundColor}`}>
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

    // Registry pages always use dark styling, template pages check theme category
    const isDark = isTemplateMode 
        ? ['engineering', 'saas', 'social', 'fintech', 'productivity', 'game', 'music', 'food', 'grid', 'scifi', 'festival', 'cockpit', 'blueprint'].includes(currentTheme.id)
        : true

    const navItems = [
        { to: '/', icon: Home, label: 'Home' },
        { to: '/themes', icon: Palette, label: 'Themes' },
        { to: '/templates', icon: LayoutTemplate, label: 'Templates' },
        { to: '/components', icon: Box, label: 'Components' },
        { to: '/hooks', icon: Zap, label: 'Hooks' },
        { to: '/tokens', icon: Coins, label: 'Tokens' },
        // { to: '/settings', icon: Settings, label: 'Settings' },
    ]

    return (
        <aside
            className={`group fixed left-0 top-0 z-50 h-full w-16 flex-col border-r transition-all duration-300 hover:w-64 ${currentTheme.sidebarStyles} overflow-y-auto no-scrollbar`}
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
                        aria-current={({ isActive }) => isActive ? 'page' : undefined}
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
    
    // Registry pages always use dark styling
    const isDark = isTemplateMode 
        ? ['engineering', 'saas', 'social', 'fintech', 'productivity', 'game', 'music', 'food', 'grid', 'scifi', 'festival', 'cockpit', 'blueprint'].includes(currentTheme.id)
        : true

    // Hide header on immersive template themes (only when in template mode)
    const hideHeader = isTemplateMode && ['brutalist', 'kitchen', 'kids', 'scifi', 'eink', 'solarpunk', 'legal', 'softplastic', 'festival', 'acid', 'legacy', 'cockpit', 'clay', 'blueprint', 'swiss'].includes(currentTheme.id)

    if (hideHeader) return null

    return (
        <header className={`sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b px-8 backdrop-blur-md transition-colors ${isDark ? 'border-zinc-800 bg-zinc-950/80' : 'border-slate-200 bg-white/80'
            }`}>
            <div className="flex items-center gap-4">
                <GlobalSearch />
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    // Reset to registry theme when navigating away from template pages
    useTemplateModeReset()

    // Registry pages always use dark theme, template pages use their theme
    const isDark = isTemplateMode 
        ? ['engineering', 'saas', 'social', 'fintech', 'productivity', 'game', 'music', 'food', 'grid', 'scifi', 'festival', 'cockpit', 'blueprint'].includes(currentTheme.id)
        : true // Registry always dark

    return (
        <div className={`flex min-h-screen w-full font-sans transition-colors duration-500 ${currentTheme.textColorClass}`}>
            <SkipLink />
            <Background />

            {/* Mobile menu button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
            >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Mobile backdrop */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-black/60"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar - hidden on mobile unless open */}
            <div className={`lg:block ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <Sidebar />
            </div>

            <main
                id="main-content"
                className="relative flex flex-1 flex-col pl-0 lg:pl-16 transition-[padding] duration-300"
            >
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default function RootLayout() {
    return (
        <ThemeProvider>
            <LayoutContent />
        </ThemeProvider>
    )
}
