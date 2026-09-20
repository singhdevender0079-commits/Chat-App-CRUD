# 💬 WhatsApp Clone

A simple **WhatsApp Clone** built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**.

This project focuses on understanding **CRUD operations** and backend development without using React.

## 🚀 Features

* Create new chats
* View all chats
* Edit existing chats
* Delete chats
* MongoDB database integration
* Mongoose for database operations
* EJS for server-side rendering
* RESTful routes
* Method Override for PUT and DELETE requests

## 🛠️ Tech Stack

* **Node.js** – Backend runtime
* **Express.js** – Web framework
* **MongoDB** – Database
* **Mongoose** – MongoDB ODM
* **EJS** – Template engine
* **Method-Override** – PUT and DELETE requests
* **HTML / CSS** – Frontend

## 📂 Project Structure

```text
WhatsApp-Clone/
│
├── models/
│   └── chat.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── public/
│   └── css/
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## 🔄 CRUD Operations

### Create

Create a new chat using:

```text
POST /chats
```

### Read

Display all chats using:

```text
GET /chats
```

### Update

Edit an existing chat using:

```text
PUT /chats/:id
```

### Delete

Delete an existing chat using:

```text
DELETE /chats/:id
```

## 🗄️ Database

The project uses MongoDB with the following database:

```text
watsappclone
```

Mongoose is used to create and manage the chat schema.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go into the project directory

```bash
cd WhatsApp-Clone-CRUD
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

The project connects to:

```text
mongodb://127.0.0.1:27017/watsappclone
```

### 5. Start the server

```bash
node app.js
```

Or, if you have nodemon installed:

```bash
npx nodemon app.js
```

The application will run at:

```text
http://localhost:8080
```

## 📚 What I Learned

Through this project, I practiced:

* Express.js routing
* Middleware
* RESTful API routes
* CRUD operations
* MongoDB database connection
* Mongoose models
* EJS templating
* Form handling
* Method Override
* MVC-style project structure
* Connecting frontend forms with backend routes

## 🎯 Project Goal

The main goal of this project was to strengthen my understanding of **backend development, MongoDB, Express.js, and CRUD operations** by building a simple real-world chat application.

## 👨‍💻 Author

**Devender Singh**

BTech CSE Student

---

⭐ If you found this project useful, feel free to star the repository!
