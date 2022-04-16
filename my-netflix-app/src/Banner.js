import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import { base_url } from "./Row";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const UrlSource = ``;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 style={{ color: "white" }}>
          {movie.title || movie.name || movie.original_name}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
