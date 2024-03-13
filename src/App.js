import React from "react";

import "./App.css";
import Homepage from "./pages/homepage/index";
import MovieDetails from "./pages/moviedetails";
import MovieList from "./pages/movielist";
import PopularMovies from "./pages/popularmovies";
import SearchResults from "./pages/searchresults";
import TopRated from "./pages/topratedmovies";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path:'/', element: <Homepage />},
  {path:'/moviedetails', element: <MovieDetails />},
  {path:'/movielists', element: <MovieList />},
  {path:'/popularmovies', element: <PopularMovies />},
  {path:'/searchresults', element: <SearchResults />},
  {path:'/toprated', element: <TopRated />},
])



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
