import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PopularH() {
    const [moviesData, setmoviesData]=useState([]);
    const getImages = () =>{
      
    const url = new URL('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
    
    
    fetch(url,{
      headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_API_AUTHKEY}`
    }})
      .then(res => res.json())
      .then(movieList => setmoviesData(movieList.results))
      .catch(err => console.error('error:' + err));
    
    }
    
    useEffect(() =>{
      getImages();
    },[])
    
    
    return(
    <div className="drop-shadow-2xl">
      <h3 className="pl-5">Popular Movies <button className="bg-black text-white rounded-lg px-5 py-1 ml-3"><Link to="/popularmovies">More</Link></button></h3>
      <div className="w-full px-40 flex flex-col justify-center">
        <div className="overflow-x-scroll pb-10 hide-scroll-bar mt-10 mb-10">
          <div className="flex flex-nowrap">
                  {moviesData.slice(10,20).map((movie) => {
                    return (
                      <div>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""  className="h-64 w-64 rounded-lg pr-1 pl-1"/>
                        <p className="truncate pr-10 pl-10">{movie.title}</p> 
                      </div>
    
                    )
                  })}
                  </div>
                </div>
                </div>
                </div>
    )
    
}
