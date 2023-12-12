# PERN Full Stack Todo
______________________________________________________________________________________________________
- PostgreSQL Express React Node (PERN) full-stack app, integrates React frontend with Node.js backend.

## Genereal info
______________________________________________________________________________________________________
### Backend
- PostgreSQL needs to be installed and running - I started it from my Windows 10 PostgreSQL 12 dropdown
option 'SQL shell (psql)'.
- Postman used to test the backend before frontend was available.
### Frontend
- React frontend includes a simple todo list with a user input field and a table of todos below.
User can edit and delete todos.

## Technologies - Backend
______________________________________________________________________________________________________
- PostgreSQL v16
- Express.js
- Node.js v16
- Nodemon v3 npm module so backend server will automatically restart after code changes
- Postman API to simulate a frontend

## Technologies - Frontend
______________________________________________________________________________________________________
- React.js v18
- Axios 
- Lodash
- React-query v3
- Eslint v8
- Prettier v3
- Sass

## Set up - Backend
______________________________________________________________________________________________________
- Change to `/server` directory.
- Install dependencies using  `npm i`.
- Install `nodemon` globally if you don't already have it.
- Install `PostgreSQL` & run it (requires the password you created during installation).
- Add database access credentials to `db.js` - recommend installing `npm dotenv` & using .env 
to hide credentials if commiting to Github.
- Postgresql shell commands: `\l` list all databases. `\c` database1 connect to database1.
`\dt` inspect tables. `\d+` inspect table & show relation information. `\q` to quit.
- Run `nodemon start` for a dev server.
- `http://localhost:5000/` can be accessed for CRUD operations such as
POST, GET, PUT, DELETE etc. using Postman.

## Set up - Frontend
______________________________________________________________________________________________________
- Change to `/client` directory.
- Install dependencies using `npm i`.
- run `npm start`. Frontend will open at `http://localhost:3000`/.
