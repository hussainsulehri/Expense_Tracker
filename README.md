# Expense Tracker (MERN Stack)

A fully functional, professional-grade Expense Tracker built using the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to track their income and expenses with a clean, intuitive interface and real-time data persistence.

> [!NOTE]
> This repository is a customized version maintained by **[Hussain Sulehri](https://github.com/hussainsulehri)**. It is based on a foundational design but has been updated and improved for personal use and showcase.

---

## Features

- **Real-time Tracking:** Add and delete transactions instantly.
- **Dynamic Balance:** Automatically calculates total balance, income, and expenses.
- **RESTful API:** Secure backend built with Node.js and Express.
- **Database Integration:** Persistent storage using MongoDB Atlas.
- **Responsive UI:** Modern, clean design using Vanilla CSS.

---

## Tech Stack

- **Frontend:** React, Vanilla CSS, Axios
- **Backend:** Node.js, Express, Morgan, Colors
- **Database:** MongoDB (Mongoose)
- **Utilities:** Dotenv, Concurrently, Nodemon

---

##  Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/hussainsulehri/expense-tracker.git
cd expense-tracker
```

### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Environment Variables
Create a `config/config.env` file in the root directory and add the following:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Usage

### Run Both Front & Backend
```bash
npm run dev
```

### Backend Only
```bash
npm run server
```

### Frontend Only
```bash
npm run client
```

---

## Author

**Hussain Sulehri**
- GitHub: [@hussainsulehri](https://github.com/hussainsulehri)
- Gmail: [hussainsulehri34@gmail.com](mailto:hussainsulehri34@gmail.com)

---

## License

This project is licensed under the ISC License.
