import { useMutation } from '@apollo/client'
import { useState } from 'react'

import { ADD_REACTION, REMOVE_REACTION } from '@/graphql/mutations'
import { cn } from '@/utils'
type LikeButtonProps = {
    postId: string
    defaultValue?: boolean
}
const LikeButton = ({ postId, defaultValue }: LikeButtonProps) => {
    const [liked, setLiked] = useState(defaultValue)
    const [ping, setPing] = useState(false)

    const [likePost] = useMutation(ADD_REACTION, {
        variables: { postId },
    })

    const [dislikePost] = useMutation(REMOVE_REACTION, {
        variables: { postId },
    })

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setLiked(!liked)
        if (!liked) {
            likePost()
            setPing(true)
            setTimeout(() => {
                setPing(false)
            }, 1000)
        } else {
            dislikePost()
        }
    }

    return (
        <button
            className={cn('relative inline-flex items-center justify-center rounded-full p-1', {
                'fill-red-500 stroke-red-500': liked,
                'fill-none stroke-gray-400 hover:stroke-gray-600': !liked,
            })}
            onClick={handleClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <svg
                className={cn('absolute', { 'animate-ping': ping })}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </button>
    )
}

export default LikeButton
