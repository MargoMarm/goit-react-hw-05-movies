import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/API';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    getMovieReview(id).then(data => setReview(data));
  }, [id]);
  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </>
  );
};

export default Reviews;
