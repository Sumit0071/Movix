# 🎬 Movix

**Movix** is a modern web application for discovering movies and TV shows. Powered by the [TMDB API](https://www.themoviedb.org/documentation/api), it provides detailed information, trailers, ratings, and search functionality with a sleek UI/UX design.

## 🚀 Features

* 🔍 Search for movies and TV shows
* 📄 View detailed information including overview, cast, trailer, ratings
* 🎞️ Watch official trailers from YouTube
* 🗂️ Browse by genres, popularity, upcoming, and top-rated
* 📱 Responsive design for all screen sizes
* 🌙 Dark mode UI

## 🛠️ Tech Stack

* **Frontend:** React.js,  SCSS (based on your preference)
* **State Management:**  Redux
* **Routing:** React Router DOM
* **API:** TMDB API
* **Animations:** Custom CSS

## 🔧 Installation

```bash
git clone https://github.com/Sumit0071/movix.git
cd movix
npm install
```

Create a `.env` file in the root directory and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Then, run the app:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or your default Vite port).

## 📁 Folder Structure

```
src/
│
├── components/      # Reusable UI components
├── pages/           # Home, Details, Search results, etc.
├── hooks/           # Custom hooks
├── utils/           # API utilities
├── store/           #redux store to store the state of application
├── assets/          # Images, icons
└── App.jsx          # App entry
```

## 🌐 Demo

([Live Demo](https://movix-jnz8.vercel.app/)) 

## 📸 Demo Video

([Demo Video](https://drive.google.com/file/d/1xWcW-G-RQLE75m0czj6loWihyJGlNif6/view?usp=sharing))



---
