import { useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../Movies.json";

const Movie = () => {
  const params = useParams();
  const [movie] = useState(Movies[params.id - 1]);

  return (
    <>
      <main>
        <img src={movie.image} alt={movie.title} />
        <p>{movie.title}</p>
        <p>{movie.director}</p>
        <p>{movie.description}</p>
        <br />
        {movie.stars.map((star) => {
          return (
            <ul>
              <li>{star}</li>
            </ul>
          );
        })}
      </main>
    </>
  );
};

export default Movie;
