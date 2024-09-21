import { gql } from '@/graphql/generated'

export default gql(/* GraphQL */ `
    mutation RemoveReaction($postId: ID!) {
        removeReaction(reaction: "heart", postId: $postId) {
            status
        }
    }
`)
