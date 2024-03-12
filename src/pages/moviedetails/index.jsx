import { useEffect, useState } from "react";
import "./index.css";

export default function MovieDetails() {

    const [movies, getMovies] = useState([]);
   
   
    const getMoviesAPI =() =>{
    const url = new URL("https://api.themoviedb.org/3/person/popular");
    
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_AUTHKEY}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        getMovies(data.results)
    })
    .catch(error => console.log('Error', error))
    }


    useEffect(()=>{
        getMoviesAPI();
    },[])

    
    return(
       <>
           <div className="container_grid">

         {movies.map((item)=>{
            return (
             <div className="image_container">
            <img style={{width: '80px', height: '100px'}} src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" />
            <div>
                <p>{item.name}</p>
            </div>
        </div>
            )

        })}
           </div>
        
       </>
    )
}