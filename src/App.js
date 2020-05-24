import React, { Component } from 'react';

import MoviesListPage from "./pages/MoviesListPage";

import './App.css';

const placeholderImage = "https://via.placeholder.com/300";

class App extends Component {
  state = {
    movies: [
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
    ]
  }

  deleteMovie = (id) => {
    const movies = this.state.movies.filter(movie => movie.id !== id);
    this.setState({ movies });
  }

  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <h1>MOVIES</h1>
        <MoviesListPage movies={this.state.movies} deleteMovie={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
