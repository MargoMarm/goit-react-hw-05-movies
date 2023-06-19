import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API';
import img from '../../img/wallpaper-error.jpeg';
import { List, Poster } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [infoCast, setInfoCast] = useState([]);
  useEffect(() => {
    getMovieCast(id).then(data => setInfoCast(data));
  }, [id]);
  return (
    <div>
      <List>
        {infoCast &&
          infoCast.map(({ profile_path, name, character, cast_id }) => (
            <li key={cast_id}>
              <Poster
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : img
                }
                alt={name}
              />
              <p>{name}</p>
              {character && (
                <p>
                  <span>Character:</span>
                  {character}
                </p>
              )}
            </li>
          ))}
      </List>
    </div>
  );
};

export default Cast;
