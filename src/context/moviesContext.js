import React from 'react';

export const MoviesContext = React.createContext();

const placeholderImage = "https://via.placeholder.com/300";


class MoviesProvider extends React.Component {

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
      <MoviesContext.Provider value={{ deleteMovie: this.deleteMovie, movies: this.state.movies }}>
        {this.props.children}
      </MoviesContext.Provider>
    );
  }

}

export default MoviesProvider;