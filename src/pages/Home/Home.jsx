import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../../services/API';
const Home = () => {
	const [movies, setMovies] = useState([]);
	const location = useLocation();
  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return <MoviesList movies={movies} location={location} />;
};

export default Home;
