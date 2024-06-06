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

### Test to run
```bash
npm run dev
```
You should see output similar to this:

```bash

> media-ql@1.0.0 dev
> nodemon server.js

[nodemon] 3.1.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js

```

### Let's Create Our Server
First, create a file for your server with the following 
content:

```js
import {ApolloServer, gql} from "apollo-server";

const server = new ApolloServer({});

server.listen().then(({url})=>{
    console.log(`Server is running on ${url}`);
});


```

It shows error output:


```bash
Error: Apollo Server requires either an existing schema, modules or typeDefs
    at ApolloServer.constructSchema
```

## Why Does This Error Occur and How Do We Fix It?

- The reason this error occurs is that GraphQL must know the shape of the data (the schema) in advance. GraphQL APIs consist of many types that define the structure of the data.

- In the case of GraphQL, you need to explain to the GraphQL server the types of the data that your server will return.

- You are going to have explanin to graphql server the tpes
of the data in your server that you're going to return.

- A GraphQL schema provides a root type for each kind of operation. For example:

#### Root Types
- Query: The type for read operations, where you fetch data.

- To fix the error, you need to define the schema (types and resolvers) that tells GraphQL the shape of the data and how to resolve each type. Here’s an example:

```js
import { ApolloServer, gql } from "apollo-server";

// Define your schema using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

// Create a new instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});

```

<hr>

- server.js
First, create your server file as follows:

```js
import {ApolloServer, gql} from "apollo-server";

const typeDefs = gql ``;

const server = new ApolloServer({typeDefs});

server.listen().then(({url})=>{
    console.log(`Server is running on ${url}`);
});

```
## Error Explanation

- If you run the above code, 
it will throw the following error:


```bash
  throw Error('Apollo Server requires either an existing schema, modules or typeDefs');
                  ^

Error: Apollo Server requires either an existing schema, modules or typeDefs
```
- This error occurs because Apollo Server requires a schema to define the structure of your data. The schema is defined using typeDefs.



### Fixing the Error with a Query Type
- To fix this error, you need to define the schema with at least one type. Here’s how you can define a basic schema with a Query type:

```js
import {ApolloServer, gql} from "apollo-server";

const typeDefs = gql `
    type Query {
        text: String
        hello: String
    }
`;

const server = new ApolloServer({typeDefs});

server.listen().then(({url})=>{
    console.log(`Server is running on ${url}`);
});

```

## Customizing the Port Number

- By default, Apollo Server listens on port 4000. 
If you want to choose a different port number, 
you can specify it as follows:

```js
server.listen({ port: 5000 }).then(({ url }) => {
    console.log(`Server is running on ${url}`);
});

```