import { ApolloServer, gql } from "apollo-server";

const tweets = [
    {
        id:"1",
        text:"first 1"
    }, 
    {
        id:"2",
        text:"Second 2"
    },
]
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String
    }
    type Tweet {
        id: ID!
        text: String!
        author: User
    }
    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
        country:String!
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`;

const resolvers = {
    Query: {
        allTweets() {
            return tweets;
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`Server is running on ${url}`);
});
