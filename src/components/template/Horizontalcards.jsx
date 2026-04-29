import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Horizontalcards({ data, title }) {
  return (
    <div className="w-full h-[50vh] overflow-y-hidden flex overflow-x-auto mb-5">
      {data.map((item, i) => (
        <Link
          to={`/${item.media_type || title}/details/${item.id}`}
          key={i}
          className="min-w-[25%] rounded-lg overflow-hidden flex flex-col h-[60vh] gap-2 mr-5"
        >
          <img
            className="w-full h-[45%] object-cover"
            src={`https://image.tmdb.org/t/p/original${
              item.poster_path || item.backdrop_path
            }`}
            alt=""
          />

          <h1 className="text-sm text-white">
            {item.title ||
              item.name ||
              item.original_name ||
              item.original_title}
          </h1>

          <p className="text-white text-xs px-1">
            {item.overview.slice(0, 50)}...
            <span className="text-blue-300">more</span> {/* ✅ FIX */}
          </p>

          <p className="text-white text-xs">
            <i className="ri-album-line text-yellow-500 px-1"></i>
            {item.media_type.toUpperCase()}
          </p>

          <p className="bg-[#6556cd] w-[40.5%] text-white text-semibold rounded px-2 py-2 ml-1">
            <span>Watch trailer</span> {/* ✅ FIX */}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Horizontalcards;
