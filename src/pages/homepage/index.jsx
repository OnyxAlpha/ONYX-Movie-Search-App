import { useEffect, useState } from "react";
import TVtrendingH from "../../components/TVShowHomepage";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import PopularH from "../../components/popularHomepage";
import TrailerH from "../../components/trailersHomepage";
import TrendingH from "../../components/trendingHomepage";
import poster1 from '../../assets/poster1.png'
import poster2 from '../../assets/poster2.png'
import poster3 from '../../assets/poster3.png'

const imageUrls = [
  poster1,
  poster2,
  poster3,
];

export default function Homepage() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <Header />
        <div className="">
        <div
          className="absolute inset-0 bg-cover bg-center mt-20"
          style={{
            height: '100%',
            backgroundImage: `url(${imageUrls[currentImageIndex]})`,
          }}
        ></div>
        <div className="relative z-10 text-white flex flex-col items-center justify-center h-screen">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
            Welcome to Popular Movies
          </h1>
        </div>
      </div>

      <section>
        <div className="">
          <div className="mt-5">
            <TVtrendingH />
          </div>
          <div>
            <TrendingH />
          </div>
          <div>
            <PopularH />
          </div>
          <div>
            <h3>Trailers</h3>
            {/* <TrailerH /> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


// <div className="bg-[url('./assets/pic.jpg')] bg-cover bg-center h-lvh text-white max-h-screen">
//           <div className="justify-center item-center">
//             <h2 className="">Welcome!</h2>
//             <p>
//               Explore latest movies and millions of different genre of movies
//             </p>

//             <input
//               className="inputSearch"
//               type="text"
//               placeholder="Search movies and TV shows"
//             />

//             {/* Search Icon */}

//             <button>Search</button>
//           </div>
//         </div>