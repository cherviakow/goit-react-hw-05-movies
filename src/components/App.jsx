import React from "react";
import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { PageNames } from "router/paths";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";



const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/MovieReviews/MovieReviews'))

// import Homepage from "pages/Homepage/Homepage";
// import Movies from "pages/Movies/Movies";
// import MovieDetails from "pages/MovieDetails/MovieDetails";
// import MovieReviews from "pages/MovieReviews/MovieReviews";




function App () {
  return (
    <Routes>

    <Route path={PageNames.homepage} element={<SharedLayout/>}/>
    <Route index element={<Homepage/>}/>
    <Route path={PageNames.movies} element={<Movies/>}/>
    <Route path={PageNames.moviesDetails} element={<MovieDetails/>}/>
    <Route path={PageNames.cast} element={<Cast/>}/>
    <Route path={PageNames.reviews} element={<Reviews/>}/>
    
    <Route path='*' element={<ErrorPage/>}>
    </Route>
    
    </Routes>

  );
};

export default App;
