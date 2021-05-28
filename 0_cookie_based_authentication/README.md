# Authentication by setting up a cookie

**Setting up a cookie is a way of storing data on client-side.**

In this approach, a cookie, which has user's information, is set when users enter the system.

## Cookie

> An HTTP cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information (such as items added in the shopping cart in an online store) or to record the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past). [Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie)

## Ins and Outs


Why should we choose this approach?

- Storing data on client-side saves server's memory.

Why should not we choose this approach?
- Storing important information on client-side creates huge security vulnerability.

**As you guess, security is much more important than the others these days.**

## Routes
- GET '/' &rarr; Home Route | Not Protected
- POST '/login' &rarr; Login Route | Not Protected
- GET '/protected' &rarr; Protected Route | Protected

## Files
- db/user/johndoe.js &rarr; Contains dummy user credentials
    - You can use this credentials while sending a post request to the /login route. {'username': 'johndoe','password' = 'Johndoe98*'}
- utils/utils.js &rarr; Contains utility functions for encryption and decrpytion data
- index.js &rarr; Contains required code to set up a express server
- middlewares.js &rarr; Contains a middleware that authenticate the request.
    - Simply, it compares the user information in the request with the server.
