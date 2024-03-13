import { useEffect, useState } from "react";

export default function MovieDetails() {
  const [movies, getMovies] = useState({});
  const [relatedmovies, getRelated] = useState([]);

  const movieId = 1096197;

  const getMoviesAPI = () => {
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
        getMovies(data);
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
  useEffect(() => {
    getMoviesAPI();
    getRelatedMovies();
  }, []);

  return (
    <>
      <div className="px-40 bg-black text-white">
        <div className="flex pb-10 pt-20 gap-60">
          <div className="flex flex-col w-full gap-6 pt-10">
            <div className="flex gap-4">
              <h1 className="text-2xl">Movie Name</h1>
              <p>2024</p>
              <p>
                <span>lang</span>
              </p>
            </div>
            <div>
              <button class="rounded-full p-2 bg-orange-400">
                Play Trailor
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
                <p>90 minutes</p>
                <p>PG</p>
                <p>ANIMATION,ACTION,ADVENTURE</p>
              </div>
              <div className="">
                <i className="fa-brands fa-imdb text-xl text-yellow-300"> </i>{" "}
                <p className=" text-xl">6.4</p>
                <p>IMDb rating</p>
              </div>
              <div>
                <i class="fa-solid fa-fan text-xl text-green-600"></i>{" "}
                <p className=" text-xl">79%</p>
                <p>TOMATOMETER</p>
              </div>
              <div>
                <i class="fa-solid fa-audio-description text-xl text-red-600"></i>{" "}
                <p className=" text-xl"> 91%</p>
                <p>AUDIENCE Score</p>
              </div>
            </div>
            <div className="w-ful text-wrap">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio id reprehenderit cupiditate rem dolorem, temporibus
                commodi dolore praesentium, aspernatur aut consectetur.
                Molestiae{" "}
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2 justify-center justify-items-center text-center">
                <i class="fa-solid fa-video p-0 m-0 text-orange-400 pt-1"> </i>{" "}
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
          <div className="h-64 w-72 border border-orange-400 rounded-lg">
            <img
              className="h-full w-full rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* getting casts */}

      <div className="px-40 bg-black">
        <div className="flex">
          <div className=" flex flex-col w-full gap-6 pt-10">
            <div className="flex gap-4">
              <h1 className="text-2xl">Casts & Directors</h1>
            </div>
            <div className="h-64 rounded-lg">
              <img
                className="h-64 rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* getting related movies */}

<div className="w-full flex justify-center bg-black">
<div className="overflow-x-scroll pb-10 hide-scroll-bar  mt-10 mb-10">
        <div className="flex flex-nowrap pl-10 pr-10">
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
    </>
  );
}
