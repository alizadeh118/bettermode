import { ApolloClient, createHttpLink, type HttpOptions, InMemoryCache } from '@apollo/client'

const createLink = (opts: HttpOptions = {}) => {
    return createHttpLink({ uri: import.meta.env.VITE_API_URL, ...opts })
}

export const setAuthToken = (token: string) => {
    const options: HttpOptions = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    client.setLink(createLink(options))
}

const cache = new InMemoryCache({})

const client = new ApolloClient({
    cache,
    link: createLink(),
})

setAuthToken(import.meta.env.VITE_TOKEN)

export default client
