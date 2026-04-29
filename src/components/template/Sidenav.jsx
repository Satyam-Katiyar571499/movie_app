import React from "react";
import { Link } from "react-router-dom";

function sidenav() {
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-400 px-5 text-xl  py-5 overflow-x-hidden">
      <h1 className="text-2xl text-white font-bold ">
        <i className=" text-[#6556CD] text-2xl ri-tv-fill"></i>
        <span>NDFRP</span>
      </h1>
      <nav className="text-zinc-400 flex flex-col  ">
        <h1 className="text-white font-semibold text-xl mt-5 mb-5  ">
          {" "}
          New Feed
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] pr-5 py-5 hover:text-white duration-300 rounded-md"
        >
          <i className="ri-fire-fill mr-2 px-1"></i>Trending
        </Link>

        <Link
          to="/popular"
          className="hover:bg-[#6556CD] pr-5 py-5 hover:text-white duration-300 rounded-md"
        >
          <i className="ri-bard-fill mr-2 px-1"></i>Popular
        </Link>
        <Link
          to="/movies"
          className="hover:bg-[#6556CD] pr-5 py-5 hover:text-white duration-300 rounded-md"
        >
          <i className="ri-movie-2-ai-line mr-2 px-1"></i>Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556CD] pr-5 py-5 hover:text-white duration-300 rounded-md"
        >
          <i className="ri-tv-2-line mr-2 px-1"></i>Tv Shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6556CD] pr-5 py-5      hover:text-white duration-300 rounded-md  "
        >
          <i className="ri-group-fill mr-2 px-1  "></i>People
        </Link>
      </nav>
      <hr className="text-red-100 border-transparent-none my-3" />
      <nav className="text-zinc-400 flex flex-col   ">
        <h1 className="text-white font-semibold text-xl mt-5 mb-5  ">
          {" "}
          Website Information
        </h1>

        <Link
          to="/about"
          className="hover:bg-[#6556CD] pr-5 py-5 hover:text-white duration-300 rounded-md"
        >
          <i className=" ri-info-card-line mr-2 px-1"></i>About NDFRP
        </Link>
        <Link
          to="/contact"
          className="hover:bg-[#6556CD] pr-5 py-5 hover:text-white duration-300 rounded-md    "
        >
          <i className="ri-phone-line mr-2 px-1"></i>Contact Us
        </Link>
        <a
          href="https://github.com/Satyam-Katiyar571499/movie_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#6556CD] pr-5 py-5 hover:text-white duration-300 rounded-md"
        >
          <i className="ri-github-line mr-2 px-1"></i>GitHub
        </a>
      </nav>
    </div>
  );
}

export default sidenav;
