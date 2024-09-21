import React from 'react'

import { cn } from '@/utils'

type BmButtonProps = {
    loading?: boolean
    onClick?: () => void
    children: React.ReactNode
}
const BmButton = ({ loading, onClick, children }: BmButtonProps) => {
    return (
        <button
            type="button"
            className={cn(
                'mb-2 me-2 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-10 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
                {
                    'pointer-events-none': loading,
                },
            )}
            disabled={loading}
            onClick={onClick}
        >
            <span className={cn(loading && 'invisible')}>{children}</span>
            {loading && (
                <span className="absolute animate-spin">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="currentColor"
                    >
                        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                    </svg>
                </span>
            )}
        </button>
    )
}

export default BmButton
