import { useEffect } from "react";
import "./index.css";

export default function MovieDetails() {
   
   
    const getMoviesAPI =() =>{
    const url = new URL("https://api.themoviedb.org/3/person/popular");
    
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_AUTHKEY}`
        }
    })
    .then(response => response.json())
    .then(data => console.log({data}))
    .catch(error => console.log('Error', error))
    }


    useEffect(()=>{
        getMoviesAPI();
    },[])

    
    return(
        <div>
            <p>Movie details goes here</p>
        </div>
    )
}