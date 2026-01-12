import { Menu, X } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

interface MobileMenuButtonProps {
    isOpen: boolean
    onToggle: () => void
}

/**
 * Hamburger menu button for mobile navigation
 */
export default function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
    const { theme } = useTheme()

    return (
        <button
            onClick={onToggle}
            className="lg:hidden fixed top-4 left-4 z-50 p-2 border rounded-lg transition-colors"
            style={{
                backgroundColor: theme.colors.background || theme.colors.card,
                borderColor: theme.colors.border,
                color: theme.colors.mutedForeground
            }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.colors.foreground;
                e.currentTarget.style.borderColor = theme.colors.foreground;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.colors.mutedForeground;
                e.currentTarget.style.borderColor = theme.colors.border;
            }}
        >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
    )
}
