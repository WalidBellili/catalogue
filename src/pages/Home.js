import { Link } from "react-router-dom";
import Movies from "../Movies.json";

const Home = () => {
  return (
    <>
      <ul>
        {Movies.map((movie) => (
          <li key={movie.title}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
