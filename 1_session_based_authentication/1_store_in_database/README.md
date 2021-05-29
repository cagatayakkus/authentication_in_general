# Storing Sessions in Memory
**In this approach, sessions are stored in a database.**

PS: Storing sessions in a database should not make you consider it is a bad approach. Because databases are stored in server-side.

## Ins and Outs

Why should we choose this approach?

- Storing data on server-side is much more secure than storing them on client-side.
- Storing data in a database saves a lot of space from memory.

## Routes
- GET '/' &rarr; Home Route | Not Protected
- POST '/login' &rarr; Login Route | Not Protected
- GET '/protected' &rarr; Protected Route | Protected

## Libraries
- **Node.js** as a runtime environment.
- **express** for setting up a server easily.
- **express-session** for setting up a session on server-side.
- **passport & passport-local** for handling authentication affairs.
- **mongoose** for translation JavaScript code into MongoDB database representation.
- **connect-mongo** for connecting express session into MongoDB database.
- **crypto** for encryption and validation data.
- **dotenv** for storing not-to-share data.

## Files
- config/passport.js &rarr; Contains required configurations for Passport.js library.
- db.js &rarr; Contains MongoDB connection and initialization first dummy user in it.
    - You can use one of following credentials while sending a post request to the /login route.\
    {'username': 'johndoe','password': 'Johndoe98*'}
- utils/utils.js &rarr; Contains utility functions for encryption and validation data
- index.js &rarr; Contains required code to set up a express server
- middlewares.js &rarr; Contains a middleware that authenticates the request.
    - Simply, it checks if the request is authenticated or not.
- routes.js &rarr; Takes care about routes.

## Database
**Please, do not forget to create .env file and put your MongoDB connection string in it.**

```
DB_STRING = mongodb://localhost:27017/{YOUR_DB_NAME}
```