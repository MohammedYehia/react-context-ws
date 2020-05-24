import React from 'react';
import Card from '../Card';

import './style.css';

const createCard = (movie, deleteMovie) => {
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
}


const MoviesListComp = ({ movies, deleteMovie }) => (
  <ul>
    {movies.map(movie => createCard(movie, deleteMovie))}
  </ul>
)

export default MoviesListComp;
