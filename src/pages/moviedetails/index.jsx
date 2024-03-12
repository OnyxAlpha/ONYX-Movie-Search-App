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
<<<<<<< HEAD
        <div>
            <p class="text-3xl font-bold underline">Movie details goes here</p>
        </div>
=======
        <>
        <Header/>
            <p>Movie details goes here</p>
        <Footer/>
        </>
>>>>>>> 4f8c3661471e4e342d2c51bd06dd71003f3fb544
    )
}