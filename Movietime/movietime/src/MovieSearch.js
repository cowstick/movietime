import React, { useState } from "react";
import { getStreamingInfo } from "./api";

function MovieSearch() {
  const [type, setType] = useState("movie");
  const [id, setId] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    const streamingData = await getStreamingInfo(type, id);

    if (streamingData) {
      setResults(streamingData.streamingInfo);
      setError(null);
    } else {
      setError("Could not fetch streaming information");
    }
  };

  return (
    <div className="movie-search">
      <h1>What would you like to watch?</h1>
      <form onSubmit={handleSearch}>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="movie">Movie</option>
          <option value="series">TV Show</option>
        </select>
        <input
          type="text"
          placeholder="Enter Title Here"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {results && (
        <div className="results">
          <h2>Streaming Services</h2>
          {Object.keys(results).map((country) => (
            <div key={country}>
              <h3>{country.toUpperCase()}</h3>
              <ul>
                {results[country].map((service) => (
                  <li key={service.platform}>
                    {service.platform} - <a href={service.url}>{service.url}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
