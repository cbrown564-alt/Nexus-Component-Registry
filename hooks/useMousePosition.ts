import { useState, useEffect } from 'react'

interface MousePosition {
    x: number
    y: number
}

/**
 * Track global mouse coordinates
 * 
 * @example
 * ```tsx
 * const { x, y } = useMousePosition()
 * return <div>Mouse: {x}, {y}</div>
 * ```
 */
export function useMousePosition(): MousePosition {
    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return position
}

export default useMousePosition
