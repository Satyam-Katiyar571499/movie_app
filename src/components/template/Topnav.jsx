import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

function Topnav() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(
        `search/multi?api_key=YOUR_API_KEY&query=${query}`,
      );
      setSearch(data.results);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    if (query.trim().length > 0) {
      getSearches();
    } else {
      setSearch([]);
    }
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex items-center justify-center">
      <i className="text-zinc-400 text-xl ri-search-ai-line"></i>

      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search movies..."
        className="text-zinc-400 text-md px-3 w-[50%] ml-2 "
      />

      {query.length > 0 && (
        <i
          onClick={() => {
            setQuery("");
            setSearch([]);
          }}
          className="ml-2 text-zinc-400 text-xl ri-close-fill cursor-pointer"
        ></i>
      )}

      {query.length > 0 && search.length > 0 && (
        <div className="z-100 absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-y-auto rounded shadow-lg">
          {search.map((item, i) => {
            const imagePath =
              item.poster_path || item.backdrop_path || item.profile_path;

            return (
              <Link to={`/${item.media_type }/details/${item.id}`}
                key={i}
                className="flex items-center hover:bg-zinc-300 duration-200 font-semibold w-full p-2 border-b border-zinc-300 text-zinc-700"
              >
                <img
                  className="w-[10vh] h-[10vh] object-cover rounded "
                  src={
                    imagePath
                      ? `https://image.tmdb.org/t/p/w500${imagePath}`
                      : "/icons8-no-camera-50.png"
                  }
                  alt="poster"
                />

                <span>
                  {item.title ||
                    item.name ||
                    item.original_name ||
                    item.original_title}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Topnav;
