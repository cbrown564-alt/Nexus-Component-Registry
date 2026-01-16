import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import StoriesPage from '@/pages/StoriesPage'
import StoryDetailPage from '@/pages/StoryDetailPage'
import ThemesPage from '@/pages/ThemesPage'
import TemplatesPage from '@/pages/TemplatesPage'
import TemplatePage from '@/pages/TemplatePage'
import ComponentsPage from '@/pages/ComponentsPage'
import ComponentPage from '@/pages/ComponentPage'
import TemplateComponentsPage from '@/pages/TemplateComponentsPage'
import HooksPage from '@/pages/HooksPage'
import TokensPage from '@/pages/TokensPage'
import MobileHomePage from '@/pages/mobile/MobileHomePage'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'themes', element: <ThemesPage /> },
            { path: 'stories', element: <StoriesPage /> },
            { path: 'stories/:storyId', element: <StoryDetailPage /> },
            { path: 'templates', element: <TemplatesPage /> },
            { path: 'templates/:id', element: <TemplatePage /> },
            { path: 'templates/:id/components', element: <TemplateComponentsPage /> },
            { path: 'components', element: <ComponentsPage /> },
            { path: 'components/:theme/:name', element: <ComponentPage /> },
            { path: 'hooks', element: <HooksPage /> },
            { path: 'tokens', element: <TokensPage /> },
            { path: 'mobile', element: <MobileHomePage /> },

        ],
    },
])
