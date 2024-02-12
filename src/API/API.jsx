import axios from 'axios';

const API_KEY = 'd8fff794203ae9c9fd4883749cedddba';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovieTrending = async () => {
    try{
        const response = await axios.get(
            `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        );
        return response.data.results;
    } catch (error){
        alert('Something wrong!');
        console.log(error);
    }
};


export const getSearchMovies = async query => {
    try{
        const response = await axios.get(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        if(response.data.result.length === 0){
            alert('There are no movies')
        }
        return response.data.results;
    } catch(error){
        alert('Something wrong');
    }
};


export const getMovieDetails = async id => {
    try{
        const response = await axios.get(
            `${BASE_URL}movie/${id}?api_key=${API_KEY}`
        );
        return response.data;
    } catch(error){
        alert ('Something wrong!');
    }
};


export const getMoviesCredits = async movieId => {
    try{
        const response = await axios.get(
            `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
        )
        return response.data.cast;
    } catch (error){
        alert('Something wrong!');
    }
}


export const getMoviesReviews = async movieId => {
    try{
        const response = await axios.get(
            `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
        )
        return response.data.results;
    } catch (error) {
        alert('Something wrong');
    }
}















