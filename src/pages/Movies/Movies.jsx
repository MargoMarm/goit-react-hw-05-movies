import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/API';
import Error from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    const startFetching = async () => {
      setLoading(true);
      try {
        const { results, total_results } = await getMovieByQuery(query);
        setMovies(results);
        setTotalResults(total_results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    startFetching();
  }, [query]);
  const setParams = query => {
    const params = query !== '' ? { query } : {};
    setSearchParams(params);
  };
  return (
    <div>
      <SearchForm setParams={setParams} />
      {loading && <Loader />}
      {movies && !loading && <MoviesList movies={movies} />}
      {totalResults === 0 && (
        <Error errorText={'Sorry, nothing has been found at your request'} />
      )}
      {error && (
        <Error
          errorText={`Something went wrong... ${error}. Please try again.`}
        />
      )}
    </div>
  );
};

export default Movies;
