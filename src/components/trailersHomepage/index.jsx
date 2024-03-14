import { useEffect, useState } from "react";

export default function TrailerH() {
    const [moviesData, setmoviesData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    // const [setKeys, getKeys] = useState([]);
    
    
    const getAllMovies = () =>{
      
    const url = new URL('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
    
    
    fetch(url,{
      headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_API_AUTHKEY}`
    }})
      .then(res => res.json())
      .then(movieList => setmoviesData(movieList.results))
      .catch(err => console.error('error:' + err));
    }
    
  
    
    // console.log({moviesData})
   
 

    const getVideos = (id) =>{
      const url = new URL(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
      fetch(url,{
        headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_token}`
      }})
        .then(res => res.json())
        .then(movieList => setVideoData(movieList.results))
        .catch(err => console.error('error:' + err));
  
        // return setVideoData.key;
      
      }
      

      useEffect(() =>{
        getAllMovies();
        // getVideos();
      },[videoData])
      // console.log({moviesData});  

      moviesData.map((item) =>{
        getVideos(item.id)
      })

    
      if(!moviesData){
        return <div>LOading.............</div>
      }
  

      if(!videoData){
        return <div>LOading.............</div>
      }
  
      console.log('jijmim', videoData)

    

    
    return(
        <div className="imageCards">
          <p>kmnwcjcecnjuk</p>
               
                  {videoData.map((movie) => {
                    return (
                      <div>
<iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.key}?si=FHHEnjhFYUIJTb4f`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/>
                        <br />
                        <p>{movie.title}</p>
                      </div>
    
                    )
                  })}

                  {/* {setKeys.map((item)=>{
                    <li>{item}</li>
                  })} */}
                </div>
    )
    
}
