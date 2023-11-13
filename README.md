# Todolist-Api

Todo List API Services using Express JS

## Installation and Setup Instructions

#### Prerequisites

1. Git
2. Node.js
3. NPM
4. MongoDB

#### Installation

1. Clone this repository: `git clone`
2. Change directory to the project: `cd todolist-api`
3. Install dependencies: `npm install`
4. Run the application: `npm run dev`
5. The application will be available at: `http://localhost:5000`

### Task

1. Register
2. Login
3. Create Task
4. Get All Task
5. Get Task By id
6. Update Task
7. Delete Task By id
8. Delete All Task

## API Documentation

###### DAFTAR ISI

- [RUTE UNTUK AUTHENTICATION ](#rute-auth)
  - [METHOD: POST](#method-post)
    - [Register an Account](#register)
    - [Login to an Account](#login)

* [RUTE UNTUK MENGELOLA TODO-LIST](#rute-todolist)
  - [METHOD: POST](#method-post)
    - [Add a New Task](#login)
  - [METHOD: GET](#method-get)
    - [Get All Tasks](#todolist)
    - [Get Task by ID](#todolist)
  - [METHOD: PUT](#method-put)
    - [Update Task by ID](#todolist)
  - [METHOD: DELETE](#method-delete)
    - [Delete All Tasks](#todolist)
    - [Delete Task by ID](#todolist)

### RUTE-RUTE UNTUK AUTHENTICATION

#### METHOD: POST

###### /register

URL : http://localhost:5000/api/v1/auth/register
Register a new account by sending a POST request with the following body:

```
{
  "username": "username_akun",
  "password": "password_akun",
  "email": "email_akun"
}
```

#### METHOD: POST

###### /login

URL : http://localhost:5000/api/v1/auth/login
Log in to an existing account by sending a POST request with the following body:

```
{
  "username": "username_akun",
  "password": "password_akun"
}
```

### RUTE-RUTE UNTUK MENGELOLA TODO-LIST

#### METHOD: POST

###### /todolist

URL : http://localhost:5000/api/v1/todolist
Add a new task by sending a POST request with the following body:

```
{
  "task": "your_task_description"
}
```

#### METHOD: GET

###### /todolist

Get All Tasks
URL : http://localhost:5000/api/v1/todolist

Get Task by ID
URL: http://localhost:5000/api/v1/todolist/{\_id}

#### METHOD: PUT

###### /todolist

URL : http://localhost:5000/api/v1/todolist/{\_id}
Update a specific task by ID by sending a PUT request with the following body:

```
{
  "task": "updated_task_description"
}
```

#### METHOD: DELETE

###### /todolist

Delete Task by ID
URL: http://localhost:5000/api/v1/todolist/{\_id}

Delete All Tasks
URL : http://localhost:5000/api/v1/todolist

## Author

- [Muhammad Fajrul Khaq] (https://github.com/Fajrull)
