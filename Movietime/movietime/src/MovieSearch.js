import React from 'react';
import './MovieSearch.css'; // Assuming you're using the external CSS file

const MovieSearch = () => {
  return (
    <div className="theater">
      {/* Box Office / Search Function */}
      <div className="screen-container">
        {/* Movie Search Form */}
        <div className="screen">
          <div className="movie-search">
            <h1>Box Office</h1>
            {/* Add your movie search inputs, select options, and button here */}
            <input type="text" placeholder="Search for a movie..." />
            <button>Search</button>
          </div>
        </div>

        {/* Now Showing Title */}
        <div className="movie-title">
          <span>Now Showing</span>
        </div>
      </div>

      {/* Curtains (Left and Right) */}
      <div className="curtain-left"></div>
      <div className="curtain-right"></div>
    </div>
  );
}

export default MovieSearch;
