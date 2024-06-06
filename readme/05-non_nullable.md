## Non Nullable Fields

```js
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }
    type Tweet {
        id: ID!
        text: String!
        author: User!
    }
    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet!
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

```

### Explanation 

- Using the exclamation mark (!) in GraphQL schema definitions denotes 
that the field is non-nullable. This means that the field must always 
have a value; it cannot be null.

### Why Did It Break Everything?
- If you encounter errors after adding the exclamation marks, it could be 
because the fields are now required but the server or the resolvers are not providing these required values correctly. Non-nullable fields must 
be guaranteed to have a value, and if they don't, it causes an error.

## Adjusting the Query Type
- To avoid errors during testing, you can make the tweet field in the
 Query type nullable again:

```js
type Query {
    allTypes: [Tweet!]!
    tweet(id:ID): Tweet
}
```
- Now, let's test it in Apollo Sandbox:
```
{
  tweet(id:"1111"){
    text
  }  
}
```
### Understanding Non-Nullable Fields
- When you declare a field as non-nullable (with !), it means 
that the field cannot be null. For example, Tweet! means that 
the query must return a Tweet object, and it cannot be null. 
If your data might not always have a value for that field, you 
should avoid using !.

- By making a field non-nullable, you're instructing GraphQL that 
this field should always have a value, which can help catch 
errors early. 
- However, it also means you need to ensure that your resolvers 
always provide a value for these fields.

<hr>
```js
firstName:String!
```

- this tells graphQl that first name might be a String
or it might be null. 
- this is coummuication with graphql and then
grahpql we know what is required and what is
not required.



