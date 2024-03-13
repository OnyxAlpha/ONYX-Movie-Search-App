import { useEffect } from "react";

export default function MovieDetails() {
    const url = 'https://api.themoviedb.org/3/person/popular';
   
   
    const getMoviesAPI =() =>{
    fetch(url,{
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_KEY}`
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
            <p class="text-3xl font-bold underline">Movie details goes here</p>
        </div>

    )
}