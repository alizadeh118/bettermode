import Skeleton from 'react-loading-skeleton'
import { Link, useNavigate } from 'react-router-dom'

import LikeButton from '@/components/LikeButton.tsx'
import { GetPostsQuery } from '@/graphql/generated/graphql.ts'
import { cn, getRelativeTime, randomNumber } from '@/utils'

type PostCardProps = {
    post?: NonNullable<GetPostsQuery['posts']['nodes']>[number]
    single?: boolean
    skeleton?: boolean
    children?: React.ReactNode
}

function PostCard({ post, skeleton, single, children }: PostCardProps) {
    const navigate = useNavigate()

    const getPostBanner = (post: PostCardProps['post']) => {
        if (post?.fields) {
            const banner = post.fields.find((field) => field.key === 'coverImage')
            if (banner) {
                const media = banner.relationEntities?.medias[0]
                if (media && 'url' in media) {
                    return media.url
                }
            }
        }
    }

    const getProfileImage = (post: PostCardProps['post']) => {
        const profilePicture = post?.createdBy?.member?.profilePicture

        if (profilePicture && 'url' in profilePicture) {
            return profilePicture.url
        }
    }

    const isPostLiked = (post: PostCardProps['post']) => {
        return post?.reactions?.some((reaction) => reaction.reaction === 'heart')
    }
    const onClick = (e: React.MouseEvent) => {
        e.preventDefault()
        if (single || !post?.id) return
        navigate(`/posts/${post.id}`)
    }

    const WrapperComponent = single ? 'div' : Link
    // const WrapperComponentProps: WrapperProps =

    return (
        <WrapperComponent
            to={`/posts/${post?.id}`}
            className={cn(
                'block rounded-2xl border border-gray-50 bg-white shadow transition dark:border-gray-700 dark:bg-gray-800',
                {
                    'cursor-pointer hover:border-gray-200 hover:shadow-md dark:hover:border-gray-600': !single,
                    'pointer-events-none': skeleton,
                },
            )}
            onClick={onClick}
        >
            <div className="block p-2">
                {skeleton ? (
                    <Skeleton className="aspect-video max-h-52" borderRadius={16} />
                ) : (
                    <img
                        className="h-52 w-full rounded-2xl object-cover object-center"
                        src={getPostBanner(post)}
                        alt={post?.title || ''}
                    />
                )}

                <span className="flex flex-wrap gap-1 rounded px-2 py-1 text-xs text-gray-400">
                    {post?.tags?.map((tag) => <span key={tag.id}>#{tag.slug}</span>)}
                </span>
            </div>
            <div className="flex flex-col gap-2 p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                    {skeleton ? <Skeleton width={`${randomNumber(20, 80)}%`} /> : post?.title}
                </h5>
                {skeleton ? (
                    <div>
                        {Array.from({ length: randomNumber(2, 8) }, (_, index) => (
                            <Skeleton key={index} />
                        ))}
                        <Skeleton width={`${randomNumber(10, 80)}%`} />
                    </div>
                ) : (
                    <div className="font-normal text-gray-500 dark:text-gray-400">{children}</div>
                )}
                <div className="flex items-end justify-between">
                    <div className="mt-5 flex flex-col text-xs">
                        <span className="inline-flex gap-1 font-semibold text-gray-800 dark:text-gray-200">
                            {skeleton ? (
                                <Skeleton width={randomNumber(40, 100)} />
                            ) : (
                                <span>By {post?.createdBy?.member?.name}</span>
                            )}
                        </span>
                        <span className="text-gray-500">
                            {skeleton ? <Skeleton width={100} /> : getRelativeTime(post?.updatedAt)}
                        </span>
                        {skeleton ? (
                            <Skeleton circle height={32} width={32} />
                        ) : (
                            <img
                                className="mt-2 size-8 rounded-full"
                                src={getProfileImage(post)}
                                alt={post?.createdBy?.member?.name || ''}
                            />
                        )}
                    </div>
                    {skeleton ? (
                        <Skeleton circle height={24} width={24} />
                    ) : (
                        <LikeButton defaultValue={isPostLiked(post)} postId={post!.id} />
                    )}
                </div>
            </div>
        </WrapperComponent>
    )
}

export default PostCard
