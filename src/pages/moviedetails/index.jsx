import { useEffect, useState } from "react";
import "./index.css";

export default function MovieDetails() {

    const [movies, getMovies] = useState([]);

    const movieId = 1096197;
   
   
    const getMoviesAPI =() =>{
    const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`);
    
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
        <div className="px-40">
            <div className="flex py-20 gap-60">
        <div className=" flex flex-col w-ful gap-6 pt-10">
            <div className="flex gap-4">
                <h1 className="text-2xl" >Movie Name</h1>
                <p>2024</p>
                <p><span>lang</span></p>
            </div>
            <div>
            <button class="rounded-full p-2 bg-orange-400">Play Trailor</button>
            </div>
            <div className="flex gap-4">
            <i class="fa-regular fa-thumbs-up"> 100</i>
            <i class="fa-regular fa-thumbs-down"> 20</i>
            <i class="fa-regular fa-heart"> Favorite</i>
            <i class="fa-regular fa-comment"> 19</i>
            </div>
            <div className="flex gap-5">
                <div>
                    <p>90 minutes</p>
                    <p>PG</p>
                    <p>ANIMATION,ACTION,ADVENTURE</p>
                </div>
                <div>
                <i className="fa-brands fa-imdb text-xl"> 6.4</i>
                <p>IMDb rating</p>
                </div>
                <div >
                <i class="fa-solid fa-film"> 79%</i>
                <p>TOMATOMETER</p>
                </div>
                <div >
                <i className="fa-brands fa-imdb text-xl"> 91%</i>
                <p>AUDIENCE Score</p>
                </div>
            </div>
            <div className="w-ful text-wrap">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio id reprehenderit cupiditate rem dolorem, temporibus commodi dolore praesentium, aspernatur aut consectetur. Molestiae </p>
            </div>
            <div className="flex gap-5">
                <div >
                <i class="fa-solid fa-video"></i>
                <p>AUDIENCE Score</p>
                </div>
            </div>
        </div>
        <div>09</div>
      </div>
        </div>

    )
}