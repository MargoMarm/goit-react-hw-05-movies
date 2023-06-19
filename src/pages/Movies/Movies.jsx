import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/API';


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    if (query === '') return;

    getMovieByQuery(query).then(data => setSearchQuery(data));
  }, [query]);

	
	
	const handleSubmit = e => {
	  e.preventDefault();
		const value= e.currentTarget.elements.search.value;
		const params = value !== '' ? { query: value } : {};
		setSearchParams(params);
	};
	console.log(searchQuery)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='search' />
        <button type="submit">Search</button>
      </form>
      {searchQuery && <MoviesList movies={searchQuery} />}
    </div>
  );
};

export default Movies;
