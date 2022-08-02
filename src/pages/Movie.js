import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../Movies.json";

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState(Movies[params.id - 1]);

  return (
    <>
      <img src={movie.image} alt={movie.title} />
    </>
  );
};

export default Movie;
