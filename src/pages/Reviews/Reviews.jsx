import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesReviews } from '../../API/API';
import { ReviewList } from '../../components/ReviewsList/ReviewList';
import { Loader } from '../../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState();
  const [error, setError] = useState(null);
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setOnLoad(true);
        const data = await getMoviesReviews(movieId);
        setMovieReviews(data);
        setOnLoad(false);
      } catch (error) {
        setError(error);
      } finally {
        setOnLoad(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {onLoad && <Loader />}
      {movieReviews && <ReviewList reviews={movieReviews} />}
      {error && <p>Something went wrong. Please, try again</p>}
    </>
  );
};
export default Reviews;