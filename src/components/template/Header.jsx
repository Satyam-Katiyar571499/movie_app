import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.1),
          rgba(0,0,0,0.5),
          rgba(0,0,0,0.9)
        ), url(https://image.tmdb.org/t/p/original${
          data.poster_path || data.backdrop_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top 90%",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] rounded border-zinc-600  flex flex-col justify-end  item-start p-[2%] "
    >
      <h1 className="text-4xl font-black text-white">
        {" "}
        {data.title || data.name || data.original_name || data.original_title}
      </h1>{" "}
      <p className="text-white">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-300">more</Link>
      </p>
      <p className="text-white">
        <i className="ri-album-line text-yellow-500 "></i>
        {data.media_type.toUpperCase()}
      </p>
      <p className=" mt-3 bg-[#6556cd] w-[10.5%] text-white text-semibold rounded px-2 py-3">
        <Link to={`/${data.media_type}/details/${data.id}`}className="text-white">
          Watch trailer
        </Link>
      </p>
    </div>
  );
}

export default Header;
