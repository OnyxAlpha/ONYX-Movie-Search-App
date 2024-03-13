import { useEffect, useState } from "react";
import React  from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

const imageUrls = [
    "/gJL5kp5FMopB2sN4WZYnNT5uO0u.jpg",
    "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
    "/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg",
  ];


export default function PopularMovies() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);





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
        <React.Fragment>
        <Header/>
        <div className="">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 h-3/4 mt-10"
          style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500/${imageUrls[currentImageIndex]}")` }}
        ></div>
        <div className="relative z-10 text-white flex flex-col items-center justify-center h-screen">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Welcome to Popular Movies</h1>
        </div>
      </div>
        

        <div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-y-20 bg-black px-10 py-20">
            {popularMovieList.map((movie) =>(
            <div className="flex md:block bg-white border-2 rounded-lg">
              <div className="w-2/5 md:w-full">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="w-4/5 md:w-full h-36 md:h-80 border-b-4 border-b-orange-600 rounded-t-lg "/>
              </div>
              <div>
                <h1 className="text-orange-500">{movie.title}</h1>
                <h3>Release: {movie.release_date}</h3>
                <div className="flex gap-10">
                    <p>Trailer</p>
                    <p>Detail</p>
                </div>
              </div>

            </div>
            

            ))}
        </div>



        </div>

        <Footer/>
        </React.Fragment>    
    )
};