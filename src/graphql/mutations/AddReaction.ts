import { gql } from '@/graphql/generated'

export default gql(/* GraphQL */ `
    mutation AddReaction($postId: ID!) {
        addReaction(input: { reaction: "heart" }, postId: $postId) {
            status
        }
    }
`)
