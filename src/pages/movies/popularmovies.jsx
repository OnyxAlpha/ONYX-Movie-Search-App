import { useEffect, useState } from "react";
import React from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";



export default function PopularMovies() {

  const [popularMovieList, setpopularMovieList] = useState([]);

  const getPopularMovies = () => {
    const url = new URL("https://api.themoviedb.org/3/movie/popular");
    fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setpopularMovieList(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  console.log(popularMovieList);

  return (
    <React.Fragment>
      <Header />
      
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-y-20 bg-black px-10 py-20">
          {popularMovieList.map((movie) => (
            <div className="flex md:block bg-white border-2 rounded-lg">
              <div className="w-2/5 md:w-full">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="w-4/5 md:w-full h-36 md:h-80 border-b-4 border-b-orange-600 rounded-t-lg "
                />
              </div>
              <div>
                <h1 className="text-orange-500">{movie.title}</h1>
                <h3>Release: {movie.release_date}</h3>
                <p>Detail</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}
