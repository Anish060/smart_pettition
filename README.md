# SmartPetition - Government Petition Management System

SmartPetition is a full-stack web application that enables users to submit petitions to government bodies. It uses the **Google Gemini API** for sentiment analysis and helps admins categorize and prioritize the petitions based on urgency.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, React Router
- **Backend**: Node.js + Express.js
- **Database**: MySQL
- **AI**: Google Gemini API

---

## 🚀 Features

- User login and petition submission
- Admin dashboard for reviewing, responding to petitions
- Sentiment analysis using Gemini API
- Petition categorization by sentiment score
- Secure login for users and admins

---

## ⚙️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/anishprasath/SmartPetition.git
cd SmartPetition
```

### 2. Set Up the MySQL Database

- Create a MySQL database (e.g., `smartpetition`)
- Import the schema from the provided SQL file (if any), or create the following tables manually:

```sql
CREATE DATABASE smartpetition;

USE smartpetition;

CREATE TABLE petitions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  Context TEXT,
  Issue TEXT,
  emo_val FLOAT,
  category VARCHAR(50)
);
```

### 3. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` folder:

```
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=smartpetition
GEMINI_API_KEY=your_gemini_api_key
```

- Run the backend server:

```bash
npm start
```

---

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend should now be running at `http://localhost:5173`.

---

## 🔑 Important Notes

- You must **set up your own MySQL database** before running the backend.
- Get your **Google Gemini API key** from: [Google AI Studio](https://makersuite.google.com/app)
- Replace placeholder keys and credentials in `.env` with your own.

---

## 🤖 Sentiment Analysis (Gemini API)

We use Gemini to analyze petition text and prioritize them. Here's a simplified call from the backend:

```js
const res = await axios.post(
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.GEMINI_API_KEY,
  { contents: [{ parts: [{ text: "Petition text here" }] }] }
);
```

---

## 📦 Folder Structure

```
SmartPetition/
│
├── backend/         # Node.js + Express backend
├── frontend/        # React frontend
└── README.md
```

---

## ✅ Final Checklist

- [ ] MySQL installed & running
- [ ] Database `smartpetition` created
- [ ] `.env` file configured correctly
- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173
- [ ] Gemini API key inserted

---

## 📜 License

This project is for educational purposes under VIT Vellore’s EXC Community Project. Not licensed for commercial use.

---

Feel free to contribute or raise issues. Happy coding! 💻
