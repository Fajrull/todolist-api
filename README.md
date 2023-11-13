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
    - [Membuat akun](#register)
    - [Login akun](#login)

* [RUTE UNTUK MENGELOLA TODO-LIST](#rute-todolist)
  - [METHOD: POST](#method-post)
    - [Menambah Task Baru](#login)
  - [METHOD: GET](#method-post)
    - [Mendapatkan Semua Task](#login)
    - [Mendapatkan Semua Task dengan Id](#login)
  - [METHOD: PUT](#method-post)
    - [Memperbarui Task dengan Id](#login)
  - [METHOD: DELETE](#method-post)
    - [Menghapus Semua Task](#login)
    - [Menghapus Task dengan Id](#login)

### RUTE-RUTE UNTUK ADMIN

#### METHOD: POST

###### /register

Digunakan agar dapat login dan bisa mengakses todo-list
url : http://localhost:5000/api/v1/auth/register

```
{
  "username": "username_akun",
  "password": "password_akun",
  "email": "email_akun"
}
```

#### METHOD: POST

###### /login

```
{
  "username": "username_akun",
  "password": "password_akun"
}
```

Digunakan agar dapat login dan bisa mengakses todo-list
url : http://localhost:5000/api/v1/auth/login

## Author

- [Muhammad Fajrul Khaq] (https://github.com/Fajrull)
