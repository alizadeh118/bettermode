import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { ApolloProvider } from '@apollo/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/context/ThemeContext.tsx'
import client from '@/graphql/client.ts'
import router from '@/router/Routes'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <ApolloProvider client={client}>
                <RouterProvider router={router} />
            </ApolloProvider>
        </ThemeProvider>
    </StrictMode>,
)
