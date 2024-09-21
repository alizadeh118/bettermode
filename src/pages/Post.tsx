import { useQuery } from '@apollo/client'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'

import { BmButton, PostCard } from '@/components'
import { GET_POST } from '@/graphql/queries'

const Post = () => {
    const { id } = useParams()
    const { loading, data } = useQuery(GET_POST, {
        variables: { id: id! },
    })
    const content = data?.post?.fields?.find((field) => field.key === 'content')

    return (
        <main className="container mx-auto my-4">
            <Helmet>
                <title>Post Details | Bettermode</title>
            </Helmet>
            <PostCard single skeleton={loading} post={data?.post}>
                {!loading && (
                    <article
                        className="prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: JSON.parse(content?.value || '') }}
                    ></article>
                )}
            </PostCard>
            <div className="mt-4">
                <Link to="/posts">
                    <BmButton>
                        <span className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="currentColor"
                            >
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                            </svg>
                            <span>Back to Posts</span>
                        </span>
                    </BmButton>
                </Link>
            </div>
        </main>
    )
}
export default Post
