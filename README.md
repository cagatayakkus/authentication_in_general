# Authentication
## _in general, by using Node.js_

This project aims to build my general knowledge about authentication solutions by using [Node.js](https://nodejs.org/).

## Approaches
- [Cookie Based Solution](https://github.com/cagatayakkus/authentication_in_general/tree/main/0_cookie_based_authentication)
    - This approach sets a cookie, which has user information, on client-side when users enter the system. Just because of this behavior, this approach is known as the least secure solution.
- Session Based Solution
    - This approach sets a session, which has user information, on server-side when users enter the system. This solution is better than cookie-based one but not the best.
    - This approach can be implemented in two ways.
    - [Store Session in Memory](https://github.com/cagatayakkus/authentication_in_general/tree/main/1_session_based_authentication/0_store_in_memory)



## Installation
First, clone the project.
```
git clone https://github.com/cagatayakkus/authentication_in_general.git
```
Second, change current directory as the solution you want.
```
cd authentication_in_general/0_cookie_based_authentication
```
Third, install required packages.
```
npm install
```
Last, make it alive.
```
node index
```

---
**Thank you for browsing my repository.**