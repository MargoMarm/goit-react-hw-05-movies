import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingMovies } from '../../services/API';
const Home = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return <MoviesList movies={movies} />;
};

export default Home;
