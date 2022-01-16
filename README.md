# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/SashaGulnov/nodejs2021Q4-service.git
```

## Installing node and postgres

```
docker pull node:alpine
docker pull postgres
```

## Create own images

```
docker-compose build
```

## Run project

```
docker-compose up
```

## Run migrations

```
npm run migrations:run
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.

- For `User`, `Board` and `Task` REST endpoints with separate router paths should be created
  - `User` (`/users` route)
    - `GET /users` - get all users (remove password from response)
    - `GET /users/:userId` - get the user by id (ex. “/users/123”) (remove password from response)
    - `POST /users` - create user
    - `PUT /users/:userId` - update user
    - `DELETE /users/:userId` - delete user
  - `Board` (`/boards` route)
    - `GET /boards` - get all boards
    - `GET /boards/:boardId` - get the board by id
    - `POST /boards` - create board
    - `PUT /boards/:boardId` - update board
    - `DELETE /boards/:boardId` - delete board
  - `Task` (`boards/:boardId/tasks` route)
    - `GET boards/:boardId/tasks` - get all tasks
    - `GET boards/:boardId/tasks/:taskId` - get the task by id
    - `POST boards/:boardId/tasks` - create task
    - `PUT boards/:boardId/tasks/:taskId` - update task
    - `DELETE boards/:boardId/tasks/:taskId` - delete task
