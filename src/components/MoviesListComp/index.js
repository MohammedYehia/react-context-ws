import React from 'react';
import Card from '../Card';

import './style.css';

const MoviesListComp = ({ movies, deleteMovie }) => (
  <ul>
    {movies.map(movie => {
      const { id, movieName, poster, rate, imdbLink, details, likes } = movie;
      return (
        <li key={id}>
          <Card
            id={id}
            poster={poster}
            movieName={movieName}
            imdbLink={imdbLink}
            details={details}
            likes={likes}
            rate={rate}
            deleteMovie={deleteMovie}
          />
        </li>
      );
    })}
  </ul>
)

export default MoviesListComp;
