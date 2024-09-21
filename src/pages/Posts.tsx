import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { BmButton, PostCard } from '@/components'
import { GetPostsQuery } from '@/graphql/generated/graphql.ts'
import { GET_POSTS } from '@/graphql/queries'

type Post = NonNullable<GetPostsQuery['posts']['nodes']>[number]

const Posts = () => {
    const limit = 4
    const [offset, setOffset] = useState(0)
    const [posts, setPosts] = useState<Post[]>([])

    const { loading, data } = useQuery(GET_POSTS, {
        variables: {
            spaceIds: [import.meta.env.VITE_SPACE_ID],
            limit,
            offset,
        },
    })

    const hasNextPage = data?.posts?.pageInfo?.hasNextPage ?? true

    useEffect(() => {
        if (data?.posts?.nodes) {
            setPosts((prevPosts) => [...prevPosts, ...(data.posts.nodes || [])])
        }
    }, [data])

    return (
        <main className="container mx-auto my-4">
            <Helmet>
                <title>Posts | Bettermode</title>
            </Helmet>
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 640: 2, 768: 3, 1280: 4 }}>
                <Masonry gutter="1rem">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post}>
                            {post.description}
                        </PostCard>
                    ))}
                    {loading && Array.from({ length: limit }, (_, index) => <PostCard key={index} skeleton />)}
                </Masonry>
            </ResponsiveMasonry>
            {hasNextPage && posts.length > 0 && (
                <div className="mt-6 text-center">
                    <BmButton
                        loading={loading}
                        onClick={() => {
                            setOffset(offset + limit)
                        }}
                    >
                        Show More
                    </BmButton>
                </div>
            )}
        </main>
    )
}
export default Posts
