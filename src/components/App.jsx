import React from "react";
import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { PageNames } from "router/paths";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";



const Home = lazy(() => import('../pages/Homepage/Homepage'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))


function App () {
  return (
    
    <Routes>

    <Route path='homepage' element={<SharedLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='movies' element={<Movies/>}/>
    <Route path='moviesDetails' element={<MovieDetails/>}>
    <Route path='cast' element={<Cast/>}/>
    <Route path='reviews' element={<Reviews/>}/>
    </Route>
    <Route path='*' element={<ErrorPage/>}/>
    </Route>
    
    </Routes>

  );
};

export default App;
