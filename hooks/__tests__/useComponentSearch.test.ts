import { renderHook } from '@testing-library/react'
import { useComponentSearch } from '../useComponentSearch'

// Mock the components data to avoid loading actual component files with ?raw imports
jest.mock('@/data/components', () => ({
    components: [
        {
            id: 'spotlight-card',
            name: 'SpotlightCard',
            description: 'Mouse-tracking spotlight effect card',
            theme: 'shared',
            category: 'layout',
            tags: ['card', 'hover', 'spotlight', 'mouse-tracking', 'wrapper', 'container', 'effect', 'shadow'],
        },
        {
            id: 'market-ticker',
            name: 'MarketTicker',
            description: 'Real-time stock market ticker',
            theme: 'fintech',
            category: 'data-display',
            tags: ['stocks', 'ticker', 'market', 'prices', 'finance', 'investing', 'trading', 'crypto', 'forex', 'money'],
        },
        {
            id: 'revenue-chart',
            name: 'RevenueChart',
            description: 'Revenue analytics chart with period toggle',
            theme: 'saas',
            category: 'visualization',
            tags: ['chart', 'revenue', 'analytics', 'graph', 'money', 'finance', 'trends'],
        }
    ]
}))

describe('useComponentSearch', () => {
    it('should return empty array for empty query', () => {
        const { result } = renderHook(() => useComponentSearch(''))
        expect(result.current).toEqual([])
    })

    it('should find component by exact name', () => {
        const { result } = renderHook(() => useComponentSearch('SpotlightCard'))
        expect(result.current.length).toBeGreaterThan(0)
        expect(result.current[0].component.name).toBe('SpotlightCard')
        expect(result.current[0].score).toBeDefined()
    })

    it('should find component by synonym tag (intent-based)', () => {
        // "money" was added to market-ticker and others
        const { result } = renderHook(() => useComponentSearch('money'))
        const marketTicker = result.current.find(r => r.component.id === 'market-ticker')
        const revenueChart = result.current.find(r => r.component.id === 'revenue-chart')

        expect(result.current.length).toBeGreaterThan(0)
        // Should find at least one of them
        expect(marketTicker || revenueChart).toBeDefined()
    })

    it('should find component by description keyword', () => {
        // "Mouse-tracking" is in SpotlightCard description
        const { result } = renderHook(() => useComponentSearch('tracking'))
        const spotlight = result.current.find(r => r.component.id === 'spotlight-card')
        expect(spotlight).toBeDefined()
    })

    it('should fuzzy match with typos', () => {
        // "Spotligt" -> SpotlightCard
        const { result } = renderHook(() => useComponentSearch('Spotligt'))
        expect(result.current.length).toBeGreaterThan(0)
        expect(result.current[0].component.name).toBe('SpotlightCard')
    })

    it('should return matches array for highlighting', () => {
        const { result } = renderHook(() => useComponentSearch('money'))
        if (result.current.length > 0) {
            expect(result.current[0].matches).toBeDefined()
            expect(Array.isArray(result.current[0].matches)).toBe(true)
        }
    })
})
