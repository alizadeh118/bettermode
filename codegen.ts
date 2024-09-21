import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://api.bettermode.com/graphql',
    documents: ['src/graphql/**/*.{ts,tsx}'],
    generates: {
        './src/graphql/generated/': {
            preset: 'client',
            presetConfig: {
                gqlTagName: 'gql',
            },
            config: {
                enumsAsTypes: true,
            },
        },
    },
    ignoreNoDocuments: true,
    overwrite: true,
}

export default config
