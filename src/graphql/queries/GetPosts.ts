import { gql } from '@/graphql/generated'

export default gql(/* GraphQL */ `
    query GetPosts($spaceIds: [ID!], $limit: Int!, $offset: Int) {
        posts(spaceIds: $spaceIds, limit: $limit, offset: $offset, orderByString: "publishedAt", reverse: false) {
            nodes {
                updatedAt
                createdBy {
                    member {
                        name
                        profilePicture {
                            ... on Image {
                                url
                            }
                        }
                    }
                }
                description
                id
                title
                fields {
                    key
                    value
                    relationEntities {
                        medias {
                            ... on Image {
                                url
                            }
                        }
                    }
                }
                tags {
                    id
                    title
                    slug
                }
                reactions {
                    reaction
                }
            }
            pageInfo {
                hasNextPage
            }
        }
    }
`)
