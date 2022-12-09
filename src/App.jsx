import "tailwindcss/tailwind.css";
import "./App.css";
import Contact from "../pages/Home/contact/contact";
import Testimonies from "../pages/Home/testimonies/testimonies";
import News from "../pages/Home/news/news";

const App = () => {
  return (
    <body className="min-h-screen">
      <div className="App">
        <header className="App-header">
          <p>Defi Onlineformapro let's go!!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </body>
  );
};

export default App;
