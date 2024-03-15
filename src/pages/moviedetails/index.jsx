import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import YouTube from "react-youtube";

export default function MovieDetails() {
  const [movie, getMovie] = useState({});
  const [relatedmovies, getRelated] = useState([]);
  const [percentageValue, getPpercentageValue] = useState(0);
  const [castsValues, getCastsValues] = useState([]);
  const [genre, getGenre] = useState([]);
  // const [movieId, getMovieId] = useState(null)
  const params = useParams();

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const movieId = params.id;

  const getMovieAPI = () => {
    const url = new URL(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    );
    fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getMovie(data);
        getGenre(data.genres);
        console.log("bdcnk", data.genres);
      })
      .catch((error) => console.log("Error", error));
  };

  const getRelatedMovies = () => {
    const url = new URL(
      `https://api.themoviedb.org/3/movie/${movieId}/similar`
    );

    fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getRelated(data.results);
      })
      .catch((error) => console.log("Error", error));
  };

  /* convert popular rating to get percentage */

  const popularpercentage = (getValue) => {
    const value = getValue;
    const maxValue = 2000;
    const percentage = Math.ceil((value / maxValue) * 100);
    console.log(percentage);
    getPpercentageValue(percentage);
  };

  const getCasts = () => {
    const url = new URL(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`
    );
    fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_AUTHKEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.cast);
        getCastsValues(data.cast);
      })
      .catch((error) => console.log("Error", error));
  };

  useEffect(() => {
    // getMovieId()
    getMovieAPI();
    getRelatedMovies();
    popularpercentage(movie.popularity);
    getCasts();
  }, []);

  if (!movie) {
    return <div> Not Found....</div>;
  }

  if (!relatedmovies) {
    return <div> Not Found....</div>;
  }

  if (!castsValues) {
    return <div> Not Found....</div>;
  }

  return (
    <>
    <Header/>
      <div className="text-white">
        <div className="px-40">
          <div className="flex pt-20 gap-40 relative">
            <div className="flex flex-col w-full gap-6 pt-10">
              <div className="flex gap-4">
                <h1 className="text-2xl">{movie.original_title}</h1>
                <p>{movie.release_date?.split("-")[0]}</p>
                <p>
                  <span className="rounded-lg p-1 bg-emerald-400">
                    {/* {movie.spoken_languages[0].iso_639_1} */}
                    en
                  </span>
                </p>
              </div>
              <div>
                <button className="rounded-full p-2 bg-orange-400">
                  Play Trailer
                </button>
              </div>
              <div className="flex gap-4">
                <i class="fa-regular fa-thumbs-up"> 100</i>
                <i class="fa-regular fa-thumbs-down"> 20</i>
                <i class="fa-regular fa-heart"> Favorite</i>
                <i class="fa-regular fa-comment"> 19</i>
              </div>
              <div className="flex w-full gap-5">
                <div>
                  <p>{movie.runtime} minutes</p>
                  <p>PG</p>
                  <div className="flex gap-2">
                    [
                    {genre.map((gen) => {
                      return <p>{gen.name},</p>;
                    })}
                    ]
                  </div>
                </div>
                <div className="">
                  <i className="fa-brands fa-imdb text-xl text-yellow-300"> </i>{" "}
                  <p className=" text-xl">{movie.vote_average}</p>
                  <p>IMDb rating</p>
                </div>
                <div>
                  <i class="fa-solid fa-fan text-xl text-green-600"></i>{" "}
                  <p className=" text-xl">{percentageValue}%</p>
                  <p>TOMATOMETER</p>
                </div>
                <div>
                  <i class="fa-solid fa-audio-description text-xl text-red-600"></i>{" "}
                  <p className=" text-xl"> 91%</p>
                  <p>User Ratings</p>
                </div>
              </div>
              <div className="w-ful text-wrap">
                <p>{movie.overview}</p>
              </div>
              <div className="flex gap-5">
                <div className="flex gap-2 justify-center justify-items-center text-center">
                  <i class="fa-solid fa-video p-0 m-0 text-orange-400 pt-1">
                    {" "}
                  </i>{" "}
                  <p>TC</p>
                </div>
                <div className="flex gap-2">
                  <i class="fa-solid fa-film text-orange-400 text-cyan-300 pt-1 ">
                    {" "}
                  </i>{" "}
                  <p>MEST</p>
                </div>
              </div>
            </div>
            <div className="h-64 w-72 rounded-lg">
              <img
                className="h-full w-full rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </div>
          </div>
          <div
            className="absolute inset-0"
            style={{
              height: "100%",
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${baseImageUrl}${movie.backdrop_path})`,
              backgroundSize: "cover",
              filter: "blur(5px)",
              zIndex: '-1',
            }}
          ></div>
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(5px)", // Apply the blur effect directly to the image
              backgroundColor: "rgba(255, 255, 255, 0)", // Optional: Add a semi-transparent white background to enhance the blur effect
              zIndex: '-1',
            }}
          ></div>
        </div>

        {/* getting Trailor */}
<div className="bg-gray-200 text-black pt-10">
  
<div className="px-40 pb-10">
          <div className="mb-6">
            <h1 className="text-2xl gap-5">Trailer</h1>
          </div>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.id}?si=8A1m-yj-KXTXR8tx`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        {/* getting casts */}

        <div className="px-40 pb-10">
          <div className="mb-6">
            <h1 className="text-2xl gap-5">Casts & Directors</h1>
          </div>
          <div className="flex gap-5">
            {castsValues.slice(0, 4).map((data) => {
              return (
                <div className=" p-2 w-full border border-black rounded-lg flex gap-3">
                  <img
                    className="rounded-full"
                    style={{ width: "70px", height: "70px" }}
                    src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                    alt=""
                  />
                  <div>
                    <p className="">{data.original_name}</p>
                    <p className="text-sm">{data.known_for_department}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* getting related movies */}

        <div className="w-full px-40 flex flex-col justify-center">
          <div className="flex">
            <h1 className="text-2xl">Related Movies</h1>
          </div>
          <div className="overflow-x-scroll pb-10 hide-scroll-bar  mt-10 mb-10">
            <div className="flex flex-nowrap">
              {relatedmovies.map((data) => {
                return (
                  <img
                    className="h-64 rounded-lg pr-3"
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
</div>
      </div>
      <Footer/>
    </>
  );
}
