import { Menu, X } from 'lucide-react'

interface MobileMenuButtonProps {
    isOpen: boolean
    onToggle: () => void
}

/**
 * Hamburger menu button for mobile navigation
 */
export default function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
    return (
        <button
            onClick={onToggle}
            className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
        >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
    )
}
