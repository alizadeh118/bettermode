import { gql } from '@/graphql/generated'

export default gql(/* GraphQL */ `
    query GetPost($id: ID!) {
        post(id: $id) {
            id
            title
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
    }
`)
