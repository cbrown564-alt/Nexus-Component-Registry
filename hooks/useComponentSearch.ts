import { useMemo } from 'react'
import Fuse from 'fuse.js'
import { ComponentMeta, components } from '@/data/components'

export interface SearchResult {
    component: ComponentMeta
    score?: number
    matches?: Fuse.FuseResultMatch[]
}

export const useComponentSearch = (query: string): SearchResult[] => {
    // Memoize the fuse instance so it's not recreated on every render
    const fuse = useMemo(() => {
        const options: Fuse.IFuseOptions<ComponentMeta> = {
            includeScore: true,
            includeMatches: true,
            threshold: 0.4, // Lower threshold = stricter matching
            keys: [
                { name: 'name', weight: 1.0 },       // Exact name match is highest priority
                { name: 'tags', weight: 0.8 },       // Tags are strong indicators of intent
                { name: 'description', weight: 0.6 }, // Description provides context
                { name: 'category', weight: 0.4 },   // Category is helpful but broad
                { name: 'theme', weight: 0.3 }       // Theme is lowest priority
            ]
        }
        return new Fuse(components, options)
    }, [])

    // Memoize search results
    const results = useMemo(() => {
        if (!query || query.trim() === '') {
            return []
        }

        const runQuery = fuse.search(query)

        return runQuery.map(result => ({
            component: result.item,
            score: result.score,
            matches: result.matches
        }))
    }, [fuse, query])

    return results
}
