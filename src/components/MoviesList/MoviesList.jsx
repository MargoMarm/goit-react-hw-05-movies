import { Link } from 'react-router-dom';
import { Img, List, Title, Card } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Card key={id}>
          <Link to={`movies/${id}`}>
            <Img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
            <Title>{title}</Title>
          </Link>
        </Card>
      ))}
    </List>
  );
};

export default MoviesList;
