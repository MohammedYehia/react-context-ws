import React from 'react';

import MoviesListPage from "./pages/MoviesListPage";
import MoviesProvider from './context/moviesContext';

import './App.css';

const App = () => {
  return (
    <MoviesProvider>
      <div className="App">
        {/* <Nav /> */}
        <h1>MOVIES</h1>
        <MoviesListPage />
        {/* other components that can use the same data that why we needed to left the state up */}
        {/* <UserPage movies={this.state.movies} /> */}
      </div>
    </MoviesProvider>
  );
}

export default App;
