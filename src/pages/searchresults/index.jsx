import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function SearchResults() {
    
    const params = useParams();

    return(
        <>
        <Header/>
             <p>{params.name}</p>
        <Footer/>
        </>
    )
};

  




    
    
        
    
    