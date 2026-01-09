import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import TemplatesPage from '@/pages/TemplatesPage'
import TemplatePage from '@/pages/TemplatePage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'templates', element: <TemplatesPage /> },
            { path: 'templates/:id', element: <TemplatePage /> },
            // Future routes:
            // { path: 'components', element: <ComponentsPage /> },
            // { path: 'components/:theme/:name', element: <ComponentPage /> },
            // { path: 'hooks', element: <HooksPage /> },
        ],
    },
])
