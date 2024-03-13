import { useEffect, useState } from "react";
import React  from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

// import "./index.css";

// const apiUrl = new URL ("https://api.themoviedb.org/3/movie/popular")

export default function PopularMovies() {
    const [popularMovieList, setpopularMovieList] = useState([])

    const getPopularMovies = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=fe5ee1822af695fe2d54361ceff801bb")
        .then(res => res.json())
        .then(json => setpopularMovieList(json.results))
    }


    useEffect(() => {
        getPopularMovies()
    }, [])
        // const [movies, setMovies] = useState([]);

        // useEffect(() => {
        //     const fetchmovies = async () => {
        //         try {
        //             // apiUrl.searchParams.append('api_key', process.env.REACT_APP_AUTHORIZATION_KEY)
        //             const response = await fetch(apiUrl, {
        //                 headers: {
        //                     'Authorization': `Bearer ${process.env.REACT_APP_AUTHORIZATION_KEY}`
        //                 }
        //             });
        //             if (!response.ok) {
        //                 throw new Error("Check your internet connectivity");
        //             }
        //             const data = await response.json();
        //             setMovies(data.results);
        //         }   catch (error) {
        //             console.error('Error fetching data', error);
        //         }
        //     };
        //     fetchmovies();
        // }, [])



    return(
        <>
        <Header/>
            <div>
            <p>Popular movies goes here</p>
        </div>

        {/* <div>
            <ul>
              {movies.map(movie => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
        </div> */}

        <Footer/>
        </>
        
    )
}