import { useRef, useState, useCallback, type MouseEvent, type RefObject } from 'react'

interface SpotlightState {
    position: { x: number; y: number }
    opacity: number
}

interface UseSpotlightReturn {
    ref: RefObject<HTMLDivElement>
    position: { x: number; y: number }
    opacity: number
    handlers: {
        onMouseMove: (e: MouseEvent<HTMLDivElement>) => void
        onMouseEnter: () => void
        onMouseLeave: () => void
    }
}

/**
 * Track mouse position for spotlight/hover effects
 * 
 * @example
 * ```tsx
 * const { ref, position, opacity, handlers } = useSpotlight()
 * 
 * return (
 *   <div ref={ref} {...handlers}>
 *     <div style={{
 *       background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent)`,
 *       opacity
 *     }} />
 *   </div>
 * )
 * ```
 */
export function useSpotlight(): UseSpotlightReturn {
    const ref = useRef<HTMLDivElement>(null)
    const [state, setState] = useState<SpotlightState>({
        position: { x: 0, y: 0 },
        opacity: 0,
    })

    const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        setState((prev) => ({
            ...prev,
            position: { x: e.clientX - rect.left, y: e.clientY - rect.top },
        }))
    }, [])

    const onMouseEnter = useCallback(() => {
        setState((prev) => ({ ...prev, opacity: 1 }))
    }, [])

    const onMouseLeave = useCallback(() => {
        setState((prev) => ({ ...prev, opacity: 0 }))
    }, [])

    return {
        ref,
        position: state.position,
        opacity: state.opacity,
        handlers: { onMouseMove, onMouseEnter, onMouseLeave },
    }
}

export default useSpotlight
