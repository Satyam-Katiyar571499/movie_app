import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams, Link } from "react-router-dom";
import { asyncloadtv } from "./store/actions/Tvactions";
import Loading from "./Loading";
import Horizontalcards from "./template/Horizontalcards";

export default function Tvdetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
  }, [id, dispatch]);

  // 🔥 DEBUG LOGS
  console.log("TV FULL INFO:", info);
  console.log("DETAIL:", info?.detail);
  console.log("VIDEOS:", info?.videos);
  console.log("PROVIDERS:", info?.watchproviders);
  console.log("TRANSLATIONS:", info?.translations);

  if (!info || !info.detail) return <Loading />;

  const imagePath =
    info.detail.poster_path || info.detail.backdrop_path;

  const providers = info.watchproviders;

  const recommendations =
    info.recommendations?.length > 0
      ? info.recommendations
      : info.similar;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.1),
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.9)
        ), url(https://image.tmdb.org/t/p/w780${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="w-screen min-h-screen px-[10%] pb-10"
    >
      {/* NAV */}
      <nav className="flex gap-5 py-4 text-white">
        <button onClick={() => navigate(-1)}>⬅</button>

        <a href={info.detail.homepage} target="_blank">🌐</a>

        <a
          href={`https://www.imdb.com/title/${info.externalid?.imdb_id}`}
          target="_blank"
        >
          IMDB
        </a>
      </nav>

      {/* CONTENT */}
      <div className="flex gap-8 mt-5">
        <img
          className="w-[25vh] h-[45vh]"
          src={
            imagePath
              ? `https://image.tmdb.org/t/p/original${imagePath}`
              : "/no-image.png"
          }
          alt=""
        />

        <div className="text-white w-[60%]">
          <h1 className="text-2xl font-bold">
            {info.detail.name || info.detail.original_name}
          </h1>

          <p className="text-sm opacity-70 mt-2">
            {info.detail.overview}
          </p>

          <h2 className="mt-3">
            First Air: {info.detail.first_air_date}
          </h2>

          <h2>
            Seasons: {info.detail.number_of_seasons}
          </h2>

          <h2>
            Episodes: {info.detail.number_of_episodes}
          </h2>

          <h2>
            {info.detail.genres?.map(g => g.name).join(", ")}
          </h2>

          {/* 🔥 SAFE TRANSLATIONS */}
          <p className="mt-2 text-sm">
            Translations: {info.translations?.join(", ")}
          </p>

          <Link
            to={`/tv/details/${id}/trailer`}
            className="bg-green-600 px-3 py-1 mt-3 inline-block"
          >
            ▶ Play Trailer
          </Link>

          {/* 🔥 SAFE PROVIDERS */}
          {providers?.flatrate?.length > 0 && (
            <div className="flex gap-2 mt-3">
              {providers.flatrate.map((p, i) => (
                <img
                  key={i}
                  className="w-[4vh]"
                  src={`https://image.tmdb.org/t/p/original${p.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="mt-8">
        <h1 className="text-white text-xl mb-3">
          Recommended
        </h1>

        {recommendations?.length > 0 && (
          <Horizontalcards data={recommendations} />
        )}
      </div>

      <Outlet />
    </div>
  );
}