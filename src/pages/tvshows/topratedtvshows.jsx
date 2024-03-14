import React, { useState, useEffect } from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

export default function TopRatedTVShows() {
  const url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=3`;

  const [topRated, setTopRated] = useState([]);

  async function fetchTopRatedShows() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    setTopRated(data.results);
  }

  useEffect(() => {
    fetchTopRatedShows();
  }, []);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Header />
      <h1 class="flex justify-center pt-10 pb-10 font-bold text-3xl">
        Top Rated 
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10 p-10">
        {topRated.map((show) => (
          <div
            className="bg-slate-300 border-2 border-amber-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover: duration-300  pb-5"
            key={show.id}
          >
            <img src={`${baseImageUrl}${show.poster_path}`} alt="" />
            <h1 className="text-black-500 flex justify-center pt-5 font-bold text-xl">
              {show.name}
            </h1>
            <h3 className="text-black-500 flex justify-center pt-5 text-xl">
              {show.first_air_date}
            </h3>
            <i className="fa fa-star text-black-500 flex justify-center pt-5 ">
              {" "}
              <h3>{show.vote_average}</h3>
            </i>
          </div>
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
