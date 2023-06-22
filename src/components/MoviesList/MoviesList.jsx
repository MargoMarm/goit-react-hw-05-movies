import { Link, useLocation } from 'react-router-dom';
import { Img, List, Title, Card } from './MoviesList.styled';
import img from '../../img/wallpaper-error.jpeg';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Card key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : img
                }
                alt={title}
              />
              <Title>{title}</Title>
            </Link>
          </Card>
        );
      })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
