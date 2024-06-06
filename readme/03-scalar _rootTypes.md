- sever.js
```js
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

```

### Let's create more types

- server.js
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
`;

const server = new ApolloServer({typeDefs});

server.listen({port:4001}).then(({url})=>{
    console.log(`Server is running on ${url}`);
});


```