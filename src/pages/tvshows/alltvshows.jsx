import React, { useState, useEffect } from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Link, useNavigate } from "react-router-dom";
import firebg from "../../assets/firebg.jpg";

export default function AllTVShows() {
  const url2 = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=2`;
  const url1 = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=3`;
  const url3 = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=3`;

  const [allShows, setAllShows] = useState([]);

  
  const [popularTag, setPopularTag] = useState(false);
  const [topRatedTag, setTopRatedTag] = useState(false);
  const navigate = useNavigate();

  async function fetchAllShows() {
    const response = await fetch(url2, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    console.log();
    setAllShows(data.results);
  }

  async function fetchPopularShows() {
    const response = await fetch(url1, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    console.log();
    
    setAllShows(data.results);
    setPopularTag(true);
    setTopRatedTag(false);
  }

  async function fetchTopRatedShows() {
    const response = await fetch(url3, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    //setAllShows([]);
    setAllShows(data.results);
    setPopularTag(false);
    setTopRatedTag(true);
  }

  useEffect(() => {
    fetchAllShows();
  }, []);

  if (!allShows) {
    return <div>Loading......</div>;
  }

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Header />
    <section className="bg-cover bg-center h-100vh pt-10 " style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${firebg})` }}>
  
      <div className="flex justify-center">
      <button onClick={() => fetchPopularShows()} class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link>Popular </Link>
      </button>
      
      <button onClick={() => fetchTopRatedShows()} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link >Top Rated </Link>
      </button>
      </div>
      
      <div class="md:pl-32 grid md:grid-cols-4 gap-y-4 md:gap-y-10  md:p-10">
        {allShows.map((show) => (
          <div onClick= {() => navigate(`/moviedetails/${show.id}`)}
            className="flex md:block md:w-56 bg-white border-2 rounded md:rounded-lg bg-slate-300 border-2 border-amber-300 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-95 hover: duration-300  pb-5"
            key={show.id}
          >
            <img src={`${baseImageUrl}${show.poster_path}`} alt="" className="w-4/5 md:w-full h-36 md:h-80 border-b-4 rounded md:rounded-lg" />

            <h1 className="text-black-500 text-center pt-5 font-bold ">
              {show.name}
            </h1>
            <h3 className="text-black-500 text-center ">
              {" "}
              Release date:{show.first_air_date}
            </h3>
            <i className="fa fa-star text-black-500 flex justify-center pt-5 ">
              {" "}
              <h3>{show.vote_average}</h3>
            </i>
          </div>
        ))}
      </div>
    </section>
      <br />
      <br />
      <Footer />
    </>
  );
}
