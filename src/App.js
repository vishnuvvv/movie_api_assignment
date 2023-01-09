import "./App.css";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard";
import Favourite from "./Favourite";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//a53a29a5
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a53a29a5";
// http://img.omdbapi.com/?apikey=[yourkey]&
// http://www.omdbapi.com/?apikey=[yourkey]&

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("movie");
  }, []);



  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder=" search for movies" value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm) } />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie,key) => (
            <MovieCard movie={movie} key={key} id={key}   />
          ))}
         <section className="fav">
         
         <Favourite movie={movies}/>
         </section>
        </div>
          
          
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
