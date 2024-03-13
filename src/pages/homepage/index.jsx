import PopularH from "../../components/popularHomepage";
import TrailerH from "../../components/trailersHomepage";
import TrendingH from "../../components/trendingHomepage";




export default function Homepage() {

  

    return (
      <>
       <section >
          <div className="block max-w-sm rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700" >
            <h2>Welcome!</h2>
            <p>Explore latest movies and millions of different genre of movies</p>

            <input className="inputSearch" type="text" placeholder="Search movies and TV shows"/>
            
            {/* Search Icon */}

            <button>Search</button> 
          </div>
          <div className="bg-black">
          <h1>OSCARS</h1>
            <button>View the winners</button>
          </div>

          <div>
            <h3>Trending</h3>
            <TrendingH/>
          </div>
          <div>
            <h3>Popular</h3>
            <PopularH/>
          </div>
          <div>
            <h3>Trailers</h3>
            <TrailerH/>
          </div>

       </section> 
       </> 
       
        
    )
          
}