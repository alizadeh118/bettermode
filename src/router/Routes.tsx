import { createBrowserRouter, redirect } from 'react-router-dom'

import App from '@/App.tsx'
import Post from '@/pages/Post.tsx'
import Posts from '@/pages/Posts.tsx'

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                loader: () => redirect('/posts'),
            },
            {
                path: '/posts',
                element: <Posts />,
            },
            {
                path: '/posts/:id',
                element: <Post />,
            },
        ],
    },
])

export default browserRouter
