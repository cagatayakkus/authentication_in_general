# Authentication by setting up a session

**Setting up a session is a way of storing data on server-side.**

In this approach, a session, which has user's information, is set when users enter the system.

## Session

Session can be considered as a cookie stored on server-side.

## Ins and Outs


Why should we choose this approach?

- Storing data on server-side is much more secure than storing them on client-side.

Why should not we choose this approach?

- Storing data on server's memory is a wasteful approach. It could be a huge problem.

**It would be a good choice for small enterprises.**

## Routes
- GET '/' &rarr; Home Route | Not Protected
- POST '/login' &rarr; Login Route | Not Protected
- GET '/protected' &rarr; Protected Route | Protected

## Libraries
- **Node.js** as a runtime environment.
- **express** for setting up a server easily.
- **express-session** for setting up a session on server-side.
- **passport & passport-local** for handling authentication affairs.
- **crypto** for encryption and validation data.

## Files
- config/passport.js &rarr; Contains required configurations for Passport.js library.
- db/user.js &rarr; Contains dummy user credentials
    - You can use one of these credentials while sending a post request to the /login route. One of them:\
    {'username': 'johndoe','password': 'Johndoe98*'}
- utils/utils.js &rarr; Contains utility functions for encryption and validation data
- index.js &rarr; Contains required code to set up a express server
- middlewares.js &rarr; Contains a middleware that authenticates the request.
    - Simply, it checks if the request is authenticated or not.
- routes.js &rarr; Takes care about routes.
