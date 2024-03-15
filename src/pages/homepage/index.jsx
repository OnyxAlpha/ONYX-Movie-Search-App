import { useEffect, useState } from "react";
import TVtrendingH from "../../components/TVShowHomepage";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import PopularH from "../../components/popularHomepage";
import TrendingH from "../../components/trendingHomepage";
import herobg1 from "../../assets/hero-bg1.jpg";
import herobg3 from "../../assets/hero-bg3.jpg";
import herobg4 from "../../assets/hero-bg4.jpg";
import herobg5 from "../../assets/hero-bg5 (1).jpg";
import herobg7 from "../../assets/hero-bg7.jpg";
import herobg8 from "../../assets/hero-bg8.jpg";
import herobg9 from "../../assets/hero-bg9.jpg";
import herobg11 from "../../assets/hero-bg11.jpg";
import homepagebg from "../../assets/homepagebg.jpg";

const imageUrls = [
  herobg1,
  herobg3,
  herobg4,
  herobg5,
  herobg7,
  herobg8,
  herobg9,
  herobg11
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
        <div
          className="absolute inset-0 bg-cover h-80 bg-center md:bg-contain md:h-full md:mt-0  "
          style={{
            height: '60%',
            marginTop: '7%',
            backgroundImage: `url(${imageUrls[currentImageIndex]})`,
          }}
        >
        </div>

      <section >
        <div className="mt-96">
          <div>
            <TVtrendingH />
          </div>
          <div>
            <TrendingH />
          </div>
          <div>
            <PopularH />
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