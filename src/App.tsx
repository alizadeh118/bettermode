import { SkeletonTheme } from 'react-loading-skeleton'
import { Outlet } from 'react-router-dom'

import { ThemeToggleButton } from '@/components'
import { useTheme } from '@/context/ThemeContext.tsx'

function App() {
    const { isDarkMode } = useTheme()

    return (
        <main className="container mx-auto my-4 px-4">
            <header className="flex items-center justify-between">
                <h1 className="mb-4 text-3xl text-gray-800 dark:text-gray-100">BetterMode</h1>
                <ThemeToggleButton />
            </header>
            <SkeletonTheme
                baseColor={isDarkMode ? '#374151' : '#ebebeb'}
                highlightColor={isDarkMode ? '#4b5563' : '#f5f5f5'}
            >
                <Outlet />
            </SkeletonTheme>
        </main>
    )
}

export default App
