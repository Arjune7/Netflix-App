import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  //A snippet of code which runs based on specific condition/variable

  useEffect(() => {
    // IF [] ,run once the row loads and dont load it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              className="row_poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;