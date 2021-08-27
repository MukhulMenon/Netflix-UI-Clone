import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {},
  //   autoplay: 1,
  // };

  // const handleClick = () => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movies?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  return (
    <div className="row">
      <h2> {title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            // onClick={() => handleClick(movies)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        {/* <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div> */}
      </div>
    </div>
  );
}

export default Row;
