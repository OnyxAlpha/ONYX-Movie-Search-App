import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TrendingH() {
    const [moviesData, setmoviesData]=useState([]);
    const getImages = () =>{
      
    const url = new URL('https://api.themoviedb.org/3/trending/all/day?language=en-US');
    
    
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
      <div>
      <h3>Trending Movies <button className="bg-black text-white rounded-lg px-5 py-2 ml-10"><Link to="/allmovies">More</Link></button></h3>
        <br />
        <div  className="grid grid-cols-4 gap-4 flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap">
                  {moviesData.slice(10,20).map((movie) => {
                    return (
                      <div className="border-2 bg-white inline-block px-3"> 
                        <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="border border-black overflow-hidden w-64 h-64 max-w-xs rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"     />
                        <br />
                        <p className=" ">{movie.title}</p>
                      </div>
    
                    )
                  })}
                  </div>
                </div>
                </div>
    )
    
}
