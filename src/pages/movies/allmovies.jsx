import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';


export default function AllMovies (){

   const url1 =  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

   const url2 =  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2"

   const url3 =  "https://api.themoviedb.org/3/trending/all/day?language=en-USpage=3"

   const [allMovies, setAllMovies] = useState([]);
   const [popularTag, setPopularTag]=useState(false);
  const [topRatedTag, setTopRatedTag]=useState(false);


   async function fetchAllMovies() {
    const response = await fetch(url2, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    console.log();
    setAllMovies(data.results);
  }

  /* function for popular movies */
  async function fetchPopularMovies() {
    const response = await fetch(url1, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    console.log();
   // setAllShows([]);
   setAllMovies(data.results);
    setPopularTag(true);
    setTopRatedTag(false);
  }

  /* function for tp rated movies */
  async function fetchTopRatedMovies() {
    const response = await fetch(url3, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    //setAllShows([]);
    setAllMovies(data.results);
    setPopularTag(false);
    setTopRatedTag(true);
  }

  useEffect(() => {
    fetchAllMovies();
  }, []);


  return (
    <>
        <Header/>
        <h1 class="flex justify-center pt-10 pb-10 font-bold text-3xl">Movies</h1>
      <button onClick={()=> fetchPopularMovies()} >
        <Link >Popular </Link>
      </button>
      <br/>
      <button onClick={()=> fetchTopRatedMovies()} >
        <Link >Top Rated </Link>
      </button>
      {popularTag ? <h1 class="flex justify-center pt-3 pb-3 font-bold text-2xl">
        Popular Movies
      </h1>: !allMovies}
      {topRatedTag? <h1 class="flex justify-center pt-3 pb-3 font-bold text-2xl">
        Top Rated Movies
      </h1>: !allMovies }
        <div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-y-20 bg-black px-10 py-20">
            {allMovies.map((movie) =>(
            <div className="flex md:block bg-white border-2 rounded-lg">
              <div className="w-2/5 md:w-full">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="w-4/5 md:w-full h-36 md:h-80 border-b-4 border-b-orange-600 rounded-t-lg "/>
              </div>
              <div>
                <h1 className="text-orange-500">{movie.title}</h1>
                <h3>Release: {movie.release_date}</h3>
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
