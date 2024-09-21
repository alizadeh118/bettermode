# Bettermode task assignment

## Live Demo
A live demo of the application is available at [Live Demo URL](https://bettermode.alizadeh118.ir).

## Installation
- Clone the repository
- Run `yarn install` to install the dependencies
- Run `yarn dev` to start the development server

## Project Structure
```
src
├── components   # Reusable UI components
├── context      # Context providers for managing global state
├── graphql      # GraphQL client setup, queries, and mutations
├── pages        # Application pages
├── router       # Routing configuration
├── utils        # Utility functions
```

## GraphQL Integration
This project uses GraphQL for data fetching and state management. All queries and mutations are located in the `src/graphql` folder, including:

- `queries/`: Contains all GraphQL queries, like fetching posts
- `mutations/`: Contains mutation operations, like adding or removing reactions
- `generated/`: Contains code generator tools for GraphQL types, including:
    - `fragment-masking.ts`
    - `gql.ts`
    - `graphql.ts`
    - `index.ts`

The GraphQL client is initialized in `graphql/client.ts`.


## Technologies Used
- **React**: Frontend framework for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **GraphQL**: API communication
- **Vite**: Fast development build tool
- **React Router**: Declarative routing for React applications
