***MovieDB - React Movie Explorer***
A modern, responsive web application built with React and powered by The Movie Database (TMDB) API. Explore popular, top-rated, and upcoming movies, search globally, and dive into detailed movie and actor profiles.

***Overview***
MovieDB is a feature-rich movie browsing platform designed for seamless user experience across devices. It includes a responsive navigation bar, paginated movie lists, and detailed views, all managed efficiently with Redux.

***Features***
Dynamic Pages:
Home: Browse popular movies.
Top Rated: View highly rated movies.
Upcoming: Discover upcoming releases.
Search: Find movies with a global search (mirrors Home UI).
Movie Details: In-depth movie info with cast.
Actor Details: Actor biographies and details.
Responsive Navbar: Centered links on desktop, hamburger menu with search on mobile.
Pagination: Limited to 3 page buttons with Prev/Next navigation.
State Management: Centralized with Redux Toolkit for efficient API handling.
UI/UX: Clean, reusable components styled with Tailwind CSS.


***Tech Stack***
Technology	Version	Purpose
React	18.2.0	Frontend Framework
Vite	5.2.0	Build Tool
React Router DOM	6.22.3	Routing
Redux Toolkit	2.2.3	State Management
Tailwind CSS	3.4.3	Styling
Axios	1.6.8	API Requests
TMDB API	-	Movie Data Source

***Project Structure***

src/
├── assets/              # Static assets (images, etc.)
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Responsive navigation with search
│   ├── MovieCard.jsx    # Clickable movie card
│   └── Pagination.jsx   # 3-button pagination
├── pages/               # Page components
│   ├── HomePage.jsx     # Popular movies
│   ├── TopRatedPage.jsx # Top-rated movies
│   ├── UpcomingPage.jsx # Upcoming movies
│   ├── SearchPage.jsx   # Search results
│   ├── MovieDetailPage.jsx # Movie details
│   └── ActorDetailPage.jsx # Actor details
├── redux/               # Redux setup
│   ├── movieSlice.js    # Movie data logic
│   └── store.js         # Redux store
├── App.jsx              # Routing setup
├── main.jsx             # Entry point
└── index.css            # Tailwind CSS config

***Setup Instructions***

Prerequisites
Node.js (v16 or higher)
npm (v8 or higher)

Installation

1. Clone the Repository:

git clone <repository-url>
cd movie-db

2. Install Dependencies:
npm install

Full list of dependencies (add to package.json if not present):

{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "@reduxjs/toolkit": "^2.2.3",
    "redux": "^5.0.1",
    "axios": "^1.6.8"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.2.0",
    "tailwindcss": "^3.4.3",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19"
  }
}

3. Run Locally:

npm run dev
Open http://localhost:5173 in your browser.

4. Build for Production:

npm run build


***API Integration***
This project uses The Movie Database (TMDB) API:

API Key: c45a857c193f6302f2b5061c3b85e743
Image Base URL: https://image.tmdb.org/t/p/w500
Endpoints:
/movie/popular - Popular movies
/movie/top_rated - Top-rated movies
/movie/upcoming - Upcoming movies
/search/movie - Movie search
/movie/{id} - Movie details
/movie/{id}/credits - Movie cast
/person/{id} - Actor details

https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1

***HAPPY HACKING***