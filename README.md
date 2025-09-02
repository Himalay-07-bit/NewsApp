📖 NewsApp

A React-based News Application that fetches and displays real-time news articles using the NewsAPI
.
It supports infinite scrolling, category-based filtering, and multi-language support with a clean Bootstrap-based UI.

🚀 Features

🌍 Browse latest news from multiple categories (Politics, Education, Crime, Science, Technology, Sports, etc.)

🔎 Search news articles by keyword

📜 Infinite scrolling for seamless browsing

🌐 Multi-language support (English, Hindi, etc.)

📅 News sorted by latest publication date

📱 Responsive UI built with Bootstrap 5

🛠️ Tech Stack

React 18 (with functional components & hooks)

React Router v6 (for routing & query params)

Bootstrap 5 (for styling)

NewsAPI (for fetching articles)

react-infinite-scroll-component (for infinite scroll pagination)

📂 Project Structure
src/
│── App.jsx             # Main app with routes
│── main.jsx            # React entry point
│── component/
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer section
│   └── NewsItem.jsx    # Single news card component
│── pages/
│   └── HomePage.jsx    # Displays news with infinite scroll
│── css/
│   └── style.css       # Custom styles

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/newsapp.git
cd newsapp


Install dependencies

npm install


Add your NewsAPI key
Replace YOUR_API_KEY in HomePage.jsx with your own API key from NewsAPI
.

const apiKey = "YOUR_API_KEY";


Run the development server

npm run dev


Open in browser
Visit 👉 http://localhost:5173

📸 Screenshots

(Optional – Add screenshots of your app UI here)

🙌 Acknowledgements

NewsAPI
 for free news data

React
 and Vite
 for fast development

Bootstrap 5
 for UI components