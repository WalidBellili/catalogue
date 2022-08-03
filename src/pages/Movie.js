import { useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../Movies.json";

const Movie = () => {
  const params = useParams();
  const [movie] = useState(Movies[params.id - 1]);

  return (
    <>
      <main className="movie">
        <img src={movie.image} alt={movie.title} />
        <article className="paragraph">
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
        </article>
      </main>
    </>
  );
};

export default Movie;
