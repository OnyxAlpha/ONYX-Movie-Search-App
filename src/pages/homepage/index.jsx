import TVtrendingH from "../../components/TVShowHomepage";
import PopularH from "../../components/popularHomepage";
import TrailerH from "../../components/trailersHomepage";
import TrendingH from "../../components/trendingHomepage";






export default function Homepage() {

  

    return (
      <>
       <section >
          <div className="bg-[url('./assets/pic.jpg')] bg-cover bg-center  h-lvh text-white max-h-screen">
            <div className="m-20">
            <h2 className="">Welcome!</h2>
            <p className="">Explore latest movies and millions of different genre of movies</p>

            <input className="inputSearch" type="text" placeholder="Search movies and TV shows"/>
            
            {/* Search Icon */}

            <button>Search</button> 
            </div>
          </div>
          <div className="bg-indigo-900 text-white max-h-full">
          <h1>OSCARS</h1>
            <button>View the winners</button>
          </div>


          <div className="mt-5">
            <TVtrendingH/>
          </div>
          <div>      
            <TrendingH/>
          </div>
          <div>
            <h3>Popular</h3>
            <PopularH/>
          </div>
          <div>
            <h3>Trailers</h3>
            {/* <TrailerH/> */}
          </div>
          

       </section> 
       </> 
       
        
    )
          
}