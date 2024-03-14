import React, { useState, useEffect } from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

export default function PopularTVShows() {
  const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=2`;

  const [popularShows, setPopularShows] = useState([]);

  async function fetchPopularShows() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`,
      },
    });
    const data = await response.json();
    console.log();
    setPopularShows(data.results);
  }

  useEffect(() => {
    fetchPopularShows();
  }, []);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Header />
      <div className="h-[300px] left-o right-0 top-0 relative ">
      <h1 class="flex justify-center pt-10 pb-10 font-bold text-3xl">
        Trending
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10 p-10">
        {popularShows.map((show) => (
          <div
            className="overlay-film-cover"
            key={show.id}
          >
            <img src={`${baseImageUrl}${show.poster_path}`} alt="" />
            <h1 className="text-black-500 flex justify-center pt-5 font-bold text-xl">
              {show.name}
            </h1>
            <h3 className="text-black-500 flex justify-center pt-5 text-xl">
              Release date: {show.first_air_date}
            </h3>{" "}
            <i className="fa fa-star text-black-500 flex justify-center pt-5 ">
              {" "}
              <h3>{show.vote_average}</h3>
            </i>
          </div>
        ))}
      </div>
      <br />
      <br />
      </div>
      <Footer />
    </>
  );
}
