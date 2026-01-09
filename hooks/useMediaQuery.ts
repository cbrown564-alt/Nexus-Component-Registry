import { useState, useEffect } from 'react'

/**
 * Detect if a media query matches
 * 
 * @param query - CSS media query string
 * @returns Boolean indicating if the query matches
 * 
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 768px)')
 * const isDark = useMediaQuery('(prefers-color-scheme: dark)')
 * 
 * return isMobile ? <MobileNav /> : <DesktopNav />
 * ```
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        setMatches(mediaQuery.matches)

        const handler = (e: MediaQueryListEvent) => {
            setMatches(e.matches)
        }

        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [query])

    return matches
}

export default useMediaQuery
