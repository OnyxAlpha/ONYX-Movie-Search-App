import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function TopRatedTVShows() {
  const url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`;

  const [topRated, setTopRated] = useState([]);

  async function fetchTopRatedShows() {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`
      }
    });
    const data = await response.json();
    setTopRated(data.results);
  }

  useEffect(() => {
    fetchTopRatedShows();
  }, []);

  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <Header />
      <h1>Top Rated Shows</h1>
      <div>
        {topRated.map(show => (
          <div key={show.id}>
            <img src={`${baseImageUrl}${show.poster_path}`} alt='' />
            <h2>{show.name}</h2>
            <h3>{show.ratings}</h3>
          </div>
        ))}
      </div>
      
      <Footer />
    </>
  );
}
