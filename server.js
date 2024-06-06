import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName:String!
    }
    type Tweet {
        id: ID!
        text: String!
        author: User!
    }
    type Query {
        allTweets: [Tweet!]!
        tweet(id: !): Tweet
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`;

const server = new ApolloServer({ typeDefs });

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`Server is running on ${url}`);
});
