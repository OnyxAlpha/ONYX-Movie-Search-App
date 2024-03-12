import { useEffect } from "react";
import "./index.css";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

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
        <>
        <Header/>
            <p>Movie details goes here</p>
        <Footer/>
        </>
    )
}