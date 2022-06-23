import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3r27m0f5401z74wp52xbe/master',
  cache:new InMemoryCache()
})