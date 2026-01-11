
import { useMemo } from 'react'

interface Point {
    x: number
    y: number
}

interface UseGraphDataOptions {
    points?: number
    min?: number
    max?: number
    smoothing?: number
}

export function useGraphData({ points = 20, min = 0, max = 100, smoothing = 0.2 }: UseGraphDataOptions = {}) {

    // Generate random data points
    const data = useMemo(() => {
        return Array.from({ length: points }, () => Math.floor(Math.random() * (max - min) + min))
    }, [points, min, max])

    // Generate SVG path for a line chart
    const getPath = (width: number, height: number) => {
        // Normalize data to fit width/height
        const stepX = width / (points - 1)
        const normalizeY = (val: number) => height - ((val - min) / (max - min)) * height

        // Calculate points
        const coordinates: Point[] = data.map((val, i) => ({
            x: i * stepX,
            y: normalizeY(val)
        }))

        // Basic Catmull-Rom spline or simple line
        // For simplicity, let's do a simple line first, or a cubic bezier if we want smooth
        return coordinates.reduce((path, point, i, a) => {
            if (i === 0) return `M ${point.x},${point.y}`

            // For cubic bezier smoothing (simplified)
            // detailed implementation omitted for brevity, using simple line for now
            // Or better: Use a simple smoothing algorithm

            // Simple Line:
            // return \`\${path} L \${point.x},\${point.y}\`

            // Cubic Bezier (simple control points):
            const prev = a[i - 1]
            const cp1x = prev.x + (point.x - prev.x) * smoothing
            const cp1y = prev.y
            const cp2x = point.x - (point.x - prev.x) * smoothing
            const cp2y = point.y

            return `${path} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${point.x},${point.y}`
        }, '')
    }

    // Generate SVG path for an area chart (closed loop)
    const getAreaPath = (width: number, height: number) => {
        const linePath = getPath(width, height)
        return `${linePath} L ${width},${height} L 0,${height} Z`
    }

    // Expose a helper to get coordinates for a specific index
    const getPoint = (index: number, width: number, height: number): Point => {
        const stepX = width / (points - 1)
        const normalizeY = (val: number) => height - ((val - min) / (max - min)) * height

        // Clamp index
        const safeIndex = Math.max(0, Math.min(index, data.length - 1))

        return {
            x: safeIndex * stepX,
            y: normalizeY(data[safeIndex])
        }
    }

    return { data, getPath, getAreaPath, getPoint }
}
