import { Link } from "react-router-dom";


export default function Footer () {
  return (
    <footer>
        <footer className=" bg-gray-950 md:grid-cols-4 border-gray-200 px-3 lg:px-8 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-700 py-3">
            <div className="flex flex-col justify-between md:flex-row">
                <div className="flex justify-center pb-3">
                    <Link to="/" className="flex items-center mb-0 md:mb-4">
                        {/* <img src={Logo} className="h-8 mr-3" alt="Cinematic Logo" /> */}
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">OnyxCinema</span>
                    </Link>
                </div>
                <div>
                    <ul className="flex align-middle justify-evenly items-center text-gray-500 mb-0 md:mb-3 text-white">
                        <li>
                            <a href="/allmovieshows" target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-medium hover:underline md:mr-6 hover:underline-offset-8">Movies</a>
                        </li>
                        <li>
                            <a href="/alltvshows" className="text-xl md:text-2xl font-medium hover:underline md:mr-6 hover:underline-offset-8" target="_blank" rel="noreferrer" >TV</a>
                        </li>
                        <li>
                            <button onClick={() => window.location = 'mailto:yourmail@domain.com'} className="hover:underline hover:underline-offset-8 hover:cursor-pointer ">Contact Us</button>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm md:text-lg text-gray-500 text-center text-white over:underline hover:underline-offset-8 hover:cursor-pointer">Built by <Link to="https://linkedin.com/in/noraelisacamacho" target="_blank" rel="noreferrer" className="hover:underline">Onyx Cinema</Link> Copyright&copy; {new Date().getFullYear()}.</span>
        </footer>
    </footer>
  )
}