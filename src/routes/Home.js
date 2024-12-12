import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const fetchApi = async () => {
    const fetchData = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(fetchData.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <h1>- Movie List -</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </>
      )}
    </>
  );
}

export default Home;
