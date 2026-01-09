import { useEffect, useRef, type RefObject } from 'react'

/**
 * Hook to trap focus within a container element.
 * Useful for modals, dialogs, and dropdown menus.
 * 
 * @param isActive - Whether the focus trap is active
 * @param returnFocusOnDeactivate - Whether to return focus to the previously focused element when trap is deactivated
 * @returns Ref to attach to the container element
 */
export function useFocusTrap<T extends HTMLElement = HTMLDivElement>(
    isActive: boolean,
    returnFocusOnDeactivate = true
): RefObject<T | null> {
    const containerRef = useRef<T>(null)
    const previousFocusRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!isActive) {
            // Return focus when deactivating
            if (returnFocusOnDeactivate && previousFocusRef.current) {
                previousFocusRef.current.focus()
                previousFocusRef.current = null
            }
            return
        }

        // Store the currently focused element
        previousFocusRef.current = document.activeElement as HTMLElement

        const container = containerRef.current
        if (!container) return

        // Focus the first focusable element
        const focusableElements = getFocusableElements(container)
        if (focusableElements.length > 0) {
            focusableElements[0].focus()
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            const focusable = getFocusableElements(container)
            if (focusable.length === 0) return

            const firstFocusable = focusable[0]
            const lastFocusable = focusable[focusable.length - 1]

            if (e.shiftKey) {
                // Shift + Tab: if on first element, wrap to last
                if (document.activeElement === firstFocusable) {
                    e.preventDefault()
                    lastFocusable.focus()
                }
            } else {
                // Tab: if on last element, wrap to first
                if (document.activeElement === lastFocusable) {
                    e.preventDefault()
                    firstFocusable.focus()
                }
            }
        }

        container.addEventListener('keydown', handleKeyDown)

        return () => {
            container.removeEventListener('keydown', handleKeyDown)
        }
    }, [isActive, returnFocusOnDeactivate])

    return containerRef
}

/**
 * Get all focusable elements within a container
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
    const selector = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
    ].join(', ')

    return Array.from(container.querySelectorAll<HTMLElement>(selector))
}

export default useFocusTrap
