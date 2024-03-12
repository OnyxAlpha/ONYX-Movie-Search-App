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
        <div className="imageCards">
                  {moviesData.slice(10,15).map((movie) => {
                    return (
                      <div>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
                        <br />
                        <p>{movie.title}</p>
                      </div>
    
                    )
                  })}
                </div>
    )
    
}
