## Query Resolvers

- The resolver object should have the same shape 
as our type definitions. For example:

```js
const resolvers = {
    Query: {
        tweet() {
            console.log("called ok");
            return null;
        },
        country() {
            console.log("Sweden");
            return "Sweden";
        }
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

```

- Run a test in Apollo sandbox

```js
 {
  tweet(id:"1"){
    text
  } 
  country
}
```

- The expected output should be:

```js
{
  "data": {
    "tweet": null,
    "country": "Sweden"
  }
}
```
- The console should show:
```bash
Query is called, ok
Sweden

```

## Create a Fake Database to Implement Resolvers

1. Create a resolver for the allTweets field. For this, we need a list of tweets.

2. Create a fake database:

```js
const tweets = [
{
    id:"1",
    text:"hello"

}
]
```
- Updated server.js

```js
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
        // tweet() {
        //     console.log("Query is called ,ok")
        //     return null;
        // },
        // country() {
        //     console.log("Sweden")
        //     return "Sweden";
        // },

        allTweets() {
            return tweets;
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`Server is running on ${url}`);
});

```
- test in apolo sandbox
```js
{
    allTweets {
        id
        text
    }
}
```
- The expected output should be:

```js
{
  "data": {
    "allTweets": [
      {
        "id": "1",
        "text": "first 1"
      },
      {
        "id": "2",
        "text": "Second 2"
      }
    ]
  }
}
```