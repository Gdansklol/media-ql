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

### test to run
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