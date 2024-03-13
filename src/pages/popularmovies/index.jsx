import { useEffect, useState } from "react";
import React  from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

import "./index.css";


export default function PopularMovies() {

    const [popularMovieList, setpopularMovieList] = useState([])

    const getPopularMovies = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=fe5ee1822af695fe2d54361ceff801bb")
        .then(res => res.json())
        .then(json => setpopularMovieList(json.results))
    }


    useEffect(() => {
        getPopularMovies()
    }, [])

    console.log(popularMovieList)


    return(
        <>
        <Header/>
        <div>
            <p className="text-center text-3xl font-bold bg-neutral-200 my-10">Popular Movies</p>
        </div>
        

        <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-20 p-10 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 ... p-20">
            {popularMovieList.map((movie) =>(
            <div className="bg-white border-2 rounded-lg">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="w-full h-80 border-b-4 border-b-orange-600 rounded-t-lg "/>
                <h1 className="text-orange-500">{movie.title}</h1>
                <h3>Release: {movie.release_date}</h3>
                <div className="flex gap-10">
                    <p>Trailer</p>
                    <p>Detail</p>
                </div>

            </div>
            

            ))}
        </div>



        </div>

        <Footer/>
        </>
        
    )
}