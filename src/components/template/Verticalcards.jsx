import React from "react";
import { Link } from "react-router-dom";

function Verticalcards({ data, title }) {
  
  return (
    <div className="flex font-bold text-white flex-wrap gap-1.4">
      {data.map((c, i) => {
        const imagePath = c.poster_path || c.backdrop_path || c.profile_path;

        return (
          <Link to={`/${c.media_type || title}/details/${c.id }`}
            className="relative mb-8 w-[17vw] h-[45vh] flex flex-col rounded-xs gap-2 mr-5"
            key={i}
          >
            <img
              className="w-full h-[80%] border border-md border-zinc-900 object-center"
              src={
                imagePath
                  ? `https://image.tmdb.org/t/p/original${imagePath}`
                  : "/icons8-no-camera-50.png"
              }
              onError={(e) => {
                e.target.src = "/icons8-no-camera-50.png";
              }}
              alt=""
            />

            {c.title || c.name || c.original_name || c.original_title}

            {c.vote_average ? (
              <div className="flex justify-center items-center absolute rounded-full bg-yellow-500 w-[6vh] h-[6vh] right-[-5%] bottom-[30%]">
                {(c.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}

export default Verticalcards;