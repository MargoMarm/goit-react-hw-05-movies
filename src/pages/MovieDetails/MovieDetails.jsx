import BackLink from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/API';
import { Wrapper, Poster } from './MovieDetails.styles';

const MovieDetails = () => {
  const { id } = useParams();
	const [movie, setMovie] = useState({});
	const location = useLocation();
	const BackLinkHref = location.state?.from ?? "/";
console.log(location.state)
  useEffect(() => {
    getMovieById(id).then(data => setMovie(data));
  }, [id]);
	
  const { poster_path, title, vote_average, overview, genres } = movie;
  return (
	  <main>
		  <BackLink to={BackLinkHref} />
      <Wrapper>
        <Poster src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`} />
        <p>{title}</p>
        <p>User score: {vote_average * 10}%</p>
        <p>
          <span>Overview</span>
          {overview}
        </p>
        <p>
          <span>Ganres</span>
          {genres?.map(({ name }) => name).join(', ')}
        </p>
      </Wrapper>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;