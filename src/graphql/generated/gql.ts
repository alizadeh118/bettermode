/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation AddReaction($postId: ID!) {\n        addReaction(input: { reaction: \"heart\" }, postId: $postId) {\n            status\n        }\n    }\n": types.AddReactionDocument,
    "\n    mutation RemoveReaction($postId: ID!) {\n        removeReaction(reaction: \"heart\", postId: $postId) {\n            status\n        }\n    }\n": types.RemoveReactionDocument,
    "\n    query GetPost($id: ID!) {\n        post(id: $id) {\n            id\n            title\n            updatedAt\n            createdBy {\n                member {\n                    name\n                    profilePicture {\n                        ... on Image {\n                            url\n                        }\n                    }\n                }\n            }\n            fields {\n                key\n                value\n                relationEntities {\n                    medias {\n                        ... on Image {\n                            url\n                        }\n                    }\n                }\n            }\n            tags {\n                id\n                title\n                slug\n            }\n            reactions {\n                reaction\n            }\n        }\n    }\n": types.GetPostDocument,
    "\n    query GetPosts($spaceIds: [ID!], $limit: Int!, $offset: Int) {\n        posts(spaceIds: $spaceIds, limit: $limit, offset: $offset, orderByString: \"publishedAt\", reverse: false) {\n            nodes {\n                updatedAt\n                createdBy {\n                    member {\n                        name\n                        profilePicture {\n                            ... on Image {\n                                url\n                            }\n                        }\n                    }\n                }\n                description\n                id\n                title\n                fields {\n                    key\n                    value\n                    relationEntities {\n                        medias {\n                            ... on Image {\n                                url\n                            }\n                        }\n                    }\n                }\n                tags {\n                    id\n                    title\n                    slug\n                }\n                reactions {\n                    reaction\n                }\n            }\n            pageInfo {\n                hasNextPage\n            }\n        }\n    }\n": types.GetPostsDocument,
    "\n    query GetTokens($networkDomain: String) {\n        tokens(networkDomain: $networkDomain) {\n            accessToken\n        }\n    }\n": types.GetTokensDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation AddReaction($postId: ID!) {\n        addReaction(input: { reaction: \"heart\" }, postId: $postId) {\n            status\n        }\n    }\n"): (typeof documents)["\n    mutation AddReaction($postId: ID!) {\n        addReaction(input: { reaction: \"heart\" }, postId: $postId) {\n            status\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveReaction($postId: ID!) {\n        removeReaction(reaction: \"heart\", postId: $postId) {\n            status\n        }\n    }\n"): (typeof documents)["\n    mutation RemoveReaction($postId: ID!) {\n        removeReaction(reaction: \"heart\", postId: $postId) {\n            status\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetPost($id: ID!) {\n        post(id: $id) {\n            id\n            title\n            updatedAt\n            createdBy {\n                member {\n                    name\n                    profilePicture {\n                        ... on Image {\n                            url\n                        }\n                    }\n                }\n            }\n            fields {\n                key\n                value\n                relationEntities {\n                    medias {\n                        ... on Image {\n                            url\n                        }\n                    }\n                }\n            }\n            tags {\n                id\n                title\n                slug\n            }\n            reactions {\n                reaction\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPost($id: ID!) {\n        post(id: $id) {\n            id\n            title\n            updatedAt\n            createdBy {\n                member {\n                    name\n                    profilePicture {\n                        ... on Image {\n                            url\n                        }\n                    }\n                }\n            }\n            fields {\n                key\n                value\n                relationEntities {\n                    medias {\n                        ... on Image {\n                            url\n                        }\n                    }\n                }\n            }\n            tags {\n                id\n                title\n                slug\n            }\n            reactions {\n                reaction\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetPosts($spaceIds: [ID!], $limit: Int!, $offset: Int) {\n        posts(spaceIds: $spaceIds, limit: $limit, offset: $offset, orderByString: \"publishedAt\", reverse: false) {\n            nodes {\n                updatedAt\n                createdBy {\n                    member {\n                        name\n                        profilePicture {\n                            ... on Image {\n                                url\n                            }\n                        }\n                    }\n                }\n                description\n                id\n                title\n                fields {\n                    key\n                    value\n                    relationEntities {\n                        medias {\n                            ... on Image {\n                                url\n                            }\n                        }\n                    }\n                }\n                tags {\n                    id\n                    title\n                    slug\n                }\n                reactions {\n                    reaction\n                }\n            }\n            pageInfo {\n                hasNextPage\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPosts($spaceIds: [ID!], $limit: Int!, $offset: Int) {\n        posts(spaceIds: $spaceIds, limit: $limit, offset: $offset, orderByString: \"publishedAt\", reverse: false) {\n            nodes {\n                updatedAt\n                createdBy {\n                    member {\n                        name\n                        profilePicture {\n                            ... on Image {\n                                url\n                            }\n                        }\n                    }\n                }\n                description\n                id\n                title\n                fields {\n                    key\n                    value\n                    relationEntities {\n                        medias {\n                            ... on Image {\n                                url\n                            }\n                        }\n                    }\n                }\n                tags {\n                    id\n                    title\n                    slug\n                }\n                reactions {\n                    reaction\n                }\n            }\n            pageInfo {\n                hasNextPage\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetTokens($networkDomain: String) {\n        tokens(networkDomain: $networkDomain) {\n            accessToken\n        }\n    }\n"): (typeof documents)["\n    query GetTokens($networkDomain: String) {\n        tokens(networkDomain: $networkDomain) {\n            accessToken\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;