import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import firebg from "../../assets/firebg.jpg";


export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

    const getResults = () => {
        const url = new URL(
          `https://api.themoviedb.org/3/search/movie`
        );
        url.searchParams.append('query',params.name)
        fetch(url,{
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setSearchResults(data.results);
            console.log('bdcnk',data.genres);
    
          })
          .catch((error) => console.log("Error", error));
      };
    
      useEffect(()=>{
        getResults();
      },[params])

    return(
        <>
        <Header/>
       <section className="bg-cover bg-center h-100vh pt-10 " style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${firebg})` }}>
       <div class="grid md:w-76 grid-cols-4 gap-4 px-32">
        {searchResults.map((show) => (
          <div
            className="flex md:block md:w-56 bg-white rounded md:rounded-lg bg-slate-300  transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-95 hover: duration-300  pb-5"
            key={show.id}
            onClick={()=> navigate(`/moviedetails/${show.id}`)}
          >
            <img src={`${baseImageUrl}${show.poster_path}`} alt="" />
            <h1 className="text-black-500 flex justify-center pt-5 font-bold text-xl">
              {show.title}
            </h1>
            <h3 className="text-black-500 flex justify-center pt-5 text-xl">
              {" "}
              Release date:{show.release_date}
            </h3>
            <i className="fa fa-star text-black-500 flex justify-center pt-5 ">
              {" "}
              <h3>{show.vote_average}</h3>
            </i>
          </div>
        ))}
      </div>
       </section>
        <Footer/>
        </>
    )
};

  




    
    
        
    
    