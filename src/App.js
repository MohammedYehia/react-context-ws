import React, { Component, useState } from "react";

import MoviesListPage from "./pages/MoviesListPage";

import "./App.css";

const placeholderImage = "https://via.placeholder.com/300";

const moviesList = [
  {
    id: 1,
    movieName: "name of movie",
    poster: placeholderImage,
    rate: "7.5",
    imdbLink: "link",
    details: "some movie description",
    likes: 2,
  },
  {
    id: 2,
    movieName: "name of movie",
    poster: placeholderImage,
    rate: "8.5",
    imdbLink: "link",
    details: "some movie description",
    likes: 32,
  },
  {
    id: 3,
    movieName: "name of movie",
    poster: placeholderImage,
    rate: "7.5",
    imdbLink: "link",
    details: "some movie description",
    likes: 25,
  },
  {
    id: 4,
    movieName: "name of movie",
    poster: placeholderImage,
    rate: "8.5",
    imdbLink: "link",
    details: "some movie description",
    likes: 33,
  },
];
function App() {
  const [movies, setMovies] = useState(moviesList);

  const deleteMovie = (id) => {
    const filteredMoviesList = movies.filter((movie) => movie.id !== id);
    setMovies(filteredMoviesList);
  };

  return (
    <div className="App">
      {/* <Nav /> */}
      <h1>MOVIES</h1>
      <MoviesListPage movies={movies} deleteMovie={deleteMovie} />
      {/* other components that can use the same data that why we needed to left the state up */}
      {/* <UserPage movies={this.state.movies} /> */}
    </div>
  );
}

export default App;
