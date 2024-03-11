import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";



export default function Homepage() {
const getImages = () =>{
  
const url = 'https://api.themoviedb.org/3/collection/collection_id/images';


fetch(url,{
  headers: {
  'Authorization': `Bearer ${process.env.REACT_APP_API_token}`
}})
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

}

useEffect(() =>{
  getImages()
},[])

    return (
      <>
       <section >
          <div className="heroS">
            <h2>Welcome!</h2>
            <p>Explore latest movies and millions of different genre of movies</p>

            <input className="inputSearch" type="text" placeholder="Search movies and TV shows"/>
            
            {/* Search Icon */}

            <button>Search</button> 
          </div>
          <div className="second">
          <h1>OSCARS</h1>
            <button>View the winners</button>
          </div>

          <div>
            <h3>Trending</h3>
            
          </div>
       </section> 
       </> 
       
        
    )
          
}