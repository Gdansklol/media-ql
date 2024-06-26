# Your graphQL API


### Get started with Apollo Server

link : (https://www.apollographql.com/docs/apollo-server/getting-started)

# Set up 

1. Iinitialize node respository / package.json

```bash
npm init -y
```

2. set up apollo-server and graphql
```bash
 npm i apollo-server graphql
```

3. set up nodemon -D(devDependencies)
```bash
npm i nodemon -D
```

4. create a new file and .gitignore file
```bash
touch server.js
```

```bash
touch .gitignore
```
<hr>

-  We should import
{ApolloServer, gql} from "apollo-server"

## Why is there a "type" field in package.json?
The "type" field in package.json is included because it allows you to specify the syntax you want to use, such as CommonJS or ES modules.

For instance, you might use:
```bash
const { ApolloServer, gql } = require("apollo-server");

```

This syntax is equivalent to:

```bash
import { ApolloServer, gql } from "apollo-server";

```
Both of these lines achieve the same result. The choice between them depends on your preference and the module system you want to use.

#### Let's Create Our Server !
> Here’s how to set up your server with a Mutation type in server.js:

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
