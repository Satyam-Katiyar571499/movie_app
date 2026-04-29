import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function Trailer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const category = pathname.includes("/movie/") ? "movie" : "tv";

  const ytvideo = useSelector(
    (state) => state[category]?.info?.videos
  );

  if (!ytvideo || !ytvideo.key)
    return <h1 className="text-white">No Trailer Available</h1>;

  return (
    <div className="fixed z-50 top-0 left-0 bg-[rgba(0,0,0,0.9)] w-full h-screen flex items-center justify-center">
      
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 right-5 text-white text-2xl"
      >
        ✖
      </button>

      <iframe
        className="w-[90%] md:w-[80%] h-[60%] md:h-[70%] rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${ytvideo.key}?autoplay=1&mute=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}