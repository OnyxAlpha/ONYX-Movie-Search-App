
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function TVtrendingH() {
    const [moviesData, setmoviesData]=useState([]);
    const navigate = useNavigate();
    const getImages = () =>{
      
    const url = new URL('https://api.themoviedb.org/3/trending/tv/day?language=en-US');
    
    
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
      <div className="drop-shadow-2xl pt-10">
      <h3 className="pl-5">Watch Interesting TV shows <button className="bg-black  text-white rounded-lg px-5 py-1 ml-3"><Link to="/alltvshows">More</Link></button></h3>
        <div className="w-full px-16 flex flex-col justify-center">
        <div  class=" overflow-x-scroll pb-10 hide-scroll-bar mt-10 mb-10">
          <div className="flex flex-nowrap">
                  {moviesData.slice(0,15).map((movie) => {
                    return (
                       <div onClick= {() => navigate(`/moviedetails/${movie.id}`)}>
                         <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className=" h-64 w-64 rounded-lg pr-1 pl-1"/>
                        <div className="truncate pr-10 pl-10">
                        <p>{movie.name}</p>
                        
                        </div>
                       </div>
    
                    )
                  })}
                  </div>
                </div>
        </div>
        
                </div>
    )
    
}
