import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//pages
import Home from "./pages/home";
import About from "./pages/about";
import Article from "./pages/article";
import ArticleList from "./pages/articleList";

//components
import NavBar from "./components/NavBar.js";


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="max-w-screen-md max-auto pt-20">
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/about' element = {<About />}/>
          <Route path = '/articles-list' element = {<ArticleList />}/>
          <Route path = '/article/:name' element = {<Article/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
