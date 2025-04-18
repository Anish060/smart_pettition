# SmartPetition - AI-Enhanced Government Petition System

SmartPetition is a full-stack web application designed to simplify the management of public petitions by local or government authorities. It incorporates AI-based sentiment analysis using **Google Gemini API** to categorize and prioritize petitions based on urgency and emotional tone.

## 🔍 Introduction

In a world where public feedback is vital for governance, SmartPetition helps bridge the gap between citizens and administrators. This platform allows users to submit their concerns and requests efficiently, while leveraging AI to assist authorities in managing petitions based on priority.

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **AI/ML**: Google Gemini API (Sentiment Analysis)
- **Authentication**: JWT
- **Hosting**: Vercel (Frontend), Heroku (Backend)
- **Version Control**: GitHub

## 🚀 Features

- 📝 Petition submission by users
- 🤖 AI-powered categorization based on sentiment analysis
- 🧠 Prioritization based on emotional intensity and relevance
- 🔐 Role-based authentication for users and admins
- 📊 Admin dashboard with response management
- 🔄 Real-time status updates and notification system

## 🧠 Google Technology Used

This project utilizes **Google Gemini API** to analyze the sentiment of each petition text. Based on the output score and emotion classification, petitions are sorted into urgency levels such as:
- **Urgent**
- **Critical**
- **General**

This allows admins to focus on emotionally intense or highly significant issues first.

## 💻 Implementation

### 📁 GitHub Repository
- [GitHub Repo](https://github.com/anishprasath/SmartPetition)

### 🧩 Sample Gemini Integration (Sentiment Analysis)

```js
import axios from 'axios';

const analyzeSentiment = async (text) => {
  const response = await axios.post('https://api.google.com/v1/gemini/sentiment', {
    text: text,
    apiKey: 'YOUR_API_KEY',
  });

  return response.data;
};
