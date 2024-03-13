import { useEffect, useState } from "react";

export default function PopularH() {
    const [moviesData, setmoviesData]=useState([]);
    const getImages = () =>{
      
    const url = new URL('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
    
    
    fetch(url,{
      headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_API_token}`
    }})
      .then(res => res.json())
      .then(movieList => setmoviesData(movieList.results))
      .catch(err => console.error('error:' + err));
    
    }
    
    useEffect(() =>{
      getImages();
    },[])
    
    
    return(
        <div className="grid grid-cols-4 gap-4 flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap">
                  {moviesData.slice(10,20).map((movie) => {
                    return (
                      <div className="border-2 ">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""  className="border border-black overflow-hidden w-64 h-64 max-w-xs rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
                        <br />
                        <p className="text-orange-500"> Movie: {movie.title}</p> 
                      </div>
    
                    )
                  })}
                  </div>
                </div>
    )
    
}
