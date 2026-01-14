import { useParams, Navigate } from 'react-router-dom'
import { stories } from '@/data/stories'
import ScrollyTellingLayout from '@/components/stories/ScrollyTellingLayout'

export default function StoryDetailPage() {
    const { storyId } = useParams<{ storyId: string }>()
    const story = stories.find((s) => s.id === storyId)

    if (!story) {
        return <Navigate to="/stories" replace />
    }

    return <ScrollyTellingLayout story={story} />
}
