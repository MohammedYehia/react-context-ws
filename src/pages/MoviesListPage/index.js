import React from 'react';
import MoviesListComp from '../../components/MoviesListComp';

import './style.css';

const MoviesListPage = (props) => {
  return (
    < MoviesListComp movies={props.movies} deleteMovie={props.deleteMovie} />
  );
}


export default MoviesListPage;
