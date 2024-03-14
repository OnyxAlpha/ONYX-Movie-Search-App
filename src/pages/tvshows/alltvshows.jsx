import React, { useState, useEffect } from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Link } from "react-router-dom";

export default function AllTVShows() {
  const url2 = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=2`;
  const url1 = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=3`;
  const url3 = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=3`;

  const [allShows, setAllShows] = useState([]);

  /* these are just states to show the title category title */
  const [popularTag, setPopularTag]=useState(false);
  const [topRatedTag, setTopRatedTag]=useState(false);


  /* please just replace your API authentication key name and everything should work fine*/

  async function fetchAllShows() {
    const response = await fetch(url2, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`,
      },
    });
    const data = await response.json();
    console.log();
    setAllShows(data.results);
  }

/* function for popular movies */
  async function fetchPopularShows() {
    const response = await fetch(url1, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`,
      },
    });
    const data = await response.json();
    console.log();
   // setAllShows([]);
    setAllShows(data.results);
    setPopularTag(true);
    setTopRatedTag(false);
  }


/* function for tp rated movies */
  async function fetchTopRatedShows() {
    const response = await fetch(url3, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`,
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


  if(!allShows){
    return (<div>Loading......</div>)
  }

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Header />
      <h1 class="flex justify-center pt-10 pb-10 font-bold text-3xl">
        TV Shows
      </h1>
      <button onClick={()=> fetchPopularShows()} >
        <Link >Popular </Link>
      </button>
      <br/>
      <button onClick={()=> fetchTopRatedShows()} >
        <Link >Top Rated </Link>
      </button>
      {popularTag ? <h1 class="flex justify-center pt-3 pb-3 font-bold text-2xl">
        Popular 
      </h1>: !allShows}
      {topRatedTag? <h1 class="flex justify-center pt-3 pb-3 font-bold text-2xl">
        Top Rated 
      </h1>: !allShows }
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10 p-10">
        {allShows.map((show) => (
          <div
            className="bg-slate-300 border-2 border-amber-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover: duration-300  pb-5"
            key={show.id}
          >
            <img src={`${baseImageUrl}${show.poster_path}`} alt="" />
            <h1 className="text-black-500 flex justify-center pt-5 font-bold text-xl">
              {show.name}
            </h1>
            <h3 className="text-black-500 flex justify-center pt-5 text-xl">
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
      <br />
      <br />+
      <Footer />
    </>
  );
}


