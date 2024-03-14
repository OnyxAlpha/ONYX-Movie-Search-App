import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [hiddenSearch, setHiddenSearch] = useState(true);
  
  

  // Search input
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParam = event.target.search.value;
    event.target.reset();
    console.log({queryParam});
    setHiddenSearch(true);
    return navigate(`/searchresults/${queryParam}`);
  };


  return (
    <header>
      <nav className=" md:grid-cols-4 bg-white border-b-2 border-gray-200 px-3 lg:px-8 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-700 ">
        <div className="flex flex-wrap justify-between items-center mx-auto px-0 ">
          <Link to="/" className="flex items-center gap-6">
            <span className=" text-xl nav-title self-center pt-1 lg:text-3xl lg:block font-semibold whitespace-nowrap dark:text-white  ">
              OnyxCinema
            </span>
          </Link>

          <div id="mobile-nav" className="flex md:order-2">
            <button
              onClick={() => setHiddenSearch(!hiddenSearch)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-label="Search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              {/* Search input */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  id="search-navbar-mobile"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>
            <button
              onClick={() => setHiddenSearch(!hiddenSearch)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* ----- */}
          {/* ----- */}
          <div
            id="nav-links"
            className={`${
              hiddenSearch ? "hidden" : ""
            } items-center justify-between w-full md:flex md:w-auto md:order-1"} id="navbar-search`}
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg> */}
              </div>
              {/* Search input */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>
            <ul className="flex flex-col p-4 pt-5 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row lg:space-x-8 md:space-x-2 md:mt-0 text-xl md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 font-semibold whitespace-nowrap dark:text-white ">
              <Link to="/allmovies">
                {" "}
                <span className="md:text-lg lg:text-xl p-1.5 hover:bg-black-500 rounded-md">Movies</span>
              </Link>
              <Link to="/alltvshows">
                {" "}
                <span className="md:text-lg lg:text-xl">TV Shows</span>
              </Link>

              <div className="transition flex gap-8"> 
              <Link to="/signup">
                {" "}
                <i className="fa fa-bell"></i>
              </Link>
              <Link to="/signin">
                <i className="fa fa-user"></i>
              </Link>
            </div>
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  );
}

