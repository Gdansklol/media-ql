import {ApolloServer, gql} from "apollo-server";

const typeDefs = gql `
    type Tweet {
        id:ID
        text:String
    }

    type Query {
       allTweets:[Tweet]
    }
`;

const server = new ApolloServer({typeDefs});

server.listen().then(({url})=>{
    console.log(`Server is running on ${url}`);
});

