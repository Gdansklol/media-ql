- query in the `GraphQL` word is just
like doing a get request in the `REST API`


- // GET /api/v1/tweets
// GET /api/v1/tweets/:id



- just putting arguments here in the
graphql word.
```js

type Query {
    allTweets: [Tweet]
    tweet(id:ID): Tweet
}
```

<hr>

- If we wanted to write a query for both of  these
things it would look somehing like this 
```js
query ($tweetId: ID){
    allTweets {
        text
}
    tweet(id: $tweetId) {
        author {
            username
        }
    }
}
```
- server.js with mutation

```js
import {ApolloServer, gql} from "apollo-server";

const typeDefs = gql `
    type User {
        id:ID
        username: String
    }
    type Tweet {
        id:ID
        text:String
        authour: User
    }
    type Query {
       allTweets:[Tweet]
       tweet(id:ID):Tweet
    }
    type Mutation {
        postTweet(text:String, userId: ID): Tweet
        deleteTweet(id:ID): Boolean
    }
`;

const server = new ApolloServer({typeDefs});

server.listen({port:4001}).then(({url})=>{
    console.log(`Server is running on ${url}`);
});


```