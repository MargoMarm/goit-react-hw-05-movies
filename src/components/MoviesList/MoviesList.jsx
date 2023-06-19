import { Link } from 'react-router-dom';
import { Img, List, Title, Card } from './MoviesList.styled';
import img from '../../img/wallpaper-error.jpeg';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
			console.log(poster_path)
				return (
          <Card key={id}>
            <Link to={`/movies/${id}`}>
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
