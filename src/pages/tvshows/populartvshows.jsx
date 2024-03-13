import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function PopularTVShows() {
  const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`;

  const [popularShows, setPopularShows] = useState([]);

  async function fetchPopularShows() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`
      }
    });
    const data = await response.json();
    console.log()
    setPopularShows(data.results);
  }

  useEffect(() => {
    fetchPopularShows();
  }, []);

  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <Header />
      <div class="grid grid-cols-1 hover:grid-cols-6">
        {popularShows.map(show => (
          <div key={show.id}>
            <img class="w-16 md:w-32 lg:w-48"src={`${baseImageUrl}${show.poster_path}`} alt='' />
            <h2>{show.name}</h2>
            <h3>{show.release_date}</h3>
          </div>
        ))}
      </div>
      <p>Popular Shows</p>
      <Footer />
    </>
  );
}
