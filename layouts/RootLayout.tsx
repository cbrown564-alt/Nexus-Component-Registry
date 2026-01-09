import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {
    Box,
    LayoutTemplate,
    Zap,
    Settings,
    Command,
    Github,
    Bell,
    ChevronDown,
    ChevronRight,
    Home,
} from 'lucide-react'
import { ThemeProvider, useTheme } from '@/context/ThemeContext'
import GlobalSearch from '@/components/search/GlobalSearch'

function Background() {
    const { currentTheme } = useTheme()

    const getBackgroundImage = () => {
        const id = currentTheme.id
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

function Sidebar() {
    const { currentTheme, setTheme, themes } = useTheme()
    const [isGalleriesOpen, setIsGalleriesOpen] = useState(true)
    const location = useLocation()

    const isDark = ['engineering', 'saas', 'social', 'fintech', 'productivity', 'game', 'music', 'food', 'grid', 'scifi', 'festival', 'cockpit', 'blueprint'].includes(currentTheme.id)

    const navItems = [
        { to: '/', icon: Home, label: 'Home' },
        { to: '/components', icon: Box, label: 'Components' },
        { to: '/templates', icon: LayoutTemplate, label: 'Templates' },
        { to: '/hooks', icon: Zap, label: 'Hooks' },
        { to: '/settings', icon: Settings, label: 'Settings' },
    ]

    return (
        <aside className={`group fixed left-0 top-0 z-50 h-full w-16 flex-col border-r transition-all duration-300 hover:w-64 ${currentTheme.sidebarStyles} overflow-y-auto no-scrollbar`}>
            {/* Logo */}
            <div className="flex h-16 items-center justify-center border-b border-inherit px-4 shrink-0 sticky top-0 z-10 backdrop-blur-sm group-hover:justify-start">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${isDark ? 'bg-zinc-100 text-zinc-950' : 'bg-stone-900 text-stone-50'
                    }`}>
                    <Command className="h-5 w-5" />
                </div>
                <span className={`ml-3 overflow-hidden whitespace-nowrap text-sm font-bold tracking-tight opacity-0 transition-all duration-300 group-hover:opacity-100 ${isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                    NEXUS
                </span>
            </div>

            <nav className="flex flex-1 flex-col gap-2 p-3">
                {/* Theme Switcher Section */}
                <div className="mb-4 flex flex-col gap-1 border-b border-inherit pb-4">
                    <button
                        onClick={() => setIsGalleriesOpen(!isGalleriesOpen)}
                        className={`flex w-full items-center justify-between px-2 py-2 text-[10px] font-semibold uppercase tracking-wider transition-opacity opacity-0 group-hover:opacity-100 ${isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        <span>Galleries</span>
                        {isGalleriesOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                    </button>

                    <div className="space-y-1">
                        {(isGalleriesOpen ? themes : themes.filter((t) => t.id === currentTheme.id)).map((theme) => (
                            <button
                                key={theme.id}
                                onClick={() => {
                                    if (isGalleriesOpen) {
                                        setTheme(theme.id)
                                    } else {
                                        setIsGalleriesOpen(true)
                                    }
                                }}
                                className={`flex h-10 items-center rounded-md px-2.5 transition-all duration-200 w-full ${currentTheme.id === theme.id
                                    ? isDark
                                        ? 'bg-zinc-800 text-white'
                                        : 'bg-slate-200 text-slate-900'
                                    : isDark
                                        ? 'text-zinc-500 hover:bg-white/5 hover:text-zinc-200'
                                        : 'text-zinc-500 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                            >
                                <div className={`h-2 w-2 rounded-full ${currentTheme.id === theme.id ? theme.colorClass : 'bg-zinc-400'}`} />
                                <span className="ml-3 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                    {theme.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

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
                    >
                        <item.icon className="h-5 w-5 shrink-0" strokeWidth={1.5} />
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
    const { currentTheme } = useTheme()
    const isDark = ['engineering', 'saas', 'social', 'fintech', 'productivity', 'game', 'music', 'food', 'grid', 'scifi', 'festival', 'cockpit', 'blueprint'].includes(currentTheme.id)

    // Hide header on immersive themes
    const hideHeader = ['brutalist', 'kitchen', 'kids', 'scifi', 'eink', 'solarpunk', 'legal', 'softplastic', 'festival', 'acid', 'legacy', 'cockpit', 'clay', 'blueprint', 'swiss'].includes(currentTheme.id)

    if (hideHeader) return null

    return (
        <header className={`sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b px-8 backdrop-blur-md transition-colors ${isDark ? 'border-zinc-800 bg-zinc-950/80' : 'border-slate-200 bg-white/80'
            }`}>
            <div className="flex items-center gap-4">
                <GlobalSearch />
            </div>

            <div className="flex items-center gap-4">
                <button className={`rounded-full p-2 transition-colors ${isDark ? 'text-zinc-400 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
                    }`}>
                    <Github className="h-5 w-5" />
                </button>
                <button className={`relative rounded-full p-2 transition-colors ${isDark ? 'text-zinc-400 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
                    }`}>
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>
            </div>
        </header>
    )
}

function LayoutContent() {
    const { currentTheme } = useTheme()

    return (
        <div className={`flex min-h-screen w-full font-sans transition-colors duration-500 ${currentTheme.textColorClass}`}>
            <Background />
            <Sidebar />
            <main className="relative flex flex-1 flex-col pl-16 transition-[padding] duration-300">
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
