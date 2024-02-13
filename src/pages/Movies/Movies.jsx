import {SearchForm} from "../../components/SearchForm/SearchForm";
import { useEffect, useState } from"react"
import { useSearchParams } from "react-router-dom";
import {getSearchMovies} from '../../API/API'
import {MovieList} from "../../components/MovieList/MovieList";
import { Loader } from "Loader/Loader";



const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [onLoad, setOnLoad] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get('query') ?? '';


useEffect(()=>{
    const fetchMovie = async () => {
        if(!searchValue) return;
        try{
            setOnLoad(true);
            const data = await getSearchMovies(searchValue);
            setMovies(data);
            setOnLoad(false);
        }catch(error){
            setError(error);
        }finally{
            setOnLoad(false);
        }
    }
    fetchMovie();
}, [searchValue]);

const onInputSearch = value => {
    setSearchParams({ query: value});
};

return (
    <main>
        <SearchForm onSubmit={onInputSearch}/>
        {onLoad && <Loader/>}
        {movies && <MovieList movies={movies}/>}
        {error && <p>Something wrong, try arain</p>}
    </main>
)
}

export default Movies;