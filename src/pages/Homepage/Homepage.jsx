import React from "react";
import { getMovieTrending } from "API/API";
import { useState, useEffect } from 'react';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from '../../Loader/Loader';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHomepage = async () => {
      try {
        setOnLoad(true);
        const data = await getMovieTrending();
        setTrendingMovie([...data]);
        setOnLoad(false);
      } catch (error) {
        setError(error);
      } finally {
        setOnLoad(false);
      }
    };
    fetchHomepage();
  }, []);

  return (
    <div>
      {onLoad && <Loader />}
      {trendingMovie && <MovieList movies={trendingMovie} />}
      {error && <p>Something went wrong. Please, try again</p>}
    </div>
  );
};
export default Home;