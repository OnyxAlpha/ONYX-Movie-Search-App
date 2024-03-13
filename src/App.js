import React from "react";

import "./App.css";
import Homepage from "./pages/homepage/index";
import MovieDetails from "./pages/moviedetails";
import MovieList from "./pages/movies/allmovies";
import PopularMovies from "./pages/movies/popularmovies";
import SearchResults from "./pages/searchresults";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path:'/', element: <Homepage />},
  {path:'/moviedetails', element: <MovieDetails />},
  {path:'/movielists', element: <MovieList />},
  {path:'/popularmovies', element: <PopularMovies />},
  {path:'/searchresults', element: <SearchResults />},
])



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
