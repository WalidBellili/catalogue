import { Link } from "react-router-dom";
import Movies from "../Movies.json";

const Home = () => {
  return (
    <>
      <section>
        {Movies.map((movie) => (
          <li className="list" key={movie.title}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </section>
    </>
  );
};

export default Home;
