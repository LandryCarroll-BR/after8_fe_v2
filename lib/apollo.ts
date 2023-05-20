import { ApolloClient, InMemoryCache } from "@apollo/client"

let WORDPRESS_API_URL

if (process.env.NODE_ENV === "development") {
  WORDPRESS_API_URL = "http://after8music.local/graphql"
} else if (process.env.NODE_ENV === "production") {
  WORDPRESS_API_URL = process.env.WORDPRESS_API_URL
}

export const apolloClient = new ApolloClient({
  uri: WORDPRESS_API_URL,
  cache: new InMemoryCache(),
})
