import { useEffect, useState } from "react";
import React  from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

export default function TopRatedMovies() {


const [topRatedMovieList, settopRatedMovieList] = useState([])

const getTopratedMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=fe5ee1822af695fe2d54361ceff801bb")
    .then(res => res.json())
    .then(json => settopRatedMovieList(json.results))
}


useEffect(() => {
    getTopratedMovies()
}, [])

console.log(topRatedMovieList)


return(
    <>
    <Header/>
    <div>
        <p >Top Rated Movies</p>
    </div>
    

    <div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-4 p-10 bg-slate-900">
        {topRatedMovieList.map((movie) =>(
        <div className="bg-slate-300 border-2 border-amber-300">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
            <h1 className="text-orange-500">{movie.title}</h1>
            <h3>{movie.popularity}</h3>
            <h3>{movie.release_date}</h3>

        </div>
        

        ))}
    </div>



    </div>

    <Footer/>
    </>
    
)
}