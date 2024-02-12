

import CastList from 'components/CastList/CastList';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from 'Loader/Loader';
import { getMoviesCredits } from 'API/API';

const Cast = () => {
    const {movieId} = useParams();
    const [movieCast, setMovieCast] = useState();
    const [error, setError] = useState(null);
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => {
        const fetchMovieCast = async () => {
            try{
                setOnLoad(true);
                const data = await getMoviesCredits(movieId);
                setMovieCast(data);
                setOnLoad(false);
            } catch (error) {
                setError(error)
            } finally {
                setOnLoad(false);
            }
        }
        fetchMovieCast();
    }, [movieId])

  return (
    <>
    {onLoad && <Loader/>}
    {movieCast && <CastList cast={movieCast}/>}
    {error && <p>Something wrong, try again</p>}
    </>
  )
}

export default Cast