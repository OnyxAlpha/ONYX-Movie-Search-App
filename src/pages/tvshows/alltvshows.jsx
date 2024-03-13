import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function AllTVShows() {
  const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=2`;

  const [allShows, setAllShows] = useState([]);

  async function fetchAllShows() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`
      }
    });
    const data = await response.json();
    console.log()
    setAllShows(data.results);
  }

  useEffect(() => {
    fetchAllShows();
  }, []);

  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <Header />
      <h1 class="flex justify-center pt-10 pb-10 font-bold text-3xl">TV Shows</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10 p-10">
        {allShows.map(show => (
          <div className='bg-slate-300 border-2 border-amber-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover: duration-300  pb-5' key={show.id}>
            <img src={`${baseImageUrl}${show.poster_path}`} alt='' />
            <h1 className='text-black-500 flex justify-center pt-5 font-bold text-xl'>{show.name}</h1>
            <h3>{show.release_date}</h3>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <Footer />
    </>
  );
}

//w-16 md:w-32 lg:w-48
