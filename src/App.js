import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Movie from "./pages/MovieDetail/Movie";
import MovieList from "./components/MovieList/MovieList"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
