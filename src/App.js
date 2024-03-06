import React from "react";

import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./pages/homepage/index";
import MovieDetails from "./pages/moviedetails";
import MovieList from "./pages/movielist";
import PopularMovies from "./pages/popularmovies";
import SearchResults from "./pages/searchresults";


export default function App() {
  return (
    <>
    <Header/>
    <Homepage/>
    <MovieDetails/>
    <MovieList/>
    <PopularMovies/>
    <SearchResults/>
    <Footer/>
    </>
  )
}
