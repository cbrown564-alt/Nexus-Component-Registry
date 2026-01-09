import { useEffect, useRef, type RefObject } from 'react'

/**
 * Detect clicks outside of a referenced element
 * 
 * @param callback - Function to call when clicked outside
 * @returns Ref to attach to the element
 * 
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false)
 * const ref = useClickOutside(() => setIsOpen(false))
 * 
 * return (
 *   <div ref={ref}>
 *     {isOpen && <Dropdown />}
 *   </div>
 * )
 * ```
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
    callback: () => void
): RefObject<T> {
    const ref = useRef<T>(null)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [callback])

    return ref
}

export default useClickOutside
