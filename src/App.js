import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/index";
import MovieDetails from "./pages/moviedetails";
import AllMovies from "./pages/movies/allmovies";
import PopularMovies from "./pages/movies/popularmovies";
import TopRatedMovies from "./pages/movies/toprated";
import SearchResults from "./pages/searchresults";
import AllTvShows from "./pages/tvshows/alltvshows";
import PopularTVShows from "./pages/tvshows/populartvshows";
import TopRatedTVShows from "./pages/tvshows/topratedtvshows";
import SignIn from "./pages/signupsignin/signin";
import SignUp from "./pages/signupsignin/signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path:'/', element: <Homepage />},
  {path:'/moviedetails', element: <MovieDetails />},
  {path:'/allmovies', element: <AllMovies />},
  {path:'/popularmovies', element: <PopularMovies />},
  {path:'/topratedmovies', element: <TopRatedMovies />},
  {path:'/alltvshows', element: <AllTvShows />},
  {path:'/populartvshows', element: <PopularTVShows />},
  {path:'/topratedtvshows', element: <TopRatedTVShows />},
  {path:'/searchresults/:name', element: <SearchResults />},
  {path:'/signin', element: <SignIn />},
  {path:'/signup', element: <SignUp />},
])



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
