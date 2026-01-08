# 💬 MongoDB Chat App

A mini full-stack chat application built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **EJS**.  
This project demonstrates CRUD operations, RESTful routing, form handling, and server-side rendering.

---

## 🚀 Features

- 📄 View all chats
- ➕ Create a new chat
- ✏️ Edit an existing chat message
- ❌ Delete a chat
- 🕒 Display chat date & time
- 🎨 Clean UI using CSS
- 🔁 RESTful routes with `method-override`

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Templating Engine:** EJS
- **Styling:** CSS
- **Utilities:** method-override

---

## 📁 Project Structure
```bash
Mongo3/
│
├── models/
│ └── chat.js
│
├── views/
│ ├── index.ejs # Show all chats
│ ├── new.ejs # Create new chat
│ └── edit.ejs # Edit chat
│
├── public/
│ └── style.css
│
├── index.js
├── package.json
└── README.md


```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
project:
  name: Mongo3
  description: Mini Chat Application using Express and MongoDB

setup:
  steps:
    - step: Clone the repository
      commands:
        - git clone https://github.com/harshad-02/Mongo3.git
        - cd Mongo3

    - step: Install dependencies
      commands:
        - npm install

    - step: Start MongoDB
      note: Make sure MongoDB is running locally
      command: mongod

    - step: Run the application
      command: nodemon index.js
      server_url: http://localhost:8080

routes:
  - method: GET
    route: /chats
    description: Show all chats

  - method: GET
    route: /chats/new
    description: New chat form

  - method: POST
    route: /chats
    description: Create chat

  - method: GET
    route: /chats/:id/edit
    description: Edit chat

  - method: PUT
    route: /chats/:id
    description: Update chat

  - method: DELETE
    route: /chats/:id
    description: Delete chat

learning_outcomes:
  - CRUD operations with MongoDB
  - RESTful API design
  - Express middleware usage
  - Form handling with req.body
  - Method overriding (PUT & DELETE)
  - MVC-style project structure

author:
  name: Harshad Dudye
  education: Third-year IT student
  interests:
    - MERN Stack
    - Data Structures & Algorithms
  github: https://github.com/harshad-02

future_improvements:
  - Authentication & authorization
  - Chat bubbles UI
  - Real-time chat using Socket.io
  - Deployment on Render / Railway

license:
  description: This project is for learning and educational purposes.

next_optional_steps:
  - Add screenshots to README
  - Write resume bullet points
  - Deploy the project online
  - Improve UI like WhatsApp
  - Add authentication
