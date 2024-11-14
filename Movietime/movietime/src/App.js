import React from "react";
import "./App.css"; // Import the global CSS file
import MovieSearch from "./MovieSearch"; // Import MovieSearch component

function App() {
  return (
    <div className="theater">
      <div className="curtain-left"></div>
      <div className="screen-container">
        <h1 className="movie-title">Now Showing</h1>
        <div className="screen">
          <MovieSearch />
        </div>
      </div>
      <div className="curtain-right"></div>
    </div>
  );
}

export default App;
