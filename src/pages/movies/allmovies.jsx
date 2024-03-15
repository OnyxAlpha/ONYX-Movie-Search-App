import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import firebg from "../../assets/firebg.jpg";

export default function AllMovies() {
  const url1 =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const url2 =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2";

  const url3 =
    "https://api.themoviedb.org/3/trending/all/day?language=en-USpage=3";

  const [allMovies, setAllMovies] = useState([]);
  const [popularTag, setPopularTag] = useState(false);
  const [topRatedTag, setTopRatedTag] = useState(false);
  const navigate = useNavigate();

  async function fetchAllMovies() {
    const response = await fetch(url2, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    console.log();
    setAllMovies(data.results);
  }

  /* function for popular movies */
  async function fetchPopularMovies() {
    const response = await fetch(url1, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    console.log();
    // setAllShows([]);
    setAllMovies(data.results);
    setPopularTag(true);
    setTopRatedTag(false);
  }

  /* function for tp rated movies */
  async function fetchTopRatedMovies() {
    const response = await fetch(url3, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    });
    const data = await response.json();
    //setAllShows([]);
    setAllMovies(data.results);
    setPopularTag(false);
    setTopRatedTag(true);
  }

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <>
      <Header />
      <section className="bg-cover bg-center h-100vh pt-10 " style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${firebg})` }} >

      <div className="flex justify-center">
      <button onClick={() => fetchPopularMovies()} class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link>Popular </Link>
      </button>
      
      <button onClick={() => fetchTopRatedMovies()} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-500 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        <Link>Top Rated </Link>
      </button>
      </div>
     

      <div>
        <div className="md:pl-32 grid md:grid-cols-4 gap-y-4 md:gap-y-10  md:p-10">
          {allMovies.map((movie) => (
            <div onClick= {() => navigate(`/moviedetails/${movie.id}`)}
            className="flex md:block md:w-56 bg-white border-2 rounded md:rounded-lg bg-slate-300 border-2 border-amber-300 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-95 hover: duration-300  pb-5">
              <div className="md:w-full">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="w-4/5 md:w-full h-36 md:h-80 border-b-4 rounded md:rounded-lg"
                />
              </div>
              <div className="text-center">
                <h1 className="text-black-500 font-bold">{movie.title}</h1>
                <h3>Release date: {movie.release_date}</h3>
                <i className="fa fa-star text-black-500 flex justify-center pt-5 ">
                  {" "}
                  <h3>{movie.vote_average}</h3>
                </i>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
