- in .gitignoe file

node_modules/


- and then initialize a new Git repository.
```bash
git init .
```
ex: Reinitialized existing Git repository in /aaa/abcd/media-ql/.git/

### Modify package.json
- open package.json
- change test to dev and start with ig. nodemon server.js
```json
    "test": "echo \"Error: no test specified\" && exit 1"
```

to 

```json
 "dev": "nodemon server.js"
```
- add type is module 
```json
 "devDependencies": {
    "nodemon": "^3.1.3"
  }
```

to 

```json
 "devDependencies": {
    "nodemon": "^3.1.3"
  },
  "type": "module"
```




