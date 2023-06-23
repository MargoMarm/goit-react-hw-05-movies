import BackLink from 'components/BackLink/BackLink';
import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieById } from 'services/API';
import {
  Wrapper,
  Poster,
  Text,
  Title,
  WrapperInfo,
  List,
} from './MovieDetails.styles';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(id).then(data => setMovie(data));
  }, [id]);

  const { poster_path, title, vote_average, overview, genres } = movie;
  return (
    <main>
      <BackLink to={backLinkHref.current} />
      <Wrapper>
        <Poster
          src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
        />
        <div>
          <Title>{title}</Title>
          {vote_average && (
            <Title>User score: {Math.round(vote_average * 10)}%</Title>
          )}

          <Text>
            <span>Overview</span>
            {overview}
          </Text>
          <Text>
            <span>Ganres</span>
            {genres?.map(({ name }) => name).join(', ')}
          </Text>
        </div>
      </Wrapper>
      <WrapperInfo>
        <Title>Additional information</Title>
        <List>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
        </List>
      </WrapperInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
